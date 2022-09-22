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
import CloneContestResponse from '../model/CloneContestResponse';
import ContestLeaderboardResponse from '../model/ContestLeaderboardResponse';
import ContestResponse from '../model/ContestResponse';
import CreateContestForCompetitionRequest from '../model/CreateContestForCompetitionRequest';
import QueryRequest from '../model/QueryRequest';
import UpdateContestRequest from '../model/UpdateContestRequest';
import UpdateContestStateRequest from '../model/UpdateContestStateRequest';

/**
* Contests service.
* @module api/ContestsApi
* @version 0.0.26
*/
export default class ContestsApi {

    /**
    * Constructs a new ContestsApi. 
    * @alias module:api/ContestsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createContests operation.
     * @callback module:api/ContestsApi~createContestsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Contests in the Ziqni database
     * @param {module:model/CreateContestForCompetitionRequest} body Create a Contests in the Ziqni database
     * @param {module:api/ContestsApi~createContestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createContests(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createContests");
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
        '/contests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContests operation.
     * @callback module:api/ContestsApi~getContestsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of Contests. This assumes that contests have first been uploaded via a POST request or web console
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/ContestsApi~getContestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContestResponse}
     */
    getContests(opts, callback) {
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
      let returnType = ContestResponse;
      return this.apiClient.callApi(
        '/contests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContestsByQuery operation.
     * @callback module:api/ContestsApi~getContestsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Contests from Ziqni database by unique Contests ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Retrieve Contests from Ziqni database by unique Contest ID's or any other Post body parameters using the POST method
     * @param {module:api/ContestsApi~getContestsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContestResponse}
     */
    getContestsByQuery(opts, callback) {
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
      let returnType = ContestResponse;
      return this.apiClient.callApi(
        '/contests/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContestsLeaderboardById operation.
     * @callback module:api/ContestsApi~getContestsLeaderboardByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContestLeaderboardResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a leaderborad for the Contests id provided
     * @param {String} id Unique identifier of the resource
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/ContestsApi~getContestsLeaderboardByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContestLeaderboardResponse}
     */
    getContestsLeaderboardById(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getContestsLeaderboardById");
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
      let returnType = ContestLeaderboardResponse;
      return this.apiClient.callApi(
        '/contests/{id}/leaderboard', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContestsToClone operation.
     * @callback module:api/ContestsApi~getContestsToCloneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloneContestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clones a Contest for the identifier provided
     * @param {String} id Unique identifier of the resource
     * @param {module:api/ContestsApi~getContestsToCloneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloneContestResponse}
     */
    getContestsToClone(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getContestsToClone");
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
      let returnType = CloneContestResponse;
      return this.apiClient.callApi(
        '/contests/{id}/clone', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateContest operation.
     * @callback module:api/ContestsApi~updateContestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing Contest in the Ziqni database
     * @param {module:model/UpdateContestRequest} body Update a Contest in the Ziqni database. * A Contests Id must exist in the Ziqni database for update
     * @param {module:api/ContestsApi~updateContestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateContest(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateContest");
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
        '/contests', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateContestsState operation.
     * @callback module:api/ContestsApi~updateContestsStateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Manages the Contests state
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/UpdateContestStateRequest>} opts.body Updates the state of the Contest
     * @param {module:api/ContestsApi~updateContestsStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateContestsState(opts, callback) {
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
        '/contests/state', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
