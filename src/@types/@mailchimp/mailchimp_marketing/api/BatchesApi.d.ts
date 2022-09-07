/**
 * Batches service.
 * @module api/BatchesApi
 */
/**
 * Constructs a new BatchesApi.
 * @alias module:api/BatchesApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class BatchesApi {
    /**
     * Batches service.
     * @module api/BatchesApi
     */
    /**
     * Constructs a new BatchesApi.
     * @alias module:api/BatchesApi
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
     * Delete batch request
     * Stops a batch request from running. Since only one batch request is run at a time, this can be used to cancel a long running request. The results of any completed operations will not be available after this call.
     * @param {String} batchId The unique id for the batch operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteRequestWithHttpInfo: (batchId: string) => Promise<any>;
    /**
     * Delete batch request
     * Stops a batch request from running. Since only one batch request is run at a time, this can be used to cancel a long running request. The results of any completed operations will not be available after this call.
     * @param {String} batchId The unique id for the batch operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteRequest: (batchId: string) => Promise<any>;
    /**
     * List batch requests
     * Get a summary of batch requests that have been made.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchOperations} and HTTP response
     */
    listWithHttpInfo: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List batch requests
     * Get a summary of batch requests that have been made.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchOperations}
     */
    list: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get batch operation status
     * Get the status of a batch request.
     * @param {String} batchId The unique id for the batch operation.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Batch} and HTTP response
     */
    statusWithHttpInfo: (batchId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get batch operation status
     * Get the status of a batch request.
     * @param {String} batchId The unique id for the batch operation.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Batch}
     */
    status: (batchId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Start batch operation
     * Begin processing a batch operations request.
     * @param {model/Body} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Batch} and HTTP response
     */
    startWithHttpInfo: (body: any) => Promise<any>;
    /**
     * Start batch operation
     * Begin processing a batch operations request.
     * @param {model/Body} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Batch}
     */
    start: (body: any) => Promise<any>;
}
import ApiClient from "../ApiClient";
