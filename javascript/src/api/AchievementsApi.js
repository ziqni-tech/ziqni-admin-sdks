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
import AchievementIssuedResponse from '../model/AchievementIssuedResponse';
import AchievementResponse from '../model/AchievementResponse';
import ApiResponse from '../model/ApiResponse';
import CloneAchievementResponse from '../model/CloneAchievementResponse';
import CreateAchievementRequest from '../model/CreateAchievementRequest';
import InstantWinStatusRequest from '../model/InstantWinStatusRequest';
import MemberAchievementIssuedResponse from '../model/MemberAchievementIssuedResponse';
import QueryRequest from '../model/QueryRequest';
import UpdateAchievementRequest from '../model/UpdateAchievementRequest';
import UpdateAchievementStateRequest from '../model/UpdateAchievementStateRequest';

/**
* Achievements service.
* @module api/AchievementsApi
* @version 0.0.26
*/
export default class AchievementsApi {

    /**
    * Constructs a new AchievementsApi. 
    * @alias module:api/AchievementsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAchievements operation.
     * @callback module:api/AchievementsApi~createAchievementsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Achievements
     * Create Achievements in the Ziqni database
     * @param {Array.<module:model/CreateAchievementRequest>} body Create Achievements in the Ziqni database
     * @param {module:api/AchievementsApi~createAchievementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createAchievements(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createAchievements");
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
        '/achievements', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAchievements operation.
     * @callback module:api/AchievementsApi~deleteAchievementsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Achievements
     * Delete Achievements for a given identifier specified
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {module:api/AchievementsApi~deleteAchievementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteAchievements(opts, callback) {
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
        '/achievements', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAchievementsByQuery operation.
     * @callback module:api/AchievementsApi~deleteAchievementsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Achievements from Ziqni database by unique Achievements ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Delete Achievements from Ziqni database by unique Achievements ID's or any other Post body parameters using the POST method
     * @param {module:api/AchievementsApi~deleteAchievementsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteAchievementsByQuery(opts, callback) {
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
        '/achievements/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAchievementToClone operation.
     * @callback module:api/AchievementsApi~getAchievementToCloneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloneAchievementResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clones an Achievement for the identifier provided
     * @param {String} id Unique identifier of the resource
     * @param {module:api/AchievementsApi~getAchievementToCloneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloneAchievementResponse}
     */
    getAchievementToClone(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAchievementToClone");
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
      let returnType = CloneAchievementResponse;
      return this.apiClient.callApi(
        '/achievements/{id}/clone', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAchievements operation.
     * @callback module:api/AchievementsApi~getAchievementsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AchievementResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Achievements
     * Returns a list of Achievements. This assumes that achievements have first been uploaded via a POST request or web console
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/AchievementsApi~getAchievementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AchievementResponse}
     */
    getAchievements(opts, callback) {
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
      let returnType = AchievementResponse;
      return this.apiClient.callApi(
        '/achievements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAchievementsByQuery operation.
     * @callback module:api/AchievementsApi~getAchievementsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AchievementResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Achievements from Ziqni database by unique Achievements ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Retrieve Achievements from Ziqni database by unique Achievements ID's or any other Post body parameters using the POST method
     * @param {module:api/AchievementsApi~getAchievementsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AchievementResponse}
     */
    getAchievementsByQuery(opts, callback) {
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
      let returnType = AchievementResponse;
      return this.apiClient.callApi(
        '/achievements/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAntecendentsForAchievement operation.
     * @callback module:api/AchievementsApi~getAntecendentsForAchievementCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AchievementResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT AVAILABLE IN CURRENT RELEASE
     * Receive a list of Antecedent Achievements for the Achievement identified provided
     * @param {String} id Unique identifier of the resource
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/AchievementsApi~getAntecendentsForAchievementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AchievementResponse}
     */
    getAntecendentsForAchievement(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAntecendentsForAchievement");
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
      let returnType = AchievementResponse;
      return this.apiClient.callApi(
        '/achievements/{id}/antecedents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getIssuedAchievementsCountById operation.
     * @callback module:api/AchievementsApi~getIssuedAchievementsCountByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AchievementIssuedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Receive a count of Issued Achievements by identifier provided
     * @param {String} id Unique identifier of the resource
     * @param {module:api/AchievementsApi~getIssuedAchievementsCountByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AchievementIssuedResponse}
     */
    getIssuedAchievementsCountById(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getIssuedAchievementsCountById");
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
      let returnType = AchievementIssuedResponse;
      return this.apiClient.callApi(
        '/achievements/{id}/issued', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMembersAchievementsDetails operation.
     * @callback module:api/AchievementsApi~getMembersAchievementsDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MemberAchievementIssuedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Receive a list of members that had an Achievement issued for the Achievement identified provided
     * @param {String} id Unique identifier of the resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.memberId Id of a member
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/AchievementsApi~getMembersAchievementsDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MemberAchievementIssuedResponse}
     */
    getMembersAchievementsDetails(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getMembersAchievementsDetails");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'memberId': opts['memberId'],
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
      let returnType = MemberAchievementIssuedResponse;
      return this.apiClient.callApi(
        '/achievements/{id}/members', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAchievements operation.
     * @callback module:api/AchievementsApi~updateAchievementsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Achievements
     * Update existing Achievements in the Ziqni database
     * @param {Array.<module:model/UpdateAchievementRequest>} body Update Achievements in the Ziqni database. * An Achievement Id must exist in the Ziqni database for update
     * @param {module:api/AchievementsApi~updateAchievementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateAchievements(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateAchievements");
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
        '/achievements', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAchievementsState operation.
     * @callback module:api/AchievementsApi~updateAchievementsStateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Manage the state of achievement - Draft, Live, Archived
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/UpdateAchievementStateRequest>} opts.body Updates the state of the Achievement
     * @param {module:api/AchievementsApi~updateAchievementsStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateAchievementsState(opts, callback) {
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
        '/achievements/state', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInstantWinsStatus operation.
     * @callback module:api/AchievementsApi~updateInstantWinsStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Manage the state of achievement - Draft, Live, Archived
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/InstantWinStatusRequest>} opts.body Updates the state of the Achievement
     * @param {module:api/AchievementsApi~updateInstantWinsStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateInstantWinsStatus(opts, callback) {
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
        '/instant-wins/state', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
