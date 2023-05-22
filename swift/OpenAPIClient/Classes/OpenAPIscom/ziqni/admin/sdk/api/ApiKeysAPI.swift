//
// ApiKeysAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class ApiKeysAPI {

    /**
     Delete api keys
     
     - parameter body: (body) Create an Api key in the Ziqni system 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func createApiKeys(body: CreateApiKeyRequest, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiResponse?, _ error: Error?) -> Void)) {
        createApiKeysWithRequestBuilder(body: body).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Delete api keys
     - POST /api-keys
     - Create a new Api key in the Ziqni system
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter body: (body) Create an Api key in the Ziqni system 
     - returns: RequestBuilder<ApiResponse> 
     */
    open class func createApiKeysWithRequestBuilder(body: CreateApiKeyRequest) -> RequestBuilder<ApiResponse> {
        let localVariablePath = "/api-keys"
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: body)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<ApiResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**
     Delete api keys
     
     - parameter id: (query) The unique identifiers of the resources (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func deleteApiKeys(id: [String]? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiResponse?, _ error: Error?) -> Void)) {
        deleteApiKeysWithRequestBuilder(id: id).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Delete api keys
     - DELETE /api-keys
     - Delete Api keys for a given identifier specified
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter id: (query) The unique identifiers of the resources (optional)
     - returns: RequestBuilder<ApiResponse> 
     */
    open class func deleteApiKeysWithRequestBuilder(id: [String]? = nil) -> RequestBuilder<ApiResponse> {
        let localVariablePath = "/api-keys"
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)
        localVariableUrlComponents?.queryItems = APIHelper.mapValuesToQueryItems([
            "id": id?.encodeToJSON(),
        ])

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<ApiResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "DELETE", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**
     Delete api keys by id
     
     - parameter id: (path) Unique identifier of the resource 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func deleteApiKeysById(id: String, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiResponse?, _ error: Error?) -> Void)) {
        deleteApiKeysByIdWithRequestBuilder(id: id).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Delete api keys by id
     - DELETE /api-keys/{id}
     - Delete the Api key for a given identifier specified
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter id: (path) Unique identifier of the resource 
     - returns: RequestBuilder<ApiResponse> 
     */
    open class func deleteApiKeysByIdWithRequestBuilder(id: String) -> RequestBuilder<ApiResponse> {
        var localVariablePath = "/api-keys/{id}"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<ApiResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "DELETE", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**
     Delete api keys by query
     
     - parameter body: (body) Delete an Api key or a list of Api keys from Ziqni by unique Api key ID&#39;s or any other POST body parameters using the POST method (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func deleteApiKeysByQuery(body: QueryRequest? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiResponse?, _ error: Error?) -> Void)) {
        deleteApiKeysByQueryWithRequestBuilder(body: body).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Delete api keys by query
     - POST /api-keys/delete
     - Delete an Api key or a list of Api keys from Ziqni by query
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter body: (body) Delete an Api key or a list of Api keys from Ziqni by unique Api key ID&#39;s or any other POST body parameters using the POST method (optional)
     - returns: RequestBuilder<ApiResponse> 
     */
    open class func deleteApiKeysByQueryWithRequestBuilder(body: QueryRequest? = nil) -> RequestBuilder<ApiResponse> {
        let localVariablePath = "/api-keys/delete"
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: body)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<ApiResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**
     Get api keys
     
     - parameter id: (query) The unique identifiers of the resources (optional)
     - parameter limit: (query) Limit the returned total records found (optional)
     - parameter skip: (query) Skip the returned records found and return the next batch of records (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func getApiKeys(id: [String]? = nil, limit: Int? = nil, skip: Int? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiKeyResponse?, _ error: Error?) -> Void)) {
        getApiKeysWithRequestBuilder(id: id, limit: limit, skip: skip).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get api keys
     - GET /api-keys
     - Returns a list of Api keys. This assumes that api keys have first been created via a POST request or web console
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter id: (query) The unique identifiers of the resources (optional)
     - parameter limit: (query) Limit the returned total records found (optional)
     - parameter skip: (query) Skip the returned records found and return the next batch of records (optional)
     - returns: RequestBuilder<ApiKeyResponse> 
     */
    open class func getApiKeysWithRequestBuilder(id: [String]? = nil, limit: Int? = nil, skip: Int? = nil) -> RequestBuilder<ApiKeyResponse> {
        let localVariablePath = "/api-keys"
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)
        localVariableUrlComponents?.queryItems = APIHelper.mapValuesToQueryItems([
            "id": id?.encodeToJSON(),
            "_limit": limit?.encodeToJSON(),
            "_skip": skip?.encodeToJSON(),
        ])

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<ApiKeyResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**
     Get api keys by id
     
     - parameter id: (path) Unique identifier of the resource 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func getApiKeysById(id: String, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiKeyResponse?, _ error: Error?) -> Void)) {
        getApiKeysByIdWithRequestBuilder(id: id).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get api keys by id
     - GET /api-keys/{id}
     - Returns an Api key by identifier provided. This assumes that api keys have first been created via a POST request or web console
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter id: (path) Unique identifier of the resource 
     - returns: RequestBuilder<ApiKeyResponse> 
     */
    open class func getApiKeysByIdWithRequestBuilder(id: String) -> RequestBuilder<ApiKeyResponse> {
        var localVariablePath = "/api-keys/{id}"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<ApiKeyResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**
     Get api keys by query
     
     - parameter body: (body) Retrieve an Api key or a list of Api keys from Ziqni by unique Api key ID&#39;s or any other POST body parameters using the POST method (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func getApiKeysByQuery(body: QueryRequest? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiKeyResponse?, _ error: Error?) -> Void)) {
        getApiKeysByQueryWithRequestBuilder(body: body).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get api keys by query
     - POST /api-keys/query
     - Retrieve an Api key or a list of Api keys by query
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter body: (body) Retrieve an Api key or a list of Api keys from Ziqni by unique Api key ID&#39;s or any other POST body parameters using the POST method (optional)
     - returns: RequestBuilder<ApiKeyResponse> 
     */
    open class func getApiKeysByQueryWithRequestBuilder(body: QueryRequest? = nil) -> RequestBuilder<ApiKeyResponse> {
        let localVariablePath = "/api-keys/query"
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: body)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<ApiKeyResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**
     Update api keys
     
     - parameter body: (body) Update an Api key in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func updateApiKeys(body: UpdateApiKeyRequest, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiResponse?, _ error: Error?) -> Void)) {
        updateApiKeysWithRequestBuilder(body: body).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Update api keys
     - PUT /api-keys
     - Update an existing Api key in the Ziqni system
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter body: (body) Update an Api key in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field 
     - returns: RequestBuilder<ApiResponse> 
     */
    open class func updateApiKeysWithRequestBuilder(body: UpdateApiKeyRequest) -> RequestBuilder<ApiResponse> {
        let localVariablePath = "/api-keys"
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: body)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<ApiResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "PUT", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }
}
