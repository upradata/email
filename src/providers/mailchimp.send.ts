import fs from 'fs-extra';
import mailchimp, { Contact } from '@mailchimp/mailchimp_marketing';
import { fromCwd } from '@upradata/node-util';
import { ensureArray, InferArrayType, TT } from '@upradata/util';
import { MailchimpClientOptions } from './mailchimp.api';
import { checkEmailOptions } from '../check-email-options';
import { MailSendServiceFactory, SendReturnSuccess } from './mail-send.service';
import { EmailCodifiedError, EmailErrors } from '../email-error';


type To = { email: string; firstName: string; lastName: string; };


export type MailchimpSendData = {
    templateName: string;
    audience: { name?: string; id?: string; };
    campaignName?: string;
    html: string;
    text?: string;
    folder?: string;
    subject: string;
    previewText?: string;
    from: { email: string; name: string; };
    to: TT<To>;
    tags?: string[];
    contact: Contact;
    cache?: string;
    isLastContact: boolean;
};

export type MailchimpSendClientOptions = MailchimpClientOptions;

type ListId = string;
type ListName = string;
type MemberId = string;
type TempalteId = number;
type TemplateName = string;
type Email = string;
type CampaignId = string;
type CampaignName = string;

type CacheData = {
    lists: Record<ListName, ListId>;
    members: Record<Email, { id: MemberId; listName: ListName; }>;
    templates: Record<TemplateName, TempalteId>;
    campaigns: Record<CampaignName, CampaignId>;
};



type CollectionGeneratorOptions<Data> = {
    getElements: (options: { count: number; offset: number; }) => Promise<{ lists: Data[]; totalItems: number; }>;
    count: number;
};

const createCollectionGenerator = <Data>(options: CollectionGeneratorOptions<Data>) => {
    const { getElements, count } = options;

    const parse = async function* (currentCount = 0, i = 0): AsyncGenerator<Data> /* : Promise<ListId> */ {

        // const countMax = 1000;
        const { lists, totalItems } = await getElements({ count, offset: i * count });

        // yield* lists[ Symbol.iterator ];
        for (const list of lists)
            yield list;

        if (currentCount + count < totalItems)
            yield* parse(currentCount + count, i + 1);
    };

    return parse();
};

type FindCollectionOptions<Data> = CollectionGeneratorOptions<Data> & { predicate: (data: Data) => boolean; };

const findCollection = async <Data>(options: FindCollectionOptions<Data>) => {
    const generator = createCollectionGenerator(options);

    for await (const data of generator) {
        if (options.predicate(data))
            return data;
    }
};


const getDataFromCollection = async <ListData, Data>(options: FindCollectionOptions<ListData> & {
    data?: Data;
    getData: (listData: ListData) => Data;
    getCache: () => Data;
    setCache: (data: Data) => void;
    createListData: () => Promise<ListData>;
}): Promise<Data> => {
    const { data, getData, getCache, setCache, createListData, ...findCollectionOptions } = options;

    if (data)
        return data;


    const cachedData = getCache();

    if (cachedData)
        return cachedData;


    const setDataFromListData = (listData: ListData) => {
        const data = getData(listData);
        setCache(data);

        return data;
    };

    const foundListData = await findCollection(findCollectionOptions);

    if (foundListData)
        return setDataFromListData(foundListData);

    const listData = await createListData();
    return setDataFromListData(listData);
};


export const createMilchimpSendService: MailSendServiceFactory<MailchimpSendClientOptions, MailchimpSendData> = async options => {
    mailchimp.setConfig(options);

    const addContactToCampaign = async (body: Omit<MailchimpSendData, 'isLastContact' | 'to'> & { to: InferArrayType<MailchimpSendData[ 'to' ]>; }) => {
        try {
            const { cache = fromCwd('send.mailchimp-cache.json') } = body;

            const cacheData: CacheData = await fs.readJSON(cache, { encoding: 'utf8' }).catch(_e => ({
                lists: {},
                members: {},
                templates: {},
                campaigns: {}
            } as CacheData));

            const audienceId = await getDataFromCollection({
                data: body.audience.id,
                getCache: () => cacheData.lists[ body.audience.name ],
                getData: listData => listData.id,
                setCache: data => { cacheData.lists[ body.audience.name ] = data; },
                createListData: () => mailchimp.lists.createList({
                    name: body.audience.name,
                    contact: body.contact,
                    permission_reminder: '*|LIST:DESCRIPTION|*',
                    email_type_option: true,
                    campaign_defaults: { from_name: body.from.name, from_email: body.from.email, subject: body.subject, language: 'fr' }
                }),
                count: 1000,
                getElements: ({ count, offset }) => mailchimp.lists.getAllLists({ count, offset }).then(
                    ({ lists, total_items: totalItems }) => ({ lists, totalItems })
                ),
                predicate: list => list.name === body.audience.name
            });


            /* const member = */ await getDataFromCollection({
                getCache: () => cacheData.members[ body.to.email ],
                getData: listData => ({ id: listData.id, listName: listData.list_id }),
                setCache: data => { cacheData.members[ body.to.email ] = data; },
                createListData: () => mailchimp.lists.addListMember(audienceId, {
                    email_address: body.to.email,
                    status: 'subscribed',
                    email_type: 'html',
                    merge_fields: {
                        FNAME: body.to.firstName,
                        LNAME: body.to.lastName
                    },
                    tags: body.tags
                }),
                count: 1000,
                getElements: ({ count, offset }) => mailchimp.lists.getListMembersInfo(audienceId, { count, offset }).then(
                    ({ members, total_items: totalItems }) => ({ lists: members, totalItems })
                ),
                predicate: member => member.email_address === body.to.email
            });


            const templateId = await getDataFromCollection({
                getCache: () => cacheData.templates[ body.templateName ],
                getData: listData => listData.id,
                setCache: data => { cacheData.templates[ body.templateName ] = data; },
                createListData: () => mailchimp.templates.create({
                    name: body.templateName,
                    html: body.html,
                    // folder_id: folderId
                }),
                count: 1000,
                getElements: ({ count, offset }) => mailchimp.templates.list({ count, offset }).then(
                    ({ templates, total_items: totalItems }) => ({ lists: templates, totalItems })
                ),
                predicate: template => template.name === body.templateName
            });


            const campaignId = await getDataFromCollection({
                getCache: () => cacheData.campaigns[ body.campaignName ],
                getData: listData => listData.id,
                setCache: data => { cacheData.campaigns[ body.campaignName ] = data; },
                createListData: () => mailchimp.campaigns.create({
                    type: 'regular',
                    recipients: {
                        /* segment_opts: {
                            saved_segment_id: '',
                            match: 'any'
                        }, */
                        list_id: audienceId // default is 'c4bfc53a41'
                    },
                    settings: {
                        subject_line: body.subject,
                        preview_text: body.text,
                        title: body.campaignName,
                        template_id: templateId, // 10020510
                        from_name: body.from.name,
                        reply_to: body.from.email,
                        to_name: '*|FNAME|* *|LNAME|*',
                        auto_footer: true,
                        inline_css: true,
                    },
                    tracking: {
                        html_clicks: true,
                        google_analytics: `${body.campaignName}-${new Date().toJSON().slice(0, 10).split('-').reverse().join('-')}`,
                        opens: true,
                        text_clicks: true,
                    }
                }),
                count: 1000,
                getElements: ({ count, offset }) => mailchimp.campaigns.list({ count, offset }).then(
                    ({ campaigns, total_items: totalItems }) => ({ lists: campaigns, totalItems })
                ),
                predicate: campaign => campaign.settings.title === body.campaignName
            });

            await fs.writeJSON(cache, cacheData);

            return {
                type: 'success' as const,
                id: campaignId,
                status: (await mailchimp.campaigns.get(campaignId)).status,
                message: `email sent to Mailchimp server as a campaign (id: ${campaignId})`,
                to: body.to.email
            };

        } catch (e) {
            return {
                type: 'error' as const,
                error: new EmailCodifiedError({
                    code: EmailErrors.MAILCHIMP,
                    message: e instanceof Error ? e.message : typeof e === 'string' ? e : e?.toString?.() || `Error while sending mail with Mailchimp Service`
                }),
                to: JSON.stringify(body.to)
            };
        }
    };

    const send = async (body: MailchimpSendData) => {

        try {
            const res = await Promise.all(ensureArray(body.to).map((to: To) => addContactToCampaign({ ...body, to })));

            if (body.isLastContact) {
                const successRes = res.find(r => r.type === 'success') as SendReturnSuccess;

                if (successRes) {
                    await mailchimp.campaigns.send(successRes.id);
                    return res.map(r => ({ ...r, hasSendBeenRequested: true }));
                }
            }

            return res.map(r => ({ ...r, hasSendBeenRequested: false }));

        } catch (e) {
            return [ {
                type: 'error' as const,
                error: new EmailCodifiedError({
                    code: EmailErrors.MAILCHIMP,
                    message: e instanceof Error ? e.message : typeof e === 'string' ? e : e?.toString?.() || `Error while sending mail with Mailchimp Service`
                }),
                to: JSON.stringify(body.to),
                hasSendBeenRequested: body.isLastContact
            } ];
        }

    };


    return {
        send,
        checkSendOptions: (body: MailchimpSendData) => checkEmailOptions({
            ...body,
            from: body.from.email,
            to: ensureArray(body.to).map((to: To) => to.email)
        }),
        isMarketing: true
    };
};
