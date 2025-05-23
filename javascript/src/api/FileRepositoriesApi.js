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
import CreateRepositoryRequest from '../model/CreateRepositoryRequest';
import QueryRequest from '../model/QueryRequest';
import RepositoryResponse from '../model/RepositoryResponse';
import UpdateRepositoryRequest from '../model/UpdateRepositoryRequest';

/**
* FileRepositories service.
* @module api/FileRepositoriesApi
* @version 0.0.26
*/
export default class FileRepositoriesApi {

    /**
    * Constructs a new FileRepositoriesApi. 
    * @alias module:api/FileRepositoriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createFileRepositories operation.
     * @callback module:api/FileRepositoriesApi~createFileRepositoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new file object repository in your Ziqni space
     * @param {Array.<module:model/CreateRepositoryRequest>} body Create a new file object repository in your Ziqni space
     * @param {module:api/FileRepositoriesApi~createFileRepositoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createFileRepositories(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createFileRepositories");
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
        '/file-repositories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFileRepositories operation.
     * @callback module:api/FileRepositoriesApi~deleteFileRepositoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the file repository for a given identifier specified
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Boolean} opts.permanent Permanently delete the file object. Default is false
     * @param {module:api/FileRepositoriesApi~deleteFileRepositoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteFileRepositories(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        'permanent': opts['permanent']
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
        '/file-repositories', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFileRepositoriesByQuery operation.
     * @callback module:api/FileRepositoriesApi~deleteFileRepositoriesByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete repositories nby query. Delete repositories by query and/or unique repository ID's or any other body parameters
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Delete repositories from a Ziqni space by unique repository ID's or any other POST body parameters using the POST method
     * @param {module:api/FileRepositoriesApi~deleteFileRepositoriesByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteFileRepositoriesByQuery(opts, callback) {
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
        '/file-repositories/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFileRepositories operation.
     * @callback module:api/FileRepositoriesApi~getFileRepositoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepositoryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of file object repositories. This assumes that repositories have first been uploaded via a POST request or web console
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {module:api/FileRepositoriesApi~getFileRepositoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepositoryResponse}
     */
    getFileRepositories(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        '_limit': opts['limit'],
        '_skip': opts['skip'],
        'id': this.apiClient.buildCollectionParam(opts['id'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RepositoryResponse;
      return this.apiClient.callApi(
        '/file-repositories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFileRepositoriesByQuery operation.
     * @callback module:api/FileRepositoriesApi~getFileRepositoriesByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepositoryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find file object repositories by query
     * @param {Object} opts Optional parameters
     * @param {module:model/QueryRequest} opts.body Retrieve file object repositories from Ziqni by unique repository ID's or any other POST body parameters using the POST method
     * @param {module:api/FileRepositoriesApi~getFileRepositoriesByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepositoryResponse}
     */
    getFileRepositoriesByQuery(opts, callback) {
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
      let returnType = RepositoryResponse;
      return this.apiClient.callApi(
        '/file-repositories/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFileRepositories operation.
     * @callback module:api/FileRepositoriesApi~updateFileRepositoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a file object repository in your Ziqni space.
     * @param {Array.<module:model/UpdateRepositoryRequest>} body Update a file object repository in your Ziqni space.
     * @param {module:api/FileRepositoriesApi~updateFileRepositoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateFileRepositories(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateFileRepositories");
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
        '/file-repositories', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
