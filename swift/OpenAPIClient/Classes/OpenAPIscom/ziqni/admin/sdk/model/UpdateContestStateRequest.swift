//
// UpdateContestStateRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct UpdateContestStateRequest: Codable, Hashable {

    /** A unique identifier of a Contest */
    public var contestId: String?
    public var status: ContestStateOperations?

    public init(contestId: String? = nil, status: ContestStateOperations? = nil) {
        self.contestId = contestId
        self.status = status
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case contestId
        case status
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(contestId, forKey: .contestId)
        try container.encodeIfPresent(status, forKey: .status)
    }
}

