/**
 * SearchCampaigns service.
 * @module api/SearchCampaignsApi
 */
/**
 * Constructs a new SearchCampaignsApi.
 * @alias module:api/SearchCampaignsApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class SearchCampaignsApi {
    /**
     * SearchCampaigns service.
     * @module api/SearchCampaignsApi
     */
    /**
     * Constructs a new SearchCampaignsApi.
     * @alias module:api/SearchCampaignsApi
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
     * Search campaigns
     * Search all campaigns for the specified query terms.
     * @param {String} query The search query used to filter results.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Campaigns} and HTTP response
     */
    searchWithHttpInfo: (query: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Search campaigns
     * Search all campaigns for the specified query terms.
     * @param {String} query The search query used to filter results.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaigns}
     */
    search: (query: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
}
import ApiClient from "../ApiClient";
