//
// TranslatedField.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct TranslatedField: Codable, Hashable {

    /** The name of the translatable field of the model. Reference to translatableFields */
    public var fieldName: String
    /** The text of the selected language */
    public var text: String

    public init(fieldName: String, text: String) {
        self.fieldName = fieldName
        self.text = text
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case fieldName
        case text
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(fieldName, forKey: .fieldName)
        try container.encode(text, forKey: .text)
    }
}

