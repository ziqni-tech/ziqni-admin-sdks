/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.13
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiResponse from '../model/ApiResponse';
import CloneCompetitionResponse from '../model/CloneCompetitionResponse';
import CompetitionLeaderboardResponse from '../model/CompetitionLeaderboardResponse';
import CompetitionResponse from '../model/CompetitionResponse';
import CreateCompetitionRequest from '../model/CreateCompetitionRequest';
import CreateSimpleCompetitionRequest from '../model/CreateSimpleCompetitionRequest';
import QueryRequest from '../model/QueryRequest';
import UpdateCompetitionRequest from '../model/UpdateCompetitionRequest';
import UpdateCompetitionStatusRequest from '../model/UpdateCompetitionStatusRequest';

/**
* Competitions service.
* @module api/CompetitionsApi
* @version 0.0.26
*/
export default class CompetitionsApi {

    /**
    * Constructs a new CompetitionsApi. 
    * @alias module:api/CompetitionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCompetitions operation.
     * @callback module:api/CompetitionsApi~createCompetitionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Competition in the Ziqni database
     * @param {module:model/CreateCompetitionRequest} body Create a Competition in the Ziqni database
     * @param {module:api/CompetitionsApi~createCompetitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createCompetitions(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createCompetitions");
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
        '/competitions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createSimpleCompetitions operation.
     * @callback module:api/CompetitionsApi~createSimpleCompetitionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Simple Competition in the Ziqni database
     * @param {module:model/CreateSimpleCompetitionRequest} body Create a Competition in the Ziqni database
     * @param {module:api/CompetitionsApi~createSimpleCompetitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createSimpleCompetitions(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSimpleCompetitions");
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
        '/competitions/simple', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCompetitions operation.
     * @callback module:api/CompetitionsApi~getCompetitionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CompetitionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of Competitions. This assumes that competitions have first been uploaded via a POST request or web console
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/CompetitionsApi~getCompetitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CompetitionResponse}
     */
    getCompetitions(opts, callback) {
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
      let returnType = CompetitionResponse;
      return this.apiClient.callApi(
        '/competitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCompetitionsByQuery operation.
     * @callback module:api/CompetitionsApi~getCompetitionsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CompetitionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Competitions from Ziqni database by unique Competition ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Retrieve Competitions from Ziqni database by unique Competition ID's or any other POST body parameters using the POST method
     * @param {module:api/CompetitionsApi~getCompetitionsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CompetitionResponse}
     */
    getCompetitionsByQuery(opts, callback) {
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
      let returnType = CompetitionResponse;
      return this.apiClient.callApi(
        '/competitions/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCompetitionsToClone operation.
     * @callback module:api/CompetitionsApi~getCompetitionsToCloneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloneCompetitionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Competition To Clone
     * Clones a Competition for the identifier provided
     * @param {String} id Unique identifier of the resource
     * @param {module:api/CompetitionsApi~getCompetitionsToCloneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloneCompetitionResponse}
     */
    getCompetitionsToClone(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCompetitionsToClone");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CloneCompetitionResponse;
      return this.apiClient.callApi(
        '/competitions/{id}/clone', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLeaderboardByCompetitionId operation.
     * @callback module:api/CompetitionsApi~getLeaderboardByCompetitionIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CompetitionLeaderboardResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Use /leadeboard instead. Returns a list of Leaderborads for the Competition id provided
     * @param {String} id Unique identifier of the resource
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/CompetitionsApi~getLeaderboardByCompetitionIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CompetitionLeaderboardResponse}
     */
    getLeaderboardByCompetitionId(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getLeaderboardByCompetitionId");
      }

      let pathParams = {
        'id': id
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
      let returnType = CompetitionLeaderboardResponse;
      return this.apiClient.callApi(
        '/competitions/{id}/leaderboard', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCompetitions operation.
     * @callback module:api/CompetitionsApi~updateCompetitionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing Competition in the Ziqni database
     * @param {module:model/UpdateCompetitionRequest} body Update a Competition in the Ziqni database. * A Competitions Id must exist in the Ziqni database for update
     * @param {module:api/CompetitionsApi~updateCompetitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateCompetitions(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCompetitions");
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
        '/competitions', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCompetitionsState operation.
     * @callback module:api/CompetitionsApi~updateCompetitionsStateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Manages the Competitions state
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/UpdateCompetitionStatusRequest>} opts.body Updates the state of the Competition
     * @param {module:api/CompetitionsApi~updateCompetitionsStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateCompetitionsState(opts, callback) {
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
        '/competitions/state', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
