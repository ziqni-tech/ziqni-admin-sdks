//
// RewardAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct RewardAllOf: Codable, Hashable {

    public var entityType: EntityType?
    /** A unique identifier of an achievement or contest. Dependant on entityType */
    public var entityId: String?
    /** The name of a reward */
    public var name: String?
    /** The description of a Reward */
    public var description: String?
    /** If used in the context of contest this will associate with the rank of the leaderboard */
    public var rewardRank: String
    /** Numerical value of the reward that will be issued based on the reward type */
    public var rewardValue: Double
    public var rewardType: RewardTypeReduced
    /** An Icon id that has been pre uploaded to the system to display for reward */
    public var icon: String?
    /** how many of thsese rewards are */
    public var issueLimit: Int?
    /** Delay of issuing a reward in minutes */
    public var delay: Int?
    /** ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone */
    public var pointInTime: Date?
    /** Reward available for a period of time from issuing in minutes */
    public var period: Int?
    /** Additional constraints */
    public var constraints: [String]

    public init(entityType: EntityType? = nil, entityId: String? = nil, name: String? = nil, description: String? = nil, rewardRank: String, rewardValue: Double, rewardType: RewardTypeReduced, icon: String? = nil, issueLimit: Int? = nil, delay: Int? = nil, pointInTime: Date? = nil, period: Int? = nil, constraints: [String]) {
        self.entityType = entityType
        self.entityId = entityId
        self.name = name
        self.description = description
        self.rewardRank = rewardRank
        self.rewardValue = rewardValue
        self.rewardType = rewardType
        self.icon = icon
        self.issueLimit = issueLimit
        self.delay = delay
        self.pointInTime = pointInTime
        self.period = period
        self.constraints = constraints
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case entityType
        case entityId
        case name
        case description
        case rewardRank
        case rewardValue
        case rewardType
        case icon
        case issueLimit
        case delay
        case pointInTime
        case period
        case constraints
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(entityType, forKey: .entityType)
        try container.encodeIfPresent(entityId, forKey: .entityId)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encode(rewardRank, forKey: .rewardRank)
        try container.encode(rewardValue, forKey: .rewardValue)
        try container.encode(rewardType, forKey: .rewardType)
        try container.encodeIfPresent(icon, forKey: .icon)
        try container.encodeIfPresent(issueLimit, forKey: .issueLimit)
        try container.encodeIfPresent(delay, forKey: .delay)
        try container.encodeIfPresent(pointInTime, forKey: .pointInTime)
        try container.encodeIfPresent(period, forKey: .period)
        try container.encode(constraints, forKey: .constraints)
    }
}

