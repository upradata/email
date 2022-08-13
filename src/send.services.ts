import { keys } from '@upradata/util';
import { EmailCodifiedError, EmailErrors } from './email-error';
import {
    createMailgunSendService, createSendgridSendService, createMailchimpSendService,
    MailchimpSendClientOptions, MailgunSendClientOptions, SendgridSendClientOptions,
    MailgunSendData, MailchimpSendData, SendGridSendData
} from './providers';

export const emailServiceFactories = {
    mailgun: createMailgunSendService,
    sendgrid: createSendgridSendService,
    mailchimp: createMailchimpSendService
} as const;


type EmailServiceFactories = typeof emailServiceFactories;
export type EmailProviders = keyof EmailServiceFactories;

export const emailProviders = keys(emailServiceFactories);

export type SendClientOptions = {
    mailgun?: MailgunSendClientOptions;
    sendgrid?: SendgridSendClientOptions;
    mailchimp?: MailchimpSendClientOptions;
};

export type EmailSendData = {
    mailgun?: MailgunSendData;
    sendgrid?: SendGridSendData;
    mailchimp?: MailchimpSendData;
};


export type EmailServices<P extends EmailProviders> = { [ K in P ]: Awaited<ReturnType<EmailServiceFactories[ K ]>>[ 'send' ] };

export const createSendMailServices = async<P extends EmailProviders>(options: { [ K in P ]?: SendClientOptions[ K ] }): Promise<EmailServices<P>> => {
    const mailServices = Object.keys(options) as P[];

    if (mailServices.length === 0)
        throw new EmailCodifiedError({ code: EmailErrors.SENDMAIL, message: `A mail service has to be provided: ${keys(emailServiceFactories).join(', ')}` });

    const sendMails = await Promise.all(mailServices.map(async mailService => {
        const mailSender = await emailServiceFactories[ mailService ](options[ mailService ] as any);

        return {
            name: mailService,
            service: async (emailOptions: EmailSendData[ P ]) => {

                const errors = mailSender.checkSendOptions(emailOptions);
                if (errors)
                    return Promise.reject(errors);

                return mailSender.send(emailOptions);
            }
        };
    }));

    return sendMails.reduce((o, { name, service }) => ({ ...o, [ name ]: service }), {}) as any;
};


export const createSendMailService = async <K extends EmailProviders>(name: K, options: SendClientOptions[ K ]): Promise<EmailServices<K>[ K ]> => {
    return createSendMailServices({ [ name ]: options }).then(senders => senders[ name as string ]);
};
