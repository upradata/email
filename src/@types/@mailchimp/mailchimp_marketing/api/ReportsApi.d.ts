/**
 * Reports service.
 * @module api/ReportsApi
 */
/**
 * Constructs a new ReportsApi.
 * @alias module:api/ReportsApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class ReportsApi {
    /**
     * Reports service.
     * @module api/ReportsApi
     */
    /**
     * Constructs a new ReportsApi.
     * @alias module:api/ReportsApi
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
     * List campaign reports
     * Get campaign reports.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {model/String} opts.type The campaign type.
     * @param {Date} opts.beforeSendTime Restrict the response to campaigns sent before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Date} opts.sinceSendTime Restrict the response to campaigns sent after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CampaignReports1} and HTTP response
     */
    getAllCampaignReportsWithHttpInfo: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List campaign reports
     * Get campaign reports.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {model/String} opts.type The campaign type.
     * @param {Date} opts.beforeSendTime Restrict the response to campaigns sent before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Date} opts.sinceSendTime Restrict the response to campaigns sent after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CampaignReports1}
     */
    getAllCampaignReports: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get campaign report
     * Get report details for a specific sent campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CampaignReport} and HTTP response
     */
    getCampaignReportWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get campaign report
     * Get report details for a specific sent campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CampaignReport}
     */
    getCampaignReport: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List abuse reports
     * Get a list of abuse complaints for a specific campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AbuseComplaints1} and HTTP response
     */
    getCampaignAbuseReportsWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List abuse reports
     * Get a list of abuse complaints for a specific campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AbuseComplaints1}
     */
    getCampaignAbuseReports: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get abuse report
     * Get information about a specific abuse report for a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} reportId The id for the abuse report.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AbuseComplaint1} and HTTP response
     */
    getCampaignAbuseReportWithHttpInfo: (campaignId: string, reportId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get abuse report
     * Get information about a specific abuse report for a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} reportId The id for the abuse report.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AbuseComplaint1}
     */
    getCampaignAbuseReport: (campaignId: string, reportId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List campaign feedback
     * Get feedback based on a campaign's statistics. Advice feedback is based on campaign stats like opens, clicks, unsubscribes, bounces, and more.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CampaignAdviceReport} and HTTP response
     */
    getCampaignAdviceWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List campaign feedback
     * Get feedback based on a campaign's statistics. Advice feedback is based on campaign stats like opens, clicks, unsubscribes, bounces, and more.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CampaignAdviceReport}
     */
    getCampaignAdvice: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List campaign details
     * Get information about clicks on specific links in your Mailchimp campaigns.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClickDetailReport} and HTTP response
     */
    getCampaignClickDetailsWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List campaign details
     * Get information about clicks on specific links in your Mailchimp campaigns.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClickDetailReport}
     */
    getCampaignClickDetails: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get campaign link details
     * Get click details for a specific link in a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} linkId The id for the link.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClickDetailReport} and HTTP response
     */
    getCampaignClickDetailsForLinkWithHttpInfo: (campaignId: string, linkId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get campaign link details
     * Get click details for a specific link in a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} linkId The id for the link.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClickDetailReport}
     */
    getCampaignClickDetailsForLink: (campaignId: string, linkId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List clicked link subscribers
     * Get information about list members who clicked on a specific link in a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} linkId The id for the link.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClickDetailMembers} and HTTP response
     */
    getSubscribersInfoWithHttpInfo: (campaignId: string, linkId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List clicked link subscribers
     * Get information about list members who clicked on a specific link in a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} linkId The id for the link.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClickDetailMembers}
     */
    getSubscribersInfo: (campaignId: string, linkId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get clicked link subscriber
     * Get information about a specific subscriber who clicked a link in a specific campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} linkId The id for the link.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClickDetailMember} and HTTP response
     */
    getSubscriberInfoWithHttpInfo: (campaignId: string, linkId: string, subscriberHash: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get clicked link subscriber
     * Get information about a specific subscriber who clicked a link in a specific campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} linkId The id for the link.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClickDetailMember}
     */
    getSubscriberInfo: (campaignId: string, linkId: string, subscriberHash: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List domain performance stats
     * Get statistics for the top-performing email domains in a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DomainPerformance} and HTTP response
     */
    getDomainPerformanceForCampaignWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List domain performance stats
     * Get statistics for the top-performing email domains in a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DomainPerformance}
     */
    getDomainPerformanceForCampaign: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List campaign product activity
     * Get breakdown of product activity for a campaign
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {model/String} opts.sortField Returns files sorted by the specified field.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2007} and HTTP response
     */
    getEcommerceProductActivityForCampaignWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List campaign product activity
     * Get breakdown of product activity for a campaign
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {model/String} opts.sortField Returns files sorted by the specified field.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2007}
     */
    getEcommerceProductActivityForCampaign: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List EepURL activity
     * Get a summary of social activity for the campaign, tracked by EepURL.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EepurlActivity} and HTTP response
     */
    getEepurlActivityForCampaignWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List EepURL activity
     * Get a summary of social activity for the campaign, tracked by EepURL.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EepurlActivity}
     */
    getEepurlActivityForCampaign: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List email activity
     * Get a list of member's subscriber activity in a specific campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.since Restrict results to email activity events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EmailActivity} and HTTP response
     */
    getEmailActivityForCampaignWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
        since: string;
    }) => Promise<any>;
    /**
     * List email activity
     * Get a list of member's subscriber activity in a specific campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.since Restrict results to email activity events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmailActivity}
     */
    getEmailActivityForCampaign: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
        since: string;
    }) => Promise<any>;
    /**
     * Get subscriber email activity
     * Get a specific list member's activity in a campaign including opens, clicks, and bounces.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {String} opts.since Restrict results to email activity events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EmailActivity} and HTTP response
     */
    getEmailActivityForSubscriberWithHttpInfo: (campaignId: string, subscriberHash: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        since: string;
    }) => Promise<any>;
    /**
     * Get subscriber email activity
     * Get a specific list member's activity in a campaign including opens, clicks, and bounces.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {String} opts.since Restrict results to email activity events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmailActivity}
     */
    getEmailActivityForSubscriber: (campaignId: string, subscriberHash: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        since: string;
    }) => Promise<any>;
    /**
     * List top open activities
     * Get top open locations for a specific campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OpenLocations} and HTTP response
     */
    getLocationsForCampaignWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List top open activities
     * Get top open locations for a specific campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OpenLocations}
     */
    getLocationsForCampaign: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List campaign open details
     * Get detailed information about any campaign emails that were opened by a list member.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.since Restrict results to campaign open events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OpenDetailReport} and HTTP response
     */
    getCampaignOpenDetailsWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
        since: string;
    }) => Promise<any>;
    /**
     * List campaign open details
     * Get detailed information about any campaign emails that were opened by a list member.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.since Restrict results to campaign open events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OpenDetailReport}
     */
    getCampaignOpenDetails: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
        since: string;
    }) => Promise<any>;
    /**
     * Get opened campaign subscriber
     * Get information about a specific subscriber who opened a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OpenActivity} and HTTP response
     */
    getSubscriberInfoForOpenedCampaignWithHttpInfo: (campaignId: string, subscriberHash: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get opened campaign subscriber
     * Get information about a specific subscriber who opened a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OpenActivity}
     */
    getSubscriberInfoForOpenedCampaign: (campaignId: string, subscriberHash: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List campaign recipients
     * Get information about campaign recipients.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SentTo} and HTTP response
     */
    getCampaignRecipientsWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List campaign recipients
     * Get information about campaign recipients.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SentTo}
     */
    getCampaignRecipients: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get campaign recipient info
     * Get information about a specific campaign recipient.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SentTo} and HTTP response
     */
    getCampaignRecipientWithHttpInfo: (campaignId: string, subscriberHash: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get campaign recipient info
     * Get information about a specific campaign recipient.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SentTo}
     */
    getCampaignRecipient: (campaignId: string, subscriberHash: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List child campaign reports
     * Get a list of reports with child campaigns for a specific parent campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CampaignSubReports} and HTTP response
     */
    getSubReportsForCampaignWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List child campaign reports
     * Get a list of reports with child campaigns for a specific parent campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CampaignSubReports}
     */
    getSubReportsForCampaign: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List unsubscribed members
     * Get information about members who have unsubscribed from a specific campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Unsubscribes} and HTTP response
     */
    getUnsubscribedListForCampaignWithHttpInfo: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List unsubscribed members
     * Get information about members who have unsubscribed from a specific campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Unsubscribes}
     */
    getUnsubscribedListForCampaign: (campaignId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get unsubscribed member
     * Get information about a specific list member who unsubscribed from a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Unsubscribes} and HTTP response
     */
    getUnsubscribedListMemberWithHttpInfo: (campaignId: string, subscriberHash: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get unsubscribed member
     * Get information about a specific list member who unsubscribed from a campaign.
     * @param {String} campaignId The unique id for the campaign.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Unsubscribes}
     */
    getUnsubscribedListMember: (campaignId: string, subscriberHash: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
}
import ApiClient from "../ApiClient";
