//
// WebhookTriggersResponse.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct WebhookTriggersResponse: Codable, Hashable {

    public var meta: MetaExtended
    public var results: [Triggers]?
    public var errors: [ModelError]?

    public init(meta: MetaExtended, results: [Triggers]? = nil, errors: [ModelError]? = nil) {
        self.meta = meta
        self.results = results
        self.errors = errors
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case meta
        case results
        case errors
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(meta, forKey: .meta)
        try container.encodeIfPresent(results, forKey: .results)
        try container.encodeIfPresent(errors, forKey: .errors)
    }
}

