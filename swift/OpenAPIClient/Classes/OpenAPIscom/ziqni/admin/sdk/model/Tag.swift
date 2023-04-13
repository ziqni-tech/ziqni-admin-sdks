//
// Tag.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Tag model */
public struct Tag: Codable, Hashable {

    /** A unique system generated identifier */
    public var id: String
    /** This is the space name which is linked to the account */
    public var spaceName: String
    /** ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone */
    public var created: Date
    /** The name of the tag */
    public var name: String
    /** A unique key that represents a tag */
    public var key: String
    /** The description of the tag for your reference */
    public var description: String?
    /** The model name the tag refers to */
    public var entityTypes: [String]?
    public var metadata: [String: String]?

    public init(id: String, spaceName: String, created: Date, name: String, key: String, description: String? = nil, entityTypes: [String]? = nil, metadata: [String: String]? = nil) {
        self.id = id
        self.spaceName = spaceName
        self.created = created
        self.name = name
        self.key = key
        self.description = description
        self.entityTypes = entityTypes
        self.metadata = metadata
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case spaceName
        case created
        case name
        case key
        case description
        case entityTypes
        case metadata
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(spaceName, forKey: .spaceName)
        try container.encode(created, forKey: .created)
        try container.encode(name, forKey: .name)
        try container.encode(key, forKey: .key)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encodeIfPresent(entityTypes, forKey: .entityTypes)
        try container.encodeIfPresent(metadata, forKey: .metadata)
    }
}

