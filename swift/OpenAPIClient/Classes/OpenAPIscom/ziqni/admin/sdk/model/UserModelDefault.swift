//
// UserModelDefault.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct UserModelDefault: Codable, Hashable {

    public var objectType: String

    public init(objectType: String) {
        self.objectType = objectType
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case objectType
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(objectType, forKey: .objectType)
    }
}

