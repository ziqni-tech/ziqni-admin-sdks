//
// StartEndDate.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct StartEndDate: Codable, Hashable {

    /** The date and time of when something should start. ISO8601 timestamp */
    public var start: Date
    /** The date and time of when something should end. ISO8601 timestamp */
    public var end: Date?

    public init(start: Date, end: Date? = nil) {
        self.start = start
        self.end = end
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case start
        case end
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(start, forKey: .start)
        try container.encodeIfPresent(end, forKey: .end)
    }
}

