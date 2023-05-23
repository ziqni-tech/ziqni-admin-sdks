//
// UpdateConnectionRequestAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct UpdateConnectionRequestAllOf: Codable, Hashable {

    /** The name of the consumer */
    public var name: String?
    /** The description of the consumer */
    public var description: String?
    /** Additional constraints */
    public var constraints: [String]?
    /** The transformer to use, if empty the default system transformer will be used */
    public var transformerId: String?
    public var connectionType: ConnectionType?
    /** Consumer secret used for authentication */
    public var secret: String?
    /** Consumer username for authentication */
    public var user: String?

    public init(name: String? = nil, description: String? = nil, constraints: [String]? = nil, transformerId: String? = nil, connectionType: ConnectionType? = nil, secret: String? = nil, user: String? = nil) {
        self.name = name
        self.description = description
        self.constraints = constraints
        self.transformerId = transformerId
        self.connectionType = connectionType
        self.secret = secret
        self.user = user
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case name
        case description
        case constraints
        case transformerId
        case connectionType
        case secret
        case user
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encodeIfPresent(constraints, forKey: .constraints)
        try container.encodeIfPresent(transformerId, forKey: .transformerId)
        try container.encodeIfPresent(connectionType, forKey: .connectionType)
        try container.encodeIfPresent(secret, forKey: .secret)
        try container.encodeIfPresent(user, forKey: .user)
    }
}
