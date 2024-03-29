//
// CreateTransformerRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct CreateTransformerRequest: Codable, Hashable {

    /** The name of the Transformer */
    public var name: String
    /** Source code */
    public var source: String?
    public var sourceLanguage: SourceLanguage

    public init(name: String, source: String? = nil, sourceLanguage: SourceLanguage) {
        self.name = name
        self.source = source
        self.sourceLanguage = sourceLanguage
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case name
        case source
        case sourceLanguage
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(name, forKey: .name)
        try container.encodeIfPresent(source, forKey: .source)
        try container.encode(sourceLanguage, forKey: .sourceLanguage)
    }
}

