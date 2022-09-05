/* eslint-disable max-len */
/**
 * Campaigns service.
 * @module api/CampaignsApi
 */
/**
 * Constructs a new CampaignsApi.
 * @alias module:api/CampaignsApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;

import { SignatureHelpTriggerCharacter } from 'typescript';
import { Body } from '../types';
import ApiClient from '../ApiClient';

export interface CreateCampaignBody extends Body {
    type?: 'regular' | 'plaintext' | 'absplit' | 'rss' | 'variate';
    rss_opts?: object;
    recipients?: {
        segment_opts?: {
            saved_segment_id?: number;
            match?: 'any' | 'all';
            conditions?: Array<{
                field: 'EMAIL';
                op: 'contains';
                value: string; // email address
            }>;
        };
        list_id: string;
    };
    settings?: {
        subject_line?: string;
        preview_text?: string;
        title?: string;
        template_id?: number;
        from_name?: string;
        reply_to?: string;
        to_name?: string;
        folder_id?: string;
        auto_footer?: boolean;
        inline_css?: boolean;
    };
    tracking?: {
        opens?: boolean;
        html_clicks?: boolean;
        text_clicks?: boolean;
        ecomm360?: boolean;
        google_analytics?: string;
        clicktale?: string;
    };
    social_card?: object;
    content_type?: 'template' | 'multichannel';
}

export default class CampaignsApi {
    /**
     * Campaigns service.
     * @module api/CampaignsApi
     */
    /**
     * Constructs a new CampaignsApi.
     * @alias module:api/CampaignsApi
     * @class
     * @param {ApiClient} apiClient Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    constructor(apiClient: ApiClient);
    /**
    * The default API client implementation.
    * @type {ApiClient}
    */
    apiClient: ApiClient;
    /**
     * Delete campaign
     * Remove a campaign from your Mailchimp account.
     * @param {String} campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeWithHttpInfo: (campaignId: string) => Promise<any>;
    /**
     * Delete campaign
     * Remove a campaign from your Mailchimp account.
     * @param {String} campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    remove: (campaignId: string) => Promise<any>;
    /**
     * Delete campaign feedback message
     * Remove a specific feedback message for a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} feedbackId The unique id for the feedback message.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteFeedbackMessageWithHttpInfo: (campaignId: string, feedbackId: string) => Promise<any>;
    /**
     * Delete campaign feedback message
     * Remove a specific feedback message for a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} feedbackId The unique id for the feedback message.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteFeedbackMessage: (campaignId: string, feedbackId: string) => Promise<any>;
    /**
     * List campaigns
     * Get all campaigns in an account.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {model/String} opts.type The campaign type.
     * @param {model/String} opts.status The status of the campaign.
     * @param {Date} opts.beforeSendTime Restrict the response to campaigns sent before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Date} opts.sinceSendTime Restrict the response to campaigns sent after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Date} opts.beforeCreateTime Restrict the response to campaigns created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Date} opts.sinceCreateTime Restrict the response to campaigns created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.listId The unique id for the list.
     * @param {String} opts.folderId The unique folder id.
     * @param {String} opts.memberId Retrieve campaigns sent to a particular list member. Member ID is The MD5 hash of the lowercase version of the list member’s email address.
     * @param {model/String} opts.sortField Returns files sorted by the specified field.
     * @param {model/String} opts.sortDir Determines the order direction for sorted results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */
    listWithHttpInfo: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List campaigns
     * Get all campaigns in an account.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {model/String} opts.type The campaign type.
     * @param {model/String} opts.status The status of the campaign.
     * @param {Date} opts.beforeSendTime Restrict the response to campaigns sent before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Date} opts.sinceSendTime Restrict the response to campaigns sent after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Date} opts.beforeCreateTime Restrict the response to campaigns created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Date} opts.sinceCreateTime Restrict the response to campaigns created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.listId The unique id for the list.
     * @param {String} opts.folderId The unique folder id.
     * @param {String} opts.memberId Retrieve campaigns sent to a particular list member. Member ID is The MD5 hash of the lowercase version of the list member’s email address.
     * @param {model/String} opts.sortField Returns files sorted by the specified field.
     * @param {model/String} opts.sortDir Determines the order direction for sorted results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */
    list: (opts: {
        fields?: Array<string>;
        excludeFields?: Array<string>;
        count?: number;
        offset?: number;
        folderId?: string;
        memberId?: string;
        type?: 'regular' | 'plaintext' | 'absplit' | 'rss' | 'variate';
        status?: 'save' | 'paused' | 'schedule' | 'sending' | 'sent';
    }) => Promise<{
        campaigns: {
            id: string;
            status: 'save' | 'paused' | 'schedule' | 'sending' | 'sent' | 'canceled' | 'canceling' | 'archived';
            settings: {
                subject_line: string;
                preview_text: string;
                title: string;
                template_id: number;
                from_name: string;
                reply_to: string;
                to_name: string;
                folder_id: string;
                auto_footer: boolean;
                inline_css: boolean;
            };
            tracking: {
                opens: boolean;
                html_clicks: boolean;
                text_clicks: boolean;
                ecomm360: boolean;
                google_analytics: string;
                clicktale: string;
            };
        }[];
        total_items: number;
    }>;
    /**
     * Get campaign info
     * Get information about a specific campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Campaign} and HTTP response
     */
    getWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get campaign info
     * Get information about a specific campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */
    get: (campaignId: string, opts?: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<{
        id: string;
        status: 'save' | 'paused' | 'schedule' | 'sending' | 'sent' | 'canceled' | 'canceling' | 'archived';
        settings: {
            subject_line: string;
            preview_text: string;
            title: string;
            template_id: number;
            from_name: string;
            reply_to: string;
            to_name: string;
            folder_id: string;
            auto_footer: boolean;
            inline_css: boolean;
        };
        tracking: {
            opens: boolean;
            html_clicks: boolean;
            text_clicks: boolean;
            ecomm360: boolean;
            google_analytics: string;
            clicktale: string;
        };
        // etc
    }>;
    /**
     * Get campaign content
     * Get the the HTML and plain-text content for a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CampaignContent} and HTTP response
     */
    getContentWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get campaign content
     * Get the the HTML and plain-text content for a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CampaignContent}
     */
    getContent: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List campaign feedback
     * Get team feedback while you're working together on a Mailchimp campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CampaignReports} and HTTP response
     */
    getFeedbackWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List campaign feedback
     * Get team feedback while you're working together on a Mailchimp campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CampaignReports}
     */
    getFeedback: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get campaign feedback message
     * Get a specific feedback message from a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} feedbackId The unique id for the feedback message.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CampaignFeedback2} and HTTP response
     */
    getFeedbackMessageWithHttpInfo: (campaignId: string, feedbackId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get campaign feedback message
     * Get a specific feedback message from a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} feedbackId The unique id for the feedback message.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CampaignFeedback2}
     */
    getFeedbackMessage: (campaignId: string, feedbackId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get campaign send checklist
     * Review the send checklist for a campaign, and resolve any issues before sending.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendChecklist} and HTTP response
     */
    getSendChecklistWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get campaign send checklist
     * Review the send checklist for a campaign, and resolve any issues before sending.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendChecklist}
     */
    getSendChecklist: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Update campaign settings
     * Update some or all of the settings for a specific campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {model/Campaign2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Campaign} and HTTP response
     */
    updateWithHttpInfo: (campaignId: string, body: any) => Promise<any>;
    /**
     * Update campaign settings
     * Update some or all of the settings for a specific campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {model/Campaign2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */
    update: (campaignId: string, body: any) => Promise<any>;
    /**
     * Update campaign feedback message
     * Update a specific feedback message for a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} feedbackId The unique id for the feedback message.
     * @param {model/CampaignFeedback3} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CampaignFeedback2} and HTTP response
     */
    updateFeedbackMessageWithHttpInfo: (campaignId: string, feedbackId: string, body: any) => Promise<any>;
    /**
     * Update campaign feedback message
     * Update a specific feedback message for a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} feedbackId The unique id for the feedback message.
     * @param {model/CampaignFeedback3} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CampaignFeedback2}
     */
    updateFeedbackMessage: (campaignId: string, feedbackId: string, body: any) => Promise<any>;
    /**
     * Add campaign
     * Create a new Mailchimp campaign.
     * @param {model/Campaign1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Campaign} and HTTP response
     */
    createWithHttpInfo: (body: any) => Promise<any>;
    /**
     * Add campaign
     * Create a new Mailchimp campaign.
     * @param {model/Campaign1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */
    create: (body: CreateCampaignBody) => Promise<{
        id: string;
        status: 'save' | 'paused' | 'schedule' | 'sending' | 'sent' | 'canceled' | 'canceling' | 'archived';
        settings: {
            subject_line: string;
            preview_text: string;
            title: string;
            template_id: number;
            from_name: string;
            reply_to: string;
            to_name: string;
            folder_id: string;
            auto_footer: boolean;
            inline_css: boolean;
        };
        tracking: {
            opens: boolean;
            html_clicks: boolean;
            text_clicks: boolean;
            ecomm360: boolean;
            google_analytics: string;
            clicktale: string;
        };
        // etc
    }>;
    /**
     * Cancel campaign
     * Cancel a Regular or Plain-Text Campaign after you send, before all of your recipients receive it. This feature is included with Mailchimp Pro.
     * @param {String} campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    cancelSendWithHttpInfo: (campaignId: string) => Promise<any>;
    /**
     * Cancel campaign
     * Cancel a Regular or Plain-Text Campaign after you send, before all of your recipients receive it. This feature is included with Mailchimp Pro.
     * @param {String} campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    cancelSend: (campaignId: string) => Promise<any>;
    /**
     * Resend campaign
     * Creates a Resend to Non-Openers version of this campaign. We will also check if this campaign meets the criteria for Resend to Non-Openers campaigns.
     * @param {String} campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Campaign3} and HTTP response
     */
    createResendWithHttpInfo: (campaignId: string) => Promise<any>;
    /**
     * Resend campaign
     * Creates a Resend to Non-Openers version of this campaign. We will also check if this campaign meets the criteria for Resend to Non-Openers campaigns.
     * @param {String} campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign3}
     */
    createResend: (campaignId: string) => Promise<any>;
    /**
     * Pause rss campaign
     * Pause an RSS-Driven campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    pauseWithHttpInfo: (campaignId: string) => Promise<any>;
    /**
     * Pause rss campaign
     * Pause an RSS-Driven campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    pause: (campaignId: string) => Promise<any>;
    /**
     * Replicate campaign
     * Replicate a campaign in saved or send status.
     * @param {String} campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Campaign3} and HTTP response
     */
    replicateWithHttpInfo: (campaignId: string) => Promise<any>;
    /**
     * Replicate campaign
     * Replicate a campaign in saved or send status.
     * @param {String} campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign3}
     */
    replicate: (campaignId: string) => Promise<any>;
    /**
     * Resume rss campaign
     * Resume an RSS-Driven campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    resumeWithHttpInfo: (campaignId: string) => Promise<any>;
    /**
     * Resume rss campaign
     * Resume an RSS-Driven campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    resume: (campaignId: string) => Promise<any>;
    /**
     * Schedule campaign
     * Schedule a campaign for delivery. If you're using Multivariate Campaigns to test send times or sending RSS Campaigns, use the send action instead.
     * @param {String} campaignId The unique id for the campaign.
     * @param {model/Body1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    scheduleWithHttpInfo: (campaignId: string, body: any) => Promise<any>;
    /**
     * Schedule campaign
     * Schedule a campaign for delivery. If you're using Multivariate Campaigns to test send times or sending RSS Campaigns, use the send action instead.
     * @param {String} campaignId The unique id for the campaign.
     * @param {model/Body1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    schedule: (campaignId: string, body: any) => Promise<any>;
    /**
     * Send campaign
     * Send a Mailchimp campaign. For RSS Campaigns, the campaign will send according to its schedule. All other campaigns will send immediately.
     * @param {String} campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    sendWithHttpInfo: (campaignId: string) => Promise<any>;
    /**
     * Send campaign
     * Send a Mailchimp campaign. For RSS Campaigns, the campaign will send according to its schedule. All other campaigns will send immediately.
     * @param {String} campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    send: (campaignId: string) => Promise<any>;
    /**
     * Send test email
     * Send a test email.
     * @param {String} campaignId The unique id for the campaign.
     * @param {model/Body2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    sendTestEmailWithHttpInfo: (campaignId: string, body: any) => Promise<any>;
    /**
     * Send test email
     * Send a test email.
     * @param {String} campaignId The unique id for the campaign.
     * @param {model/Body2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    sendTestEmail: (campaignId: string, body: any) => Promise<any>;
    /**
     * Unschedule campaign
     * Unschedule a scheduled campaign that hasn't started sending.
     * @param {String} campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    unscheduleWithHttpInfo: (campaignId: string) => Promise<any>;
    /**
     * Unschedule campaign
     * Unschedule a scheduled campaign that hasn't started sending.
     * @param {String} campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    unschedule: (campaignId: string) => Promise<any>;
    /**
     * Add campaign feedback
     * Add feedback on a specific campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {model/CampaignFeedback1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CampaignFeedback2} and HTTP response
     */
    addFeedbackWithHttpInfo: (campaignId: string, body: any) => Promise<any>;
    /**
     * Add campaign feedback
     * Add feedback on a specific campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {model/CampaignFeedback1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CampaignFeedback2}
     */
    addFeedback: (campaignId: string, body: any) => Promise<any>;
    /**
     * Set campaign content
     * Set the content for a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {model/CampaignContent1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CampaignContent} and HTTP response
     */
    setContentWithHttpInfo: (campaignId: string, body: any) => Promise<any>;
    /**
     * Set campaign content
     * Set the content for a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {model/CampaignContent1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CampaignContent}
     */
    setContent: (campaignId: string, body: any) => Promise<any>;
}
