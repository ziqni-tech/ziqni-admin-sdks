//
// UpdateContestRequestAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct UpdateContestRequestAllOf: Codable, Hashable {

    /** A name for the Contest. Can be translated */
    public var name: String?
    /** A name for the Contest. Can be translated */
    public var description: String?
    /** A name for the Contest. Can be translated */
    public var termsAndConditions: String?
    public var roundType: RoundType?
    /** Maximum number of entrants for the contest */
    public var maxNumberOfEntrants: Int?
    /** Minimum number of entrants for the contest */
    public var minNumberOfEntrants: Int?
    /** ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone */
    public var scheduledStartDate: Date?
    /** ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone */
    public var scheduledEndDate: Date?
    public var strategies: Strategy?
    /** Additional constraints */
    public var constraints: [String]?

    public init(name: String? = nil, description: String? = nil, termsAndConditions: String? = nil, roundType: RoundType? = nil, maxNumberOfEntrants: Int? = nil, minNumberOfEntrants: Int? = nil, scheduledStartDate: Date? = nil, scheduledEndDate: Date? = nil, strategies: Strategy? = nil, constraints: [String]? = nil) {
        self.name = name
        self.description = description
        self.termsAndConditions = termsAndConditions
        self.roundType = roundType
        self.maxNumberOfEntrants = maxNumberOfEntrants
        self.minNumberOfEntrants = minNumberOfEntrants
        self.scheduledStartDate = scheduledStartDate
        self.scheduledEndDate = scheduledEndDate
        self.strategies = strategies
        self.constraints = constraints
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case name
        case description
        case termsAndConditions
        case roundType
        case maxNumberOfEntrants
        case minNumberOfEntrants
        case scheduledStartDate
        case scheduledEndDate
        case strategies
        case constraints
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encodeIfPresent(termsAndConditions, forKey: .termsAndConditions)
        try container.encodeIfPresent(roundType, forKey: .roundType)
        try container.encodeIfPresent(maxNumberOfEntrants, forKey: .maxNumberOfEntrants)
        try container.encodeIfPresent(minNumberOfEntrants, forKey: .minNumberOfEntrants)
        try container.encodeIfPresent(scheduledStartDate, forKey: .scheduledStartDate)
        try container.encodeIfPresent(scheduledEndDate, forKey: .scheduledEndDate)
        try container.encodeIfPresent(strategies, forKey: .strategies)
        try container.encodeIfPresent(constraints, forKey: .constraints)
    }
}

