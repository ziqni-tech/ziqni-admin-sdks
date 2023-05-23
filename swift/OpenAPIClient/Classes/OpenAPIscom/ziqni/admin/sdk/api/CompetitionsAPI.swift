//
// CompetitionsAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class CompetitionsAPI {

    /**

     - parameter body: (body) Create a Competition in the Ziqni database 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func createCompetitions(body: CreateCompetitionRequest, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiResponse?, _ error: Error?) -> Void)) {
        createCompetitionsWithRequestBuilder(body: body).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - POST /competitions
     - Create a new Competition in the Ziqni database
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter body: (body) Create a Competition in the Ziqni database 
     - returns: RequestBuilder<ApiResponse> 
     */
    open class func createCompetitionsWithRequestBuilder(body: CreateCompetitionRequest) -> RequestBuilder<ApiResponse> {
        let localVariablePath = "/competitions"
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

     - parameter body: (body) Create a Competition in the Ziqni database 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func createSimpleCompetitions(body: CreateSimpleCompetitionRequest, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiResponse?, _ error: Error?) -> Void)) {
        createSimpleCompetitionsWithRequestBuilder(body: body).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - POST /competitions/simple
     - Create a Simple Competition in the Ziqni database
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter body: (body) Create a Competition in the Ziqni database 
     - returns: RequestBuilder<ApiResponse> 
     */
    open class func createSimpleCompetitionsWithRequestBuilder(body: CreateSimpleCompetitionRequest) -> RequestBuilder<ApiResponse> {
        let localVariablePath = "/competitions/simple"
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

     - parameter id: (query) The unique identifiers of the resources (optional)
     - parameter limit: (query) Limit the returned total records found (optional)
     - parameter skip: (query) Skip the returned records found and return the next batch of records (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func getCompetitions(id: [String]? = nil, limit: Int? = nil, skip: Int? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: CompetitionResponse?, _ error: Error?) -> Void)) {
        getCompetitionsWithRequestBuilder(id: id, limit: limit, skip: skip).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - GET /competitions
     - Returns a list of Competitions. This assumes that competitions have first been uploaded via a POST request or web console
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter id: (query) The unique identifiers of the resources (optional)
     - parameter limit: (query) Limit the returned total records found (optional)
     - parameter skip: (query) Skip the returned records found and return the next batch of records (optional)
     - returns: RequestBuilder<CompetitionResponse> 
     */
    open class func getCompetitionsWithRequestBuilder(id: [String]? = nil, limit: Int? = nil, skip: Int? = nil) -> RequestBuilder<CompetitionResponse> {
        let localVariablePath = "/competitions"
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

        let localVariableRequestBuilder: RequestBuilder<CompetitionResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**

     - parameter body: (body) Retrieve Competitions from Ziqni database by unique Competition ID&#39;s or any other POST body parameters using the POST method (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func getCompetitionsByQuery(body: QueryRequest? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: CompetitionResponse?, _ error: Error?) -> Void)) {
        getCompetitionsByQueryWithRequestBuilder(body: body).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - POST /competitions/query
     - Retrieve Competitions from Ziqni database by unique Competition ID's or any other POST body parameters using the POST method
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter body: (body) Retrieve Competitions from Ziqni database by unique Competition ID&#39;s or any other POST body parameters using the POST method (optional)
     - returns: RequestBuilder<CompetitionResponse> 
     */
    open class func getCompetitionsByQueryWithRequestBuilder(body: QueryRequest? = nil) -> RequestBuilder<CompetitionResponse> {
        let localVariablePath = "/competitions/query"
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: body)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<CompetitionResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**
     Get Competition To Clone
     
     - parameter id: (path) Unique identifier of the resource 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func getCompetitionsToClone(id: String, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: CloneCompetitionResponse?, _ error: Error?) -> Void)) {
        getCompetitionsToCloneWithRequestBuilder(id: id).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get Competition To Clone
     - GET /competitions/{id}/clone
     - Clones a Competition for the identifier provided
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter id: (path) Unique identifier of the resource 
     - returns: RequestBuilder<CloneCompetitionResponse> 
     */
    open class func getCompetitionsToCloneWithRequestBuilder(id: String) -> RequestBuilder<CloneCompetitionResponse> {
        var localVariablePath = "/competitions/{id}/clone"
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

        let localVariableRequestBuilder: RequestBuilder<CloneCompetitionResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**

     - parameter id: (path) Unique identifier of the resource 
     - parameter limit: (query) Limit the returned total records found (optional)
     - parameter skip: (query) Skip the returned records found and return the next batch of records (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(*, deprecated, message: "This operation is deprecated.")
    open class func getLeaderboardByCompetitionId(id: String, limit: Int? = nil, skip: Int? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: CompetitionLeaderboardResponse?, _ error: Error?) -> Void)) {
        getLeaderboardByCompetitionIdWithRequestBuilder(id: id, limit: limit, skip: skip).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - GET /competitions/{id}/leaderboard
     - Use /leadeboard instead. Returns a list of Leaderborads for the Competition id provided
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter id: (path) Unique identifier of the resource 
     - parameter limit: (query) Limit the returned total records found (optional)
     - parameter skip: (query) Skip the returned records found and return the next batch of records (optional)
     - returns: RequestBuilder<CompetitionLeaderboardResponse> 
     */
    @available(*, deprecated, message: "This operation is deprecated.")
    open class func getLeaderboardByCompetitionIdWithRequestBuilder(id: String, limit: Int? = nil, skip: Int? = nil) -> RequestBuilder<CompetitionLeaderboardResponse> {
        var localVariablePath = "/competitions/{id}/leaderboard"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)
        localVariableUrlComponents?.queryItems = APIHelper.mapValuesToQueryItems([
            "_limit": limit?.encodeToJSON(),
            "_skip": skip?.encodeToJSON(),
        ])

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<CompetitionLeaderboardResponse>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**

     - parameter body: (body) Update a Competition in the Ziqni database. * A Competitions Id must exist in the Ziqni database for update 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func updateCompetitions(body: UpdateCompetitionRequest, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiResponse?, _ error: Error?) -> Void)) {
        updateCompetitionsWithRequestBuilder(body: body).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - PUT /competitions
     - Update an existing Competition in the Ziqni database
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter body: (body) Update a Competition in the Ziqni database. * A Competitions Id must exist in the Ziqni database for update 
     - returns: RequestBuilder<ApiResponse> 
     */
    open class func updateCompetitionsWithRequestBuilder(body: UpdateCompetitionRequest) -> RequestBuilder<ApiResponse> {
        let localVariablePath = "/competitions"
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

     - parameter body: (body) Updates the state of the Competition (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func updateCompetitionsState(body: [UpdateCompetitionStatusRequest]? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: ApiResponse?, _ error: Error?) -> Void)) {
        updateCompetitionsStateWithRequestBuilder(body: body).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - PUT /competitions/state
     - Manages the Competitions state
     - OAuth:
       - type: oauth2
       - name: OAuth2
     - parameter body: (body) Updates the state of the Competition (optional)
     - returns: RequestBuilder<ApiResponse> 
     */
    open class func updateCompetitionsStateWithRequestBuilder(body: [UpdateCompetitionStatusRequest]? = nil) -> RequestBuilder<ApiResponse> {
        let localVariablePath = "/competitions/state"
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