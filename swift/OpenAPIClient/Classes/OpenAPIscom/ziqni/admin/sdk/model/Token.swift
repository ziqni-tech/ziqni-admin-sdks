//
// Token.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct Token: Codable, Hashable {

    public var jwtToken: String

    public init(jwtToken: String) {
        self.jwtToken = jwtToken
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case jwtToken
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(jwtToken, forKey: .jwtToken)
    }
}

