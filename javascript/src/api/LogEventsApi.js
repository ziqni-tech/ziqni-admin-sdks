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
import LogEventResponse from '../model/LogEventResponse';
import QueryRequest from '../model/QueryRequest';

/**
* LogEvents service.
* @module api/LogEventsApi
* @version 0.0.26
*/
export default class LogEventsApi {

    /**
    * Constructs a new LogEventsApi. 
    * @alias module:api/LogEventsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getLogEventsByQuery operation.
     * @callback module:api/LogEventsApi~getLogEventsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogEventResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Log Events from Ziqni database by unique Log Events ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Retrieve Log Events from Ziqni database by unique Log Events ID's or any other Post body parameters using the POST method
     * @param {module:api/LogEventsApi~getLogEventsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogEventResponse}
     */
    getLogEventsByQuery(opts, callback) {
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
      let returnType = LogEventResponse;
      return this.apiClient.callApi(
        '/log-events/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
