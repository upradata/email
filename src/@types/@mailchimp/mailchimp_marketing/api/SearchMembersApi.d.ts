/**
 * SearchMembers service.
 * @module api/SearchMembersApi
 */
/**
 * Constructs a new SearchMembersApi.
 * @alias module:api/SearchMembersApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class SearchMembersApi {
    /**
     * SearchMembers service.
     * @module api/SearchMembersApi
     */
    /**
     * Constructs a new SearchMembersApi.
     * @alias module:api/SearchMembersApi
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
     * Search members
     * Search for list members. This search can be restricted to a specific list, or can be used to search across all lists in an account.
     * @param {String} query The search query used to filter results. Query should be a valid email, or a string representing a contact's first or last name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {String} opts.listId The unique id for the list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Members} and HTTP response
     */
    searchWithHttpInfo: (query: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        listId: string;
    }) => Promise<any>;
    /**
     * Search members
     * Search for list members. This search can be restricted to a specific list, or can be used to search across all lists in an account.
     * @param {String} query The search query used to filter results. Query should be a valid email, or a string representing a contact's first or last name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {String} opts.listId The unique id for the list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Members}
     */
    search: (query: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        listId: string;
    }) => Promise<any>;
}
import ApiClient from "../ApiClient";
