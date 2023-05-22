//
// ContestReducedAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct ContestReducedAllOf: Codable, Hashable {

    /** A unique identifier of a Competition */
    public var competitionId: String
    /** The row number for displaying the Contest in a table */
    public var row: Int
    /** A name for the Contest. Can be translated */
    public var name: String
    /** To what round does the contest belong */
    public var round: Int
    /** Is used for more complex Competitions e.g. multi round competitions where round 1 group stage matched round 2 */
    public var groupStage: Int
    /** A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional. */
    public var entrantsFromContest: [String]
    public var status: ContestStatus
    /** The code of the contest */
    public var statusCode: Int
    /** ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone */
    public var scheduledStartDate: Date
    /** ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone */
    public var scheduledEndDate: Date
    /** ISO8601 timestamp for when a Contest started. All records are stored in UTC time zone */
    public var actualStartDate: Date?
    /** ISO8601 timestamp for when a Contest ended. All records are stored in UTC time zone */
    public var actualEndDate: Date?
    /** A list of id's used to tag */
    public var tags: [String]?
    public var rewards: [RewardReduced]?

    public init(competitionId: String, row: Int, name: String, round: Int, groupStage: Int, entrantsFromContest: [String], status: ContestStatus, statusCode: Int, scheduledStartDate: Date, scheduledEndDate: Date, actualStartDate: Date? = nil, actualEndDate: Date? = nil, tags: [String]? = nil, rewards: [RewardReduced]? = nil) {
        self.competitionId = competitionId
        self.row = row
        self.name = name
        self.round = round
        self.groupStage = groupStage
        self.entrantsFromContest = entrantsFromContest
        self.status = status
        self.statusCode = statusCode
        self.scheduledStartDate = scheduledStartDate
        self.scheduledEndDate = scheduledEndDate
        self.actualStartDate = actualStartDate
        self.actualEndDate = actualEndDate
        self.tags = tags
        self.rewards = rewards
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case competitionId
        case row
        case name
        case round
        case groupStage
        case entrantsFromContest
        case status
        case statusCode
        case scheduledStartDate
        case scheduledEndDate
        case actualStartDate
        case actualEndDate
        case tags
        case rewards
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(competitionId, forKey: .competitionId)
        try container.encode(row, forKey: .row)
        try container.encode(name, forKey: .name)
        try container.encode(round, forKey: .round)
        try container.encode(groupStage, forKey: .groupStage)
        try container.encode(entrantsFromContest, forKey: .entrantsFromContest)
        try container.encode(status, forKey: .status)
        try container.encode(statusCode, forKey: .statusCode)
        try container.encode(scheduledStartDate, forKey: .scheduledStartDate)
        try container.encode(scheduledEndDate, forKey: .scheduledEndDate)
        try container.encodeIfPresent(actualStartDate, forKey: .actualStartDate)
        try container.encodeIfPresent(actualEndDate, forKey: .actualEndDate)
        try container.encodeIfPresent(tags, forKey: .tags)
        try container.encodeIfPresent(rewards, forKey: .rewards)
    }
}

