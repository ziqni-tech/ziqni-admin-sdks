//
// UpdateConnectionStateRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct UpdateConnectionStateRequest: Codable, Hashable {

    public var status: ConnectionState
    /** A unique system generated identifier */
    public var id: String

    public init(status: ConnectionState, id: String) {
        self.status = status
        self.id = id
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case status
        case id
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(status, forKey: .status)
        try container.encode(id, forKey: .id)
    }
}

