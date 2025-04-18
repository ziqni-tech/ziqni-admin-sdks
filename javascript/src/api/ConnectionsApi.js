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
import ConnectionResponse from '../model/ConnectionResponse';
import ConnectionType from '../model/ConnectionType';
import CreateConnectionRequest from '../model/CreateConnectionRequest';
import ObjectParametersResponse from '../model/ObjectParametersResponse';
import QueryRequest from '../model/QueryRequest';
import UpdateConnectionRequest from '../model/UpdateConnectionRequest';
import UpdateConnectionStateRequest from '../model/UpdateConnectionStateRequest';

/**
* Connections service.
* @module api/ConnectionsApi
* @version 0.0.26
*/
export default class ConnectionsApi {

    /**
    * Constructs a new ConnectionsApi. 
    * @alias module:api/ConnectionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createConnections operation.
     * @callback module:api/ConnectionsApi~createConnectionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Consumer Connection in the Ziqni system
     * @param {Array.<module:model/CreateConnectionRequest>} body Create a RabbitMq Consumer Connection in the Ziqni system
     * @param {module:api/ConnectionsApi~createConnectionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createConnections(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createConnections");
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
        '/connections', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteConnections operation.
     * @callback module:api/ConnectionsApi~deleteConnectionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the Consumer Connection for a given identifier specified
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {module:api/ConnectionsApi~deleteConnectionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteConnections(opts, callback) {
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
        '/connections', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteConnectionsByQuery operation.
     * @callback module:api/ConnectionsApi~deleteConnectionsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Delete a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID's or any other POST body parameters using the POST method
     * @param {module:api/ConnectionsApi~deleteConnectionsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteConnectionsByQuery(opts, callback) {
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
        '/connections/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the describeConnectionObject operation.
     * @callback module:api/ConnectionsApi~describeConnectionObjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ObjectParametersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the parameter for the connection based on the connection type
     * @param {module:model/ConnectionType} connectionType The connection type, RabbitMQ, Kafka, or SQS
     * @param {module:api/ConnectionsApi~describeConnectionObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ObjectParametersResponse}
     */
    describeConnectionObject(connectionType, callback) {
      let postBody = null;
      // verify the required parameter 'connectionType' is set
      if (connectionType === undefined || connectionType === null) {
        throw new Error("Missing the required parameter 'connectionType' when calling describeConnectionObject");
      }

      let pathParams = {
      };
      let queryParams = {
        'connectionType': connectionType
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ObjectParametersResponse;
      return this.apiClient.callApi(
        '/connections/_describe', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConnections operation.
     * @callback module:api/ConnectionsApi~getConnectionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConnectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a list of Consumer Connections
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/ConnectionsApi~getConnectionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConnectionResponse}
     */
    getConnections(opts, callback) {
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
      let returnType = ConnectionResponse;
      return this.apiClient.callApi(
        '/connections', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConnectionsByQuery operation.
     * @callback module:api/ConnectionsApi~getConnectionsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConnectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID's or any other Post body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Retrieve a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID's or any other Post body parameters using the POST method
     * @param {module:api/ConnectionsApi~getConnectionsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConnectionResponse}
     */
    getConnectionsByQuery(opts, callback) {
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
      let returnType = ConnectionResponse;
      return this.apiClient.callApi(
        '/connections/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateConnections operation.
     * @callback module:api/ConnectionsApi~updateConnectionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing Consumer Connection in the Ziqni system
     * @param {Array.<module:model/UpdateConnectionRequest>} body Update the RabbitMq Consumer Connection details in the Ziqni system
     * @param {module:api/ConnectionsApi~updateConnectionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateConnections(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateConnections");
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
        '/connections', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateConnectionsState operation.
     * @callback module:api/ConnectionsApi~updateConnectionsStateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update connection status
     * Update the state of a Consumer using the POST method
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/UpdateConnectionStateRequest>} opts.body Update the state of a Consumer using the POST method
     * @param {module:api/ConnectionsApi~updateConnectionsStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateConnectionsState(opts, callback) {
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
        '/connections/state', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
