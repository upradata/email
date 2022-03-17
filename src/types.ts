
export interface MinimalEmailOptions {
    from: string;
    to: string;
    subject: string;
    text?: string;
    html?: string;
}


// export type SendMail = (emailOptions: MinimalEmailOptions) => Promise<void>;
