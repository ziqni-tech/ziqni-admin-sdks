//
// CreateCustomFieldRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Request to create custom fields */
public struct CreateCustomFieldRequest: Codable, Hashable {

    /** The name of a Custom field */
    public var name: String
    /** The key of a Custom field */
    public var key: String
    /** The description of a Custom field */
    public var description: String?
    public var fieldType: FieldType
    public var appliesTo: AppliesTo

    public init(name: String, key: String, description: String? = nil, fieldType: FieldType, appliesTo: AppliesTo) {
        self.name = name
        self.key = key
        self.description = description
        self.fieldType = fieldType
        self.appliesTo = appliesTo
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case name
        case key
        case description
        case fieldType
        case appliesTo
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(name, forKey: .name)
        try container.encode(key, forKey: .key)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encode(fieldType, forKey: .fieldType)
        try container.encode(appliesTo, forKey: .appliesTo)
    }
}

