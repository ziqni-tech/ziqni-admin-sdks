//
// UpdateRewardRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct UpdateRewardRequest: Codable, Hashable {

    /** A unique system generated identifier */
    public var id: String
    /** A list of id's used to add cutom fields */
    public var customFields: [String: AnyCodable]?
    /** A list of id's used to tag models */
    public var tags: [String]?
    public var metadata: [String: String]?
    /** The name of a reward */
    public var name: String?
    /** The description of a Reward */
    public var description: String?
    /** If used in the context of contest this will associate with the rank of the leaderboard */
    public var rewardRank: String?
    /** Numerical value of the reward that will be issued based on the reward type */
    public var rewardValue: Double?
    /** A unique id of the Reward Type */
    public var rewardTypeId: String?
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
    public var addConstraints: [String]?
    /** Remove constraints */
    public var removeConstraints: [String]?

    public init(id: String, customFields: [String: AnyCodable]? = nil, tags: [String]? = nil, metadata: [String: String]? = nil, name: String? = nil, description: String? = nil, rewardRank: String? = nil, rewardValue: Double? = nil, rewardTypeId: String? = nil, icon: String? = nil, issueLimit: Int? = nil, delay: Int? = nil, pointInTime: Date? = nil, period: Int? = nil, addConstraints: [String]? = nil, removeConstraints: [String]? = nil) {
        self.id = id
        self.customFields = customFields
        self.tags = tags
        self.metadata = metadata
        self.name = name
        self.description = description
        self.rewardRank = rewardRank
        self.rewardValue = rewardValue
        self.rewardTypeId = rewardTypeId
        self.icon = icon
        self.issueLimit = issueLimit
        self.delay = delay
        self.pointInTime = pointInTime
        self.period = period
        self.addConstraints = addConstraints
        self.removeConstraints = removeConstraints
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case customFields
        case tags
        case metadata
        case name
        case description
        case rewardRank
        case rewardValue
        case rewardTypeId
        case icon
        case issueLimit
        case delay
        case pointInTime
        case period
        case addConstraints
        case removeConstraints
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encodeIfPresent(customFields, forKey: .customFields)
        try container.encodeIfPresent(tags, forKey: .tags)
        try container.encodeIfPresent(metadata, forKey: .metadata)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encodeIfPresent(rewardRank, forKey: .rewardRank)
        try container.encodeIfPresent(rewardValue, forKey: .rewardValue)
        try container.encodeIfPresent(rewardTypeId, forKey: .rewardTypeId)
        try container.encodeIfPresent(icon, forKey: .icon)
        try container.encodeIfPresent(issueLimit, forKey: .issueLimit)
        try container.encodeIfPresent(delay, forKey: .delay)
        try container.encodeIfPresent(pointInTime, forKey: .pointInTime)
        try container.encodeIfPresent(period, forKey: .period)
        try container.encodeIfPresent(addConstraints, forKey: .addConstraints)
        try container.encodeIfPresent(removeConstraints, forKey: .removeConstraints)
    }
}

