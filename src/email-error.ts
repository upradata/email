
import { CodifiedError } from '@upradata/util';

export enum EmailErrors {
    MISSING_PARAMETER = 'upradata-error/missing-parameter',
    WRONG_PARAMETER = 'upradata-error/wrong-parameter',
    WRONG_FORMAT = 'upradata-error/wrong-format',
    SENDMAIL = 'upradata-error/sendmail-error',
    MAILGUN = 'upradata-error/mailgun-error',
    SENDGRID = 'upradata-error/sendgrid-error',
    MAILCHIMP = 'upradata-error/mailchimp-error',
    MANDRILL = 'upradata-error/mandrill-error',
}


export class EmailCodifiedError extends CodifiedError<EmailErrors>{ }
