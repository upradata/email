/**
 * Ping service.
 * @module api/PingApi
 */
/**
 * Constructs a new PingApi.
 * @alias module:api/PingApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class PingApi {
    /**
     * Ping service.
     * @module api/PingApi
     */
    /**
     * Constructs a new PingApi.
     * @alias module:api/PingApi
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
     * Ping
     * A health check for the API that won't return any account-specific information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/APIHealthStatus} and HTTP response
     */
    getWithHttpInfo: () => Promise<any>;
    /**
     * Ping
     * A health check for the API that won't return any account-specific information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/APIHealthStatus}
     */
    get: () => Promise<any>;
}
import ApiClient from "../ApiClient";
