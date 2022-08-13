import mailchimp from '@mailchimp/mailchimp_transactional';

export type MailchimpClientOptions = {
    apiKey: string;
};

export const createMailchimpApiService = async (options: MailchimpClientOptions) => {
    const client = mailchimp(options.apiKey);
    return client;
};
