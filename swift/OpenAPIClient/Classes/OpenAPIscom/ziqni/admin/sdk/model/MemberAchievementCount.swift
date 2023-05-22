//
// MemberAchievementCount.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** This is the Member Achievement Count model */
public struct MemberAchievementCount: Codable, Hashable {

    /** A the name of the member */
    public var name: String
    /** A unique identifier of a Member */
    public var memberId: String
    /** The reference to this member in your system */
    public var memberRefId: String
    /** ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone */
    public var latestIssuedTimestamp: Date
    /** A unique identifier of a Entity */
    public var entityId: String
    /** The value in how many times the achievemnt was issued */
    public var countValue: Int

    public init(name: String, memberId: String, memberRefId: String, latestIssuedTimestamp: Date, entityId: String, countValue: Int) {
        self.name = name
        self.memberId = memberId
        self.memberRefId = memberRefId
        self.latestIssuedTimestamp = latestIssuedTimestamp
        self.entityId = entityId
        self.countValue = countValue
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case name
        case memberId
        case memberRefId
        case latestIssuedTimestamp
        case entityId
        case countValue
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(name, forKey: .name)
        try container.encode(memberId, forKey: .memberId)
        try container.encode(memberRefId, forKey: .memberRefId)
        try container.encode(latestIssuedTimestamp, forKey: .latestIssuedTimestamp)
        try container.encode(entityId, forKey: .entityId)
        try container.encode(countValue, forKey: .countValue)
    }
}

