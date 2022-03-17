/* eslint-disable camelcase */
import { minify } from 'html-minifier-terser';
import { ensureArray } from '@upradata/util';
import { EmailProviders, SendClientOptions, createSendMailService, EmailSendData, EmailServices } from './send.services';
import { EmailCodifiedError } from './email-error';

export type EmailData<Extra = {}> = Extra & {
    subject: string;
    from: string;
    to: string | string[];
    html?: string;
    text?: string;
    dry?: boolean;
    tag?: string | string[];
    deliveryTime?: string;
};

export type EmailProviderOptions<P extends EmailProviders = 'mailgun'> = { providerName: P; provider?: EmailServices<P>[ P ]; options?: SendClientOptions[ P ]; };

export const sendEmail = async <P extends EmailProviders = 'mailgun', E extends Partial<EmailSendData[ P ]> = {}>(options: EmailProviderOptions<P>, data: EmailData<E>) => {
    const { providerName = 'mailgun', provider, options: clientOptions } = options;
    const { html, text, dry, deliveryTime, subject, from, tag, to, ...restOptions } = data;


    const minimizedHtml = await minify(html, {
        collapseWhitespace: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true
    });


    const sendMail = provider || await createSendMailService<P>(providerName as P, clientOptions);

    type ResponseSuccess = { type: 'success'; id: string; message: string; };
    type ResponseError = { type: 'error'; error: string; };
    type Response = ResponseSuccess | ResponseError;


    const emailData = (): EmailSendData[ P ] => {
        const message = {
            to,
            from,
            subject,
            text,
            html: minimizedHtml,
        };

        if (providerName === 'mailgun') {
            return {
                ...message,
                options: {
                    tag,
                    deliverytime: deliveryTime,
                    tracking: true,
                    trackingClicks: true,
                    trackingOpens: true,
                    dkim: true,
                    testmode: dry
                }
            } as EmailSendData[ 'mailgun' ] as EmailSendData[ P ];
        }

        if (providerName === 'sendgrid') {
            return {
                ...message,
                trackingSettings: {
                    clickTracking: { enable: true },
                    openTracking: { enable: true },
                    ganalytics: { enable: false }
                },
                sendAt: 1
            } as EmailSendData[ 'mailgun' ] as EmailSendData[ P ];
        }

        if (providerName === 'mailchimp') {
            const { from, to, ...mess } = message;

            const { name: from_name, email: from_email } = splitNameEmail(from);

            return {
                message: {
                    ...mess,
                    from_email,
                    from_name,
                    to: ensureArray(to).map(address => ({ ...splitNameEmail(address), type: 'to' }))
                },
                tags: ensureArray(tag),
                track_opens: true,
                track_clicks: true,
                send_at: '',
            } as EmailSendData[ 'mailchimp' ] as EmailSendData[ P ];
        }
    };

    return sendMail({ ...emailData(), ...restOptions } as any)
        .then(r => ({ type: 'sucess', ...r }))
        .catch((e: unknown) => {
            if (e instanceof EmailCodifiedError)
                return { type: 'error', message: e.toString(), error: e };

            if (e instanceof Error) {
                const err = e as Error & { details?: any; };
                const details = () => {
                    try { return JSON.parse(err.details); } catch (_e) { return err.details; }
                };

                const message = err.details ? [ `message: ${err.message}`, `details: ${details()}` ] : err.message;
                return { type: 'error', message, error: e };
            }

            return { type: 'error', message: e.toString(), error: e };
        }) as Promise<Response>;
};



// address => Name <contact@gmail.com> => { name: 'Name', email: 'contact@gmail.com' }
export const splitNameEmail = (address: string): { name: string; email: string; } => {

    // if no email bracket present, return as is
    if (/</.test(address)) {
        return { name: '', email: address };
    }

    const [ name, email ] = address.split('<');

    return {
        name: name.trim(),
        email: email.replace('>', '').trim()
    };
};
