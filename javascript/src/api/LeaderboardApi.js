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
import LeaderboardResponse from '../model/LeaderboardResponse';

/**
* Leaderboard service.
* @module api/LeaderboardApi
* @version 0.0.26
*/
export default class LeaderboardApi {

    /**
    * Constructs a new LeaderboardApi. 
    * @alias module:api/LeaderboardApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getLeaderboardById operation.
     * @callback module:api/LeaderboardApi~getLeaderboardByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LeaderboardResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a leaderborads for the competition or contest id provided
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/LeaderboardApi~getLeaderboardByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LeaderboardResponse}
     */
    getLeaderboardById(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getLeaderboardById");
      }

      let pathParams = {
      };
      let queryParams = {
        '_limit': opts['limit'],
        '_skip': opts['skip'],
        'id': id
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LeaderboardResponse;
      return this.apiClient.callApi(
        '/leaderboard', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}