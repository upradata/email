/**
 * Ecommerce service.
 * @module api/EcommerceApi
 */
/**
 * Constructs a new EcommerceApi.
 * @alias module:api/EcommerceApi
 * @class
 * @param {ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
// export default function _default(apiClient: ApiClient): this;
export default class EcommerceApi {
    /**
     * Ecommerce service.
     * @module api/EcommerceApi
     */
    /**
     * Constructs a new EcommerceApi.
     * @alias module:api/EcommerceApi
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
     * Delete store
     * Delete a store. Deleting a store will also delete any associated subresources, including Customers, Orders, Products, and Carts.
     * @param {String} storeId The store id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteStoreWithHttpInfo: (storeId: string) => Promise<any>;
    /**
     * Delete store
     * Delete a store. Deleting a store will also delete any associated subresources, including Customers, Orders, Products, and Carts.
     * @param {String} storeId The store id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteStore: (storeId: string) => Promise<any>;
    /**
     * Delete cart
     * Delete a cart.
     * @param {String} storeId The store id.
     * @param {String} cartId The id for the cart.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteStoreCartWithHttpInfo: (storeId: string, cartId: string) => Promise<any>;
    /**
     * Delete cart
     * Delete a cart.
     * @param {String} storeId The store id.
     * @param {String} cartId The id for the cart.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteStoreCart: (storeId: string, cartId: string) => Promise<any>;
    /**
     * Delete cart line item
     * Delete a specific cart line item.
     * @param {String} storeId The store id.
     * @param {String} cartId The id for the cart.
     * @param {String} lineId The id for the line item of a cart.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCartLineItemWithHttpInfo: (storeId: string, cartId: string, lineId: string) => Promise<any>;
    /**
     * Delete cart line item
     * Delete a specific cart line item.
     * @param {String} storeId The store id.
     * @param {String} cartId The id for the cart.
     * @param {String} lineId The id for the line item of a cart.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCartLineItem: (storeId: string, cartId: string, lineId: string) => Promise<any>;
    /**
     * Delete customer
     * Delete a customer from a store.
     * @param {String} storeId The store id.
     * @param {String} customerId The id for the customer of a store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteStoreCustomerWithHttpInfo: (storeId: string, customerId: string) => Promise<any>;
    /**
     * Delete customer
     * Delete a customer from a store.
     * @param {String} storeId The store id.
     * @param {String} customerId The id for the customer of a store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteStoreCustomer: (storeId: string, customerId: string) => Promise<any>;
    /**
     * Delete order
     * Delete an order.
     * @param {String} storeId The store id.
     * @param {String} orderId The id for the order in a store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteOrderWithHttpInfo: (storeId: string, orderId: string) => Promise<any>;
    /**
     * Delete order
     * Delete an order.
     * @param {String} storeId The store id.
     * @param {String} orderId The id for the order in a store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteOrder: (storeId: string, orderId: string) => Promise<any>;
    /**
     * Delete order line item
     * Delete a specific order line item.
     * @param {String} storeId The store id.
     * @param {String} orderId The id for the order in a store.
     * @param {String} lineId The id for the line item of an order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteOrderLineItemWithHttpInfo: (storeId: string, orderId: string, lineId: string) => Promise<any>;
    /**
     * Delete order line item
     * Delete a specific order line item.
     * @param {String} storeId The store id.
     * @param {String} orderId The id for the order in a store.
     * @param {String} lineId The id for the line item of an order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteOrderLineItem: (storeId: string, orderId: string, lineId: string) => Promise<any>;
    /**
     * Delete product
     * Delete a product.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteStoreProductWithHttpInfo: (storeId: string, productId: string) => Promise<any>;
    /**
     * Delete product
     * Delete a product.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteStoreProduct: (storeId: string, productId: string) => Promise<any>;
    /**
     * Delete product image
     * Delete a product image.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {String} imageId The id for the product image.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteProductImageWithHttpInfo: (storeId: string, productId: string, imageId: string) => Promise<any>;
    /**
     * Delete product image
     * Delete a product image.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {String} imageId The id for the product image.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteProductImage: (storeId: string, productId: string, imageId: string) => Promise<any>;
    /**
     * Delete product variant
     * Delete a product variant.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {String} variantId The id for the product variant.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteProductVariantWithHttpInfo: (storeId: string, productId: string, variantId: string) => Promise<any>;
    /**
     * Delete product variant
     * Delete a product variant.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {String} variantId The id for the product variant.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteProductVariant: (storeId: string, productId: string, variantId: string) => Promise<any>;
    /**
     * Delete promo code
     * Delete a promo code from a store.
     * @param {String} storeId The store id.
     * @param {String} promoRuleId The id for the promo rule of a store.
     * @param {String} promoCodeId The id for the promo code of a store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deletePromoCodeWithHttpInfo: (storeId: string, promoRuleId: string, promoCodeId: string) => Promise<any>;
    /**
     * Delete promo code
     * Delete a promo code from a store.
     * @param {String} storeId The store id.
     * @param {String} promoRuleId The id for the promo rule of a store.
     * @param {String} promoCodeId The id for the promo code of a store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deletePromoCode: (storeId: string, promoRuleId: string, promoCodeId: string) => Promise<any>;
    /**
     * Delete promo rule
     * Delete a promo rule from a store.
     * @param {String} storeId The store id.
     * @param {String} promoRuleId The id for the promo rule of a store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deletePromoRuleWithHttpInfo: (storeId: string, promoRuleId: string) => Promise<any>;
    /**
     * Delete promo rule
     * Delete a promo rule from a store.
     * @param {String} storeId The store id.
     * @param {String} promoRuleId The id for the promo rule of a store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deletePromoRule: (storeId: string, promoRuleId: string) => Promise<any>;
    /**
     * List account orders
     * Get information about an account's orders.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.campaignId Restrict results to orders with a specific `campaign_id` value.
     * @param {String} opts.outreachId Restrict results to orders with a specific `outreach_id` value.
     * @param {String} opts.customerId Restrict results to orders made by a specific customer.
     * @param {Boolean} opts.hasOutreach Restrict results to orders that have an outreach attached. For example, an email campaign or Facebook ad.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Orders} and HTTP response
     */
    ordersWithHttpInfo: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
        campaignId: string;
        outreachId: string;
        customerId: string;
        hasOutreach: boolean;
    }) => Promise<any>;
    /**
     * List account orders
     * Get information about an account's orders.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.campaignId Restrict results to orders with a specific `campaign_id` value.
     * @param {String} opts.outreachId Restrict results to orders with a specific `outreach_id` value.
     * @param {String} opts.customerId Restrict results to orders made by a specific customer.
     * @param {Boolean} opts.hasOutreach Restrict results to orders that have an outreach attached. For example, an email campaign or Facebook ad.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Orders}
     */
    orders: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
        campaignId: string;
        outreachId: string;
        customerId: string;
        hasOutreach: boolean;
    }) => Promise<any>;
    /**
     * List stores
     * Get information about all stores in the account.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceStores} and HTTP response
     */
    storesWithHttpInfo: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List stores
     * Get information about all stores in the account.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceStores}
     */
    stores: (opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get store info
     * Get information about a specific store.
     * @param {String} storeId The store id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceStore} and HTTP response
     */
    getStoreWithHttpInfo: (storeId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get store info
     * Get information about a specific store.
     * @param {String} storeId The store id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceStore}
     */
    getStore: (storeId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List carts
     * Get information about a store's carts.
     * @param {String} storeId The store id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Carts} and HTTP response
     */
    getStoreCartsWithHttpInfo: (storeId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List carts
     * Get information about a store's carts.
     * @param {String} storeId The store id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Carts}
     */
    getStoreCarts: (storeId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get cart info
     * Get information about a specific cart.
     * @param {String} storeId The store id.
     * @param {String} cartId The id for the cart.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceCart} and HTTP response
     */
    getStoreCartWithHttpInfo: (storeId: string, cartId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get cart info
     * Get information about a specific cart.
     * @param {String} storeId The store id.
     * @param {String} cartId The id for the cart.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceCart}
     */
    getStoreCart: (storeId: string, cartId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List cart line items
     * Get information about a cart's line items.
     * @param {String} storeId The store id.
     * @param {String} cartId The id for the cart.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CartLines} and HTTP response
     */
    getAllCartLineItemsWithHttpInfo: (storeId: string, cartId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List cart line items
     * Get information about a cart's line items.
     * @param {String} storeId The store id.
     * @param {String} cartId The id for the cart.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CartLines}
     */
    getAllCartLineItems: (storeId: string, cartId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get cart line item
     * Get information about a specific cart line item.
     * @param {String} storeId The store id.
     * @param {String} cartId The id for the cart.
     * @param {String} lineId The id for the line item of a cart.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceCartLineItem} and HTTP response
     */
    getCartLineItemWithHttpInfo: (storeId: string, cartId: string, lineId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get cart line item
     * Get information about a specific cart line item.
     * @param {String} storeId The store id.
     * @param {String} cartId The id for the cart.
     * @param {String} lineId The id for the line item of a cart.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceCartLineItem}
     */
    getCartLineItem: (storeId: string, cartId: string, lineId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List customers
     * Get information about a store's customers.
     * @param {String} storeId The store id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.emailAddress Restrict the response to customers with the email address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Customers} and HTTP response
     */
    getAllStoreCustomersWithHttpInfo: (storeId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
        emailAddress: string;
    }) => Promise<any>;
    /**
     * List customers
     * Get information about a store's customers.
     * @param {String} storeId The store id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.emailAddress Restrict the response to customers with the email address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Customers}
     */
    getAllStoreCustomers: (storeId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
        emailAddress: string;
    }) => Promise<any>;
    /**
     * Get customer info
     * Get information about a specific customer.
     * @param {String} storeId The store id.
     * @param {String} customerId The id for the customer of a store.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceCustomer} and HTTP response
     */
    getStoreCustomerWithHttpInfo: (storeId: string, customerId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get customer info
     * Get information about a specific customer.
     * @param {String} storeId The store id.
     * @param {String} customerId The id for the customer of a store.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceCustomer}
     */
    getStoreCustomer: (storeId: string, customerId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List orders
     * Get information about a store's orders.
     * @param {String} storeId The store id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.customerId Restrict results to orders made by a specific customer.
     * @param {Boolean} opts.hasOutreach Restrict results to orders that have an outreach attached. For example, an email campaign or Facebook ad.
     * @param {String} opts.campaignId Restrict results to orders with a specific `campaign_id` value.
     * @param {String} opts.outreachId Restrict results to orders with a specific `outreach_id` value.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Orders1} and HTTP response
     */
    getStoreOrdersWithHttpInfo: (storeId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
        customerId: string;
        hasOutreach: boolean;
        campaignId: string;
        outreachId: string;
    }) => Promise<any>;
    /**
     * List orders
     * Get information about a store's orders.
     * @param {String} storeId The store id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param {String} opts.customerId Restrict results to orders made by a specific customer.
     * @param {Boolean} opts.hasOutreach Restrict results to orders that have an outreach attached. For example, an email campaign or Facebook ad.
     * @param {String} opts.campaignId Restrict results to orders with a specific `campaign_id` value.
     * @param {String} opts.outreachId Restrict results to orders with a specific `outreach_id` value.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Orders1}
     */
    getStoreOrders: (storeId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
        customerId: string;
        hasOutreach: boolean;
        campaignId: string;
        outreachId: string;
    }) => Promise<any>;
    /**
     * Get order info
     * Get information about a specific order.
     * @param {String} storeId The store id.
     * @param {String} orderId The id for the order in a store.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceOrder} and HTTP response
     */
    getOrderWithHttpInfo: (storeId: string, orderId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get order info
     * Get information about a specific order.
     * @param {String} storeId The store id.
     * @param {String} orderId The id for the order in a store.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceOrder}
     */
    getOrder: (storeId: string, orderId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List order line items
     * Get information about an order's line items.
     * @param {String} storeId The store id.
     * @param {String} orderId The id for the order in a store.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderLines} and HTTP response
     */
    getAllOrderLineItemsWithHttpInfo: (storeId: string, orderId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List order line items
     * Get information about an order's line items.
     * @param {String} storeId The store id.
     * @param {String} orderId The id for the order in a store.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderLines}
     */
    getAllOrderLineItems: (storeId: string, orderId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get order line item
     * Get information about a specific order line item.
     * @param {String} storeId The store id.
     * @param {String} orderId The id for the order in a store.
     * @param {String} lineId The id for the line item of an order.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceOrderLineItem} and HTTP response
     */
    getOrderLineItemWithHttpInfo: (storeId: string, orderId: string, lineId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get order line item
     * Get information about a specific order line item.
     * @param {String} storeId The store id.
     * @param {String} orderId The id for the order in a store.
     * @param {String} lineId The id for the line item of an order.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceOrderLineItem}
     */
    getOrderLineItem: (storeId: string, orderId: string, lineId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List product
     * Get information about a store's products.
     * @param {String} storeId The store id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Products} and HTTP response
     */
    getAllStoreProductsWithHttpInfo: (storeId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List product
     * Get information about a store's products.
     * @param {String} storeId The store id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Products}
     */
    getAllStoreProducts: (storeId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get product info
     * Get information about a specific product.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceProduct} and HTTP response
     */
    getStoreProductWithHttpInfo: (storeId: string, productId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get product info
     * Get information about a specific product.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceProduct}
     */
    getStoreProduct: (storeId: string, productId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List product images
     * Get information about a product's images.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceProductImages} and HTTP response
     */
    getProductImagesWithHttpInfo: (storeId: string, productId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List product images
     * Get information about a product's images.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceProductImages}
     */
    getProductImages: (storeId: string, productId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get product image info
     * Get information about a specific product image.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {String} imageId The id for the product image.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceProductImage} and HTTP response
     */
    getProductImageWithHttpInfo: (storeId: string, productId: string, imageId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get product image info
     * Get information about a specific product image.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {String} imageId The id for the product image.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceProductImage}
     */
    getProductImage: (storeId: string, productId: string, imageId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List product variants
     * Get information about a product's variants.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceProductVariants} and HTTP response
     */
    getProductVariantsWithHttpInfo: (storeId: string, productId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List product variants
     * Get information about a product's variants.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceProductVariants}
     */
    getProductVariants: (storeId: string, productId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get product variant info
     * Get information about a specific product variant.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {String} variantId The id for the product variant.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceProductVariant} and HTTP response
     */
    getProductVariantWithHttpInfo: (storeId: string, productId: string, variantId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get product variant info
     * Get information about a specific product variant.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {String} variantId The id for the product variant.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceProductVariant}
     */
    getProductVariant: (storeId: string, productId: string, variantId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List promo codes
     * Get information about a store's promo codes.
     * @param {String} promoRuleId The id for the promo rule of a store.
     * @param {String} storeId The store id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PromoCodes} and HTTP response
     */
    getPromoCodesWithHttpInfo: (promoRuleId: string, storeId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List promo codes
     * Get information about a store's promo codes.
     * @param {String} promoRuleId The id for the promo rule of a store.
     * @param {String} storeId The store id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PromoCodes}
     */
    getPromoCodes: (promoRuleId: string, storeId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get promo code
     * Get information about a specific promo code.
     * @param {String} storeId The store id.
     * @param {String} promoRuleId The id for the promo rule of a store.
     * @param {String} promoCodeId The id for the promo code of a store.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommercePromoCode} and HTTP response
     */
    getPromoCodeWithHttpInfo: (storeId: string, promoRuleId: string, promoCodeId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get promo code
     * Get information about a specific promo code.
     * @param {String} storeId The store id.
     * @param {String} promoRuleId The id for the promo rule of a store.
     * @param {String} promoCodeId The id for the promo code of a store.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommercePromoCode}
     */
    getPromoCode: (storeId: string, promoRuleId: string, promoCodeId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * List promo rules
     * Get information about a store's promo rules.
     * @param {String} storeId The store id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PromoRules} and HTTP response
     */
    listPromoRulesWithHttpInfo: (storeId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * List promo rules
     * Get information about a store's promo rules.
     * @param {String} storeId The store id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PromoRules}
     */
    listPromoRules: (storeId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
        count: number;
        offset: number;
    }) => Promise<any>;
    /**
     * Get promo rule
     * Get information about a specific promo rule.
     * @param {String} storeId The store id.
     * @param {String} promoRuleId The id for the promo rule of a store.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommercePromoRule} and HTTP response
     */
    getPromoRuleWithHttpInfo: (storeId: string, promoRuleId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Get promo rule
     * Get information about a specific promo rule.
     * @param {String} storeId The store id.
     * @param {String} promoRuleId The id for the promo rule of a store.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommercePromoRule}
     */
    getPromoRule: (storeId: string, promoRuleId: string, opts: {
        fields: Array<string>;
        excludeFields: Array<string>;
    }) => Promise<any>;
    /**
     * Update store
     * Update a store.
     * @param {String} storeId The store id.
     * @param {model/EcommerceStore2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceStore} and HTTP response
     */
    updateStoreWithHttpInfo: (storeId: string, body: any) => Promise<any>;
    /**
     * Update store
     * Update a store.
     * @param {String} storeId The store id.
     * @param {model/EcommerceStore2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceStore}
     */
    updateStore: (storeId: string, body: any) => Promise<any>;
    /**
     * Update cart
     * Update a specific cart.
     * @param {String} storeId The store id.
     * @param {String} cartId The id for the cart.
     * @param {model/EcommerceCart2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceCart} and HTTP response
     */
    updateStoreCartWithHttpInfo: (storeId: string, cartId: string, body: any) => Promise<any>;
    /**
     * Update cart
     * Update a specific cart.
     * @param {String} storeId The store id.
     * @param {String} cartId The id for the cart.
     * @param {model/EcommerceCart2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceCart}
     */
    updateStoreCart: (storeId: string, cartId: string, body: any) => Promise<any>;
    /**
     * Update cart line item
     * Update a specific cart line item.
     * @param {String} storeId The store id.
     * @param {String} cartId The id for the cart.
     * @param {String} lineId The id for the line item of a cart.
     * @param {model/EcommerceCartLineItem4} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceCartLineItem} and HTTP response
     */
    updateCartLineItemWithHttpInfo: (storeId: string, cartId: string, lineId: string, body: any) => Promise<any>;
    /**
     * Update cart line item
     * Update a specific cart line item.
     * @param {String} storeId The store id.
     * @param {String} cartId The id for the cart.
     * @param {String} lineId The id for the line item of a cart.
     * @param {model/EcommerceCartLineItem4} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceCartLineItem}
     */
    updateCartLineItem: (storeId: string, cartId: string, lineId: string, body: any) => Promise<any>;
    /**
     * Update customer
     * Update a customer.
     * @param {String} storeId The store id.
     * @param {String} customerId The id for the customer of a store.
     * @param {model/EcommerceCustomer5} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceCustomer} and HTTP response
     */
    updateStoreCustomerWithHttpInfo: (storeId: string, customerId: string, body: any) => Promise<any>;
    /**
     * Update customer
     * Update a customer.
     * @param {String} storeId The store id.
     * @param {String} customerId The id for the customer of a store.
     * @param {model/EcommerceCustomer5} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceCustomer}
     */
    updateStoreCustomer: (storeId: string, customerId: string, body: any) => Promise<any>;
    /**
     * Update order
     * Update a specific order.
     * @param {String} storeId The store id.
     * @param {String} orderId The id for the order in a store.
     * @param {model/EcommerceOrder2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceOrder} and HTTP response
     */
    updateOrderWithHttpInfo: (storeId: string, orderId: string, body: any) => Promise<any>;
    /**
     * Update order
     * Update a specific order.
     * @param {String} storeId The store id.
     * @param {String} orderId The id for the order in a store.
     * @param {model/EcommerceOrder2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceOrder}
     */
    updateOrder: (storeId: string, orderId: string, body: any) => Promise<any>;
    /**
     * Update order line item
     * Update a specific order line item.
     * @param {String} storeId The store id.
     * @param {String} orderId The id for the order in a store.
     * @param {String} lineId The id for the line item of an order.
     * @param {model/EcommerceOrderLineItem4} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceOrderLineItem} and HTTP response
     */
    updateOrderLineItemWithHttpInfo: (storeId: string, orderId: string, lineId: string, body: any) => Promise<any>;
    /**
     * Update order line item
     * Update a specific order line item.
     * @param {String} storeId The store id.
     * @param {String} orderId The id for the order in a store.
     * @param {String} lineId The id for the line item of an order.
     * @param {model/EcommerceOrderLineItem4} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceOrderLineItem}
     */
    updateOrderLineItem: (storeId: string, orderId: string, lineId: string, body: any) => Promise<any>;
    /**
     * Update product
     * Update a specific product.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {model/EcommerceProduct2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceProduct} and HTTP response
     */
    updateStoreProductWithHttpInfo: (storeId: string, productId: string, body: any) => Promise<any>;
    /**
     * Update product
     * Update a specific product.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {model/EcommerceProduct2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceProduct}
     */
    updateStoreProduct: (storeId: string, productId: string, body: any) => Promise<any>;
    /**
     * Update product image
     * Update a product image.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {String} imageId The id for the product image.
     * @param {model/EcommerceProductImage4} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceProductImage} and HTTP response
     */
    updateProductImageWithHttpInfo: (storeId: string, productId: string, imageId: string, body: any) => Promise<any>;
    /**
     * Update product image
     * Update a product image.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {String} imageId The id for the product image.
     * @param {model/EcommerceProductImage4} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceProductImage}
     */
    updateProductImage: (storeId: string, productId: string, imageId: string, body: any) => Promise<any>;
    /**
     * Update product variant
     * Update a product variant.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {String} variantId The id for the product variant.
     * @param {model/EcommerceProductVariant5} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceProductVariant} and HTTP response
     */
    updateProductVariantWithHttpInfo: (storeId: string, productId: string, variantId: string, body: any) => Promise<any>;
    /**
     * Update product variant
     * Update a product variant.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {String} variantId The id for the product variant.
     * @param {model/EcommerceProductVariant5} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceProductVariant}
     */
    updateProductVariant: (storeId: string, productId: string, variantId: string, body: any) => Promise<any>;
    /**
     * Update promo code
     * Update a promo code.
     * @param {String} storeId The store id.
     * @param {String} promoRuleId The id for the promo rule of a store.
     * @param {String} promoCodeId The id for the promo code of a store.
     * @param {model/EcommercePromoCode2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommercePromoCode} and HTTP response
     */
    updatePromoCodeWithHttpInfo: (storeId: string, promoRuleId: string, promoCodeId: string, body: any) => Promise<any>;
    /**
     * Update promo code
     * Update a promo code.
     * @param {String} storeId The store id.
     * @param {String} promoRuleId The id for the promo rule of a store.
     * @param {String} promoCodeId The id for the promo code of a store.
     * @param {model/EcommercePromoCode2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommercePromoCode}
     */
    updatePromoCode: (storeId: string, promoRuleId: string, promoCodeId: string, body: any) => Promise<any>;
    /**
     * Update promo rule
     * Update a promo rule.
     * @param {String} storeId The store id.
     * @param {String} promoRuleId The id for the promo rule of a store.
     * @param {model/EcommercePromoRule2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommercePromoRule} and HTTP response
     */
    updatePromoRuleWithHttpInfo: (storeId: string, promoRuleId: string, body: any) => Promise<any>;
    /**
     * Update promo rule
     * Update a promo rule.
     * @param {String} storeId The store id.
     * @param {String} promoRuleId The id for the promo rule of a store.
     * @param {model/EcommercePromoRule2} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommercePromoRule}
     */
    updatePromoRule: (storeId: string, promoRuleId: string, body: any) => Promise<any>;
    /**
     * Add store
     * Add a new store to your Mailchimp account.
     * @param {model/EcommerceStore1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceStore} and HTTP response
     */
    addStoreWithHttpInfo: (body: any) => Promise<any>;
    /**
     * Add store
     * Add a new store to your Mailchimp account.
     * @param {model/EcommerceStore1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceStore}
     */
    addStore: (body: any) => Promise<any>;
    /**
     * Add cart
     * Add a new cart to a store.
     * @param {String} storeId The store id.
     * @param {model/EcommerceCart1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceCart} and HTTP response
     */
    addStoreCartWithHttpInfo: (storeId: string, body: any) => Promise<any>;
    /**
     * Add cart
     * Add a new cart to a store.
     * @param {String} storeId The store id.
     * @param {model/EcommerceCart1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceCart}
     */
    addStoreCart: (storeId: string, body: any) => Promise<any>;
    /**
     * Add cart line item
     * Add a new line item to an existing cart.
     * @param {String} storeId The store id.
     * @param {String} cartId The id for the cart.
     * @param {model/EcommerceCartLineItem3} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceCartLineItem} and HTTP response
     */
    addCartLineItemWithHttpInfo: (storeId: string, cartId: string, body: any) => Promise<any>;
    /**
     * Add cart line item
     * Add a new line item to an existing cart.
     * @param {String} storeId The store id.
     * @param {String} cartId The id for the cart.
     * @param {model/EcommerceCartLineItem3} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceCartLineItem}
     */
    addCartLineItem: (storeId: string, cartId: string, body: any) => Promise<any>;
    /**
     * Add customer
     * Add a new customer to a store.
     * @param {String} storeId The store id.
     * @param {model/EcommerceCustomer3} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceCustomer} and HTTP response
     */
    addStoreCustomerWithHttpInfo: (storeId: string, body: any) => Promise<any>;
    /**
     * Add customer
     * Add a new customer to a store.
     * @param {String} storeId The store id.
     * @param {model/EcommerceCustomer3} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceCustomer}
     */
    addStoreCustomer: (storeId: string, body: any) => Promise<any>;
    /**
     * Add order
     * Add a new order to a store.
     * @param {String} storeId The store id.
     * @param {model/EcommerceOrder1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceOrder} and HTTP response
     */
    addStoreOrderWithHttpInfo: (storeId: string, body: any) => Promise<any>;
    /**
     * Add order
     * Add a new order to a store.
     * @param {String} storeId The store id.
     * @param {model/EcommerceOrder1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceOrder}
     */
    addStoreOrder: (storeId: string, body: any) => Promise<any>;
    /**
     * Add order line item
     * Add a new line item to an existing order.
     * @param {String} storeId The store id.
     * @param {String} orderId The id for the order in a store.
     * @param {model/EcommerceOrderLineItem3} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceOrderLineItem} and HTTP response
     */
    addOrderLineItemWithHttpInfo: (storeId: string, orderId: string, body: any) => Promise<any>;
    /**
     * Add order line item
     * Add a new line item to an existing order.
     * @param {String} storeId The store id.
     * @param {String} orderId The id for the order in a store.
     * @param {model/EcommerceOrderLineItem3} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceOrderLineItem}
     */
    addOrderLineItem: (storeId: string, orderId: string, body: any) => Promise<any>;
    /**
     * Add product
     * Add a new product to a store.
     * @param {String} storeId The store id.
     * @param {model/EcommerceProduct1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceProduct} and HTTP response
     */
    addStoreProductWithHttpInfo: (storeId: string, body: any) => Promise<any>;
    /**
     * Add product
     * Add a new product to a store.
     * @param {String} storeId The store id.
     * @param {model/EcommerceProduct1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceProduct}
     */
    addStoreProduct: (storeId: string, body: any) => Promise<any>;
    /**
     * Add product image
     * Add a new image to the product.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {model/EcommerceProductImage3} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceProductImage} and HTTP response
     */
    addProductImageWithHttpInfo: (storeId: string, productId: string, body: any) => Promise<any>;
    /**
     * Add product image
     * Add a new image to the product.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {model/EcommerceProductImage3} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceProductImage}
     */
    addProductImage: (storeId: string, productId: string, body: any) => Promise<any>;
    /**
     * Add product variant
     * Add a new variant to the product.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {model/EcommerceProductVariant3} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceProductVariant} and HTTP response
     */
    addProductVariantsWithHttpInfo: (storeId: string, productId: string, body: any) => Promise<any>;
    /**
     * Add product variant
     * Add a new variant to the product.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {model/EcommerceProductVariant3} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceProductVariant}
     */
    addProductVariants: (storeId: string, productId: string, body: any) => Promise<any>;
    /**
     * Add promo code
     * Add a new promo code to a store.
     * @param {String} storeId The store id.
     * @param {String} promoRuleId The id for the promo rule of a store.
     * @param {model/EcommercePromoCode1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommercePromoCode} and HTTP response
     */
    addPromoCodeWithHttpInfo: (storeId: string, promoRuleId: string, body: any) => Promise<any>;
    /**
     * Add promo code
     * Add a new promo code to a store.
     * @param {String} storeId The store id.
     * @param {String} promoRuleId The id for the promo rule of a store.
     * @param {model/EcommercePromoCode1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommercePromoCode}
     */
    addPromoCode: (storeId: string, promoRuleId: string, body: any) => Promise<any>;
    /**
     * Add promo rule
     * Add a new promo rule to a store.
     * @param {String} storeId The store id.
     * @param {model/EcommercePromoRule1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommercePromoRule} and HTTP response
     */
    addPromoRulesWithHttpInfo: (storeId: string, body: any) => Promise<any>;
    /**
     * Add promo rule
     * Add a new promo rule to a store.
     * @param {String} storeId The store id.
     * @param {model/EcommercePromoRule1} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommercePromoRule}
     */
    addPromoRules: (storeId: string, body: any) => Promise<any>;
    /**
     * Add or update customer
     * Add or update a customer.
     * @param {String} storeId The store id.
     * @param {String} customerId The id for the customer of a store.
     * @param {model/EcommerceCustomer4} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceCustomer} and HTTP response
     */
    setStoreCustomerWithHttpInfo: (storeId: string, customerId: string, body: any) => Promise<any>;
    /**
     * Add or update customer
     * Add or update a customer.
     * @param {String} storeId The store id.
     * @param {String} customerId The id for the customer of a store.
     * @param {model/EcommerceCustomer4} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceCustomer}
     */
    setStoreCustomer: (storeId: string, customerId: string, body: any) => Promise<any>;
    /**
     * Add or update product variant
     * Add or update a product variant.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {String} variantId The id for the product variant.
     * @param {model/EcommerceProductVariant4} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcommerceProductVariant} and HTTP response
     */
    addProductVariantWithHttpInfo: (storeId: string, productId: string, variantId: string, body: any) => Promise<any>;
    /**
     * Add or update product variant
     * Add or update a product variant.
     * @param {String} storeId The store id.
     * @param {String} productId The id for the product of a store.
     * @param {String} variantId The id for the product variant.
     * @param {model/EcommerceProductVariant4} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcommerceProductVariant}
     */
    addProductVariant: (storeId: string, productId: string, variantId: string, body: any) => Promise<any>;
}
import ApiClient from "../ApiClient";
