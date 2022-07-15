/**
 * Ziqni Admin Api
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiResponse from '../model/ApiResponse';
import CreateLanguageRequest from '../model/CreateLanguageRequest';
import LanguageResponse from '../model/LanguageResponse';
import QueryRequest from '../model/QueryRequest';
import UpdateLanguageRequest from '../model/UpdateLanguageRequest';

/**
* Languages service.
* @module api/LanguagesApi
* @version 0.0.26
*/
export default class LanguagesApi {

    /**
    * Constructs a new LanguagesApi. 
    * @alias module:api/LanguagesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createLanguages operation.
     * @callback module:api/LanguagesApi~createLanguagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Language in the Ziqni database
     * @param {Array.<module:model/CreateLanguageRequest>} body Create a Language in the Ziqni database
     * @param {module:api/LanguagesApi~createLanguagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createLanguages(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createLanguages");
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
        '/languages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLanguages operation.
     * @callback module:api/LanguagesApi~deleteLanguagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Languages for a given identifier specified
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {module:api/LanguagesApi~deleteLanguagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteLanguages(opts, callback) {
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
        '/languages', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLanguagesByQuery operation.
     * @callback module:api/LanguagesApi~deleteLanguagesByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT AVAILABLE IN CURRENT RELEASE
     * Delete Languages from Ziqni database by unique Language ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Delete Languages from Ziqni database by unique Language ID's or any other POST body parameters using the POST method
     * @param {module:api/LanguagesApi~deleteLanguagesByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteLanguagesByQuery(opts, callback) {
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
        '/languages/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLanguages operation.
     * @callback module:api/LanguagesApi~getLanguagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LanguageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of Languages available in the space. This assumes that languages have first been uploaded via a POST request or web console
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/LanguagesApi~getLanguagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LanguageResponse}
     */
    getLanguages(opts, callback) {
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
      let returnType = LanguageResponse;
      return this.apiClient.callApi(
        '/languages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLanguagesByQuery operation.
     * @callback module:api/LanguagesApi~getLanguagesByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LanguageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Languages from Ziqni database by unique Language ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Retrieve Languages from Ziqni database by unique Language ID's or any other Post body parameters using the POST method
     * @param {module:api/LanguagesApi~getLanguagesByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LanguageResponse}
     */
    getLanguagesByQuery(opts, callback) {
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
      let returnType = LanguageResponse;
      return this.apiClient.callApi(
        '/languages/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getListOfAllLanguages operation.
     * @callback module:api/LanguagesApi~getListOfAllLanguagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LanguageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of all avaialable Languages
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/LanguagesApi~getListOfAllLanguagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LanguageResponse}
     */
    getListOfAllLanguages(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
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
      let returnType = LanguageResponse;
      return this.apiClient.callApi(
        '/languages/available', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLanguages operation.
     * @callback module:api/LanguagesApi~updateLanguagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing Language in the Ziqni database
     * @param {Array.<module:model/UpdateLanguageRequest>} body Update Language details in the Ziqni database
     * @param {module:api/LanguagesApi~updateLanguagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateLanguages(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateLanguages");
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
        '/languages', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
