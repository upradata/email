/**
 * FileManager service.
 * @module api/FileManagerApi
 */
/**
 * Constructs a new FileManagerApi.
 * @alias module:api/FileManagerApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class FileManagerApi {
    /**
     * FileManager service.
     * @module api/FileManagerApi
     */
    /**
     * Constructs a new FileManagerApi.
     * @alias module:api/FileManagerApi
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
     * Delete file
     * Remove a specific file from the File Manager.
     * @param {String} fileId The unique id for the File Manager file.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteFileWithHttpInfo: (fileId: string) => Promise<any>;
    /**
     * Delete file
     * Remove a specific file from the File Manager.
     * @param {String} fileId The unique id for the File Manager file.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteFile: (fileId: string) => Promise<any>;
    /**
     * Delete folder
     * Delete a specific folder in the File Manager.
     * @param {String} folderId The unique id for the File Manager folder.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteFolderWithHttpInfo: (folderId: string) => Promise<any>;
    /**
     * Delete folder
     * Delete a specific folder in the File Manager.
     * @param {String} folderId The unique id for the File Manager folder.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteFolder: (folderId: string) => Promise<any>;
    /**
     * List stored files
     * Get a list of available images and files stored in the File Manager for the account.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.type The file type for the File Manager file.
     * @param {String} opts.createdBy The Mailchimp account user who created the File Manager file.
     * @param {String} opts.beforeCreatedAt Restrict the response to files created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.sinceCreatedAt Restrict the response to files created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {model/String} opts.sortField Returns files sorted by the specified field.
     * @param {model/String} opts.sortDir Determines the order direction for sorted results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FileManager} and HTTP response
     */
    filesWithHttpInfo: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
        type: string;
        createdBy: string;
        beforeCreatedAt: string;
        sinceCreatedAt: string;
    }) => Promise<any>;
    /**
     * List stored files
     * Get a list of available images and files stored in the File Manager for the account.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.type The file type for the File Manager file.
     * @param {String} opts.createdBy The Mailchimp account user who created the File Manager file.
     * @param {String} opts.beforeCreatedAt Restrict the response to files created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.sinceCreatedAt Restrict the response to files created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {model/String} opts.sortField Returns files sorted by the specified field.
     * @param {model/String} opts.sortDir Determines the order direction for sorted results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FileManager}
     */
    files: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
        type: string;
        createdBy: string;
        beforeCreatedAt: string;
        sinceCreatedAt: string;
    }) => Promise<any>;
    /**
     * Get file
     * Get information about a specific file in the File Manager.
     * @param {String} fileId The unique id for the File Manager file.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GalleryFile} and HTTP response
     */
    getFileWithHttpInfo: (fileId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get file
     * Get information about a specific file in the File Manager.
     * @param {String} fileId The unique id for the File Manager file.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GalleryFile}
     */
    getFile: (fileId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List folders
     * Get a list of all folders in the File Manager.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.createdBy The Mailchimp account user who created the File Manager file.
     * @param {String} opts.beforeCreatedAt Restrict the response to files created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.sinceCreatedAt Restrict the response to files created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FileManagerFolders} and HTTP response
     */
    listFoldersWithHttpInfo: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
        createdBy: string;
        beforeCreatedAt: string;
        sinceCreatedAt: string;
    }) => Promise<any>;
    /**
     * List folders
     * Get a list of all folders in the File Manager.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.createdBy The Mailchimp account user who created the File Manager file.
     * @param {String} opts.beforeCreatedAt Restrict the response to files created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.sinceCreatedAt Restrict the response to files created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FileManagerFolders}
     */
    listFolders: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
        createdBy: string;
        beforeCreatedAt: string;
        sinceCreatedAt: string;
    }) => Promise<any>;
    /**
     * Get folder
     * Get information about a specific folder in the File Manager.
     * @param {String} folderId The unique id for the File Manager folder.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GalleryFolder} and HTTP response
     */
    getFolderWithHttpInfo: (folderId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get folder
     * Get information about a specific folder in the File Manager.
     * @param {String} folderId The unique id for the File Manager folder.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GalleryFolder}
     */
    getFolder: (folderId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Update file
     * Update a file in the File Manager.
     * @param {String} fileId The unique id for the File Manager file.
     * @param {model/GalleryFile2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GalleryFile} and HTTP response
     */
    updateFileWithHttpInfo: (fileId: string, body: any) => Promise<any>;
    /**
     * Update file
     * Update a file in the File Manager.
     * @param {String} fileId The unique id for the File Manager file.
     * @param {model/GalleryFile2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GalleryFile}
     */
    updateFile: (fileId: string, body: any) => Promise<any>;
    /**
     * Update folder
     * Update a specific File Manager folder.
     * @param {String} folderId The unique id for the File Manager folder.
     * @param {model/GalleryFolder2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GalleryFolder} and HTTP response
     */
    updateFolderWithHttpInfo: (folderId: string, body: any) => Promise<any>;
    /**
     * Update folder
     * Update a specific File Manager folder.
     * @param {String} folderId The unique id for the File Manager folder.
     * @param {model/GalleryFolder2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GalleryFolder}
     */
    updateFolder: (folderId: string, body: any) => Promise<any>;
    /**
     * Add file
     * Upload a new image or file to the File Manager.
     * @param {model/GalleryFile1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GalleryFile} and HTTP response
     */
    uploadWithHttpInfo: (body: any) => Promise<any>;
    /**
     * Add file
     * Upload a new image or file to the File Manager.
     * @param {model/GalleryFile1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GalleryFile}
     */
    upload: (body: any) => Promise<any>;
    /**
     * Add folder
     * Create a new folder in the File Manager.
     * @param {model/GalleryFolder1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GalleryFolder} and HTTP response
     */
    createFolderWithHttpInfo: (body: any) => Promise<any>;
    /**
     * Add folder
     * Create a new folder in the File Manager.
     * @param {model/GalleryFolder1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GalleryFolder}
     */
    createFolder: (body: any) => Promise<any>;
}
import ApiClient from "../ApiClient";
