/**
 * ConnectedSites service.
 * @module api/ConnectedSitesApi
 */
/**
 * Constructs a new ConnectedSitesApi.
 * @alias module:api/ConnectedSitesApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class ConnectedSitesApi {
    /**
     * ConnectedSites service.
     * @module api/ConnectedSitesApi
     */
    /**
     * Constructs a new ConnectedSitesApi.
     * @alias module:api/ConnectedSitesApi
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
     * Delete connected site
     * Remove a connected site from your Mailchimp account.
     * @param {String} connectedSiteId The unique identifier for the site.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeWithHttpInfo: (connectedSiteId: string) => Promise<any>;
    /**
     * Delete connected site
     * Remove a connected site from your Mailchimp account.
     * @param {String} connectedSiteId The unique identifier for the site.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    remove: (connectedSiteId: string) => Promise<any>;
    /**
     * List connected sites
     * Get all connected sites in an account.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConnectedSites} and HTTP response
     */
    listWithHttpInfo: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List connected sites
     * Get all connected sites in an account.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConnectedSites}
     */
    list: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get connected site
     * Get information about a specific connected site.
     * @param {String} connectedSiteId The unique identifier for the site.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConnectedSite} and HTTP response
     */
    getWithHttpInfo: (connectedSiteId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get connected site
     * Get information about a specific connected site.
     * @param {String} connectedSiteId The unique identifier for the site.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConnectedSite}
     */
    get: (connectedSiteId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Add connected site
     * Create a new Mailchimp connected site.
     * @param {model/ConnectedSite1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConnectedSite} and HTTP response
     */
    createWithHttpInfo: (body: any) => Promise<any>;
    /**
     * Add connected site
     * Create a new Mailchimp connected site.
     * @param {model/ConnectedSite1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConnectedSite}
     */
    create: (body: any) => Promise<any>;
    /**
     * Verify connected site script
     * Verify that the connected sites script has been installed, either via the script URL or fragment.
     * @param {String} connectedSiteId The unique identifier for the site.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    verifyScriptInstallationWithHttpInfo: (connectedSiteId: string) => Promise<any>;
    /**
     * Verify connected site script
     * Verify that the connected sites script has been installed, either via the script URL or fragment.
     * @param {String} connectedSiteId The unique identifier for the site.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    verifyScriptInstallation: (connectedSiteId: string) => Promise<any>;
}
import ApiClient from "../ApiClient";
