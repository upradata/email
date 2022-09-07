/**
 * Templates service.
 * @module api/TemplatesApi
 */
/**
 * Constructs a new TemplatesApi.
 * @alias module:api/TemplatesApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class TemplatesApi {
    /**
     * Templates service.
     * @module api/TemplatesApi
     */
    /**
     * Constructs a new TemplatesApi.
     * @alias module:api/TemplatesApi
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
     * Delete template
     * Delete a specific template.
     * @param {String} templateId The unique id for the template.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTemplateWithHttpInfo: (templateId: string) => Promise<any>;
    /**
     * Delete template
     * Delete a specific template.
     * @param {String} templateId The unique id for the template.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteTemplate: (templateId: string) => Promise<any>;
    /**
     * List templates
     * Get a list of an account's available templates.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.createdBy The Mailchimp account user who created the template.
     * @param {String} opts.sinceDateCreated Restrict the response to templates created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.beforeDateCreated Restrict the response to templates created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.type Limit results based on template type.
     * @param {String} opts.category Limit results based on category.
     * @param {String} opts.folderId The unique folder id.
     * @param {model/String} opts.sortField Returns user templates sorted by the specified field.
     * @param {model/String} opts.sortDir Determines the order direction for sorted results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Templates} and HTTP response
     */
    listWithHttpInfo: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
        createdBy: string;
        sinceDateCreated: string;
        beforeDateCreated: string;
        type: string;
        category: string;
        folderId: string;
    }) => Promise<any>;
    /**
     * List templates
     * Get a list of an account's available templates.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.createdBy The Mailchimp account user who created the template.
     * @param {String} opts.sinceDateCreated Restrict the response to templates created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.beforeDateCreated Restrict the response to templates created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.type Limit results based on template type.
     * @param {String} opts.category Limit results based on category.
     * @param {String} opts.folderId The unique folder id.
     * @param {model/String} opts.sortField Returns user templates sorted by the specified field.
     * @param {model/String} opts.sortDir Determines the order direction for sorted results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Templates}
     */
    list: (opts?: Partial<{
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
        createdBy: string;
        sinceDateCreated: string;
        beforeDateCreated: string;
        type: string;
        category: string;
        folderId: string;
    }>) => Promise<{
        templates: {
            id: number;
            name: string;
            // etc
        }[];
        total_items: number;
    }>;
    /**
     * Get template info
     * Get information about a specific template.
     * @param {String} templateId The unique id for the template.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateInstance} and HTTP response
     */
    getTemplateWithHttpInfo: (templateId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get template info
     * Get information about a specific template.
     * @param {String} templateId The unique id for the template.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateInstance}
     */
    getTemplate: (templateId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * View default content
     * Get the sections that you can edit in a template, including each section's default content.
     * @param {String} templateId The unique id for the template.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateDefaultContent} and HTTP response
     */
    getDefaultContentForTemplateWithHttpInfo: (templateId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * View default content
     * Get the sections that you can edit in a template, including each section's default content.
     * @param {String} templateId The unique id for the template.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateDefaultContent}
     */
    getDefaultContentForTemplate: (templateId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Update template
     * Update the name, HTML, or `folder_id` of an existing template.
     * @param {String} templateId The unique id for the template.
     * @param {model/TemplateInstance2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateInstance} and HTTP response
     */
    updateTemplateWithHttpInfo: (templateId: string, body: any) => Promise<any>;
    /**
     * Update template
     * Update the name, HTML, or `folder_id` of an existing template.
     * @param {String} templateId The unique id for the template.
     * @param {model/TemplateInstance2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateInstance}
     */
    updateTemplate: (templateId: string, body: any) => Promise<any>;
    /**
     * Add template
     * Create a new template for the account. Only Classic templates are supported.
     * @param {model/TemplateInstance1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateInstance} and HTTP response
     */
    createWithHttpInfo: (body: any) => Promise<any>;
    /**
     * Add template
     * Create a new template for the account. Only Classic templates are supported.
     * @param {model/TemplateInstance1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateInstance}
     */
    create: (body: CreateTemplateBody) => Promise<{
        id: number;
        name: string;
        // etc
    }>;
}

export interface CreateTemplateBody extends Body {
    name: string;
    html: string;
    folder_id?: string;
}



import ApiClient from "../ApiClient";
import { SuccessResponse, ErrorResponse, Body } from '../types';
