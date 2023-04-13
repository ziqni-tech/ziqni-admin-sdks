//
// MemberTokenAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class MemberTokenAPI {

    /**

     - parameter memberTokenRequest: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func createMemberToken(memberTokenRequest: MemberTokenRequest, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: TokenResponse?, _ error: Error?) -> Void)) {
        createMemberTokenWithRequestBuilder(memberTokenRequest: memberTokenRequest).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - POST /member-token
     - Get Jwt Token
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter memberTokenRequest: (body)  
     - returns: RequestBuilder<TokenResponse> 
     */
    open class func createMemberTokenWithRequestBuilder(memberTokenRequest: MemberTokenRequest) -> RequestBuilder<TokenResponse> {
        let localVariablePath = "/member-token"
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: memberTokenRequest)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<TokenResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }
}
