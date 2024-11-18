/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.17
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AccountMessageResponse from '../model/AccountMessageResponse';
import ApiResponse from '../model/ApiResponse';
import QueryRequest from '../model/QueryRequest';

/**
* AccountMessages service.
* @module api/AccountMessagesApi
* @version 0.0.26
*/
export default class AccountMessagesApi {

    /**
    * Constructs a new AccountMessagesApi. 
    * @alias module:api/AccountMessagesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteAccountMessages operation.
     * @callback module:api/AccountMessagesApi~deleteAccountMessagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Account Messages for a given identifier specified
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {module:api/AccountMessagesApi~deleteAccountMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteAccountMessages(opts, callback) {
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
        '/account-messages', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAccountMessagesByQuery operation.
     * @callback module:api/AccountMessagesApi~deleteAccountMessagesByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Account Messages from the system by query.
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Delete Account Messages from Ziqni database by unique message ID's or any other POST body parameters using the POST method
     * @param {module:api/AccountMessagesApi~deleteAccountMessagesByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteAccountMessagesByQuery(opts, callback) {
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
        '/account-messages/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccountMessages operation.
     * @callback module:api/AccountMessagesApi~getAccountMessagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountMessageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of Account Messages.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/AccountMessagesApi~getAccountMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountMessageResponse}
     */
    getAccountMessages(opts, callback) {
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
      let returnType = AccountMessageResponse;
      return this.apiClient.callApi(
        '/account-messages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccountMessagesByQuery operation.
     * @callback module:api/AccountMessagesApi~getAccountMessagesByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountMessageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Account Messages from the system by query.
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Retrieve Account Messages from Ziqni database by unique message ID's or any other POST body parameters using the POST method
     * @param {module:api/AccountMessagesApi~getAccountMessagesByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountMessageResponse}
     */
    getAccountMessagesByQuery(opts, callback) {
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
      let returnType = AccountMessageResponse;
      return this.apiClient.callApi(
        '/account-messages/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
