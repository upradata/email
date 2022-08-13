import sendgridJs, { MailDataRequired } from '@sendgrid/mail';
import { ensureArray } from '@upradata/util';
import { checkEmailOptions } from '../check-email-options';
import { MailSendService } from './mail-send.service';
import { SendgridClientOptions } from './sendgrid.api';

export type SendGridSendData = MailDataRequired; /* | MailDataRequired[] */
type EmailData = SendGridSendData[ 'from' ];
export type SendgridSendClientOptions = SendgridClientOptions;

export const createSendgridSendService: MailSendService = async (options: SendgridSendClientOptions) => {
    sendgridJs.setApiKey(options.apiKey);
    await options.setMailService?.(sendgridJs);

    const send = async (options: SendGridSendData) => {
        const res = await sendgridJs.send(options);
        // res[0] is sendgrind helpers/classes/response.js Response
        // res[1] is response.body so it is redundant
        return res[ 0 ];
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
        }
    };
};
