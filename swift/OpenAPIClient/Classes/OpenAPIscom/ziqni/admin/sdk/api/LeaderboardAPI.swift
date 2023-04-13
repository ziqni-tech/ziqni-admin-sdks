//
// LeaderboardAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class LeaderboardAPI {

    /**

     - parameter id: (query)  
     - parameter limit: (query) Limit the returned total records found (optional)
     - parameter skip: (query) Skip the returned records found and return the next batch of records (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func getLeaderboardById(id: String, limit: Int? = nil, skip: Int? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: LeaderboardResponse?, _ error: Error?) -> Void)) {
        getLeaderboardByIdWithRequestBuilder(id: id, limit: limit, skip: skip).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - GET /leaderboard
     - Returns a leaderborads for the competition or contest id provided
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter id: (query)  
     - parameter limit: (query) Limit the returned total records found (optional)
     - parameter skip: (query) Skip the returned records found and return the next batch of records (optional)
     - returns: RequestBuilder<LeaderboardResponse> 
     */
    open class func getLeaderboardByIdWithRequestBuilder(id: String, limit: Int? = nil, skip: Int? = nil) -> RequestBuilder<LeaderboardResponse> {
        let localVariablePath = "/leaderboard"
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)
        localVariableUrlComponents?.queryItems = APIHelper.mapValuesToQueryItems([
            "_limit": limit?.encodeToJSON(),
            "_skip": skip?.encodeToJSON(),
            "id": id.encodeToJSON(),
        ])

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<LeaderboardResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }
}
