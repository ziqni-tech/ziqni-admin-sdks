//
// TranslationValue.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct TranslationValue: Codable, Hashable {

    /** This is the field from language key */
    public var key: String?
    public var translatedFields: [TranslatedField]?

    public init(key: String? = nil, translatedFields: [TranslatedField]? = nil) {
        self.key = key
        self.translatedFields = translatedFields
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case key
        case translatedFields
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(key, forKey: .key)
        try container.encodeIfPresent(translatedFields, forKey: .translatedFields)
    }
}

