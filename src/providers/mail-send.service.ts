import { TT$ } from '@upradata/util';
import { EmailCodifiedError } from '../email-error';

export type MailSendService = (options: unknown) => TT$<{
    send: (sendData: unknown) => Promise<unknown>;
    checkSendOptions: (sendData: unknown) => EmailCodifiedError | undefined;
}>;
