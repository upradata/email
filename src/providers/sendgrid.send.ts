import sendgridJs, { MailDataRequired } from '@sendgrid/mail';
import { ensureArray } from '@upradata/util';
import { checkEmailOptions } from '../check-email-options';
import { EmailErrors, EmailCodifiedError } from '../email-error';
import { MailSendServiceFactory } from './mail-send.service';
import { SendgridClientOptions } from './sendgrid.api';

export type SendGridSendData = MailDataRequired; /* | MailDataRequired[] */
type EmailData = SendGridSendData[ 'from' ];
export type SendgridSendClientOptions = SendgridClientOptions;

export const createSendgridSendService: MailSendServiceFactory<SendgridSendClientOptions, SendGridSendData> = async options => {
    sendgridJs.setApiKey(options.apiKey);
    await options.setMailService?.(sendgridJs);

    const send = async (options: SendGridSendData) => {
        try {
            const res = await sendgridJs.send(options);
            // res[0] is sendgrind helpers/classes/response.js Response
            // res[1] is response.body so it is redundant
            const response = res[ 0 ];

            return [ {
                type: 'success' as const,
                id: 'id',
                status: `${response.statusCode}`,
                message: response.toString() || `email sent to SendGrid server with status "${response.statusCode}"`,
                to: response.toString(),
                hasSendBeenRequested: true
            } ];
        } catch (e) {
            return [
                {
                    type: 'error' as const,
                    error: new EmailCodifiedError({
                        code: EmailErrors.MAILCHIMP,
                        message: e instanceof Error ? e.message : typeof e === 'string' ? e : e?.toString?.() || `Error while sending mail with SendGrid Service`
                    }),
                    to: JSON.stringify(options.to),
                    hasSendBeenRequested: true
                }
            ];
        }
    };

    return {
        send,
        checkSendOptions: (body: SendGridSendData) => {
            const getAddress = (address: EmailData) => typeof address === 'string' ? address : address.email;

            return checkEmailOptions({
                ...body,
                from: getAddress(body.from),
                to: ensureArray(body.to).map(getAddress),
                subject: body.subject,
                text: body.text,
                html: body.html
            });
        },
        isMarketing: false
    };
};
