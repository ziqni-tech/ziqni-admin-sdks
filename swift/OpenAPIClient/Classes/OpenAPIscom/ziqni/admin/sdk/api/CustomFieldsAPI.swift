//
// CustomFieldsAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class CustomFieldsAPI {

    /**
     Create custom fields
     
     - parameter body: (body) Create Custom fields in the Ziqni database 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func createCustomFields(body: [CreateCustomFieldRequest], apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiResponse?, _ error: Error?) -> Void)) {
        createCustomFieldsWithRequestBuilder(body: body).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Create custom fields
     - POST /custom-fields
     - Create new Custom fields in the Ziqni database
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter body: (body) Create Custom fields in the Ziqni database 
     - returns: RequestBuilder<ApiResponse> 
     */
    open class func createCustomFieldsWithRequestBuilder(body: [CreateCustomFieldRequest]) -> RequestBuilder<ApiResponse> {
        let localVariablePath = "/custom-fields"
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
     Delete custom fields
     
     - parameter id: (query) The unique identifiers of the resources (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func deleteCustomFields(id: [String]? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiResponse?, _ error: Error?) -> Void)) {
        deleteCustomFieldsWithRequestBuilder(id: id).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Delete custom fields
     - DELETE /custom-fields
     - Delete the Custom fields for a given identifier specified
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter id: (query) The unique identifiers of the resources (optional)
     - returns: RequestBuilder<ApiResponse> 
     */
    open class func deleteCustomFieldsWithRequestBuilder(id: [String]? = nil) -> RequestBuilder<ApiResponse> {
        let localVariablePath = "/custom-fields"
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
     Delete custom fields by query
     
     - parameter body: (body) Delete Custom fields from Ziqni database by unique Custom field ID&#39;s or any other POST body parameters using the POST method (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func deleteCustomFieldsByQuery(body: QueryRequest? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiResponse?, _ error: Error?) -> Void)) {
        deleteCustomFieldsByQueryWithRequestBuilder(body: body).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Delete custom fields by query
     - POST /custom-fields/delete
     - Delete Custom fields from Ziqni database by unique Custom field ID's or any other POST body parameters using the POST method
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter body: (body) Delete Custom fields from Ziqni database by unique Custom field ID&#39;s or any other POST body parameters using the POST method (optional)
     - returns: RequestBuilder<ApiResponse> 
     */
    open class func deleteCustomFieldsByQueryWithRequestBuilder(body: QueryRequest? = nil) -> RequestBuilder<ApiResponse> {
        let localVariablePath = "/custom-fields/delete"
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
     Get custom fields
     
     - parameter id: (query) The unique identifiers of the resources (optional)
     - parameter limit: (query) Limit the returned total records found (optional)
     - parameter skip: (query) Skip the returned records found and return the next batch of records (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func getCustomFields(id: [String]? = nil, limit: Int? = nil, skip: Int? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: CustomFieldResponse?, _ error: Error?) -> Void)) {
        getCustomFieldsWithRequestBuilder(id: id, limit: limit, skip: skip).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get custom fields
     - GET /custom-fields
     - Returns a list of Custom fields. This assumes that custom fields have first been uploaded via a POST request or web console
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter id: (query) The unique identifiers of the resources (optional)
     - parameter limit: (query) Limit the returned total records found (optional)
     - parameter skip: (query) Skip the returned records found and return the next batch of records (optional)
     - returns: RequestBuilder<CustomFieldResponse> 
     */
    open class func getCustomFieldsWithRequestBuilder(id: [String]? = nil, limit: Int? = nil, skip: Int? = nil) -> RequestBuilder<CustomFieldResponse> {
        let localVariablePath = "/custom-fields"
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

        let localVariableRequestBuilder: RequestBuilder<CustomFieldResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**
     Get custom fields by query
     
     - parameter body: (body) Retrieve Custom fields from Ziqni database by unique Custom field ID&#39;s or any other Post body parameters using the POST method (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func getCustomFieldsByQuery(body: QueryRequest? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: CustomFieldResponse?, _ error: Error?) -> Void)) {
        getCustomFieldsByQueryWithRequestBuilder(body: body).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get custom fields by query
     - POST /custom-fields/query
     - Retrieve Custom fields from Ziqni database by unique Custom field ID's or any other POST body parameters using the POST method
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter body: (body) Retrieve Custom fields from Ziqni database by unique Custom field ID&#39;s or any other Post body parameters using the POST method (optional)
     - returns: RequestBuilder<CustomFieldResponse> 
     */
    open class func getCustomFieldsByQueryWithRequestBuilder(body: QueryRequest? = nil) -> RequestBuilder<CustomFieldResponse> {
        let localVariablePath = "/custom-fields/query"
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: body)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<CustomFieldResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**
     Update custom fields
     
     - parameter body: (body) Update Custom fields details in the Ziqni database 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func updateCustomFields(body: [UpdateCustomFieldRequest], apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiResponse?, _ error: Error?) -> Void)) {
        updateCustomFieldsWithRequestBuilder(body: body).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Update custom fields
     - PUT /custom-fields
     - Update existing Custom fields in the Ziqni database
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter body: (body) Update Custom fields details in the Ziqni database 
     - returns: RequestBuilder<ApiResponse> 
     */
    open class func updateCustomFieldsWithRequestBuilder(body: [UpdateCustomFieldRequest]) -> RequestBuilder<ApiResponse> {
        let localVariablePath = "/custom-fields"
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