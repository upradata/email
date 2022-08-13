import Mailgun from 'mailgun.js';
import MailgunOptions from 'mailgun.js/interfaces/Options';
import formData from 'form-data';

export type MailgunClientOptions = Omit<MailgunOptions, 'key'> & { apiKey: string; };

export const mailgunApi = (options: MailgunClientOptions) => {
    const { apiKey, ...mailgunOptions } = options;

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({ ...mailgunOptions, key: apiKey });

    return mg;
};
