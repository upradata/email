import { Client } from '@sendgrid/client';
import type { ClientRequest } from '@sendgrid/client/src/request';
import sendgridJs, { ClientResponse, MailService } from '@sendgrid/mail';
import { TT$ } from '@upradata/util';


declare module '@sendgrid/client' {
    interface Client {
        api(requestOpts?: ClientRequest): Promise<[ ClientResponse, any ]>;
    }
}

export type SendgridClientOptions = {
    apiKey: string;
    setMailService?: (client: MailService) => TT$<void>;
};

export const sendgridApi = async (options: SendgridClientOptions) => {
    const client = new Client();
    client.setApiKey(options.apiKey);
    await options.setMailService?.(sendgridJs);

    client.api = (requestOpts?: ClientRequest) => {
        const request = client.createRequest(requestOpts);
        return client.request(request);
    };

    return client;
};


/*
import type { EmailOptions } from './types';

export const sendgridSendMailWithFulApiExample = (options: EmailOptions & { apiKey: string; }) => {
    return sendgrid(options).api({
        url: '/v3/mail/send',
        method: 'POST',
        body: {
            personalizations: [
                {
                    to: [ { email: options.to } ],
                    subject: options.subject,
                },
            ],
            from: { email: options.from },
            content: [
                options.html && {
                    type: 'text/html',
                    value: options.html,
                },
                options.text && {
                    type: 'text/plain',
                    value: options.text,
                },
            ].filter(v => !!v),
        }
    });
};
*/
