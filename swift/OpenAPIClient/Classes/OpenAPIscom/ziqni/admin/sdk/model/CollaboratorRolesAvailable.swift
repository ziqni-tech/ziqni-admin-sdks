//
// CollaboratorRolesAvailable.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct CollaboratorRolesAvailable: Codable, Hashable {

    /** A unique system generated identifier */
    public var id: String
    /** This is the space name which is linked to the account */
    public var spaceName: String
    /** ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone */
    public var created: Date
    /** The access role of an individual */
    public var roles: [String]?

    public init(id: String, spaceName: String, created: Date, roles: [String]? = nil) {
        self.id = id
        self.spaceName = spaceName
        self.created = created
        self.roles = roles
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case spaceName
        case created
        case roles
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(spaceName, forKey: .spaceName)
        try container.encode(created, forKey: .created)
        try container.encodeIfPresent(roles, forKey: .roles)
    }
}

