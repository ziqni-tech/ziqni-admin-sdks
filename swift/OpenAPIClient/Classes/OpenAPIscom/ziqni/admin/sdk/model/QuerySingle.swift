//
// QuerySingle.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct QuerySingle: Codable, Hashable {

    /** The key of the parameter that is being searched */
    public var queryField: String
    /** The value of the parameter that is being searched */
    public var queryValue: String

    public init(queryField: String, queryValue: String) {
        self.queryField = queryField
        self.queryValue = queryValue
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case queryField
        case queryValue
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(queryField, forKey: .queryField)
        try container.encode(queryValue, forKey: .queryValue)
    }
}

