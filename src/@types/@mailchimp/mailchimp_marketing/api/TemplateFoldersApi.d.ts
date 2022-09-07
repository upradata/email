/**
 * TemplateFolders service.
 * @module api/TemplateFoldersApi
 */
/**
 * Constructs a new TemplateFoldersApi.
 * @alias module:api/TemplateFoldersApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class TemplateFoldersApi {
    /**
     * TemplateFolders service.
     * @module api/TemplateFoldersApi
     */
    /**
     * Constructs a new TemplateFoldersApi.
     * @alias module:api/TemplateFoldersApi
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
     * Delete template folder
     * Delete a specific template folder, and mark all the templates in the folder as 'unfiled'.
     * @param {String} folderId The unique id for the template folder.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeWithHttpInfo: (folderId: string) => Promise<any>;
    /**
     * Delete template folder
     * Delete a specific template folder, and mark all the templates in the folder as 'unfiled'.
     * @param {String} folderId The unique id for the template folder.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    remove: (folderId: string) => Promise<any>;
    /**
     * List template folders
     * Get all folders used to organize templates.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateFolders} and HTTP response
     */
    listWithHttpInfo: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List template folders
     * Get all folders used to organize templates.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateFolders}
     */
    list: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get template folder
     * Get information about a specific folder used to organize templates.
     * @param {String} folderId The unique id for the template folder.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateFolder} and HTTP response
     */
    getWithHttpInfo: (folderId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get template folder
     * Get information about a specific folder used to organize templates.
     * @param {String} folderId The unique id for the template folder.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateFolder}
     */
    get: (folderId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Update template folder
     * Update a specific folder used to organize templates.
     * @param {String} folderId The unique id for the template folder.
     * @param {model/TemplateFolder2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateFolder} and HTTP response
     */
    updateWithHttpInfo: (folderId: string, body: any) => Promise<any>;
    /**
     * Update template folder
     * Update a specific folder used to organize templates.
     * @param {String} folderId The unique id for the template folder.
     * @param {model/TemplateFolder2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateFolder}
     */
    update: (folderId: string, body: any) => Promise<any>;
    /**
     * Add template folder
     * Create a new template folder.
     * @param {model/TemplateFolder1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateFolder} and HTTP response
     */
    createWithHttpInfo: (body: any) => Promise<any>;
    /**
     * Add template folder
     * Create a new template folder.
     * @param {model/TemplateFolder1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateFolder}
     */
    create: (body: CreateTemplateFolderBody) => Promise<SuccessResponse | ErrorResponse>;
}

export interface CreateTemplateFolderBody extends Body {
    name: string;
}


import ApiClient from "../ApiClient";
import { SuccessResponse, ErrorResponse, Body } from '../types';
