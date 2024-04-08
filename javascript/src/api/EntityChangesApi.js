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
import EntityChangeSubscriptionRequest from '../model/EntityChangeSubscriptionRequest';
import EntityChangeSubscriptionResponse from '../model/EntityChangeSubscriptionResponse';

/**
* EntityChanges service.
* @module api/EntityChangesApi
* @version 0.0.26
*/
export default class EntityChangesApi {

    /**
    * Constructs a new EntityChangesApi. 
    * @alias module:api/EntityChangesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the manageEntityChangeSubscription operation.
     * @callback module:api/EntityChangesApi~manageEntityChangeSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityChangeSubscriptionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * subscribes a client to receive out-of-band data
     * @param {module:model/EntityChangeSubscriptionRequest} entityChangeSubscriptionRequest 
     * @param {module:api/EntityChangesApi~manageEntityChangeSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityChangeSubscriptionResponse}
     */
    manageEntityChangeSubscription(entityChangeSubscriptionRequest, callback) {
      let postBody = entityChangeSubscriptionRequest;
      // verify the required parameter 'entityChangeSubscriptionRequest' is set
      if (entityChangeSubscriptionRequest === undefined || entityChangeSubscriptionRequest === null) {
        throw new Error("Missing the required parameter 'entityChangeSubscriptionRequest' when calling manageEntityChangeSubscription");
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
      let returnType = EntityChangeSubscriptionResponse;
      return this.apiClient.callApi(
        '/entity-changes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
