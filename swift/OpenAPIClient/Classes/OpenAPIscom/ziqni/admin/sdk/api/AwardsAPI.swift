//
// AwardsAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class AwardsAPI {

    /**

     - parameter body: (body) Claim Awards 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func claimAwards(body: [ClaimAwardRequest], apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiResponse?, _ error: Error?) -> Void)) {
        claimAwardsWithRequestBuilder(body: body).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - PUT /awards/claim
     - Claim Awards that need to be actioned at
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter body: (body) Claim Awards 
     - returns: RequestBuilder<ApiResponse> 
     */
    open class func claimAwardsWithRequestBuilder(body: [ClaimAwardRequest]) -> RequestBuilder<ApiResponse> {
        let localVariablePath = "/awards/claim"
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

    /**

     - parameter id: (query) The unique identifiers of the resources (optional)
     - parameter limit: (query) Limit the returned total records found (optional)
     - parameter skip: (query) Skip the returned records found and return the next batch of records (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func getAwards(id: [String]? = nil, limit: Int? = nil, skip: Int? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: AwardResponse?, _ error: Error?) -> Void)) {
        getAwardsWithRequestBuilder(id: id, limit: limit, skip: skip).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - GET /awards
     - Returns a list of Awards.
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter id: (query) The unique identifiers of the resources (optional)
     - parameter limit: (query) Limit the returned total records found (optional)
     - parameter skip: (query) Skip the returned records found and return the next batch of records (optional)
     - returns: RequestBuilder<AwardResponse> 
     */
    open class func getAwardsWithRequestBuilder(id: [String]? = nil, limit: Int? = nil, skip: Int? = nil) -> RequestBuilder<AwardResponse> {
        let localVariablePath = "/awards"
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

        let localVariableRequestBuilder: RequestBuilder<AwardResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**

     - parameter body: (body) Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func getAwardsByQuery(body: QueryRequest? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: AwardResponse?, _ error: Error?) -> Void)) {
        getAwardsByQueryWithRequestBuilder(body: body).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - POST /awards/query
     - Retrieve Awards from Ziqni database by unique Awards ID's or any other POST body parameters using the POST method
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter body: (body) Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method (optional)
     - returns: RequestBuilder<AwardResponse> 
     */
    open class func getAwardsByQueryWithRequestBuilder(body: QueryRequest? = nil) -> RequestBuilder<AwardResponse> {
        let localVariablePath = "/awards/query"
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: body)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<AwardResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }
}
