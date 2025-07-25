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
import CreateWalletRequest from '../model/CreateWalletRequest';
import QueryRequest from '../model/QueryRequest';
import UpdateWalletRequest from '../model/UpdateWalletRequest';
import WalletResponse from '../model/WalletResponse';
import WalletTransactionRequest from '../model/WalletTransactionRequest';
import WalletTransactionResponse from '../model/WalletTransactionResponse';

/**
* Wallets service.
* @module api/WalletsApi
* @version 0.0.26
*/
export default class WalletsApi {

    /**
    * Constructs a new WalletsApi. 
    * @alias module:api/WalletsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createWallets operation.
     * @callback module:api/WalletsApi~createWalletsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create wallets
     * Create new Wallets in the Ziqni database
     * @param {Array.<module:model/CreateWalletRequest>} body Create Wallets in the Ziqni database
     * @param {module:api/WalletsApi~createWalletsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createWallets(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createWallets");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/wallets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWallets operation.
     * @callback module:api/WalletsApi~deleteWalletsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete wallets
     * Delete Wallets for a given identifier specified
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {module:api/WalletsApi~deleteWalletsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteWallets(opts, callback) {
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
        '/wallets', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWalletsByQuery operation.
     * @callback module:api/WalletsApi~deleteWalletsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete wallets by query
     * Delete a Wallet or a list of Wallets from Ziqni by unique Wallet ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Delete a Wallet or a list of Wallet from Ziqni by unique Wallet ID's or any other POST body parameters using the POST method
     * @param {module:api/WalletsApi~deleteWalletsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteWalletsByQuery(opts, callback) {
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
        '/wallets/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWallets operation.
     * @callback module:api/WalletsApi~getWalletsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WalletResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get wallets
     * Returns a list of Wallets. This assumes that wallets  have first been uploaded via a POST request or web console
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/WalletsApi~getWalletsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WalletResponse}
     */
    getWallets(opts, callback) {
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
      let returnType = WalletResponse;
      return this.apiClient.callApi(
        '/wallets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWalletsByQuery operation.
     * @callback module:api/WalletsApi~getWalletsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WalletResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get wallet  by query
     * Retrieve Wallet  from Ziqni database by unique Wallet  ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Retrieve Wallet  from Ziqni database by unique Wallet  ID's or any other POST body parameters using the POST method
     * @param {module:api/WalletsApi~getWalletsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WalletResponse}
     */
    getWalletsByQuery(opts, callback) {
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
      let returnType = WalletResponse;
      return this.apiClient.callApi(
        '/wallets/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the manageWalletTransaction operation.
     * @callback module:api/WalletsApi~manageWalletTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Credit, Debit, and Transfer transactions from a wallet 
     * @param {Object} opts Optional parameters
     * @param {module:model/WalletTransactionRequest} opts.body Manage wallet tranctions  from Ziqni by unique Wallet ID's  using the POST method
     * @param {module:api/WalletsApi~manageWalletTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    manageWalletTransaction(opts, callback) {
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
        '/wallets/manage-transaction', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveWalletTransactionsByWalletId operation.
     * @callback module:api/WalletsApi~retrieveWalletTransactionsByWalletIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WalletTransactionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * wallet transactions list
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/WalletsApi~retrieveWalletTransactionsByWalletIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WalletTransactionResponse}
     */
    retrieveWalletTransactionsByWalletId(opts, callback) {
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
      let returnType = WalletTransactionResponse;
      return this.apiClient.callApi(
        '/wallets/find-transactions-by-id', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWallets operation.
     * @callback module:api/WalletsApi~updateWalletsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update wallets
     * Update existing Wallets in the Ziqni database
     * @param {Array.<module:model/UpdateWalletRequest>} body Update Wallets in the Ziqni database.
     * @param {module:api/WalletsApi~updateWalletsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateWallets(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateWallets");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/wallets', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
