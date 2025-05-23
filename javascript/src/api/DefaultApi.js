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

/**
* Default service.
* @module api/DefaultApi
* @version 0.0.26
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteSpace operation.
     * @callback module:api/DefaultApi~deleteSpaceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT AVAILABLE IN CURRENT RELEASE
     * @param {String} name 
     * @param {module:api/DefaultApi~deleteSpaceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteSpace(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteSpace");
      }

      let pathParams = {
      };
      let queryParams = {
        'name': name
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/spaces', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unsubscribeFromEntityChanges operation.
     * @callback module:api/DefaultApi~unsubscribeFromEntityChangesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.subscriptionId 
     * @param {module:api/DefaultApi~unsubscribeFromEntityChangesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    unsubscribeFromEntityChanges(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'subscriptionId': opts['subscriptionId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/entity-changes', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
