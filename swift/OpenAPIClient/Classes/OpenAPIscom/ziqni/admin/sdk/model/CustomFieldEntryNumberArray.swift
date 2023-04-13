//
// CustomFieldEntryNumberArray.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** The base type for custom field entries */
public struct CustomFieldEntryNumberArray: Codable, Hashable {

    /** The data type stored in this generic object ( string, number, string[], number[]) */
    public var fieldType: String
    public var value: [Double]?

    public init(fieldType: String, value: [Double]? = nil) {
        self.fieldType = fieldType
        self.value = value
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case fieldType
        case value
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(fieldType, forKey: .fieldType)
        try container.encodeIfPresent(value, forKey: .value)
    }
}

