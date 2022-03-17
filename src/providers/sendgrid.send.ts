import sendgridJs, { MailDataRequired } from '@sendgrid/mail';
import { SendgridClientOptions } from './sendgrid.api';

export type SendGridSendData = MailDataRequired; /* | MailDataRequired[] */
export type SendgridSendClientOptions = SendgridClientOptions;

export const createSendgridSendService = async (options: SendgridSendClientOptions) => {
    sendgridJs.setApiKey(options.apiKey);
    await options.setMailService?.(sendgridJs);

    const send = async (options: SendGridSendData) => {
        const res = await sendgridJs.send(options);
        // res[0] is sendgrind helpers/classes/response.js Response
        // res[1] is response.body so it is redundant
        return res[ 0 ];
    };

    return send;
};
