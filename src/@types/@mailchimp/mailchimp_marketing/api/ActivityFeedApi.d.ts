/**
 * ActivityFeed service.
 * @module api/ActivityFeedApi
 */
/**
 * Constructs a new ActivityFeedApi.
 * @alias module:api/ActivityFeedApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class ActivityFeedApi {
    /**
     * ActivityFeed service.
     * @module api/ActivityFeedApi
     */
    /**
     * Constructs a new ActivityFeedApi.
     * @alias module:api/ActivityFeedApi
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
     * Get latest chimp chatter
     * Return the Chimp Chatter for this account ordered by most recent.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    getChimpChatterWithHttpInfo: (opts: {
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get latest chimp chatter
     * Return the Chimp Chatter for this account ordered by most recent.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    getChimpChatter: (opts: {
        count: number;
        offset: number;
    }) => Promise<any>;
}
import ApiClient from "../ApiClient";
