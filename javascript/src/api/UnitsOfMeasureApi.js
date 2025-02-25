/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.18
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiResponse from '../model/ApiResponse';
import CreateUnitOfMeasureRequest from '../model/CreateUnitOfMeasureRequest';
import QueryRequest from '../model/QueryRequest';
import UnitOfMeasureResponse from '../model/UnitOfMeasureResponse';
import UpdateUnitOfMeasureRequest from '../model/UpdateUnitOfMeasureRequest';

/**
* UnitsOfMeasure service.
* @module api/UnitsOfMeasureApi
* @version 0.0.26
*/
export default class UnitsOfMeasureApi {

    /**
    * Constructs a new UnitsOfMeasureApi. 
    * @alias module:api/UnitsOfMeasureApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createUnitsOfMeasure operation.
     * @callback module:api/UnitsOfMeasureApi~createUnitsOfMeasureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Unit of measure in the Ziqni database
     * @param {Array.<module:model/CreateUnitOfMeasureRequest>} body Create a Unit of measure in the Ziqni database
     * @param {module:api/UnitsOfMeasureApi~createUnitsOfMeasureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createUnitsOfMeasure(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createUnitsOfMeasure");
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
        '/units-of-measure', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUnitsOfMeasure operation.
     * @callback module:api/UnitsOfMeasureApi~deleteUnitsOfMeasureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the Unit of measured for a given identifier specified
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {module:api/UnitsOfMeasureApi~deleteUnitsOfMeasureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteUnitsOfMeasure(opts, callback) {
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
        '/units-of-measure', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUnitsOfMeasureByQuery operation.
     * @callback module:api/UnitsOfMeasureApi~deleteUnitsOfMeasureByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete units of measure by query
     * Delete Units of measure from Ziqni database by unique Unit of measure ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Delete Units of measure from Ziqni database by unique Unit of measure ID's or any other POST body parameters using the POST method
     * @param {module:api/UnitsOfMeasureApi~deleteUnitsOfMeasureByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteUnitsOfMeasureByQuery(opts, callback) {
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
        '/units-of-measure/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUnitsOfMeasure operation.
     * @callback module:api/UnitsOfMeasureApi~getUnitsOfMeasureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnitOfMeasureResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of Units of measure. This assumes that units of measure have first been uploaded via a POST request or web console
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/UnitsOfMeasureApi~getUnitsOfMeasureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UnitOfMeasureResponse}
     */
    getUnitsOfMeasure(opts, callback) {
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
      let returnType = UnitOfMeasureResponse;
      return this.apiClient.callApi(
        '/units-of-measure', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUnitsOfMeasureByQuery operation.
     * @callback module:api/UnitsOfMeasureApi~getUnitsOfMeasureByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnitOfMeasureResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Units of measure from Ziqni database by unique Unit of measure ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Retrieve Units of measure from Ziqni database by unique Unit of measure ID's or any other POST body parameters using the POST method
     * @param {module:api/UnitsOfMeasureApi~getUnitsOfMeasureByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UnitOfMeasureResponse}
     */
    getUnitsOfMeasureByQuery(opts, callback) {
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
      let returnType = UnitOfMeasureResponse;
      return this.apiClient.callApi(
        '/units-of-measure/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUnitsOfMeasure operation.
     * @callback module:api/UnitsOfMeasureApi~updateUnitsOfMeasureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing Unit of measure in the Ziqni database
     * @param {Array.<module:model/UpdateUnitOfMeasureRequest>} body Update a Unit of measure in the Ziqni database.
     * @param {module:api/UnitsOfMeasureApi~updateUnitsOfMeasureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateUnitsOfMeasure(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateUnitsOfMeasure");
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
        '/units-of-measure', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
