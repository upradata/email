/**
 * CampaignFolders service.
 * @module api/CampaignFoldersApi
 */
/**
 * Constructs a new CampaignFoldersApi.
 * @alias module:api/CampaignFoldersApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class CampaignFoldersApi {
    /**
     * CampaignFolders service.
     * @module api/CampaignFoldersApi
     */
    /**
     * Constructs a new CampaignFoldersApi.
     * @alias module:api/CampaignFoldersApi
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
     * Delete campaign folder
     * Delete a specific campaign folder, and mark all the campaigns in the folder as 'unfiled'.
     * @param {String} folderId The unique id for the campaign folder.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeWithHttpInfo: (folderId: string) => Promise<any>;
    /**
     * Delete campaign folder
     * Delete a specific campaign folder, and mark all the campaigns in the folder as 'unfiled'.
     * @param {String} folderId The unique id for the campaign folder.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    remove: (folderId: string) => Promise<any>;
    /**
     * List campaign folders
     * Get all folders used to organize campaigns.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CampaignFolders} and HTTP response
     */
    listWithHttpInfo: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List campaign folders
     * Get all folders used to organize campaigns.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CampaignFolders}
     */
    list: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get campaign folder
     * Get information about a specific folder used to organize campaigns.
     * @param {String} folderId The unique id for the campaign folder.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CampaignFolder} and HTTP response
     */
    getWithHttpInfo: (folderId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get campaign folder
     * Get information about a specific folder used to organize campaigns.
     * @param {String} folderId The unique id for the campaign folder.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CampaignFolder}
     */
    get: (folderId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Update campaign folder
     * Update a specific folder used to organize campaigns.
     * @param {String} folderId The unique id for the campaign folder.
     * @param {model/CampaignFolder2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CampaignFolder} and HTTP response
     */
    updateWithHttpInfo: (folderId: string, body: any) => Promise<any>;
    /**
     * Update campaign folder
     * Update a specific folder used to organize campaigns.
     * @param {String} folderId The unique id for the campaign folder.
     * @param {model/CampaignFolder2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CampaignFolder}
     */
    update: (folderId: string, body: any) => Promise<any>;
    /**
     * Add campaign folder
     * Create a new campaign folder.
     * @param {model/CampaignFolder1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CampaignFolder} and HTTP response
     */
    createWithHttpInfo: (body: any) => Promise<any>;
    /**
     * Add campaign folder
     * Create a new campaign folder.
     * @param {model/CampaignFolder1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CampaignFolder}
     */
    create: (body: any) => Promise<any>;
}
import ApiClient from "../ApiClient";
