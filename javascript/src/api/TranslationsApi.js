/**
 * ZIQNI Admin API
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
import CreateTranslationRequest from '../model/CreateTranslationRequest';
import QueryRequest from '../model/QueryRequest';
import TranslationResponse from '../model/TranslationResponse';
import UpdateTranslationRequest from '../model/UpdateTranslationRequest';

/**
* Translations service.
* @module api/TranslationsApi
* @version 0.0.26
*/
export default class TranslationsApi {

    /**
    * Constructs a new TranslationsApi. 
    * @alias module:api/TranslationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createTranslations operation.
     * @callback module:api/TranslationsApi~createTranslationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * creating a translation
     * Create a new Translation in the Ziqni system
     * @param {Array.<module:model/CreateTranslationRequest>} createTranslationRequest 
     * @param {module:api/TranslationsApi~createTranslationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createTranslations(createTranslationRequest, callback) {
      let postBody = createTranslationRequest;
      // verify the required parameter 'createTranslationRequest' is set
      if (createTranslationRequest === undefined || createTranslationRequest === null) {
        throw new Error("Missing the required parameter 'createTranslationRequest' when calling createTranslations");
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
        '/translations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTranslations operation.
     * @callback module:api/TranslationsApi~deleteTranslationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the Translations for a given identifier specified
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {module:api/TranslationsApi~deleteTranslationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteTranslations(opts, callback) {
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
        '/translations', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTranslationsByQuery operation.
     * @callback module:api/TranslationsApi~deleteTranslationsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete translations by query
     * Delete a Translation or a list of Translations from Ziqni by unique Translation ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Delete a Translation or a list of Translations from Ziqni by unique Translation ID's or any other POST body parameters using the POST method
     * @param {module:api/TranslationsApi~deleteTranslationsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteTranslationsByQuery(opts, callback) {
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
        '/translations/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTranslations operation.
     * @callback module:api/TranslationsApi~getTranslationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TranslationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of translations. This assumes that rules have first been created during achievement, competition or contest setup. The id is the ID of the entity the translations describe
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/TranslationsApi~getTranslationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TranslationResponse}
     */
    getTranslations(opts, callback) {
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
      let returnType = TranslationResponse;
      return this.apiClient.callApi(
        '/translations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTranslationsByEntityId operation.
     * @callback module:api/TranslationsApi~getTranslationsByEntityIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TranslationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of Translations. This assumes that translations have first been uploaded via a POST request or web console
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.refIds The reference ids  of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/TranslationsApi~getTranslationsByEntityIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TranslationResponse}
     */
    getTranslationsByEntityId(opts, callback) {
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
      let returnType = TranslationResponse;
      return this.apiClient.callApi(
        '/translations/find-by-entity-id', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTranslationsByQuery operation.
     * @callback module:api/TranslationsApi~getTranslationsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TranslationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Translation or a list of Translations from Ziqni by unique Translation ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Retrieve a Translation or a list of Translations from Ziqni by unique Translation ID's or any other Post body parameters using the POST method
     * @param {module:api/TranslationsApi~getTranslationsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TranslationResponse}
     */
    getTranslationsByQuery(opts, callback) {
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
      let returnType = TranslationResponse;
      return this.apiClient.callApi(
        '/translations/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTranslations operation.
     * @callback module:api/TranslationsApi~updateTranslationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update existing translations
     * @param {Array.<module:model/UpdateTranslationRequest>} body Update Translations.
     * @param {module:api/TranslationsApi~updateTranslationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateTranslations(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTranslations");
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
        '/translations', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
