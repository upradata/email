import { TT$ } from '@upradata/util';
import { EmailCodifiedError } from '../email-error';

export type SendReturnSuccess = { type: 'success'; id: string; status: string; message: string; to: string; hasSendBeenRequested: boolean; };
export type SendReturnError = { type: 'error'; error: EmailCodifiedError; to: string; hasSendBeenRequested: boolean; };

export type SendReturn = SendReturnError | SendReturnSuccess;

export type MailSendService<MailData = unknown> = {
    send: (sendData: MailData & { isLastContact?: boolean; }) => Promise<SendReturn[]>;
    checkSendOptions: (sendData: MailData) => EmailCodifiedError | undefined;
    isMarketing: boolean;
};

export type MailSendServiceFactory<MailServiceOptions = unknown, MailData = unknown> = (options: MailServiceOptions) => TT$<MailSendService<MailData>>;
