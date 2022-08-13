/* eslint-disable max-len */
import Mailgun from 'mailgun.js';
import { MailgunMessageData } from 'mailgun.js/interfaces/Messages';
import formData from 'form-data';
import { dasherize, ensureArray, entries, map } from '@upradata/util';
import { MailgunClientOptions } from './mailgun.api';
import { MailSendService } from './mail-send.service';
import { checkEmailOptions } from '../check-email-options';

export type MailgunSendData = {
    from: string; // Email address for From header
    to: string | string[]; // Email address of the recipient(s). Example: "Bob <bob@host.com>". You can use commas to separate multiple recipients.
    cc?: string | string[]; // Same as To but for Cc
    bcc?: string | string[]; // Same as To but for Bcc
    subject: string; // Message subject
    text?: string; // Body of the message. (text version)
    html?: string; // Body of the message. (HTML version)
    ampHtml?: string; // AMP part of the message. Please follow google guidelines to compose and send AMP emails.
    attachment?: string; // File attachment. You can post multiple attachment values. Important: You must use multipart/form-data encoding when sending attachments.
    inline?: string; // Attachment with inline disposition. Can be used to send inline images (see example). You can post multiple inline values.
    template?: {
        name?: string; // Name of a template stored via template API. See Templates for more information
        version?: string; // Use this parameter to send a message to specific version of a template
        text?: boolean; // Pass yes if you want to have rendered template in the text part of the message in case of template sending
    };
    options?: {
        tag?: string | string[]; // Tag string. See Tagging for more information.
        dkim?: boolean; // Enables/disables DKIM signatures on per-message basis. Pass yes, no, true or false
        deliverytime?: string; // Desired time of delivery. See Date Format. Note: Messages can be scheduled for a maximum of 3 days in the future.
        deliverytimeOptimizePeriod?: string; /* Toggles Send Time Optimization (STO) on a per-message basis. String should be set to the number of hours in [0-9]+h format, with the minimum being 24h and the maximum being 72h. This value defines the time window in which Mailgun will run the optimization algorithm based on prior engagement data of a given recipient. See Sending a message with STO for details. Please note that STO is only available on certain plans. See www.mailgun.com/pricing for more info.*/
        timeZoneLocalize?: string; /* Toggles Timezone Optimization (TZO) on a per message basis. String should be set to preferred delivery time in HH:mm or hh:mmaa format, where HH:mm is used for 24 hour format without AM/PM and hh:mmaa is used for 12 hour format with AM/PM. See Sending a message with TZO for details. Please note that TZO is only available on certain plans. See www.mailgun.com/pricing for more info. */
        testmode?: boolean; // Enables sending in test mode. Pass yes if needed. See Sending in Test Mode
        tracking?: boolean; // Toggles tracking on a per-message basis, see Tracking Messages for details. Pass yes, no, true or false
        trackingClicks?: boolean; // Toggles clicks tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes, no, true, false or htmlonly.
        trackingOpens?: boolean; // Toggles opens tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes or no, true or false
        requireTls?: boolean; /* If set to True or yes this requires the message only be sent over a TLS connection. If a TLS connection can not be established, Mailgun will not deliver the message. If set to False or no, Mailgun will still try and upgrade the connection, but if Mailgun can not, the message will be delivered over a plaintext SMTP connection. The default is False. */
        skipVerification?: boolean; /* If set to True or yes, the certificate and hostname will not be verified when trying to establish a TLS connection and Mailgun will accept any certificate during delivery. If set to False or no, Mailgun will verify the certificate and hostname. If either one can not be verified, a TLS connection will not be established.
        The default is False.*/
    };
    // h: prefix followed by an arbitrary value allows to append a custom MIME header to the message (X-My-Header in this case). For example, h:Reply-To to specify Reply-To address.
    header?: { [ HeaderName: string ]: string | number | boolean; };
    // v: prefix followed by an arbitrary name allows to attach a custom JSON data to the message. See Attaching Data to Messages for more information.
    variables?: Record<string, any> | {
        recipientVariables: { [ Recipient: string ]: Record<string, any>; }; // A valid JSON-encoded dictionary, where key is a plain recipient address and value is a dictionary with variables that can be referenced in the message body. See Batch Sending for more information.
    };
};


export const datasToMailgunDatas = (datas: MailgunSendData): MailgunMessageData => {

    const convertToMailgun = (v: any) => typeof v === 'boolean' ? v ? 'yes' : 'no' : v;

    const toPrefixProp = (v: object, prefix: string, options?: { dasherize: boolean; }) => {
        const d = options?.dasherize === false ? (v: string) => v : dasherize;
        return map(v, (key, value) => ({ key: `${prefix}:${d(key)}`, value: convertToMailgun(value) }));
    };

    return entries(datas).reduce((o, [ k, v ]) => {
        if (k === 'to' || k === 'cc' || k === 'bcc')
            return { ...o, [ k ]: ensureArray(v).join(',') };

        if (k === 'options')
            return { ...o, ...toPrefixProp(v as MailgunSendData[ 'options' ], 'o') };

        if (k === 'template') {
            const { name, ...templateOpts } = v as MailgunSendData[ 'template' ];
            return { ...o, template: name, ...toPrefixProp(templateOpts, 't') };
        }

        if (k === 'header') {
            return { ...o, ...toPrefixProp(v as MailgunSendData[ 'header' ], 'h', { dasherize: false }) };
        }

        if (k === 'variables') {
            const { recipientVariables, ...variables } = v as MailgunSendData[ 'variables' ];

            const recipients = recipientVariables ? { [ dasherize('recipientVariables') ]: recipientVariables } : {};
            const vars = toPrefixProp(variables, 'v');

            return { ...o, ...recipients, ...vars };
        }

        return { ...o, [ dasherize(k) ]: convertToMailgun(v) };
    }, {} as MailgunMessageData);
};


export type MailgunSendClientOptions = MailgunClientOptions & { domain: string; };

export const createMailgunSendService: MailSendService = (options: MailgunSendClientOptions) => {
    const { apiKey, domain, ...mailgunOptions } = options;

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({ ...mailgunOptions, key: apiKey });

    const send = async (datas: MailgunSendData) => {
        const emailDatas = datasToMailgunDatas(datas);

        const res = await mg.messages.create(domain, emailDatas);
        return res;
    };

    return {
        send,
        checkSendOptions: (body: MailgunSendData) => checkEmailOptions(body)
    };
};
