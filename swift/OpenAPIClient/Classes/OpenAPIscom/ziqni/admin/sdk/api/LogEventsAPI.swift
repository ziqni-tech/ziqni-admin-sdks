//
// LogEventsAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class LogEventsAPI {

    /**

     - parameter body: (body) Retrieve Log Events from Ziqni database by unique Log Events ID&#39;s or any other Post body parameters using the POST method (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func getLogEventsByQuery(body: QueryRequest? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: LogEventResponse?, _ error: Error?) -> Void)) {
        getLogEventsByQueryWithRequestBuilder(body: body).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - POST /log-events/query
     - Retrieve Log Events from Ziqni database by unique Log Events ID's or any other POST body parameters using the POST method
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter body: (body) Retrieve Log Events from Ziqni database by unique Log Events ID&#39;s or any other Post body parameters using the POST method (optional)
     - returns: RequestBuilder<LogEventResponse> 
     */
    open class func getLogEventsByQueryWithRequestBuilder(body: QueryRequest? = nil) -> RequestBuilder<LogEventResponse> {
        let localVariablePath = "/log-events/query"
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: body)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<LogEventResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }
}