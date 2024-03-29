//
// UpdateRepositoryRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct UpdateRepositoryRequest: Codable, Hashable {

    /** A unique system generated identifier */
    public var id: String
    /** A list of id's used to add cutom fields */
    public var customFields: [String: AnyCodable]?
    /** A list of id's used to tag models */
    public var tags: [String]?
    public var metadata: [String: String]?
    /** The name of the repository. No special charaters or spaces permitted */
    public var name: String?
    /** The description of the repository */
    public var description: String?
    /** Additional constraints */
    public var addConstraints: [String]?
    /** Additional constraints */
    public var removeConstraints: [String]?
    public var hostingOptions: HostingOptions?

    public init(id: String, customFields: [String: AnyCodable]? = nil, tags: [String]? = nil, metadata: [String: String]? = nil, name: String? = nil, description: String? = nil, addConstraints: [String]? = nil, removeConstraints: [String]? = nil, hostingOptions: HostingOptions? = nil) {
        self.id = id
        self.customFields = customFields
        self.tags = tags
        self.metadata = metadata
        self.name = name
        self.description = description
        self.addConstraints = addConstraints
        self.removeConstraints = removeConstraints
        self.hostingOptions = hostingOptions
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case customFields
        case tags
        case metadata
        case name
        case description
        case addConstraints
        case removeConstraints
        case hostingOptions
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encodeIfPresent(customFields, forKey: .customFields)
        try container.encodeIfPresent(tags, forKey: .tags)
        try container.encodeIfPresent(metadata, forKey: .metadata)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encodeIfPresent(addConstraints, forKey: .addConstraints)
        try container.encodeIfPresent(removeConstraints, forKey: .removeConstraints)
        try container.encodeIfPresent(hostingOptions, forKey: .hostingOptions)
    }
}

