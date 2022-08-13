import mailchimp from '@mailchimp/mailchimp_transactional';
import { MailchimpClientOptions } from './mailchimp.api';
import { checkEmailOptions } from '../check-email-options';
import { MailSendService } from './mail-send.service';

export type MailchimpSendData = mailchimp.MessagesSendRequest;
export type MailchimpSendClientOptions = MailchimpClientOptions;

export const createMailchimpSendService: MailSendService = async (options: MailchimpSendClientOptions) => {
    const client = mailchimp(options.apiKey);

    const send = async (body: MailchimpSendData) => client.messages.send(body);

    return {
        send,
        checkSendOptions: (body: MailchimpSendData) => checkEmailOptions({
            ...body.message,
            from: body.message.from_email,
            to: body.message.to.map(address => address.email)
        })
    };
};
