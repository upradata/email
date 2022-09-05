/* eslint-disable camelcase */
import { minify } from 'html-minifier-terser';
import { ensureArray } from '@upradata/util';
import { EmailProviders, SendClientOptions, createSendMailService, EmailSendData, EmailServices } from './send.services';
import { EmailCodifiedError, EmailErrors } from './email-error';
import { SendReturn } from './providers';

export type EmailData<Extra = {}> = Extra & {
    subject: string;
    from: string;
    to: string | string[];
    html?: string;
    text?: string;
    dry?: boolean;
    tag?: string | string[];
    deliveryTime?: string;
    contact?: {
        address: string;
        city: string;
        company: string;
        country: string;
        state: string;
        zip: string;
    };
    list?: {
        name?: string;
        id?: string;
    };
    template?: { name: string; };
    campaign?: { name: string; };
};

export type EmailProviderOptions<P extends EmailProviders = 'mailgun'> = {
    providerName: P;
    provider?: EmailServices<P>[ P ];
    options?: SendClientOptions[ P ];
    isLast?: boolean;
};


/* type ResponseSuccess = { type: 'success'; id: string; message: string; };
type ResponseError = { type: 'error'; message: string; error: EmailCodifiedError; };
type Response = ResponseSuccess | ResponseError;
 */
export type SendEmailReturn = { result: SendReturn[]; isMarketing: boolean; };

export const sendEmail = async <P extends EmailProviders = 'mailgun', E extends Partial<EmailSendData[ P ]> = {}>(
    options: EmailProviderOptions<P>, data: EmailData<E>
): Promise<SendEmailReturn> => {

    const { providerName = 'mailgun', provider, options: clientOptions, isLast } = options;
    const { html, text, dry, deliveryTime, subject, from, tag, to, contact, list, template, campaign, ...restOptions } = data;
    let sendMail: EmailServices<P>[ P ] = undefined;

    try {

        const minimizedHtml = await minify(html, {
            collapseWhitespace: true,
            removeComments: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
            minifyCSS: true,
            minifyJS: true
        });


        sendMail = provider || await createSendMailService<P>(providerName as P, clientOptions);


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

            if (providerName === 'mandrill') {
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
                } as EmailSendData[ 'mandrill' ] as EmailSendData[ P ];
            }

            if (providerName === 'mailchimp') {

                const { name: fromName, email: fromEmail } = splitNameEmail(message.from);
                const { name: toName, email: toEmail } = splitNameEmail(message.to as string);

                return {
                    from: { email: fromEmail, name: fromName },
                    to: { email: toEmail, firstName: toName, lastName: '' /* toName */ },
                    html: message.html,
                    text: message.text,
                    // folder: 'asso',
                    subject: message.subject,
                    contact: {
                        ...contact,
                        address1: contact.address
                    },
                    audience: list,
                    templateName: template.name,
                    campaignName: campaign.name,
                    isLastContact: true
                } as EmailSendData[ 'mailchimp' ] as EmailSendData[ P ];
            }
        };

        const emailOptions = { ...emailData(), ...restOptions };
        return sendMail.send({ ...emailOptions, isLastContact: isLast }).then(result => ({ result, isMarketing: sendMail.isMarketing }));

    } catch (e) {
        return {
            result: [ {
                type: 'error' as const,
                error: new EmailCodifiedError({
                    code: EmailErrors.MAILCHIMP,
                    message: e instanceof Error ? e.message : typeof e === 'string' ? e : e?.toString?.() || `Error while sending mail`
                }),
                to: JSON.stringify(to),
                hasSendBeenRequested: false
            } ],
            isMarketing: sendMail?.isMarketing,
        };
        /*  if (e instanceof EmailCodifiedError)
             return { type: 'error', message: e.toString(), error: e };

         if (e instanceof Error) {
             const err = e as Error & { details?: any; };
             const details = () => {
                 try { return JSON.parse(err.details); } catch (_e) { return err.details; }
             };

             const message = err.details ? [ `message: ${err.message}`, `details: ${details()}` ] : err.message;
             return { type: 'error', message, error: e };
         }

         return { type: 'error', message: e.toString(), error: e }; */
    }
};



// address => Name <contact@gmail.com> => { name: 'Name', email: 'contact@gmail.com' }
export const splitNameEmail = (address: string): { name: string; email: string; } => {

    // if no email bracket present, return as is
    if (!/</.test(address)) {
        return { name: '', email: address };
    }

    const [ name, email ] = address.split('<');

    return {
        name: name.trim(),
        email: email.replace('>', '').trim()
    };
};
