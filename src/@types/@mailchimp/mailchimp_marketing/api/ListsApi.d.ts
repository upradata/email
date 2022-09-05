/* eslint-disable max-len */
/**
 * Lists service.
 * @module api/ListsApi
 */
/**
 * Constructs a new ListsApi.
 * @alias module:api/ListsApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;

import ApiClient from '../ApiClient';
import {
    Body,
    AddListMemberBody,
    SetListMemberBody,
    UpdateListMemberBody,
    MemberSuccessResponse,
    SuccessResponse,
    Contact,
    Options,
    CreateListBody,
    BatchListMembersBody,
    CreateSegmentBody
} from '../types';

export default class ListsApi {
    /**
     * Lists service.
     * @module api/ListsApi
     */
    /**
     * Constructs a new ListsApi.
     * @alias module:api/ListsApi
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
     * Delete list
     * Delete a list from your Mailchimp account. If you delete a list, you'll lose the list history—including subscriber activity, unsubscribes, complaints, and bounces. You’ll also lose subscribers’ email addresses, unless you exported and backed up your list.
     * @param {String} listId The unique ID for the list.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteListWithHttpInfo: (listId: string) => Promise<SuccessResponse>;
    /**
     * Delete list
     * Delete a list from your Mailchimp account. If you delete a list, you'll lose the list history—including subscriber activity, unsubscribes, complaints, and bounces. You’ll also lose subscribers’ email addresses, unless you exported and backed up your list.
     * @param {String} listId The unique ID for the list.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}
     */
    deleteList: (listId: string) => Promise<SuccessResponse>;
    /**
     * Delete interest category
     * Delete a specific interest category.
     * @param {String} listId The unique ID for the list.
     * @param {String} interestCategoryId The unique ID for the interest category.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteInterestCategoryWithHttpInfo: (listId: string, interestCategoryId: string) => Promise<SuccessResponse>;
    /**
     * Delete interest category
     * Delete a specific interest category.
     * @param {String} listId The unique ID for the list.
     * @param {String} interestCategoryId The unique ID for the interest category.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}
     */
    deleteInterestCategory: (listId: string, interestCategoryId: string) => Promise<SuccessResponse>;
    /**
     * Delete interest in category
     * Delete interests or group names in a specific category.
     * @param {String} listId The unique ID for the list.
     * @param {String} interestCategoryId The unique ID for the interest category.
     * @param {String} interestId The specific interest or 'group name'.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteInterestCategoryInterestWithHttpInfo: (listId: string, interestCategoryId: string, interestId: string) => Promise<SuccessResponse>;
    /**
     * Delete interest in category
     * Delete interests or group names in a specific category.
     * @param {String} listId The unique ID for the list.
     * @param {String} interestCategoryId The unique ID for the interest category.
     * @param {String} interestId The specific interest or 'group name'.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}
     */
    deleteInterestCategoryInterest: (listId: string, interestCategoryId: string, interestId: string) => Promise<SuccessResponse>;
    /**
     * Archive list member
     * Archive a list member. To permanently delete, use the delete-permanent action.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteListMemberWithHttpInfo: (listId: string, subscriberHash: string) => Promise<SuccessResponse>;
    /**
     * Archive list member
     * Archive a list member. To permanently delete, use the delete-permanent action.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}
     */
    deleteListMember: (listId: string, subscriberHash: string) => Promise<SuccessResponse>;
    /**
     * Delete note
     * Delete a specific note for a specific list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {String} noteId The id for the note.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteListMemberNoteWithHttpInfo: (listId: string, subscriberHash: string, noteId: string) => Promise<SuccessResponse>;
    /**
     * Delete note
     * Delete a specific note for a specific list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {String} noteId The id for the note.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}
     */
    deleteListMemberNote: (listId: string, subscriberHash: string, noteId: string) => Promise<SuccessResponse>;
    /**
     * Delete merge field
     * Delete a specific merge field.
     * @param {String} listId The unique ID for the list.
     * @param {String} mergeId The id for the merge field.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteListMergeFieldWithHttpInfo: (listId: string, mergeId: string) => Promise<SuccessResponse>;
    /**
     * Delete merge field
     * Delete a specific merge field.
     * @param {String} listId The unique ID for the list.
     * @param {String} mergeId The id for the merge field.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}
     */
    deleteListMergeField: (listId: string, mergeId: string) => Promise<SuccessResponse>;
    /**
     * Delete segment
     * Delete a specific segment in a list.
     * @param {String} listId The unique ID for the list.
     * @param {String} segmentId The unique id for the segment.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteSegmentWithHttpInfo: (listId: string, segmentId: string) => Promise<SuccessResponse>;
    /**
     * Delete segment
     * Delete a specific segment in a list.
     * @param {String} listId The unique ID for the list.
     * @param {String} segmentId The unique id for the segment.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}
     */
    deleteSegment: (listId: string, segmentId: string) => Promise<SuccessResponse>;
    /**
     * Remove list member from segment
     * Remove a member from the specified static segment.
     * @param {String} listId The unique ID for the list.
     * @param {String} segmentId The unique id for the segment.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeSegmentMemberWithHttpInfo: (listId: string, segmentId: string, subscriberHash: string) => Promise<SuccessResponse>;
    /**
     * Remove list member from segment
     * Remove a member from the specified static segment.
     * @param {String} listId The unique ID for the list.
     * @param {String} segmentId The unique id for the segment.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}
     */
    removeSegmentMember: (listId: string, segmentId: string, subscriberHash: string) => Promise<SuccessResponse>;
    /**
     * Delete webhook
     * Delete a specific webhook in a list.
     * @param {String} listId The unique ID for the list.
     * @param {String} webhookId The webhook's id.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteListWebhookWithHttpInfo: (listId: string, webhookId: string) => Promise<SuccessResponse>;
    /**
     * Delete webhook
     * Delete a specific webhook in a list.
     * @param {String} listId The unique ID for the list.
     * @param {String} webhookId The webhook's id.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}
     */
    deleteListWebhook: (listId: string, webhookId: string) => Promise<SuccessResponse>;
    /**
     * List member tags
     * Get the tags on a list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionOfTags} and HTTP response
     */
    getListMemberTagsWithHttpInfo: (listId: string, subscriberHash: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List member tags
     * Get the tags on a list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionOfTags}
     */
    getListMemberTags: (listId: string, subscriberHash: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get lists info
     * Get information about all lists in the account.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.beforeDateCreated Restrict response to lists created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.sinceDateCreated Restrict results to lists created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.beforeCampaignLastSent Restrict results to lists created before the last campaign send date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.sinceCampaignLastSent Restrict results to lists created after the last campaign send date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.email Restrict results to lists that include a specific subscriber's email address.
     * @param {model/String} opts.sortField Returns files sorted by the specified field.
     * @param {model/String} opts.sortDir Determines the order direction for sorted results.
     * @param {Boolean} opts.hasEcommerceStore Restrict results to lists that contain an active, connected, undeleted ecommerce store.
     * @param {Boolean} opts.includeTotalContacts Return the total_contacts field in the stats response, which contains an approximate count of all contacts in any state.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriberLists} and HTTP response
     */
    getAllListsWithHttpInfo: (opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get lists info
     * Get information about all lists in the account.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.beforeDateCreated Restrict response to lists created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.sinceDateCreated Restrict results to lists created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.beforeCampaignLastSent Restrict results to lists created before the last campaign send date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.sinceCampaignLastSent Restrict results to lists created after the last campaign send date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.email Restrict results to lists that include a specific subscriber's email address.
     * @param {model/String} opts.sortField Returns files sorted by the specified field.
     * @param {model/String} opts.sortDir Determines the order direction for sorted results.
     * @param {Boolean} opts.hasEcommerceStore Restrict results to lists that contain an active, connected, undeleted ecommerce store.
     * @param {Boolean} opts.includeTotalContacts Return the total_contacts field in the stats response, which contains an approximate count of all contacts in any state.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriberLists}
     */
    getAllLists: (opts?: {
        fields?: string[];

        excludeFields?: string[];

        count?: number;

        offset?: number;

        beforeDateCreated?: string;

        sinceDateCreated?: string;

        beforeCampaignLastSent?: string;

        sinceCampaignLastSent?: string;

        email?: string;

        sortField?: string;

        sortDir?: string;

        hasEcommerceStore?: boolean;

        includeTotalContacts?: boolean;
    }) => Promise<{
        lists: Array<{
            id: string;
            web_id: number;
            name: string;
            contact: Contact;
        }>;
        total_items: number;
        constraints: object;
        _links: SuccessResponse[ '_links' ];
    }>;
    /**
     * Get list info
     * Get information about a specific list in your Mailchimp account. Results include list members who have signed up but haven't confirmed their subscription yet and unsubscribed or cleaned.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Boolean} opts.includeTotalContacts Return the total_contacts field in the stats response, which contains an approximate count of all contacts in any state.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriberList} and HTTP response
     */
    getListWithHttpInfo: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get list info
     * Get information about a specific list in your Mailchimp account. Results include list members who have signed up but haven't confirmed their subscription yet and unsubscribed or cleaned.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Boolean} opts.includeTotalContacts Return the total_contacts field in the stats response, which contains an approximate count of all contacts in any state.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriberList}
     */
    getList: (listId: string, opts?: Options) => Promise<{
        id: string;
        name: string;
        contact: Contact;
        web_id: number;
        permission_reminder: string;
        use_archive_bar: boolean;
        campaign_defaults: { from_name: string; from_email: string; subject: string; language: string; };
        notify_on_subscribe: string;
        notify_on_unsubscribe: string;
        // etc
    }>;
    /**
     * List abuse reports
     * Get all abuse reports for a specific list.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AbuseComplaints} and HTTP response
     */
    getListAbuseReportsWithHttpInfo: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List abuse reports
     * Get all abuse reports for a specific list.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AbuseComplaints}
     */
    getListAbuseReports: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get abuse report
     * Get details about a specific abuse report.
     * @param {String} listId The unique ID for the list.
     * @param {String} reportId The id for the abuse report.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AbuseComplaint} and HTTP response
     */
    getListAbuseReportDetailsWithHttpInfo: (listId: string, reportId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get abuse report
     * Get details about a specific abuse report.
     * @param {String} listId The unique ID for the list.
     * @param {String} reportId The id for the abuse report.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AbuseComplaint}
     */
    getListAbuseReportDetails: (listId: string, reportId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List recent activity
     * Get up to the previous 180 days of daily detailed aggregated activity stats for a list, not including Automation activity.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListActivity} and HTTP response
     */
    getListRecentActivityWithHttpInfo: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List recent activity
     * Get up to the previous 180 days of daily detailed aggregated activity stats for a list, not including Automation activity.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListActivity}
     */
    getListRecentActivity: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List top email clients
     * Get a list of the top email clients based on user-agent strings.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EmailClients} and HTTP response
     */
    getListClientsWithHttpInfo: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List top email clients
     * Get a list of the top email clients based on user-agent strings.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmailClients}
     */
    getListClients: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List growth history data
     * Get a month-by-month summary of a specific list's growth activity.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {model/String} opts.sortField Returns files sorted by the specified field.
     * @param {model/String} opts.sortDir Determines the order direction for sorted results.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GrowthHistory} and HTTP response
     */
    getListGrowthHistoryWithHttpInfo: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List growth history data
     * Get a month-by-month summary of a specific list's growth activity.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {model/String} opts.sortField Returns files sorted by the specified field.
     * @param {model/String} opts.sortDir Determines the order direction for sorted results.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GrowthHistory}
     */
    getListGrowthHistory: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get growth history by month
     * Get a summary of a specific list's growth activity for a specific month and year.
     * @param {String} listId The unique ID for the list.
     * @param {String} month A specific month of list growth history.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GrowthHistory} and HTTP response
     */
    getListGrowthHistoryByMonthWithHttpInfo: (listId: string, month: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get growth history by month
     * Get a summary of a specific list's growth activity for a specific month and year.
     * @param {String} listId The unique ID for the list.
     * @param {String} month A specific month of list growth history.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GrowthHistory}
     */
    getListGrowthHistoryByMonth: (listId: string, month: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List interest categories
     * Get information about a list's interest categories.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.type Restrict results a type of interest group
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InterestGroupings} and HTTP response
     */
    getListInterestCategoriesWithHttpInfo: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List interest categories
     * Get information about a list's interest categories.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.type Restrict results a type of interest group
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InterestGroupings}
     */
    getListInterestCategories: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get interest category info
     * Get information about a specific interest category.
     * @param {String} listId The unique ID for the list.
     * @param {String} interestCategoryId The unique ID for the interest category.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InterestCategory} and HTTP response
     */
    getInterestCategoryWithHttpInfo: (listId: string, interestCategoryId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get interest category info
     * Get information about a specific interest category.
     * @param {String} listId The unique ID for the list.
     * @param {String} interestCategoryId The unique ID for the interest category.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InterestCategory}
     */
    getInterestCategory: (listId: string, interestCategoryId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List interests in category
     * Get a list of this category's interests.
     * @param {String} listId The unique ID for the list.
     * @param {String} interestCategoryId The unique ID for the interest category.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Interests} and HTTP response
     */
    listInterestCategoryInterestsWithHttpInfo: (listId: string, interestCategoryId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List interests in category
     * Get a list of this category's interests.
     * @param {String} listId The unique ID for the list.
     * @param {String} interestCategoryId The unique ID for the interest category.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Interests}
     */
    listInterestCategoryInterests: (listId: string, interestCategoryId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get interest in category
     * Get interests or 'group names' for a specific category.
     * @param {String} listId The unique ID for the list.
     * @param {String} interestCategoryId The unique ID for the interest category.
     * @param {String} interestId The specific interest or 'group name'.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Interest} and HTTP response
     */
    getInterestCategoryInterestWithHttpInfo: (listId: string, interestCategoryId: string, interestId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get interest in category
     * Get interests or 'group names' for a specific category.
     * @param {String} listId The unique ID for the list.
     * @param {String} interestCategoryId The unique ID for the interest category.
     * @param {String} interestId The specific interest or 'group name'.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Interest}
     */
    getInterestCategoryInterest: (listId: string, interestCategoryId: string, interestId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List locations
     * Get the locations (countries) that the list's subscribers have been tagged to based on geocoding their IP address.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListLocations} and HTTP response
     */
    getListLocationsWithHttpInfo: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List locations
     * Get the locations (countries) that the list's subscribers have been tagged to based on geocoding their IP address.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListLocations}
     */
    getListLocations: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List members info
     * Get information about members in a specific Mailchimp list.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.emailType The email type.
     * @param {model/String} opts.status The subscriber's status.
     * @param {String} opts.sinceTimestampOpt Restrict results to subscribers who opted-in after the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.beforeTimestampOpt Restrict results to subscribers who opted-in before the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.sinceLastChanged Restrict results to subscribers whose information changed after the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.beforeLastChanged Restrict results to subscribers whose information changed before the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.uniqueEmailId A unique identifier for the email address across all Mailchimp lists.
     * @param {Boolean} opts.vipOnly A filter to return only the list's VIP members. Passing `true` will restrict results to VIP list members, passing `false` will return all list members.
     * @param {String} opts.interestCategoryId The unique id for the interest category.
     * @param {String} opts.interestIds Used to filter list members by interests. Must be accompanied by interest_category_id and interest_match. The value must be a comma separated list of interest ids present for any supplied interest categories.
     * @param {model/String} opts.interestMatch Used to filter list members by interests. Must be accompanied by interest_category_id and interest_ids. \"any\" will match a member with any of the interest supplied, \"all\" will only match members with every interest supplied, and \"none\" will match members without any of the interest supplied.
     * @param {model/String} opts.sortField Returns files sorted by the specified field.
     * @param {model/String} opts.sortDir Determines the order direction for sorted results.
     * @param {Boolean} opts.sinceLastCampaign Filter subscribers by those subscribed/unsubscribed/pending/cleaned since last email campaign send. Member status is required to use this filter.
     * @param {String} opts.unsubscribedSince Filter subscribers by those unsubscribed since a specific date. Using any status other than unsubscribed with this filter will result in an error.
     * @return {Promise<MemberSuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListMembers2} and HTTP response
     */
    getListMembersInfoWithHttpInfo: (listId: string, opts?: Options) => Promise<MemberSuccessResponse>;
    /**
     * List members info
     * Get information about members in a specific Mailchimp list.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.emailType The email type.
     * @param {model/String} opts.status The subscriber's status.
     * @param {String} opts.sinceTimestampOpt Restrict results to subscribers who opted-in after the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.beforeTimestampOpt Restrict results to subscribers who opted-in before the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.sinceLastChanged Restrict results to subscribers whose information changed after the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.beforeLastChanged Restrict results to subscribers whose information changed before the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.uniqueEmailId A unique identifier for the email address across all Mailchimp lists.
     * @param {Boolean} opts.vipOnly A filter to return only the list's VIP members. Passing `true` will restrict results to VIP list members, passing `false` will return all list members.
     * @param {String} opts.interestCategoryId The unique id for the interest category.
     * @param {String} opts.interestIds Used to filter list members by interests. Must be accompanied by interest_category_id and interest_match. The value must be a comma separated list of interest ids present for any supplied interest categories.
     * @param {model/String} opts.interestMatch Used to filter list members by interests. Must be accompanied by interest_category_id and interest_ids. \"any\" will match a member with any of the interest supplied, \"all\" will only match members with every interest supplied, and \"none\" will match members without any of the interest supplied.
     * @param {model/String} opts.sortField Returns files sorted by the specified field.
     * @param {model/String} opts.sortDir Determines the order direction for sorted results.
     * @param {Boolean} opts.sinceLastCampaign Filter subscribers by those subscribed/unsubscribed/pending/cleaned since last email campaign send. Member status is required to use this filter.
     * @param {String} opts.unsubscribedSince Filter subscribers by those unsubscribed since a specific date. Using any status other than unsubscribed with this filter will result in an error.
     * @return {Promise<MemberSuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMembers2}
     */
    getListMembersInfo: (listId: string, opts?: {
        fields?: string[];

        excludeFields?: string[];

        count?: number;

        offset?: number;

        beforeTimestampOpt?: string;

        sinceTimestampOpt?: string;

        beforeLastChanged?: string;

        sinceLastChanged?: string;

        emailType?: 'html' | 'text';

        sortField?: string;

        sortDir?: string;

        sinceLastCampaign?: string;

        unsubscribedSince?: string;
    }) => Promise<{
        members: Array<MemberSuccessResponse>;
        list_id: string;
        total_items: number;
        _links: object[];
    }>;
    /**
     * Get member info
     * Get information about a specific list member, including a currently subscribed, unsubscribed, or bounced member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<MemberSuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListMembers2} and HTTP response
     */
    getListMemberWithHttpInfo: (listId: string, subscriberHash: string, opts?: Options) => Promise<MemberSuccessResponse>;
    /**
     * Get member info
     * Get information about a specific list member, including a currently subscribed, unsubscribed, or bounced member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<MemberSuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMembers2}
     */
    getListMember: (listId: string, subscriberHash: string, opts?: Options) => Promise<MemberSuccessResponse>;
    /**
     * View recent activity 50
     * Get the last 50 events of a member's activity on a specific list, including opens, clicks, and unsubscribes.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.action A comma seperated list of actions to return.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MemberActivityEvents} and HTTP response
     */
    getListMemberActivityWithHttpInfo: (listId: string, subscriberHash: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * View recent activity 50
     * Get the last 50 events of a member's activity on a specific list, including opens, clicks, and unsubscribes.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.action A comma seperated list of actions to return.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MemberActivityEvents}
     */
    getListMemberActivity: (listId: string, subscriberHash: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * View recent activity
     * Get a member's activity on a specific list, including opens, clicks, and unsubscribes.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {Array.<String>} opts.activityFilters A comma-separated list of activity filters that correspond to a set of activity types, e.g \"?activity_filters=open,bounce,click\".
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MemberActivityEvents1} and HTTP response
     */
    getListMemberActivityFeedWithHttpInfo: (listId: string, subscriberHash: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * View recent activity
     * Get a member's activity on a specific list, including opens, clicks, and unsubscribes.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {Array.<String>} opts.activityFilters A comma-separated list of activity filters that correspond to a set of activity types, e.g \"?activity_filters=open,bounce,click\".
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MemberActivityEvents1}
     */
    getListMemberActivityFeed: (listId: string, subscriberHash: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List member events
     * Get events for a contact.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {Options} opts Optional parameters
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionOfEvents} and HTTP response
     */
    getListMemberEventsWithHttpInfo: (listId: string, subscriberHash: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List member events
     * Get events for a contact.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {Options} opts Optional parameters
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionOfEvents}
     */
    getListMemberEvents: (listId: string, subscriberHash: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List member goal events
     * Get the last 50 Goal events for a member on a specific list.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionOfMemberActivityEvents} and HTTP response
     */
    getListMemberGoalsWithHttpInfo: (listId: string, subscriberHash: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List member goal events
     * Get the last 50 Goal events for a member on a specific list.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionOfMemberActivityEvents}
     */
    getListMemberGoals: (listId: string, subscriberHash: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List recent member notes
     * Get recent notes for a specific list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {Options} opts Optional parameters
     * @param {model/String} opts.sortField Returns notes sorted by the specified field.
     * @param {model/String} opts.sortDir Determines the order direction for sorted results.
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionOfNotes} and HTTP response
     */
    getListMemberNotesWithHttpInfo: (listId: string, subscriberHash: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List recent member notes
     * Get recent notes for a specific list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {Options} opts Optional parameters
     * @param {model/String} opts.sortField Returns notes sorted by the specified field.
     * @param {model/String} opts.sortDir Determines the order direction for sorted results.
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionOfNotes}
     */
    getListMemberNotes: (listId: string, subscriberHash: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get member note
     * Get a specific note for a specific list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {String} noteId The id for the note.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MemberNotes} and HTTP response
     */
    getListMemberNoteWithHttpInfo: (listId: string, subscriberHash: string, noteId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get member note
     * Get a specific note for a specific list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {String} noteId The id for the note.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MemberNotes}
     */
    getListMemberNote: (listId: string, subscriberHash: string, noteId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List merge fields
     * Get a list of all merge fields for an audience.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.type The merge field type.
     * @param {Boolean} opts.required Whether it's a required merge field.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionOfMergeFields} and HTTP response
     */
    getListMergeFieldsWithHttpInfo: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List merge fields
     * Get a list of all merge fields for an audience.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.type The merge field type.
     * @param {Boolean} opts.required Whether it's a required merge field.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionOfMergeFields}
     */
    getListMergeFields: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get merge field
     * Get information about a specific merge field.
     * @param {String} listId The unique ID for the list.
     * @param {String} mergeId The id for the merge field.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MergeField} and HTTP response
     */
    getListMergeFieldWithHttpInfo: (listId: string, mergeId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get merge field
     * Get information about a specific merge field.
     * @param {String} listId The unique ID for the list.
     * @param {String} mergeId The id for the merge field.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MergeField}
     */
    getListMergeField: (listId: string, mergeId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get segment info
     * Get information about a specific segment.
     * @param {String} listId The unique ID for the list.
     * @param {String} segmentId The unique id for the segment.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Boolean} opts.includeCleaned Include cleaned members in response
     * @param {Boolean} opts.includeTransactional Include transactional members in response
     * @param {Boolean} opts.includeUnsubscribed Include unsubscribed members in response
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/List7} and HTTP response
     */
    getSegmentWithHttpInfo: (listId: string, segmentId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Get segment info
     * Get information about a specific segment.
     * @param {String} listId The unique ID for the list.
     * @param {String} segmentId The unique id for the segment.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Boolean} opts.includeCleaned Include cleaned members in response
     * @param {Boolean} opts.includeTransactional Include transactional members in response
     * @param {Boolean} opts.includeUnsubscribed Include unsubscribed members in response
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/List7}
     */
    getSegment: (listId: string, segmentId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List members in segment
     * Get information about members in a saved segment.
     * @param {String} listId The unique ID for the list.
     * @param {String} segmentId The unique id for the segment.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {Boolean} opts.includeCleaned Include cleaned members in response
     * @param {Boolean} opts.includeTransactional Include transactional members in response
     * @param {Boolean} opts.includeUnsubscribed Include unsubscribed members in response
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SegmentMembers} and HTTP response
     */
    getSegmentMembersListWithHttpInfo: (listId: string, segmentId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List members in segment
     * Get information about members in a saved segment.
     * @param {String} listId The unique ID for the list.
     * @param {String} segmentId The unique id for the segment.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {Boolean} opts.includeCleaned Include cleaned members in response
     * @param {Boolean} opts.includeTransactional Include transactional members in response
     * @param {Boolean} opts.includeUnsubscribed Include unsubscribed members in response
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SegmentMembers}
     */
    getSegmentMembersList: (listId: string, segmentId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List signup forms
     * Get signup forms for a specific list.
     * @param {String} listId The unique ID for the list.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListSignupForms} and HTTP response
     */
    getListSignupFormsWithHttpInfo: (listId: string) => Promise<SuccessResponse>;
    /**
     * List signup forms
     * Get signup forms for a specific list.
     * @param {String} listId The unique ID for the list.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSignupForms}
     */
    getListSignupForms: (listId: string) => Promise<SuccessResponse>;
    /**
     * Get information about all surveys for a list
     * Get information about all available surveys for a specific list.
     * @param {String} listId The unique ID for the list.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    getAllSurveysForListWithHttpInfo: (listId: string) => Promise<SuccessResponse>;
    /**
     * Get information about all surveys for a list
     * Get information about all available surveys for a specific list.
     * @param {String} listId The unique ID for the list.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}
     */
    getAllSurveysForList: (listId: string) => Promise<SuccessResponse>;
    /**
     * Get survey
     * Get details about a specific survey.
     * @param {String} listId The unique ID for the list.
     * @param {String} surveyId The ID of the survey.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    getSurveyWithHttpInfo: (listId: string, surveyId: string) => Promise<SuccessResponse>;
    /**
     * Get survey
     * Get details about a specific survey.
     * @param {String} listId The unique ID for the list.
     * @param {String} surveyId The ID of the survey.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}
     */
    getSurvey: (listId: string, surveyId: string) => Promise<SuccessResponse>;
    /**
     * List webhooks
     * Get information about all webhooks for a specific list.
     * @param {String} listId The unique ID for the list.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListWebhooks} and HTTP response
     */
    getListWebhooksWithHttpInfo: (listId: string) => Promise<SuccessResponse>;
    /**
     * List webhooks
     * Get information about all webhooks for a specific list.
     * @param {String} listId The unique ID for the list.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListWebhooks}
     */
    getListWebhooks: (listId: string) => Promise<SuccessResponse>;
    /**
     * Get webhook info
     * Get information about a specific webhook.
     * @param {String} listId The unique ID for the list.
     * @param {String} webhookId The webhook's id.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListWebhooks} and HTTP response
     */
    getListWebhookWithHttpInfo: (listId: string, webhookId: string) => Promise<SuccessResponse>;
    /**
     * Get webhook info
     * Get information about a specific webhook.
     * @param {String} listId The unique ID for the list.
     * @param {String} webhookId The webhook's id.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListWebhooks}
     */
    getListWebhook: (listId: string, webhookId: string) => Promise<SuccessResponse>;
    /**
     * Update lists
     * Update the settings for a specific list.
     * @param {String} listId The unique ID for the list.
     * @param {model/SubscriberList2
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriberList} and HTTP response
     */
    updateListWithHttpInfo: (listId: string, body: UpdateListMemberBody) => Promise<SuccessResponse>;
    /**
     * Update lists
     * Update the settings for a specific list.
     * @param {String} listId The unique ID for the list.
     * @param {model/SubscriberList2} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriberList}
     */
    updateList: (listId: string, body: UpdateListMemberBody) => Promise<SuccessResponse>;
    /**
     * Update interest category
     * Update a specific interest category.
     * @param {String} listId The unique ID for the list.
     * @param {String} interestCategoryId The unique ID for the interest category.
     * @param {model/InterestCategory2} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InterestCategory} and HTTP response
     */
    updateInterestCategoryWithHttpInfo: (listId: string, interestCategoryId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Update interest category
     * Update a specific interest category.
     * @param {String} listId The unique ID for the list.
     * @param {String} interestCategoryId The unique ID for the interest category.
     * @param {model/InterestCategory2} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InterestCategory}
     */
    updateInterestCategory: (listId: string, interestCategoryId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Update interest in category
     * Update interests or 'group names' for a specific category.
     * @param {String} listId The unique ID for the list.
     * @param {String} interestCategoryId The unique ID for the interest category.
     * @param {String} interestId The specific interest or 'group name'.
     * @param {model/Interest2} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Interest} and HTTP response
     */
    updateInterestCategoryInterestWithHttpInfo: (listId: string, interestCategoryId: string, interestId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Update interest in category
     * Update interests or 'group names' for a specific category.
     * @param {String} listId The unique ID for the list.
     * @param {String} interestCategoryId The unique ID for the interest category.
     * @param {String} interestId The specific interest or 'group name'.
     * @param {model/Interest2} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Interest}
     */
    updateInterestCategoryInterest: (listId: string, interestCategoryId: string, interestId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Update list member
     * Update information for a specific list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {UpdateListMemberBody} body
     * @param {Options} opts Optional parameters
     * @param {Boolean} opts.skipMergeValidation If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListMembers2} and HTTP response
     */
    updateListMemberWithHttpInfo: (listId: string, subscriberHash: string, body: UpdateListMemberBody, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Update list member
     * Update information for a specific list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {UpdateListMemberBody} body
     * @param {Options} opts Optional parameters
     * @param {Boolean} opts.skipMergeValidation If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMembers2}
     */
    updateListMember: (listId: string, subscriberHash: string, body: UpdateListMemberBody, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Update note
     * Update a specific note for a specific list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {String} noteId The id for the note.
     * @param {model/MemberNotes2} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MemberNotes} and HTTP response
     */
    updateListMemberNoteWithHttpInfo: (listId: string, subscriberHash: string, noteId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Update note
     * Update a specific note for a specific list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {String} noteId The id for the note.
     * @param {model/MemberNotes2} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MemberNotes}
     */
    updateListMemberNote: (listId: string, subscriberHash: string, noteId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Update merge field
     * Update a specific merge field.
     * @param {String} listId The unique ID for the list.
     * @param {String} mergeId The id for the merge field.
     * @param {model/MergeField2} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MergeField} and HTTP response
     */
    updateListMergeFieldWithHttpInfo: (listId: string, mergeId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Update merge field
     * Update a specific merge field.
     * @param {String} listId The unique ID for the list.
     * @param {String} mergeId The id for the merge field.
     * @param {model/MergeField2} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MergeField}
     */
    updateListMergeField: (listId: string, mergeId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Update segment
     * Update a specific segment in a list.
     * @param {String} listId The unique ID for the list.
     * @param {String} segmentId The unique id for the segment.
     * @param {model/List9} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/List7} and HTTP response
     */
    updateSegmentWithHttpInfo: (listId: string, segmentId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Update segment
     * Update a specific segment in a list.
     * @param {String} listId The unique ID for the list.
     * @param {String} segmentId The unique id for the segment.
     * @param {model/List9} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/List7}
     */
    updateSegment: (listId: string, segmentId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Update webhook
     * Update the settings for an existing webhook.
     * @param {String} listId The unique ID for the list.
     * @param {String} webhookId The webhook's id.
     * @param {model/AddWebhook1} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListWebhooks} and HTTP response
     */
    updateListWebhookWithHttpInfo: (listId: string, webhookId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Update webhook
     * Update the settings for an existing webhook.
     * @param {String} listId The unique ID for the list.
     * @param {String} webhookId The webhook's id.
     * @param {model/AddWebhook1} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListWebhooks}
     */
    updateListWebhook: (listId: string, webhookId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Add event
     * Add an event for a list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {model/Events} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createListMemberEventWithHttpInfo: (listId: string, subscriberHash: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Add event
     * Add an event for a list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {model/Events} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}
     */
    createListMemberEvent: (listId: string, subscriberHash: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Add or remove member tags
     * Add or remove tags from a list member. If a tag that does not exist is passed in and set as 'active', a new tag will be created.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {model/MemberTags} body
     * @return {Promise<void>} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateListMemberTagsWithHttpInfo: (listId: string, subscriberHash: string, body: Body) => Promise<void>;
    /**
     * Add or remove member tags
     * Add or remove tags from a list member. If a tag that does not exist is passed in and set as 'active', a new tag will be created.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {model/MemberTags} body
     * @return {Promise<void>} a {@link https://www.promisejs.org/|Promise}
     */
    updateListMemberTags: (listId: string, subscriberHash: string, body: Body) => Promise<void>;
    /**
     * Add list
     * Create a new list in your Mailchimp account.
     * @param {model/SubscriberList1} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriberList} and HTTP response
     */
    createListWithHttpInfo: (body: Body) => Promise<SuccessResponse>;
    /**
     * Add list
     * Create a new list in your Mailchimp account.
     * @param {model/SubscriberList1} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriberList}
     */
    createList: (body: CreateListBody) => Promise<{
        id: string;
        web_id: number;
        name: string;
        contact: Contact;
    }>;
    /**
     * Batch subscribe or unsubscribe
     * Batch subscribe or unsubscribe list members.
     * @param {String} listId The unique ID for the list.
     * @param {model/MembersToSubscribeUnsubscribeTofromAListInBatch} body
     * @param {Options} opts Optional parameters
     * @param {Boolean} opts.skipMergeValidation If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
     * @param {Boolean} opts.skipDuplicateCheck If skip_duplicate_check is true, we will ignore duplicates sent in the request when using the batch sub/unsub on the lists endpoint. The status of the first appearance in the request will be saved. This defaults to false.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchUpdateListMembers} and HTTP response
     */
    batchListMembersWithHttpInfo: (listId: string, body: Body, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Batch subscribe or unsubscribe
     * Batch subscribe or unsubscribe list members.
     * @param {String} listId The unique ID for the list.
     * @param {model/MembersToSubscribeUnsubscribeTofromAListInBatch} body
     * @param {Options} opts Optional parameters
     * @param {Boolean} opts.skipMergeValidation If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
     * @param {Boolean} opts.skipDuplicateCheck If skip_duplicate_check is true, we will ignore duplicates sent in the request when using the batch sub/unsub on the lists endpoint. The status of the first appearance in the request will be saved. This defaults to false.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchUpdateListMembers}
     */
    batchListMembers: (listId: string, body: BatchListMembersBody, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Add interest category
     * Create a new interest category.
     * @param {String} listId The unique ID for the list.
     * @param {model/InterestCategory1} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InterestCategory} and HTTP response
     */
    createListInterestCategoryWithHttpInfo: (listId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Add interest category
     * Create a new interest category.
     * @param {String} listId The unique ID for the list.
     * @param {model/InterestCategory1} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InterestCategory}
     */
    createListInterestCategory: (listId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Add interest in category
     * Create a new interest or 'group name' for a specific category.
     * @param {String} listId The unique ID for the list.
     * @param {String} interestCategoryId The unique ID for the interest category.
     * @param {model/Interest1} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Interest} and HTTP response
     */
    createInterestCategoryInterestWithHttpInfo: (listId: string, interestCategoryId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Add interest in category
     * Create a new interest or 'group name' for a specific category.
     * @param {String} listId The unique ID for the list.
     * @param {String} interestCategoryId The unique ID for the interest category.
     * @param {model/Interest1} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Interest}
     */
    createInterestCategoryInterest: (listId: string, interestCategoryId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Add member to list
     * Add a new member to the list.
     * @param {String} listId The unique ID for the list.
     * @param {AddListMemberBody} body
     * @param {Options} opts Optional parameters
     * @param {Boolean} opts.skipMergeValidation If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListMembers2} and HTTP response
     */
    addListMemberWithHttpInfo: (listId: string, body: AddListMemberBody, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Add member to list
     * Add a new member to the list.
     * @param {String} listId The unique ID for the list.
     * @param {AddListMemberBody} body
     * @param {Options} opts Optional parameters
     * @param {Boolean} opts.skipMergeValidation If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMembers2}
     */
    addListMember: (listId: string, body: AddListMemberBody, opts?: Options) => Promise<MemberSuccessResponse>;
    /**
     * Delete list member
     * Delete all personally identifiable information related to a list member, and remove them from a list. This will make it impossible to re-import the list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @return {Promise<void>} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteListMemberPermanentWithHttpInfo: (listId: string, subscriberHash: string) => Promise<void>;
    /**
     * Delete list member
     * Delete all personally identifiable information related to a list member, and remove them from a list. This will make it impossible to re-import the list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @return {Promise<void>} a {@link https://www.promisejs.org/|Promise}
     */
    deleteListMemberPermanent: (listId: string, subscriberHash: string) => Promise<void>;
    /**
     * Add member note
     * Add a new note for a specific subscriber.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {model/MemberNotes1} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MemberNotes} and HTTP response
     */
    createListMemberNoteWithHttpInfo: (listId: string, subscriberHash: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Add member note
     * Add a new note for a specific subscriber.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param {model/MemberNotes1} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MemberNotes}
     */
    createListMemberNote: (listId: string, subscriberHash: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Add merge field
     * Add a new merge field for a specific audience.
     * @param {String} listId The unique ID for the list.
     * @param {model/MergeField1} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MergeField} and HTTP response
     */
    addListMergeFieldWithHttpInfo: (listId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Add merge field
     * Add a new merge field for a specific audience.
     * @param {String} listId The unique ID for the list.
     * @param {model/MergeField1} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MergeField}
     */
    addListMergeField: (listId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Add segment
     * Create a new segment in a specific list.
     * @param {String} listId The unique ID for the list.
     * @param {model/List8} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/List7} and HTTP response
     */
    createSegmentWithHttpInfo: (listId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Add segment
     * Create a new segment in a specific list.
     * @param {String} listId The unique ID for the list.
     * @param {model/List8} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/List7}
     */
    createSegment: (listId: string, body: CreateSegmentBody) => Promise<SuccessResponse>;
    /**
     * Batch add or remove members
     * Batch add/remove list members to static segment
     * @param {model/MembersToAddremoveTofromAStaticSegment} body
     * @param {String} listId The unique ID for the list.
     * @param {String} segmentId The unique id for the segment.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchAddremoveListMembersTofromStaticSegment} and HTTP response
     */
    batchSegmentMembersWithHttpInfo: (body: Body, listId: string, segmentId: string) => Promise<SuccessResponse>;
    /**
     * Batch add or remove members
     * Batch add/remove list members to static segment
     * @param {model/MembersToAddremoveTofromAStaticSegment} body
     * @param {String} listId The unique ID for the list.
     * @param {String} segmentId The unique id for the segment.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchAddremoveListMembersTofromStaticSegment}
     */
    batchSegmentMembers: (body: Body, listId: string, segmentId: string) => Promise<SuccessResponse>;
    /**
     * Add member to segment
     * Add a member to a static segment.
     * @param {String} listId The unique ID for the list.
     * @param {String} segmentId The unique id for the segment.
     * @param {model/Body3} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListMembers1} and HTTP response
     */
    createSegmentMemberWithHttpInfo: (listId: string, segmentId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Add member to segment
     * Add a member to a static segment.
     * @param {String} listId The unique ID for the list.
     * @param {String} segmentId The unique id for the segment.
     * @param {model/Body3} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMembers1}
     */
    createSegmentMember: (listId: string, segmentId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Customize signup form
     * Customize a list's default signup form.
     * @param {String} listId The unique ID for the list.
     * @param {model/SignupForm1} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SignupForm} and HTTP response
     */
    updateListSignupFormWithHttpInfo: (listId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Customize signup form
     * Customize a list's default signup form.
     * @param {String} listId The unique ID for the list.
     * @param {model/SignupForm1} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SignupForm}
     */
    updateListSignupForm: (listId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Add webhook
     * Create a new webhook for a specific list.
     * @param {String} listId The unique ID for the list.
     * @param {model/AddWebhook} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListWebhooks} and HTTP response
     */
    createListWebhookWithHttpInfo: (listId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * Add webhook
     * Create a new webhook for a specific list.
     * @param {String} listId The unique ID for the list.
     * @param {model/AddWebhook} body
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListWebhooks}
     */
    createListWebhook: (listId: string, body: Body) => Promise<SuccessResponse>;
    /**
     * List segments
     * Get information about all available segments for a specific list.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.type Limit results based on segment type.
     * @param {String} opts.sinceCreatedAt Restrict results to segments created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.beforeCreatedAt Restrict results to segments created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Boolean} opts.includeCleaned Include cleaned members in response
     * @param {Boolean} opts.includeTransactional Include transactional members in response
     * @param {Boolean} opts.includeUnsubscribed Include unsubscribed members in response
     * @param {String} opts.sinceUpdatedAt Restrict results to segments update after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.beforeUpdatedAt Restrict results to segments update before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionOfSegments} and HTTP response
     */
    listSegmentsWithHttpInfo: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * List segments
     * Get information about all available segments for a specific list.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.type Limit results based on segment type.
     * @param {String} opts.sinceCreatedAt Restrict results to segments created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.beforeCreatedAt Restrict results to segments created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Boolean} opts.includeCleaned Include cleaned members in response
     * @param {Boolean} opts.includeTransactional Include transactional members in response
     * @param {Boolean} opts.includeUnsubscribed Include unsubscribed members in response
     * @param {String} opts.sinceUpdatedAt Restrict results to segments update after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {String} opts.beforeUpdatedAt Restrict results to segments update before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionOfSegments}
     */
    listSegments: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Add or update list member
     * Add or update a list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {SetListMemberBody} body
     * @param {Options} opts Optional parameters
     * @param {Boolean} opts.skipMergeValidation If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListMembers2} and HTTP response
     */
    setListMemberWithHttpInfo: (listId: string, subscriberHash: string, body: SetListMemberBody, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Add or update list member
     * Add or update a list member.
     * @param {String} listId The unique ID for the list.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param {SetListMemberBody} body
     * @param {Options} opts Optional parameters
     * @param {Boolean} opts.skipMergeValidation If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMembers2}
     */
    setListMember: (listId: string, subscriberHash: string, body: SetListMemberBody, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Search for tags on a list by name.
     * Search for tags on a list by name. If no name is provided, will return all tags on the list.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {String} opts.name The search query used to filter tags.  The search query will be compared to each tag as a prefix, so all tags that have a name starting with this field will be returned.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TagSearchResults} and HTTP response
     */
    tagSearchWithHttpInfo: (listId: string, opts?: Options) => Promise<SuccessResponse>;
    /**
     * Search for tags on a list by name.
     * Search for tags on a list by name. If no name is provided, will return all tags on the list.
     * @param {String} listId The unique ID for the list.
     * @param {Options} opts Optional parameters
     * @param {String} opts.name The search query used to filter tags.  The search query will be compared to each tag as a prefix, so all tags that have a name starting with this field will be returned.
     * @return {Promise<SuccessResponse>} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TagSearchResults}
     */
    tagSearch: (listId: string, opts?: Options) => Promise<SuccessResponse>;
}
