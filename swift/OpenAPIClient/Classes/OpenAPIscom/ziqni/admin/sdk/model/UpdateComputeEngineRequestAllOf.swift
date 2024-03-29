//
// UpdateComputeEngineRequestAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct UpdateComputeEngineRequestAllOf: Codable, Hashable {

    public var description: String?
    public var version: Int64?
    public var name: String?
    /** Long */
    public var uptime: Int64?
    public var statistics: [String: String]?
    public var lastKnownStatusCode: Int?
    public var metadata: [String: String]?
    /** Additional constraints */
    public var addConstraints: [String]?
    /** Additional constraints */
    public var removeConstraints: [String]?

    public init(description: String? = nil, version: Int64? = nil, name: String? = nil, uptime: Int64? = nil, statistics: [String: String]? = nil, lastKnownStatusCode: Int? = nil, metadata: [String: String]? = nil, addConstraints: [String]? = nil, removeConstraints: [String]? = nil) {
        self.description = description
        self.version = version
        self.name = name
        self.uptime = uptime
        self.statistics = statistics
        self.lastKnownStatusCode = lastKnownStatusCode
        self.metadata = metadata
        self.addConstraints = addConstraints
        self.removeConstraints = removeConstraints
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case description
        case version
        case name
        case uptime
        case statistics
        case lastKnownStatusCode
        case metadata
        case addConstraints
        case removeConstraints
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encodeIfPresent(version, forKey: .version)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(uptime, forKey: .uptime)
        try container.encodeIfPresent(statistics, forKey: .statistics)
        try container.encodeIfPresent(lastKnownStatusCode, forKey: .lastKnownStatusCode)
        try container.encodeIfPresent(metadata, forKey: .metadata)
        try container.encodeIfPresent(addConstraints, forKey: .addConstraints)
        try container.encodeIfPresent(removeConstraints, forKey: .removeConstraints)
    }
}

