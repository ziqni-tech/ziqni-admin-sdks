//
// CustomFieldReducedAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct CustomFieldReducedAllOf: Codable, Hashable {

    /** The key of a Custom field */
    public var key: String
    public var fieldType: FieldType

    public init(key: String, fieldType: FieldType) {
        self.key = key
        self.fieldType = fieldType
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case key
        case fieldType
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(key, forKey: .key)
        try container.encode(fieldType, forKey: .fieldType)
    }
}

