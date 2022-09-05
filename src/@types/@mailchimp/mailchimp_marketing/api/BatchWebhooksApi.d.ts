/**
 * BatchWebhooks service.
 * @module api/BatchWebhooksApi
 */
/**
 * Constructs a new BatchWebhooksApi.
 * @alias module:api/BatchWebhooksApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class BatchWebhooksApi {
    /**
     * BatchWebhooks service.
     * @module api/BatchWebhooksApi
     */
    /**
     * Constructs a new BatchWebhooksApi.
     * @alias module:api/BatchWebhooksApi
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
     * Delete batch webhook
     * Remove a batch webhook. Webhooks will no longer be sent to the given URL.
     * @param {String} batchWebhookId The unique id for the batch webhook.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeWithHttpInfo: (batchWebhookId: string) => Promise<any>;
    /**
     * Delete batch webhook
     * Remove a batch webhook. Webhooks will no longer be sent to the given URL.
     * @param {String} batchWebhookId The unique id for the batch webhook.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    remove: (batchWebhookId: string) => Promise<any>;
    /**
     * Get batch webhook info
     * Get information about a specific batch webhook.
     * @param {String} batchWebhookId The unique id for the batch webhook.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchWebhook} and HTTP response
     */
    getWithHttpInfo: (batchWebhookId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get batch webhook info
     * Get information about a specific batch webhook.
     * @param {String} batchWebhookId The unique id for the batch webhook.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchWebhook}
     */
    get: (batchWebhookId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List batch webhooks
     * Get all webhooks that have been configured for batches.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchWebhooks} and HTTP response
     */
    listWithHttpInfo: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List batch webhooks
     * Get all webhooks that have been configured for batches.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchWebhooks}
     */
    list: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Update batch webhook
     * Update a webhook that will fire whenever any batch request completes processing.
     * @param {String} batchWebhookId The unique id for the batch webhook.
     * @param {model/BatchWebhook2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchWebhook} and HTTP response
     */
    updateWithHttpInfo: (batchWebhookId: string, body: any) => Promise<any>;
    /**
     * Update batch webhook
     * Update a webhook that will fire whenever any batch request completes processing.
     * @param {String} batchWebhookId The unique id for the batch webhook.
     * @param {model/BatchWebhook2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchWebhook}
     */
    update: (batchWebhookId: string, body: any) => Promise<any>;
    /**
     * Add batch webhook
     * Configure a webhook that will fire whenever any batch request completes processing.  You may only have a maximum of 20 batch webhooks.
     * @param {model/BatchWebhook1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchWebhook} and HTTP response
     */
    createWithHttpInfo: (body: any) => Promise<any>;
    /**
     * Add batch webhook
     * Configure a webhook that will fire whenever any batch request completes processing.  You may only have a maximum of 20 batch webhooks.
     * @param {model/BatchWebhook1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchWebhook}
     */
    create: (body: any) => Promise<any>;
}
import ApiClient from "../ApiClient";
