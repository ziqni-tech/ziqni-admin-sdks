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
import MemberTokenRequest from '../model/MemberTokenRequest';
import TokenResponse from '../model/TokenResponse';

/**
* MemberToken service.
* @module api/MemberTokenApi
* @version 0.0.26
*/
export default class MemberTokenApi {

    /**
    * Constructs a new MemberTokenApi. 
    * @alias module:api/MemberTokenApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createMemberToken operation.
     * @callback module:api/MemberTokenApi~createMemberTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Jwt Token
     * @param {module:model/MemberTokenRequest} memberTokenRequest 
     * @param {module:api/MemberTokenApi~createMemberTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TokenResponse}
     */
    createMemberToken(memberTokenRequest, callback) {
      let postBody = memberTokenRequest;
      // verify the required parameter 'memberTokenRequest' is set
      if (memberTokenRequest === undefined || memberTokenRequest === null) {
        throw new Error("Missing the required parameter 'memberTokenRequest' when calling createMemberToken");
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
      let returnType = TokenResponse;
      return this.apiClient.callApi(
        '/member-token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
