import mailchimp from '@mailchimp/mailchimp_transactional';

declare module '@mailchimp/mailchimp_transactional' {
    interface Messages {
        cancelScheduled(arg: unknown): Promise<unknown | Error>;
        content(arg: unknown): Promise<unknown | Error>;
        info(arg: unknown): Promise<unknown | Error>;
        listScheduled(arg: unknown): Promise<unknown | Error>;
        parse(arg: unknown): Promise<unknown | Error>;
        reschedule(arg: unknown): Promise<unknown | Error>;
        search(arg: unknown): Promise<unknown | Error>;
        searchTimeSeries(arg: unknown): Promise<unknown | Error>;
        // send(arg: unknown): Promise<unknown | Error>; done already
        sendRaw(arg: unknown): Promise<unknown | Error>;
        sendTemplate(arg: unknown): Promise<unknown | Error>;
        add(arg: unknown): Promise<unknown | Error>;
    }

    interface ApiClient {
        allowlists: {
            add(arg: unknown): Promise<unknown | Error>;
            delete(arg: unknown): Promise<unknown | Error>;
            list(arg: unknown): Promise<unknown | Error>;
        };

        exports: {
            activity(arg: unknown): Promise<unknown | Error>;
            allowlist(arg: unknown): Promise<unknown | Error>;
            info(arg: unknown): Promise<unknown | Error>;
            list(arg: unknown): Promise<unknown | Error>;
            rejects(arg: unknown): Promise<unknown | Error>;
            whitelist(arg: unknown): Promise<unknown | Error>;
        };
        inbound: {
            addDomain(arg: unknown): Promise<unknown | Error>;
            addRoute(arg: unknown): Promise<unknown | Error>;
            checkDomain(arg: unknown): Promise<unknown | Error>;
            deleteDomain(arg: unknown): Promise<unknown | Error>;
            deleteRoute(arg: unknown): Promise<unknown | Error>;
            domains(arg: unknown): Promise<unknown | Error>;
            routes(arg: unknown): Promise<unknown | Error>;
            sendRaw(arg: unknown): Promise<unknown | Error>;
            updateRoute(arg: unknown): Promise<unknown | Error>;
        };
        ips: {
            cancelWarmup(arg: unknown): Promise<unknown | Error>;
            checkCustomDns(arg: unknown): Promise<unknown | Error>;
            createPool(arg: unknown): Promise<unknown | Error>;
            delete(arg: unknown): Promise<unknown | Error>;
            deletePool(arg: unknown): Promise<unknown | Error>;
            info(arg: unknown): Promise<unknown | Error>;
            list(arg: unknown): Promise<unknown | Error>;
            listPools(arg: unknown): Promise<unknown | Error>;
            poolInfo(arg: unknown): Promise<unknown | Error>;
            provision(arg: unknown): Promise<unknown | Error>;
            setCustomDns(arg: unknown): Promise<unknown | Error>;
            setPool(arg: unknown): Promise<unknown | Error>;
            startWarmup(arg: unknown): Promise<unknown | Error>;
        };
        // messages: Messages; // already done
        metadata: {
            delete(arg: unknown): Promise<unknown | Error>;
            list(arg: unknown): Promise<unknown | Error>;
            update(arg: unknown): Promise<unknown | Error>;
        };
        rejects: {
            add(arg: unknown): Promise<unknown | Error>;
            delete(arg: unknown): Promise<unknown | Error>;
            list(arg: unknown): Promise<unknown | Error>;
        };
        senders: {
            addDomain(arg: unknown): Promise<unknown | Error>;
            checkDomain(arg: unknown): Promise<unknown | Error>;
            domains(arg: unknown): Promise<unknown | Error>;
            info(arg: unknown): Promise<unknown | Error>;
            list(arg: unknown): Promise<unknown | Error>;
            timeSeries(arg: unknown): Promise<unknown | Error>;
            verifyDomain(arg: unknown): Promise<unknown | Error>;
        };
        subaccounts: {
            add(arg: unknown): Promise<unknown | Error>;
            delete(arg: unknown): Promise<unknown | Error>;
            info(arg: unknown): Promise<unknown | Error>;
            list(arg: unknown): Promise<unknown | Error>;
            pause(arg: unknown): Promise<unknown | Error>;
            resume(arg: unknown): Promise<unknown | Error>;
            update(arg: unknown): Promise<unknown | Error>;
        };
        tags: {
            allTimeSeries(arg: unknown): Promise<unknown | Error>;
            delete(arg: unknown): Promise<unknown | Error>;
            info(arg: unknown): Promise<unknown | Error>;
            list(arg: unknown): Promise<unknown | Error>;
            timeSeries(arg: unknown): Promise<unknown | Error>;
        };
        templates: {
            add(arg: unknown): Promise<unknown | Error>;
            delete(arg: unknown): Promise<unknown | Error>;
            info(arg: unknown): Promise<unknown | Error>;
            list(arg: unknown): Promise<unknown | Error>;
            publish(arg: unknown): Promise<unknown | Error>;
            render(arg: unknown): Promise<unknown | Error>;
            timeSeries(arg: unknown): Promise<unknown | Error>;
            update(arg: unknown): Promise<unknown | Error>;
        };
        urls: {
            addTrackingDomain(arg: unknown): Promise<unknown | Error>;
            checkTrackingDomain(arg: unknown): Promise<unknown | Error>;
            list(arg: unknown): Promise<unknown | Error>;
            search(arg: unknown): Promise<unknown | Error>;
            timeSeries(arg: unknown): Promise<unknown | Error>;
            trackingDomains(arg: unknown): Promise<unknown | Error>;
        };
        users: {
            info(arg: unknown): Promise<unknown | Error>;
            ping(arg: unknown): Promise<unknown | Error>;
            ping2(arg: unknown): Promise<unknown | Error>;
            senders(arg: unknown): Promise<unknown | Error>;
        };
        webhooks: {
            add(arg: unknown): Promise<unknown | Error>;
            delete(arg: unknown): Promise<unknown | Error>;
            info(arg: unknown): Promise<unknown | Error>;
            list(arg: unknown): Promise<unknown | Error>;
            update(arg: unknown): Promise<unknown | Error>;
        };
        whitelists: {
            add(arg: unknown): Promise<unknown | Error>;
            delete(arg: unknown): Promise<unknown | Error>;
            list(arg: unknown): Promise<unknown | Error>;
        };
    }
}

export type MailchimpClientOptions = {
    apiKey: string;
};

export const createMailchimpApiService = async (options: MailchimpClientOptions) => {
    const client = mailchimp(options.apiKey);
    return client;
};
