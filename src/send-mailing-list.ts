/* eslint-disable camelcase */
import path from 'path';
import fs from 'fs-extra';
import { getFiles, csvToJson, yellow, green, red, magenta, fromCwd } from '@upradata/node-util';
import { ensureArray, TT$ } from '@upradata/util';
import { EmailProviders, EmailSendData, EmailServices } from './send.services';
import { EmailData, sendEmail } from './send-email';

const relativeToCwd = (p: string) => path.relative(process.cwd(), p);


export type EmailRecipient = { to: string; name: string; };
export type MailingListData<T = {}> = EmailRecipient & T;


type GetMailingListOptions = {
    mailingListCsvFiles?: string[];
    max?: number;
    onMailingList: (recipients: (EmailRecipient & { i: number; })[], options: { isPartial: boolean; file: string; }) => TT$<void>;
    cacheInfo?: (csvFile: string) => { isDone: boolean; lastIndex: number; };
};


const getMailingList = async (options: GetMailingListOptions): Promise<void> => {
    const { mailingListCsvFiles, max = Infinity, onMailingList, cacheInfo } = options;

    const filesIt = mailingListCsvFiles[ Symbol.iterator ]();

    const getEmails = async (totalDone: number) => {
        const { done, value: filepath } = filesIt.next() as IteratorResult<string, string>;

        if (done)
            return;

        const { isDone, lastIndex } = cacheInfo(filepath);

        if (isDone)
            return getEmails(totalDone);

        const rows = await csvToJson<MailingListData>(filepath);
        const emailRecipients = rows.map((row, i) => ({ ...row, i })).slice(lastIndex + 1);

        const nextTotalDone = totalDone + emailRecipients.length;

        if (nextTotalDone >= max) {
            const size = max - totalDone;
            await onMailingList(emailRecipients.slice(0, size), { isPartial: true, file: filepath });
            return;
        }

        await onMailingList(emailRecipients, { isPartial: false, file: filepath });
        return getEmails(nextTotalDone);
    };

    return getEmails(0);
};



export type EmailsData<Extra = {}> = (recipient: Pick<EmailRecipient, 'name'>) => TT$<Omit<EmailData<Extra>, 'to'>>;

export type SendEmailsToMailingListOptions<P extends EmailProviders = EmailProviders, Extra = {}> = {
    data: EmailsData<Extra>;
    mailingList: string | string[];
    cache?: string;
    dry?: boolean;
    deliveryTime?: string;
    nb?: number;
    providerName: P;
    provider?: EmailServices<P>[ P ];
};


export const sendEmailToMailingList = async <P extends EmailProviders = 'mailgun', E extends Partial<EmailSendData[ P ]> = {}>(options: SendEmailsToMailingListOptions<P, E>) => {
    const {
        data,
        deliveryTime,
        provider,
        providerName,
        mailingList = fromCwd('mailing-list'),
        cache = fromCwd('send.cache.json'),
        dry = false,
        nb: max = Infinity,
    } = options;

    if (dry) {
        console.log(yellow`Dry mode enabled`);
    }

    type CacheData = { lastIndex: number; done: boolean; errors?: { row: number; error: string; }[]; };
    type MetaData = { nb: number; done: boolean; };
    type Cache = { metadata: MetaData; data: Record<string /* csv file name */, CacheData>; };

    const cachedCsvFiles = (
        await fs.readJson(cache).catch(_e => ({ metadata: { nb: 0, done: false }, data: {} } as Cache))
    ) as Cache;


    const { nb: lastNb } = cachedCsvFiles.metadata;


    const mailingLists = await Promise.all(ensureArray(mailingList).map(async m => {
        const stats = await fs.stat(m);

        if (stats.isDirectory())
            return (await getFiles(m, { recursive: true, filterFiles: filepath => filepath.endsWith('.csv') })).map(f => f.filepath);

        return m;
    }));

    await getMailingList({
        mailingListCsvFiles: mailingLists.flat(),
        max,
        cacheInfo: csvFile => {
            const cacheData = cachedCsvFiles.data[ csvFile ];
            return { isDone: cacheData?.done, lastIndex: cacheData?.lastIndex ?? 0 };
        },
        onMailingList: async (emailRecipients, { isPartial, file: csvFile }) => {
            console.log(magenta`Sending mailing list: ${relativeToCwd(csvFile)}`);
            type ResponseSuccess = { type: 'success'; id: string; message: string; i: number; };
            type ResponseError = { type: 'error'; error: string; i: number; };
            type Response = ResponseSuccess | ResponseError;


            const errors = await Promise.allSettled(emailRecipients.map(async recipient => {
                const { /* name, */ to, i } = recipient;
                const emailData = await data({ name: recipient.name });

                return sendEmail({ providerName, provider }, { to: to.split('/').join(','), dry, deliveryTime, ...(emailData as any) }).then(res => ({ ...res, i }));
            })).then(async results => {

                const responses = results.filter(r => r.status === 'fulfilled').map((r: PromiseFulfilledResult<Response>) => r.value);

                return responses
                    .filter(r => r.type === 'error')
                    .map((r: ResponseError) => ({ row: r.i, error: r.error }));

            });

            errors.forEach(e => console.error(red`${relativeToCwd(csvFile)}:`, yellow`row: ${e.row}\n`, e.error));

            const { errors: lastErrors = [] } = cachedCsvFiles.data[ csvFile ] || {};

            cachedCsvFiles.data[ csvFile ] = {
                errors: [ ...lastErrors, ...errors ],
                lastIndex: emailRecipients.at(-1)?.i ?? 0,
                done: !isPartial && errors.length === 0
            };

            cachedCsvFiles.metadata.nb += emailRecipients.length;

            await fs.writeJson(cache, cachedCsvFiles, { spaces: 4 });
        }
    });

    console.log(green`${cachedCsvFiles.metadata.nb - lastNb} emails sent`);
};




/* const getMailingList = async (options: { directory: string; size: number; max?: number; onMailingList: (list: EmailRecipient[]) => TT$<void>; }) => {
    const { directory, size, max = Infinity, onMailingList } = options;

    const mailingListCsvFiles = await getFiles(directory, { recursive: true, filterFiles: filepath => filepath.endsWith('.csv') });

    const chunkSize = 5;

    // array of array of filepath => filepath=string => Array<string[]>=Array<list of csv filepaths> => Array of chunks
    const chunkCsvFiles = mailingListCsvFiles.reduce((csvFiles, { filepath }, i) => {
        if (i % chunkSize === 0)
            return [ ...csvFiles, [ filepath ] ];

        csvFiles.at(-1).push(filepath);
        return csvFiles;
    }, [] as string[][]);


    await chainedArr$(chunkCsvFiles, async (csvFiles, previous) => {
        if (previous.totalDone > max)
            return previous;

        const assos = await Promise.all(csvFiles.map(filepath => csvToJson<StoreData>(filepath)));
        const emailRecipients = assos.flatMap(rows => rows.map(row => ({ to: row.email, name: row.name })));
        const recipients = [ ...previous.recipients, ...emailRecipients ];

        const nextTotalDone = previous.totalDone + size;

        if (recipients.length >= size || nextTotalDone >= max) {
            const s = nextTotalDone > max ? max - previous.totalDone : size;

            if (s > 0)
                await onMailingList(recipients.slice(0, s));

            return { recipients: recipients.slice(s), totalDone: previous.totalDone + s };
        }

        return { recipients, totalDone: previous.totalDone };
    }, { recipients: [], totalDone: 0 } as { recipients: EmailRecipient[]; totalDone: number; });
}; */
