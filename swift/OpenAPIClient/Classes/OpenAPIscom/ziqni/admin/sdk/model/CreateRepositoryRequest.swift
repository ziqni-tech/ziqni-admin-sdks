//
// CreateRepositoryRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct CreateRepositoryRequest: Codable, Hashable {

    /** A list of custom field entries */
    public var customFields: [String: AnyCodable]?
    /** A list of id's used to tag models */
    public var tags: [String]?
    public var metadata: [String: String]?
    /** The name of the repository. No special charaters or spaces permitted */
    public var name: String
    /** The description of the repository */
    public var description: String?
    /** Additional constraints */
    public var constraints: [String]
    public var hostingOptions: HostingOptions?

    public init(customFields: [String: AnyCodable]? = nil, tags: [String]? = nil, metadata: [String: String]? = nil, name: String, description: String? = nil, constraints: [String], hostingOptions: HostingOptions? = nil) {
        self.customFields = customFields
        self.tags = tags
        self.metadata = metadata
        self.name = name
        self.description = description
        self.constraints = constraints
        self.hostingOptions = hostingOptions
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case customFields
        case tags
        case metadata
        case name
        case description
        case constraints
        case hostingOptions
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(customFields, forKey: .customFields)
        try container.encodeIfPresent(tags, forKey: .tags)
        try container.encodeIfPresent(metadata, forKey: .metadata)
        try container.encode(name, forKey: .name)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encode(constraints, forKey: .constraints)
        try container.encodeIfPresent(hostingOptions, forKey: .hostingOptions)
    }
}

