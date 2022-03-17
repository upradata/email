import mailchimp from '@mailchimp/mailchimp_transactional';
import { MailchimpClientOptions } from './mailchimp.api';

export type MailchimpSendData = mailchimp.SendMessageRequest;
export type MailchimpSendClientOptions = MailchimpClientOptions;

export const createMailchimpSendService = async (options: MailchimpSendClientOptions) => {
    const client = mailchimp(options.apiKey);

    const send = async (body: MailchimpSendData) => client.messages.send(body);
    return send;
};
