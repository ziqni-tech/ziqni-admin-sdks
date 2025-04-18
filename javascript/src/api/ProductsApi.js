/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.19
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiResponse from '../model/ApiResponse';
import CreateProductRequest from '../model/CreateProductRequest';
import ProductResponse from '../model/ProductResponse';
import QueryRequest from '../model/QueryRequest';
import UpdateProductRequest from '../model/UpdateProductRequest';

/**
* Products service.
* @module api/ProductsApi
* @version 0.0.26
*/
export default class ProductsApi {

    /**
    * Constructs a new ProductsApi. 
    * @alias module:api/ProductsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createProducts operation.
     * @callback module:api/ProductsApi~createProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create products
     * Create new Products in the Ziqni database
     * @param {Array.<module:model/CreateProductRequest>} body Create Products in the Ziqni database. An array can contain a maximum of 10,000 products in one request
     * @param {module:api/ProductsApi~createProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createProducts(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createProducts");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json', 'file/csv'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/products', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProducts operation.
     * @callback module:api/ProductsApi~deleteProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete products
     * Delete Products for a given identifier specified
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {module:api/ProductsApi~deleteProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteProducts(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': this.apiClient.buildCollectionParam(opts['id'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/products', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProductsByQuery operation.
     * @callback module:api/ProductsApi~deleteProductsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete products by query
     * Delete Products from Ziqni database by unique Product ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Delete Products from Ziqni database by unique Product ID's or any other POST body parameters using the POST method
     * @param {module:api/ProductsApi~deleteProductsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteProductsByQuery(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/products/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProducts operation.
     * @callback module:api/ProductsApi~getProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get products
     * Returns a list of Products. This assumes that products have first been uploaded via a POST request or web console
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/ProductsApi~getProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductResponse}
     */
    getProducts(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        '_limit': opts['limit'],
        '_skip': opts['skip']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ProductResponse;
      return this.apiClient.callApi(
        '/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProductsByQuery operation.
     * @callback module:api/ProductsApi~getProductsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get products by query
     * Retrieve Products from Ziqni database by unique Product ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Retrieve Products from Ziqni database by unique Product ID's or any other POST body parameters using the POST method
     * @param {module:api/ProductsApi~getProductsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductResponse}
     */
    getProductsByQuery(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ProductResponse;
      return this.apiClient.callApi(
        '/products/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProductsByRefId operation.
     * @callback module:api/ProductsApi~getProductsByRefIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get products by reference ids
     * Returns a list of Products. This assumes that products have first been uploaded via a POST request or web console
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.refIds The reference ids  of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/ProductsApi~getProductsByRefIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductResponse}
     */
    getProductsByRefId(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'refIds': this.apiClient.buildCollectionParam(opts['refIds'], 'multi'),
        '_limit': opts['limit'],
        '_skip': opts['skip']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ProductResponse;
      return this.apiClient.callApi(
        '/products/find-by-ref-identifiers/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProducts operation.
     * @callback module:api/ProductsApi~updateProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update products
     * Update existing Products in the Ziqni database
     * @param {Array.<module:model/UpdateProductRequest>} body Update a Product or multiple Products in the Ziqni database. * Product Ref Id can not be changed after creation * A products Id must exist in the Ziqni database to update the product
     * @param {module:api/ProductsApi~updateProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateProducts(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateProducts");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json', 'file/csv'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/products', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
