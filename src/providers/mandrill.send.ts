import mailchimp from '@mailchimp/mailchimp_transactional';
import { nice } from '@upradata/node-util';
import { MandrillClientOptions } from './mandrill.api';
import { checkEmailOptions } from '../check-email-options';
import { MailSendServiceFactory } from './mail-send.service';
import { EmailCodifiedError, EmailErrors } from '../email-error';

export type MandrillSendData = mailchimp.MessagesSendRequest;
export type MandrillSendClientOptions = MandrillClientOptions;

export const createMandrillSendService: MailSendServiceFactory<MandrillSendClientOptions, MandrillSendData> = async options => {
    const client = mailchimp(options.apiKey);

    const send = async (body: MandrillSendData) => {
        const returnError = (e: unknown, to: string) => ({
            type: 'error' as const,
            error: new EmailCodifiedError({
                code: EmailErrors.MANDRILL,
                message: e instanceof Error ? e.message : typeof e === 'string' ? e : e?.toString?.() || `Error while sending mail with Mailgun Service`
            }),
            to,
            hasSendBeenRequested: true
        });


        try {
            const res = await client.messages.send(body);
            if (res instanceof Error) {
                const { response: r } = res;
                const reason = r.data ? nice(r.data, { indent: 2 }) : undefined;

                return [
                    returnError(new EmailCodifiedError({
                        code: EmailErrors.MANDRILL, message: `${res.message}${reason ? `: ${reason}` : ''}`
                    }), r.request)
                ];
            }

            return res.map(r => {
                if (r.status === 'rejected' || r.status === 'invalid') {
                    return returnError(new EmailCodifiedError({
                        code: EmailErrors.MANDRILL,
                        message: `${r.reject_reason} ${nice({ status: r.status, reason: r.reject_reason, email: r.email, id: r._id }, { indent: 2 })}`
                    }), r.email);
                }

                return {
                    type: 'success' as const,
                    id: r._id, message: `email sent to Mandrill server with status "${r.status}"`,
                    status: r.status,
                    to: r.email,
                    hasSendBeenRequested: true
                };
            });

        } catch (e) {
            return [ returnError(e, body.send_at) ];
        }
    };

    return {
        send,
        checkSendOptions: (body: MandrillSendData) => checkEmailOptions({
            ...body.message,
            from: body.message.from_email,
            to: body.message.to.map(address => address.email)
        }),
        isMarketing: false
    };
};
