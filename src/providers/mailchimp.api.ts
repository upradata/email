import mailchimp, { Config } from '@mailchimp/mailchimp_marketing';

export type MailchimpClientOptions = Config;

export const createMailchimpApiService = async (options: MailchimpClientOptions) => {
    mailchimp.setConfig(options);
    return mailchimp;
};
