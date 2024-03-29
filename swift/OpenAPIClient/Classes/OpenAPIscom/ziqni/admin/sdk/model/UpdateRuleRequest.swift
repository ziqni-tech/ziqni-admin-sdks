//
// UpdateRuleRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct UpdateRuleRequest: Codable, Hashable {

    /** A unique system generated identifier */
    public var id: String
    public var rules: Rule

    public init(id: String, rules: Rule) {
        self.id = id
        self.rules = rules
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case rules
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(rules, forKey: .rules)
    }
}

