//
// Translation.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Translations to attach to the models. */
public struct Translation: Codable, Hashable {

    public var id: String
    public var accountId: String
    public var entityId: String
    public var entityType: String
    public var version: Int64
    /** date-time */
    public var created: Date
    public var translations: [TranslationEntry]
    public var languageKey: String

    public init(id: String, accountId: String, entityId: String, entityType: String, version: Int64, created: Date, translations: [TranslationEntry], languageKey: String) {
        self.id = id
        self.accountId = accountId
        self.entityId = entityId
        self.entityType = entityType
        self.version = version
        self.created = created
        self.translations = translations
        self.languageKey = languageKey
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case accountId
        case entityId
        case entityType
        case version
        case created
        case translations
        case languageKey
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(accountId, forKey: .accountId)
        try container.encode(entityId, forKey: .entityId)
        try container.encode(entityType, forKey: .entityType)
        try container.encode(version, forKey: .version)
        try container.encode(created, forKey: .created)
        try container.encode(translations, forKey: .translations)
        try container.encode(languageKey, forKey: .languageKey)
    }
}

