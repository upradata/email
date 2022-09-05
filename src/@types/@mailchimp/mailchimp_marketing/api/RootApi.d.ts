/**
 * Root service.
 * @module api/RootApi
 */
/**
 * Constructs a new RootApi.
 * @alias module:api/RootApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class RootApi {
    /**
     * Root service.
     * @module api/RootApi
     */
    /**
     * Constructs a new RootApi.
     * @alias module:api/RootApi
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
     * List api root resources
     * Get links to all other resources available in the API.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/APIRoot} and HTTP response
     */
    getRootWithHttpInfo: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List api root resources
     * Get links to all other resources available in the API.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/APIRoot}
     */
    getRoot: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
}
import ApiClient from "../ApiClient";
