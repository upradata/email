import mailchimp from '@mailchimp/mailchimp_transactional';

export type MandrillClientOptions = {
    apiKey: string;
};

export const createMandrillApiService = async (options: MandrillClientOptions) => {
    const client = mailchimp(options.apiKey);
    return client;
};
