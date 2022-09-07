/**
 * Conversations service.
 * @module api/ConversationsApi
 */
/**
 * Constructs a new ConversationsApi.
 * @alias module:api/ConversationsApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class ConversationsApi {
    /**
     * Conversations service.
     * @module api/ConversationsApi
     */
    /**
     * Constructs a new ConversationsApi.
     * @alias module:api/ConversationsApi
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
     * List conversations
     * Get a list of conversations for the account. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {model/String} opts.hasUnreadMessages Whether the conversation has any unread messages.
     * @param {String} opts.listId The unique id for the list.
     * @param {String} opts.campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TrackedConversations} and HTTP response
     */
    listWithHttpInfo: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List conversations
     * Get a list of conversations for the account. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {model/String} opts.hasUnreadMessages Whether the conversation has any unread messages.
     * @param {String} opts.listId The unique id for the list.
     * @param {String} opts.campaignId The unique id for the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TrackedConversations}
     */
    list: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get conversation
     * Get details about an individual conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
     * @param {String} conversationId The unique id for the conversation.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Conversation} and HTTP response
     */
    getWithHttpInfo: (conversationId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get conversation
     * Get details about an individual conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
     * @param {String} conversationId The unique id for the conversation.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Conversation}
     */
    get: (conversationId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List messages
     * Get messages from a specific conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
     * @param {String} conversationId The unique id for the conversation.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {model/String} opts.isRead Whether a conversation message has been marked as read.
     * @param {Date} opts.beforeTimestamp Restrict the response to messages created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Date} opts.sinceTimestamp Restrict the response to messages created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionOfConversationMessages} and HTTP response
     */
    getConversationMessagesWithHttpInfo: (conversationId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List messages
     * Get messages from a specific conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
     * @param {String} conversationId The unique id for the conversation.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {model/String} opts.isRead Whether a conversation message has been marked as read.
     * @param {Date} opts.beforeTimestamp Restrict the response to messages created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Date} opts.sinceTimestamp Restrict the response to messages created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionOfConversationMessages}
     */
    getConversationMessages: (conversationId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get message
     * Get an individual message in a conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
     * @param {String} conversationId The unique id for the conversation.
     * @param {String} messageId The unique id for the conversation message.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConversationMessage} and HTTP response
     */
    getConversationMessageWithHttpInfo: (conversationId: string, messageId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get message
     * Get an individual message in a conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
     * @param {String} conversationId The unique id for the conversation.
     * @param {String} messageId The unique id for the conversation message.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConversationMessage}
     */
    getConversationMessage: (conversationId: string, messageId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
}
import ApiClient from "../ApiClient";
