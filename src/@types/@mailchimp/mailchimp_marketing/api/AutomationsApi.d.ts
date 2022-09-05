/**
 * Automations service.
 * @module api/AutomationsApi
 */
/**
 * Constructs a new AutomationsApi.
 * @alias module:api/AutomationsApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class AutomationsApi {
    /**
     * Automations service.
     * @module api/AutomationsApi
     */
    /**
     * Constructs a new AutomationsApi.
     * @alias module:api/AutomationsApi
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
     * Archive automation
     * Archiving will permanently end your automation and keep the report data. You’ll be able to replicate your archived automation, but you can’t restart it.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    archiveWithHttpInfo: (workflowId: string) => Promise<any>;
    /**
     * Archive automation
     * Archiving will permanently end your automation and keep the report data. You’ll be able to replicate your archived automation, but you can’t restart it.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    archive: (workflowId: string) => Promise<any>;
    /**
     * Delete workflow email
     * Removes an individual classic automation workflow email. Emails from certain workflow types, including the Abandoned Cart Email (abandonedCart) and Product Retargeting Email (abandonedBrowse) Workflows, cannot be deleted.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} workflowEmailId The unique id for the Automation workflow email.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteWorkflowEmailWithHttpInfo: (workflowId: string, workflowEmailId: string) => Promise<any>;
    /**
     * Delete workflow email
     * Removes an individual classic automation workflow email. Emails from certain workflow types, including the Abandoned Cart Email (abandonedCart) and Product Retargeting Email (abandonedBrowse) Workflows, cannot be deleted.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} workflowEmailId The unique id for the Automation workflow email.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteWorkflowEmail: (workflowId: string, workflowEmailId: string) => Promise<any>;
    /**
     * List automations
     * Get a summary of an account's classic automations.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Date} opts.beforeCreateTime Restrict the response to automations created before this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Date} opts.sinceCreateTime Restrict the response to automations created after this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Date} opts.beforeStartTime Restrict the response to automations started before this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Date} opts.sinceStartTime Restrict the response to automations started after this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {model/String} opts.status Restrict the results to automations with the specified status.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    listWithHttpInfo: (opts: {
        count: number;
        offset: number;
        fields: Array<string>;
        excludeFields: Array<string>;
        beforeCreateTime: Date;
        sinceCreateTime: Date;
        beforeStartTime: Date;
        sinceStartTime: Date;
    }) => Promise<any>;
    /**
     * List automations
     * Get a summary of an account's classic automations.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Date} opts.beforeCreateTime Restrict the response to automations created before this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Date} opts.sinceCreateTime Restrict the response to automations created after this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Date} opts.beforeStartTime Restrict the response to automations started before this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {Date} opts.sinceStartTime Restrict the response to automations started after this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param {model/String} opts.status Restrict the results to automations with the specified status.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    list: (opts: {
        count: number;
        offset: number;
        fields: Array<string>;
        excludeFields: Array<string>;
        beforeCreateTime: Date;
        sinceCreateTime: Date;
        beforeStartTime: Date;
        sinceStartTime: Date;
    }) => Promise<any>;
    /**
     * Get automation info
     * Get a summary of an individual classic automation workflow's settings and content. The `trigger_settings` object returns information for the first email in the workflow.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AutomationWorkflow} and HTTP response
     */
    getWithHttpInfo: (workflowId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get automation info
     * Get a summary of an individual classic automation workflow's settings and content. The `trigger_settings` object returns information for the first email in the workflow.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AutomationWorkflow}
     */
    get: (workflowId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List automated emails
     * Get a summary of the emails in a classic automation workflow.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AutomationEmails} and HTTP response
     */
    listAllWorkflowEmailsWithHttpInfo: (workflowId: string) => Promise<any>;
    /**
     * List automated emails
     * Get a summary of the emails in a classic automation workflow.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AutomationEmails}
     */
    listAllWorkflowEmails: (workflowId: string) => Promise<any>;
    /**
     * Get workflow email info
     * Get information about an individual classic automation workflow email.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} workflowEmailId The unique id for the Automation workflow email.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AutomationWorkflowEmail} and HTTP response
     */
    getWorkflowEmailWithHttpInfo: (workflowId: string, workflowEmailId: string) => Promise<any>;
    /**
     * Get workflow email info
     * Get information about an individual classic automation workflow email.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} workflowEmailId The unique id for the Automation workflow email.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AutomationWorkflowEmail}
     */
    getWorkflowEmail: (workflowId: string, workflowEmailId: string) => Promise<any>;
    /**
     * List automated email subscribers
     * Get information about a classic automation email queue.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} workflowEmailId The unique id for the Automation workflow email.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    getWorkflowEmailSubscriberQueueWithHttpInfo: (workflowId: string, workflowEmailId: string) => Promise<any>;
    /**
     * List automated email subscribers
     * Get information about a classic automation email queue.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} workflowEmailId The unique id for the Automation workflow email.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    getWorkflowEmailSubscriberQueue: (workflowId: string, workflowEmailId: string) => Promise<any>;
    /**
     * Get automated email subscriber
     * Get information about a specific subscriber in a classic automation email queue.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} workflowEmailId The unique id for the Automation workflow email.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriberInAutomationQueue2} and HTTP response
     */
    getWorkflowEmailSubscriberWithHttpInfo: (workflowId: string, workflowEmailId: string, subscriberHash: string) => Promise<any>;
    /**
     * Get automated email subscriber
     * Get information about a specific subscriber in a classic automation email queue.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} workflowEmailId The unique id for the Automation workflow email.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriberInAutomationQueue2}
     */
    getWorkflowEmailSubscriber: (workflowId: string, workflowEmailId: string, subscriberHash: string) => Promise<any>;
    /**
     * List subscribers removed from workflow
     * Get information about subscribers who were removed from a classic automation workflow.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemovedSubscribers} and HTTP response
     */
    listWorkflowEmailSubscribersRemovedWithHttpInfo: (workflowId: string) => Promise<any>;
    /**
     * List subscribers removed from workflow
     * Get information about subscribers who were removed from a classic automation workflow.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemovedSubscribers}
     */
    listWorkflowEmailSubscribersRemoved: (workflowId: string) => Promise<any>;
    /**
     * Get subscriber removed from workflow
     * Get information about a specific subscriber who was removed from a classic automation workflow.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriberRemovedFromAutomationWorkflow} and HTTP response
     */
    getRemovedWorkflowEmailSubscriberWithHttpInfo: (workflowId: string, subscriberHash: string) => Promise<any>;
    /**
     * Get subscriber removed from workflow
     * Get information about a specific subscriber who was removed from a classic automation workflow.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriberRemovedFromAutomationWorkflow}
     */
    getRemovedWorkflowEmailSubscriber: (workflowId: string, subscriberHash: string) => Promise<any>;
    /**
     * Update workflow email
     * Update settings for a classic automation workflow email.  Only works with workflows of type: abandonedBrowse, abandonedCart, emailFollowup, or singleWelcome.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} workflowEmailId The unique id for the Automation workflow email.
     * @param {model/UpdateInformationAboutASpecificWorkflowEmail} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AutomationWorkflowEmail} and HTTP response
     */
    updateWorkflowEmailWithHttpInfo: (workflowId: string, workflowEmailId: string, body: any) => Promise<any>;
    /**
     * Update workflow email
     * Update settings for a classic automation workflow email.  Only works with workflows of type: abandonedBrowse, abandonedCart, emailFollowup, or singleWelcome.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} workflowEmailId The unique id for the Automation workflow email.
     * @param {model/UpdateInformationAboutASpecificWorkflowEmail} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AutomationWorkflowEmail}
     */
    updateWorkflowEmail: (workflowId: string, workflowEmailId: string, body: any) => Promise<any>;
    /**
     * Add automation
     * Create a new classic automation in your Mailchimp account.
     * @param {model/AutomationWorkflow1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AutomationWorkflow} and HTTP response
     */
    createWithHttpInfo: (body: any) => Promise<any>;
    /**
     * Add automation
     * Create a new classic automation in your Mailchimp account.
     * @param {model/AutomationWorkflow1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AutomationWorkflow}
     */
    create: (body: any) => Promise<any>;
    /**
     * Pause automation emails
     * Pause all emails in a specific classic automation workflow.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    pauseAllEmailsWithHttpInfo: (workflowId: string) => Promise<any>;
    /**
     * Pause automation emails
     * Pause all emails in a specific classic automation workflow.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    pauseAllEmails: (workflowId: string) => Promise<any>;
    /**
     * Start automation emails
     * Start all emails in a classic automation workflow.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    startAllEmailsWithHttpInfo: (workflowId: string) => Promise<any>;
    /**
     * Start automation emails
     * Start all emails in a classic automation workflow.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    startAllEmails: (workflowId: string) => Promise<any>;
    /**
     * Pause automated email
     * Pause an automated email.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} workflowEmailId The unique id for the Automation workflow email.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    pauseWorkflowEmailWithHttpInfo: (workflowId: string, workflowEmailId: string) => Promise<any>;
    /**
     * Pause automated email
     * Pause an automated email.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} workflowEmailId The unique id for the Automation workflow email.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    pauseWorkflowEmail: (workflowId: string, workflowEmailId: string) => Promise<any>;
    /**
     * Start automated email
     * Start an automated email.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} workflowEmailId The unique id for the Automation workflow email.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    startWorkflowEmailWithHttpInfo: (workflowId: string, workflowEmailId: string) => Promise<any>;
    /**
     * Start automated email
     * Start an automated email.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} workflowEmailId The unique id for the Automation workflow email.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    startWorkflowEmail: (workflowId: string, workflowEmailId: string) => Promise<any>;
    /**
     * Add subscriber to workflow email
     * Manually add a subscriber to a workflow, bypassing the default trigger settings. You can also use this endpoint to trigger a series of automated emails in an API 3.0 workflow type.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} workflowEmailId The unique id for the Automation workflow email.
     * @param {model/SubscriberInAutomationQueue1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriberInAutomationQueue2} and HTTP response
     */
    addWorkflowEmailSubscriberWithHttpInfo: (workflowId: string, workflowEmailId: string, body: any) => Promise<any>;
    /**
     * Add subscriber to workflow email
     * Manually add a subscriber to a workflow, bypassing the default trigger settings. You can also use this endpoint to trigger a series of automated emails in an API 3.0 workflow type.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {String} workflowEmailId The unique id for the Automation workflow email.
     * @param {model/SubscriberInAutomationQueue1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriberInAutomationQueue2}
     */
    addWorkflowEmailSubscriber: (workflowId: string, workflowEmailId: string, body: any) => Promise<any>;
    /**
     * Remove subscriber from workflow
     * Remove a subscriber from a specific classic automation workflow. You can remove a subscriber at any point in an automation workflow, regardless of how many emails they've been sent from that workflow. Once they're removed, they can never be added back to the same workflow.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {model/SubscriberInAutomationQueue3} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriberRemovedFromAutomationWorkflow} and HTTP response
     */
    removeWorkflowEmailSubscriberWithHttpInfo: (workflowId: string, body: any) => Promise<any>;
    /**
     * Remove subscriber from workflow
     * Remove a subscriber from a specific classic automation workflow. You can remove a subscriber at any point in an automation workflow, regardless of how many emails they've been sent from that workflow. Once they're removed, they can never be added back to the same workflow.
     * @param {String} workflowId The unique id for the Automation workflow.
     * @param {model/SubscriberInAutomationQueue3} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriberRemovedFromAutomationWorkflow}
     */
    removeWorkflowEmailSubscriber: (workflowId: string, body: any) => Promise<any>;
}
import ApiClient from "../ApiClient";
