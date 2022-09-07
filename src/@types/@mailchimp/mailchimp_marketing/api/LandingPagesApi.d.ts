/**
 * LandingPages service.
 * @module api/LandingPagesApi
 */
/**
 * Constructs a new LandingPagesApi.
 * @alias module:api/LandingPagesApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class LandingPagesApi {
    /**
     * LandingPages service.
     * @module api/LandingPagesApi
     */
    /**
     * Constructs a new LandingPagesApi.
     * @alias module:api/LandingPagesApi
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
     * Delete landing page
     * Delete a landing page.
     * @param {String} pageId The unique id for the page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deletePageWithHttpInfo: (pageId: string) => Promise<any>;
    /**
     * Delete landing page
     * Delete a landing page.
     * @param {String} pageId The unique id for the page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deletePage: (pageId: string) => Promise<any>;
    /**
     * List landing pages
     * Get all landing pages.
     * @param {Object} opts Optional parameters
     * @param {model/String} opts.sortDir Determines the order direction for sorted results.
     * @param {model/String} opts.sortField Returns files sorted by the specified field.
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2006} and HTTP response
     */
    getAllWithHttpInfo: (opts: any) => Promise<any>;
    /**
     * List landing pages
     * Get all landing pages.
     * @param {Object} opts Optional parameters
     * @param {model/String} opts.sortDir Determines the order direction for sorted results.
     * @param {model/String} opts.sortField Returns files sorted by the specified field.
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2006}
     */
    getAll: (opts: any) => Promise<any>;
    /**
     * Get landing page info
     * Get information about a specific page.
     * @param {String} pageId The unique id for the page.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LandingPage} and HTTP response
     */
    getPageWithHttpInfo: (pageId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get landing page info
     * Get information about a specific page.
     * @param {String} pageId The unique id for the page.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LandingPage}
     */
    getPage: (pageId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get landing page content
     * Get the the HTML for your landing page.
     * @param {String} pageId The unique id for the page.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LandingPageContent} and HTTP response
     */
    getPageContentWithHttpInfo: (pageId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get landing page content
     * Get the the HTML for your landing page.
     * @param {String} pageId The unique id for the page.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LandingPageContent}
     */
    getPageContent: (pageId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Update landing page
     * Update a landing page.
     * @param {String} pageId The unique id for the page.
     * @param {model/LandingPage2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LandingPage} and HTTP response
     */
    updatePageWithHttpInfo: (pageId: string, body: any) => Promise<any>;
    /**
     * Update landing page
     * Update a landing page.
     * @param {String} pageId The unique id for the page.
     * @param {model/LandingPage2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LandingPage}
     */
    updatePage: (pageId: string, body: any) => Promise<any>;
    /**
     * Add landing page
     * Create a new Mailchimp landing page.
     * @param {model/LandingPage1} body
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.useDefaultList Will create the Landing Page using the account's Default List instead of requiring a list_id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LandingPage} and HTTP response
     */
    createWithHttpInfo: (body: any, opts: {
        useDefaultList: boolean;
    }) => Promise<any>;
    /**
     * Add landing page
     * Create a new Mailchimp landing page.
     * @param {model/LandingPage1} body
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.useDefaultList Will create the Landing Page using the account's Default List instead of requiring a list_id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LandingPage}
     */
    create: (body: any, opts: {
        useDefaultList: boolean;
    }) => Promise<any>;
    /**
     * Publish landing page
     * Publish a landing page that is in draft, unpublished, or has been previously published and edited.
     * @param {String} pageId The unique id for the page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    publishPageWithHttpInfo: (pageId: string) => Promise<any>;
    /**
     * Publish landing page
     * Publish a landing page that is in draft, unpublished, or has been previously published and edited.
     * @param {String} pageId The unique id for the page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    publishPage: (pageId: string) => Promise<any>;
    /**
     * Unpublish landing page
     * Unpublish a landing page that is in draft or has been published.
     * @param {String} pageId The unique id for the page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    unpublishPageWithHttpInfo: (pageId: string) => Promise<any>;
    /**
     * Unpublish landing page
     * Unpublish a landing page that is in draft or has been published.
     * @param {String} pageId The unique id for the page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    unpublishPage: (pageId: string) => Promise<any>;
}
import ApiClient from "../ApiClient";
