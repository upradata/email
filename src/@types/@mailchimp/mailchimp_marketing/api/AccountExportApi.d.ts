export default AccountExportApi;
/**
 * AccountExport service.
 * @module api/AccountExportApi
 */
/**
 * Constructs a new AccountExportApi.
 * @alias module:api/AccountExportApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// declare function F(apiClient: ApiClient): this;
declare class AccountExportApi {
    /**
     * AccountExport service.
     * @module api/AccountExportApi
     */
    /**
     * Constructs a new AccountExportApi.
     * @alias module:api/AccountExportApi
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
     * Get account export info
     * Get information about a specific account export.
     * @param {String} exportId The unique id for the account export.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001Exports} and HTTP response
     */
    getAccountExportsWithHttpInfo: (exportId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get account export info
     * Get information about a specific account export.
     * @param {String} exportId The unique id for the account export.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001Exports}
     */
    getAccountExports: (exportId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
}
import ApiClient from "../ApiClient";
