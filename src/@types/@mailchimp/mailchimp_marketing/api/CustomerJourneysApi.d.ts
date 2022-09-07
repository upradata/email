/**
 * CustomerJourneys service.
 * @module api/CustomerJourneysApi
 */
/**
 * Constructs a new CustomerJourneysApi.
 * @alias module:api/CustomerJourneysApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class CustomerJourneysApi {
    /**
     * CustomerJourneys service.
     * @module api/CustomerJourneysApi
     */
    /**
     * Constructs a new CustomerJourneysApi.
     * @alias module:api/CustomerJourneysApi
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
     * Customer Journeys API trigger for a contact
     * A step trigger in a Customer Journey. To use it, create a starting point or step from the Customer Journey builder in the app using the Customer Journeys API condition. We’ll provide a url during the process that includes the {journey_id} and {step_id}. You’ll then be able to use this endpoint to trigger the condition for the posted contact.
     * @param {Number} journeyId The id for the Journey.
     * @param {Number} stepId The id for the Step.
     * @param {model/SubscriberInCustomerJourneysAudience} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    triggerWithHttpInfo: (journeyId: number, stepId: number, body: any) => Promise<any>;
    /**
     * Customer Journeys API trigger for a contact
     * A step trigger in a Customer Journey. To use it, create a starting point or step from the Customer Journey builder in the app using the Customer Journeys API condition. We’ll provide a url during the process that includes the {journey_id} and {step_id}. You’ll then be able to use this endpoint to trigger the condition for the posted contact.
     * @param {Number} journeyId The id for the Journey.
     * @param {Number} stepId The id for the Step.
     * @param {model/SubscriberInCustomerJourneysAudience} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    trigger: (journeyId: number, stepId: number, body: any) => Promise<any>;
}
import ApiClient from "../ApiClient";
