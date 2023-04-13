//
// MemberAchievementCountAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct MemberAchievementCountAllOf: Codable, Hashable {

    /** A the name of the member */
    public var name: String
    /** A unique identifier of a Member */
    public var memberId: String
    /** The reference to this member in your system */
    public var memberRefId: String
    /** ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone */
    public var latestIssuedTimestamp: Date

    public init(name: String, memberId: String, memberRefId: String, latestIssuedTimestamp: Date) {
        self.name = name
        self.memberId = memberId
        self.memberRefId = memberRefId
        self.latestIssuedTimestamp = latestIssuedTimestamp
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case name
        case memberId
        case memberRefId
        case latestIssuedTimestamp
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(name, forKey: .name)
        try container.encode(memberId, forKey: .memberId)
        try container.encode(memberRefId, forKey: .memberRefId)
        try container.encode(latestIssuedTimestamp, forKey: .latestIssuedTimestamp)
    }
}

