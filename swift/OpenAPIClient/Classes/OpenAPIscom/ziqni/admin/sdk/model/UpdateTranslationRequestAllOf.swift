//
// UpdateTranslationRequestAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct UpdateTranslationRequestAllOf: Codable, Hashable {

    public var entityId: String?
    public var entityType: String?
    public var languageId: String?
    public var languageKey: String?
    public var translations: [TranslationEntry]

    public init(entityId: String? = nil, entityType: String? = nil, languageId: String? = nil, languageKey: String? = nil, translations: [TranslationEntry]) {
        self.entityId = entityId
        self.entityType = entityType
        self.languageId = languageId
        self.languageKey = languageKey
        self.translations = translations
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case entityId
        case entityType
        case languageId
        case languageKey
        case translations
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(entityId, forKey: .entityId)
        try container.encodeIfPresent(entityType, forKey: .entityType)
        try container.encodeIfPresent(languageId, forKey: .languageId)
        try container.encodeIfPresent(languageKey, forKey: .languageKey)
        try container.encode(translations, forKey: .translations)
    }
}
