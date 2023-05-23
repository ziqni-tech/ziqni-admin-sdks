//
// CreateLanguageRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct CreateLanguageRequest: Codable, Hashable {

    /** A list of custom field entries */
    public var customFields: [String: AnyCodable]?
    /** A list of id's used to tag models */
    public var tags: [String]?
    public var metadata: [String: String]?
    /** A reference to the pre created language keys */
    public var key: String

    public init(customFields: [String: AnyCodable]? = nil, tags: [String]? = nil, metadata: [String: String]? = nil, key: String) {
        self.customFields = customFields
        self.tags = tags
        self.metadata = metadata
        self.key = key
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case customFields
        case tags
        case metadata
        case key
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(customFields, forKey: .customFields)
        try container.encodeIfPresent(tags, forKey: .tags)
        try container.encodeIfPresent(metadata, forKey: .metadata)
        try container.encode(key, forKey: .key)
    }
}
