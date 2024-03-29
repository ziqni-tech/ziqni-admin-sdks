//
// CompetitionReducedAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct CompetitionReducedAllOf: Codable, Hashable {

    public var competitionType: CompetitionType
    /** Number of rounds to be played in a competition */
    public var numberOfRounds: Int
    /** A name or a name of a competition. Can be translated */
    public var name: String
    public var status: CompetitionStatus
    /** The code of the competition */
    public var statusCode: Int
    public var dependantOn: [Dependancy]
    public var entrantMemberType: String?
    /** ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone */
    public var scheduledStartDate: Date
    /** ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone */
    public var scheduledEndDate: Date
    /** ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone */
    public var actualStartDate: Date?
    /** ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone */
    public var actualEndDate: Date?
    /** A list of id's used to tag */
    public var tags: [String]?
    /** Additional constraints */
    public var constraints: [String]

    public init(competitionType: CompetitionType, numberOfRounds: Int, name: String, status: CompetitionStatus, statusCode: Int, dependantOn: [Dependancy], entrantMemberType: String? = nil, scheduledStartDate: Date, scheduledEndDate: Date, actualStartDate: Date? = nil, actualEndDate: Date? = nil, tags: [String]? = nil, constraints: [String]) {
        self.competitionType = competitionType
        self.numberOfRounds = numberOfRounds
        self.name = name
        self.status = status
        self.statusCode = statusCode
        self.dependantOn = dependantOn
        self.entrantMemberType = entrantMemberType
        self.scheduledStartDate = scheduledStartDate
        self.scheduledEndDate = scheduledEndDate
        self.actualStartDate = actualStartDate
        self.actualEndDate = actualEndDate
        self.tags = tags
        self.constraints = constraints
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case competitionType
        case numberOfRounds
        case name
        case status
        case statusCode
        case dependantOn
        case entrantMemberType
        case scheduledStartDate
        case scheduledEndDate
        case actualStartDate
        case actualEndDate
        case tags
        case constraints
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(competitionType, forKey: .competitionType)
        try container.encode(numberOfRounds, forKey: .numberOfRounds)
        try container.encode(name, forKey: .name)
        try container.encode(status, forKey: .status)
        try container.encode(statusCode, forKey: .statusCode)
        try container.encode(dependantOn, forKey: .dependantOn)
        try container.encodeIfPresent(entrantMemberType, forKey: .entrantMemberType)
        try container.encode(scheduledStartDate, forKey: .scheduledStartDate)
        try container.encode(scheduledEndDate, forKey: .scheduledEndDate)
        try container.encodeIfPresent(actualStartDate, forKey: .actualStartDate)
        try container.encodeIfPresent(actualEndDate, forKey: .actualEndDate)
        try container.encodeIfPresent(tags, forKey: .tags)
        try container.encode(constraints, forKey: .constraints)
    }
}

