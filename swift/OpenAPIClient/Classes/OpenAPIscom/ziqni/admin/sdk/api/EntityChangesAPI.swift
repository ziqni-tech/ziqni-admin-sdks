//
// EntityChangesAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class EntityChangesAPI {

    /**

     - parameter entityChangeSubscriptionRequest: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func manageEntityChangeSubscription(entityChangeSubscriptionRequest: EntityChangeSubscriptionRequest, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: EntityChangeSubscriptionResponse?, _ error: Error?) -> Void)) {
        manageEntityChangeSubscriptionWithRequestBuilder(entityChangeSubscriptionRequest: entityChangeSubscriptionRequest).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - POST /entity-changes
     - subscribes a client to receive out-of-band data
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter entityChangeSubscriptionRequest: (body)  
     - returns: RequestBuilder<EntityChangeSubscriptionResponse> 
     */
    open class func manageEntityChangeSubscriptionWithRequestBuilder(entityChangeSubscriptionRequest: EntityChangeSubscriptionRequest) -> RequestBuilder<EntityChangeSubscriptionResponse> {
        let localVariablePath = "/entity-changes"
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: entityChangeSubscriptionRequest)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<EntityChangeSubscriptionResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }
}
