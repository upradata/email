import { EMAIL_REGEXP, EMAIL_REGEXP_WITH_BRACKETS } from '@upradata/util';
import { EmailCodifiedError, EmailErrors } from './email-error';
import { MinimalEmailOptions } from './types';

export const checkEmailOptions = (emailOptions: MinimalEmailOptions) => {

    const emailArgs = [ { key: 'from', type: 'address' }, { key: 'to', type: 'address' }, { key: 'text', type: 'content' } ] as const;

    const codifiedError = emailArgs.reduce((codifiedError, { key, type }) => {

        if (!emailOptions[ key ]) {
            const message = `Missing "${key}" address parameter`;
            codifiedError.list.push(new EmailCodifiedError({ code: EmailErrors.MISSING_PARAMETER, message }));
            return codifiedError;
        }

        if (type === 'address') {
            const address = emailOptions[ key ];

            if (!EMAIL_REGEXP.test(address) && !EMAIL_REGEXP_WITH_BRACKETS.test(address)) {
                const message = `Wrong email format for "${key}" address: "${address || 'not provided'}"`;
                codifiedError.list.push(new EmailCodifiedError({ code: EmailErrors.WRONG_FORMAT, message }));
                return codifiedError;
            }
        }

        return codifiedError;
    }, new EmailCodifiedError());


    return codifiedError.list.length === 0 ? undefined : codifiedError;
};
