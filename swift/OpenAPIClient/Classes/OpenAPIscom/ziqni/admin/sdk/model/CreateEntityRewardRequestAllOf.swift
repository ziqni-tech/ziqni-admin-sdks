//
// CreateEntityRewardRequestAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct CreateEntityRewardRequestAllOf: Codable, Hashable {

    public var entityType: RewardEntityType
    /** A unique identifier of an achievement or contest. Dependant on entityType */
    public var entityId: String
    /** The name of a reward */
    public var name: String
    /** The description of a Reward */
    public var description: String?
    /** If used in the context of contest this will associate with the rank of the leaderboard */
    public var rewardRank: String
    /** Numerical value of the reward that will be issued based on the reward type */
    public var rewardValue: Double
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
    public var translations: [Translation]?
    /** Additional constraints */
    public var constraints: [String]
    /** A unique id of the Reward Type */
    public var rewardTypeId: String

    public init(entityType: RewardEntityType, entityId: String, name: String, description: String? = nil, rewardRank: String, rewardValue: Double, icon: String? = nil, issueLimit: Int? = nil, delay: Int? = nil, pointInTime: Date? = nil, period: Int? = nil, translations: [Translation]? = nil, constraints: [String], rewardTypeId: String) {
        self.entityType = entityType
        self.entityId = entityId
        self.name = name
        self.description = description
        self.rewardRank = rewardRank
        self.rewardValue = rewardValue
        self.icon = icon
        self.issueLimit = issueLimit
        self.delay = delay
        self.pointInTime = pointInTime
        self.period = period
        self.translations = translations
        self.constraints = constraints
        self.rewardTypeId = rewardTypeId
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case entityType
        case entityId
        case name
        case description
        case rewardRank
        case rewardValue
        case icon
        case issueLimit
        case delay
        case pointInTime
        case period
        case translations
        case constraints
        case rewardTypeId
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(entityType, forKey: .entityType)
        try container.encode(entityId, forKey: .entityId)
        try container.encode(name, forKey: .name)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encode(rewardRank, forKey: .rewardRank)
        try container.encode(rewardValue, forKey: .rewardValue)
        try container.encodeIfPresent(icon, forKey: .icon)
        try container.encodeIfPresent(issueLimit, forKey: .issueLimit)
        try container.encodeIfPresent(delay, forKey: .delay)
        try container.encodeIfPresent(pointInTime, forKey: .pointInTime)
        try container.encodeIfPresent(period, forKey: .period)
        try container.encodeIfPresent(translations, forKey: .translations)
        try container.encode(constraints, forKey: .constraints)
        try container.encode(rewardTypeId, forKey: .rewardTypeId)
    }
}

