/**
 * Surveys service.
 * @module api/SurveysApi
 */
/**
 * Constructs a new SurveysApi.
 * @alias module:api/SurveysApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class SurveysApi {
    /**
     * Surveys service.
     * @module api/SurveysApi
     */
    /**
     * Constructs a new SurveysApi.
     * @alias module:api/SurveysApi
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
     * Publish a Survey
     * Publish a survey that is in draft, unpublished, or has been previously published and edited.
     * @param {String} listId The unique ID for the list.
     * @param {String} surveyId The ID of the survey.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    publishSurveyWithHttpInfo: (listId: string, surveyId: string) => Promise<any>;
    /**
     * Publish a Survey
     * Publish a survey that is in draft, unpublished, or has been previously published and edited.
     * @param {String} listId The unique ID for the list.
     * @param {String} surveyId The ID of the survey.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    publishSurvey: (listId: string, surveyId: string) => Promise<any>;
    /**
     * Unpublish a Survey
     * Unpublish a survey that has been published.
     * @param {String} listId The unique ID for the list.
     * @param {String} surveyId The ID of the survey.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    unpublishSurveyWithHttpInfo: (listId: string, surveyId: string) => Promise<any>;
    /**
     * Unpublish a Survey
     * Unpublish a survey that has been published.
     * @param {String} listId The unique ID for the list.
     * @param {String} surveyId The ID of the survey.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    unpublishSurvey: (listId: string, surveyId: string) => Promise<any>;
}
import ApiClient from "../ApiClient";
