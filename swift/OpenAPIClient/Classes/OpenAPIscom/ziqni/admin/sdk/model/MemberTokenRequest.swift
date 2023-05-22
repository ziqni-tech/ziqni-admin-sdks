//
// MemberTokenRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct MemberTokenRequest: Codable, Hashable {

    /** The API key to use to generate this token. */
    public var apiKey: String
    /** Default is FALSE, if set to TRUE then the meberId will be assumed to be client provided reference id, if set to false then the memberId will be assumed to be a ZIQNI generated identifier. */
    public var isReferenceId: Bool?
    /** Allowed origins for the generated token. Leave empty to permit all origins, Alternative provide up to 3 allowed origin URIs like https://my-space.api.ziqni.app  */
    public var origins: [String]?
    /** The identifier used to find the member information. if this value is set to \"__PUBLIC__\" and isReferenceId is set to \"FALSE\" then a genral use, non-member specific token will be issued */
    public var member: String
    /** The number of minutes this token will be valid for. If left blank the token will only be valid for 30 minutes */
    public var expires: Int?
    /** This will be ziqni-gapi or similar */
    public var resource: String
    /** A list of services to be disabled for this web token  */
    public var disabledServices: [String]?

    public init(apiKey: String, isReferenceId: Bool? = nil, origins: [String]? = nil, member: String, expires: Int? = nil, resource: String, disabledServices: [String]? = nil) {
        self.apiKey = apiKey
        self.isReferenceId = isReferenceId
        self.origins = origins
        self.member = member
        self.expires = expires
        self.resource = resource
        self.disabledServices = disabledServices
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case apiKey
        case isReferenceId
        case origins
        case member
        case expires
        case resource
        case disabledServices
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(apiKey, forKey: .apiKey)
        try container.encodeIfPresent(isReferenceId, forKey: .isReferenceId)
        try container.encodeIfPresent(origins, forKey: .origins)
        try container.encode(member, forKey: .member)
        try container.encodeIfPresent(expires, forKey: .expires)
        try container.encode(resource, forKey: .resource)
        try container.encodeIfPresent(disabledServices, forKey: .disabledServices)
    }
}

