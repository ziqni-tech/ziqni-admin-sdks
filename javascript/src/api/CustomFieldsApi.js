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
import CreateCustomFieldRequest from '../model/CreateCustomFieldRequest';
import CustomFieldResponse from '../model/CustomFieldResponse';
import QueryRequest from '../model/QueryRequest';
import UpdateCustomFieldRequest from '../model/UpdateCustomFieldRequest';

/**
* CustomFields service.
* @module api/CustomFieldsApi
* @version 0.0.26
*/
export default class CustomFieldsApi {

    /**
    * Constructs a new CustomFieldsApi. 
    * @alias module:api/CustomFieldsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCustomFields operation.
     * @callback module:api/CustomFieldsApi~createCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create custom fields
     * Create new Custom fields in the Ziqni database
     * @param {Array.<module:model/CreateCustomFieldRequest>} body Create Custom fields in the Ziqni database
     * @param {module:api/CustomFieldsApi~createCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createCustomFields(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createCustomFields");
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
        '/custom-fields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomFields operation.
     * @callback module:api/CustomFieldsApi~deleteCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete custom fields
     * Delete the Custom fields for a given identifier specified
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {module:api/CustomFieldsApi~deleteCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteCustomFields(opts, callback) {
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
        '/custom-fields', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomFieldsByQuery operation.
     * @callback module:api/CustomFieldsApi~deleteCustomFieldsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete custom fields by query
     * Delete Custom fields from Ziqni database by unique Custom field ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Delete Custom fields from Ziqni database by unique Custom field ID's or any other POST body parameters using the POST method
     * @param {module:api/CustomFieldsApi~deleteCustomFieldsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteCustomFieldsByQuery(opts, callback) {
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
        '/custom-fields/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomFields operation.
     * @callback module:api/CustomFieldsApi~getCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFieldResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get custom fields
     * Returns a list of Custom fields. This assumes that custom fields have first been uploaded via a POST request or web console
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/CustomFieldsApi~getCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFieldResponse}
     */
    getCustomFields(opts, callback) {
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
      let returnType = CustomFieldResponse;
      return this.apiClient.callApi(
        '/custom-fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomFieldsByQuery operation.
     * @callback module:api/CustomFieldsApi~getCustomFieldsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFieldResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get custom fields by query
     * Retrieve Custom fields from Ziqni database by unique Custom field ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Retrieve Custom fields from Ziqni database by unique Custom field ID's or any other Post body parameters using the POST method
     * @param {module:api/CustomFieldsApi~getCustomFieldsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFieldResponse}
     */
    getCustomFieldsByQuery(opts, callback) {
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
      let returnType = CustomFieldResponse;
      return this.apiClient.callApi(
        '/custom-fields/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCustomFields operation.
     * @callback module:api/CustomFieldsApi~updateCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update custom fields
     * Update existing Custom fields in the Ziqni database
     * @param {Array.<module:model/UpdateCustomFieldRequest>} body Update Custom fields details in the Ziqni database
     * @param {module:api/CustomFieldsApi~updateCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateCustomFields(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomFields");
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
        '/custom-fields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
