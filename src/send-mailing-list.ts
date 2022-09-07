/* eslint-disable camelcase */
import path from 'path';
import fs from 'fs-extra';
import { getFiles, csvToJson, yellow, green, red, magenta, fromCwd } from '@upradata/node-util';
import { ensureArray, TT$ } from '@upradata/util';
import { EmailProviders, EmailSendData, EmailServices } from './send.services';
import { EmailData, sendEmail, SendEmailReturn } from './send-email';
import { SendReturnError, SendReturnSuccess } from './providers';


const relativeToCwd = (p: string) => path.relative(process.cwd(), p);

export type MailingListData<T = {}> = T;


type AfterMailingListCallback = () => TT$<void>;

type GetMailingListOptions<T = {}> = {
    mailingListCsvFiles?: string[];
    max?: number;
    retryErrors?: boolean;
    onMailingList: (emailsData: MailingListData<T & { i: number; }>[], options: {
        isPartial: boolean;
        file: string;
        isLast: boolean;
    }) => TT$<void | AfterMailingListCallback>;
    cacheInfo?: (csvFile: string) => { isDone: boolean; lastIndex: number; errors: CacheData[ 'errors' ]; };
};


const getMailingList = async <T = {}>(options: GetMailingListOptions<T>): Promise<AfterMailingListCallback> => {
    const { mailingListCsvFiles, max = Infinity, onMailingList, cacheInfo } = options;

    const getEmails = async (i: number, totalDone: number): Promise<Array<() => void>> => {
        if (i === mailingListCsvFiles.length)
            return [];

        const filepath = mailingListCsvFiles[ i ];

        const { isDone, lastIndex, errors } = cacheInfo(filepath);

        if (isDone) {
            console.log(yellow`${relativeToCwd(filepath)} cached and previously sent`);
            return getEmails(i + 1, totalDone);
        }

        const rows = (await csvToJson<MailingListData<T>>(filepath)).map((row, i) => ({ ...row, i }));
        const errorRows = errors ? rows.filter(({ i }) => errors.some(e => e.row === i)) : [];

        const emailDatas = errorRows.length === 0 ? lastIndex === 0 ? rows : rows.slice(lastIndex + 1) : errorRows;
        // errorRows.concat(lastIndex === 0 ? rows : rows.slice(lastIndex + 1));

        const nextTotalDone = totalDone + emailDatas.length;

        const processMailingList = () => {
            if (nextTotalDone > max) {
                const size = max - totalDone;
                return onMailingList(emailDatas.slice(0, size), { isPartial: true, file: filepath, isLast: true });
            }

            return onMailingList(emailDatas, {
                isPartial: false,
                file: filepath,
                isLast: i === mailingListCsvFiles.length - 1
            });
        };

        const fn = await processMailingList();
        const fns = await getEmails(i + 1, nextTotalDone);

        return fn ? [ fn, ...fns ] : fns;
    };

    return async () => {
        const fns = await getEmails(0, 0);
        await Promise.all(fns.map(fn => fn()));
    };
};



export type GetBody<T = {}, P extends EmailProviders = EmailProviders> = (emailData: MailingListData<T>) => TT$<EmailData<Partial<EmailSendData[ P ]>>>;

export type SendEmailsToMailingListOptions<P extends EmailProviders = EmailProviders, T = {}> = {
    getBody: GetBody<T, P>;
    mailingList: string | string[];
    cache?: string;
    dry?: boolean;
    deliveryTime?: string;
    nb?: number;
    retryErrors?: boolean;
    providerName: P;
    provider?: EmailServices<P>[ P ];
};


type CacheData = { lastIndex: number; done: boolean; errors?: { row: number; message: string; error: unknown; }[]; };
type MetaData = { nb: number; done: boolean; };
type Cache = { metadata: MetaData; data: Record<string /* csv file name */, CacheData>; };


export const sendEmailToMailingList = async <P extends EmailProviders = 'mailgun', T = {} /* , T extends Partial<EmailSendData[ P ]> = {} */>(
    options: SendEmailsToMailingListOptions<P, T>
) => {
    const {
        getBody,
        deliveryTime,
        provider,
        providerName,
        mailingList = fromCwd('mailing-list'),
        cache = fromCwd('send.cache.json'),
        dry = false,
        nb: max = Infinity,
        retryErrors
    } = options;

    if (dry) {
        console.log(yellow`Dry mode enabled`);
    }


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

    const delayedSave = await getMailingList<T>({
        mailingListCsvFiles: mailingLists.flat(),
        max,
        retryErrors,
        cacheInfo: csvFile => {
            const cacheData = cachedCsvFiles.data[ csvFile ];
            return { isDone: cacheData?.done, lastIndex: cacheData?.lastIndex ?? 0, errors: cacheData.errors };
        },
        onMailingList: async (emailsData, { isPartial, file: csvFile, isLast }) => {
            console.log(magenta`Sending mailing list: ${relativeToCwd(csvFile)}`);

            const { successes, errors, isMarketing } = await Promise.allSettled(emailsData.map(async (emailData, index) => {
                const { i } = emailData;

                const returnError = (e: unknown, to: string) => (e as any).result ? { ...(e as SendEmailReturn), i } : ({
                    result: [ {
                        type: 'error',
                        error: e instanceof Error ? e : new Error(JSON.stringify(e)),
                        to,
                    } ],
                    isMarketing: false,
                    i
                } as SendEmailReturn & { i: number; });

                try {
                    const body = await getBody(emailData);

                    return sendEmail({
                        providerName,
                        provider,
                        isLast: isLast && index === emailsData.length - 1
                    }, {
                        to: body.to,
                        dry,
                        deliveryTime,
                        tag: [ ...(body.tag || []), path.parse(csvFile).name ],
                        ...(body as any)
                    })
                        .then(res => ({ ...res, i: emailData.i }))
                        .catch(err => returnError(err, JSON.stringify(body.to)));
                } catch (e) {
                    return returnError(e, JSON.stringify((emailData as any).email || '???'));
                }
            })).then(async results => {

                const responses = results.filter(r => r.status === 'fulfilled').map((r: PromiseFulfilledResult<SendEmailReturn & { i: number; }>) => r.value);

                const errors = responses.reduce<(SendReturnError & { row: number; })[]>((errors, { result, i }) => {
                    const resErrors = result.filter(r => r.type === 'error') as SendReturnError[];
                    return [ ...errors, ...resErrors.map(r => ({ ...r, row: i })) ];
                }, []);

                const successes = responses.reduce<(SendReturnSuccess & { row: number; })[]>((r, { result, i }) => {
                    const sucessResults = result.filter(r => r.type === 'success') as SendReturnSuccess[];
                    return [ ...r, ...sucessResults.map(r => ({ ...r, row: i })) ];
                }, []);

                return { errors, successes, isMarketing: responses[ 0 ]?.isMarketing };
            });

            errors.forEach(({ error, row, to }) => {
                process.stdout.write(red`${relativeToCwd(csvFile)}:`);
                process.stdout.write(yellow`row: ${row}\n`);
                console.error(`${error.message} (to: ${to})`);
            });

            const { errors: lastErrors = [] } = cachedCsvFiles.data[ csvFile ] || {};
            const lastUnresolvedErrors = lastErrors.filter(e => errors.some(err => err.row !== e.row) || !successes.some(s => s.row === e.row));

            const cachedData: CacheData = {
                errors: [ ...lastUnresolvedErrors, ...errors.map(e => ({ message: e.error.message, row: e.row, error: e.error })) ],
                lastIndex: emailsData.at(-1)?.i ?? 0,
                done: !isPartial && errors.length === 0
            };

            const save = async () => {
                const isSent = successes.find(s => s.hasSendBeenRequested);

                if (!isMarketing || isSent) {
                    cachedCsvFiles.data[ csvFile ] = cachedData;
                    cachedCsvFiles.metadata.nb += successes.length;

                    await fs.writeJson(cache, cachedCsvFiles, { spaces: 4 });
                }
            };

            // when is a marketing email, we wait all "to" addresses have been added to the campaign
            // and we wait the last request that is sending the campaign before calling save() because
            // something wrong can happen during sending
            // For transactional email, all emails are sent one by one even if the "to" addresses is a string[]
            return isMarketing ? save : save();
        }
    });

    await delayedSave?.();
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
