/**
 * VerifiedDomains service.
 * @module api/VerifiedDomainsApi
 */
/**
 * Constructs a new VerifiedDomainsApi.
 * @alias module:api/VerifiedDomainsApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class VerifiedDomainsApi {
    /**
     * VerifiedDomains service.
     * @module api/VerifiedDomainsApi
     */
    /**
     * Constructs a new VerifiedDomainsApi.
     * @alias module:api/VerifiedDomainsApi
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
     * Add domain to account
     * Add a domain to the account.
     * @param {model/VerifiedDomains2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VerifiedDomains} and HTTP response
     */
    createVerifiedDomainWithHttpInfo: (body: any) => Promise<any>;
    /**
     * Add domain to account
     * Add a domain to the account.
     * @param {model/VerifiedDomains2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VerifiedDomains}
     */
    createVerifiedDomain: (body: any) => Promise<any>;
    /**
     * Delete domain
     * Delete a verified domain from the account.
     * @param {String} domainName The domain name.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDomainWithHttpInfo: (domainName: string) => Promise<any>;
    /**
     * Delete domain
     * Delete a verified domain from the account.
     * @param {String} domainName The domain name.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDomain: (domainName: string) => Promise<any>;
    /**
     * Get domain info
     * Get the details for a single domain on the account.
     * @param {String} domainName The domain name.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VerifiedDomains} and HTTP response
     */
    getDomainWithHttpInfo: (domainName: string) => Promise<any>;
    /**
     * Get domain info
     * Get the details for a single domain on the account.
     * @param {String} domainName The domain name.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VerifiedDomains}
     */
    getDomain: (domainName: string) => Promise<any>;
    /**
     * List sending domains
     * Get all of the sending domains on the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VerifiedDomains1} and HTTP response
     */
    getVerifiedDomainsAllWithHttpInfo: () => Promise<any>;
    /**
     * List sending domains
     * Get all of the sending domains on the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VerifiedDomains1}
     */
    getVerifiedDomainsAll: () => Promise<any>;
    /**
     * Verify domain
     * Verify a domain for sending.
     * @param {String} domainName The domain name.
     * @param {model/VerifyADomainForSending_} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VerifiedDomains} and HTTP response
     */
    submitDomainVerificationWithHttpInfo: (domainName: string, body: any) => Promise<any>;
    /**
     * Verify domain
     * Verify a domain for sending.
     * @param {String} domainName The domain name.
     * @param {model/VerifyADomainForSending_} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VerifiedDomains}
     */
    submitDomainVerification: (domainName: string, body: any) => Promise<any>;
}
import ApiClient from "../ApiClient";
