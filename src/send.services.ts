import { keys, ValueOf } from '@upradata/util';
import { EmailCodifiedError, EmailErrors } from './email-error';
import {
    createMailgunSendService, createSendgridSendService, createMandrillSendService,
    MandrillSendClientOptions, MailgunSendClientOptions, SendgridSendClientOptions,
    MailgunSendData, MandrillSendData, SendGridSendData, MailSendService, MailSendServiceFactory, createMilchimpSendService, MailchimpSendClientOptions, MailchimpSendData
} from './providers';

export const emailServiceFactories = {
    mailgun: createMailgunSendService,
    sendgrid: createSendgridSendService,
    mandrill: createMandrillSendService,
    mailchimp: createMilchimpSendService
} as const;


type EmailServiceFactories = typeof emailServiceFactories;
export type EmailProviders = keyof EmailServiceFactories;

export const emailProviders = keys(emailServiceFactories);

export type SendClientOptions = {
    mailgun?: MailgunSendClientOptions;
    sendgrid?: SendgridSendClientOptions;
    mandrill?: MandrillSendClientOptions;
    mailchimp?: MailchimpSendClientOptions;
};

export type EmailSendData = {
    mailgun?: MailgunSendData;
    sendgrid?: SendGridSendData;
    mandrill?: MandrillSendData;
    mailchimp?: MailchimpSendData;
};


// export type EmailServices<P extends EmailProviders> = { [ K in P ]: Awaited<ReturnType<EmailServiceFactories[ K ]>>[ 'send' ] };
export type EmailServices<P extends EmailProviders> = { [ K in P ]: MailSendService<EmailSendData[ K ]> };

export const createSendMailServices = async<P extends EmailProviders>(options: { [ K in P ]?: SendClientOptions[ K ] }): Promise<EmailServices<P>> => {
    const mailServices = Object.keys(options) as P[];

    if (mailServices.length === 0)
        throw new EmailCodifiedError({ code: EmailErrors.SENDMAIL, message: `A mail service has to be provided: ${keys(emailServiceFactories).join(', ')}` });

    const sendMails = await Promise.all(mailServices.map(async mailService => {
        const factory = emailServiceFactories[ mailService ] as any as MailSendServiceFactory<ValueOf<SendClientOptions>, EmailSendData[ EmailProviders ]>;
        const mailSender = await factory(options[ mailService ]);

        return {
            name: mailService,
            mailSender,
            send: async (emailOptions: EmailSendData[ P ]) => {

                const errors = mailSender.checkSendOptions(emailOptions);
                if (errors)
                    return Promise.reject(errors);

                return mailSender.send(emailOptions);
            }
        };
    }));

    return sendMails.reduce((o, { name, mailSender, send }) => ({ ...o, [ name ]: { ...mailSender, send } }), {} as EmailServices<P>);
};


export const createSendMailService = async <K extends EmailProviders>(name: K, options: SendClientOptions[ K ]): Promise<EmailServices<K>[ K ]> => {
    return createSendMailServices({ [ name ]: options }).then(senders => senders[ name as string ]);
};
