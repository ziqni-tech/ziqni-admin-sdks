//
// CreateCompetitionRequestAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct CreateCompetitionRequestAllOf: Codable, Hashable {

    public var competitionType: CompetitionType
    /** Number of rounds to be played in a competition */
    public var numberOfRounds: Int
    /** Number of group stages */
    public var numberOfGroupStages: Int?
    /** A name or a name of a competition. Can be translated */
    public var name: String
    /** Description of the competition. Can be translated */
    public var description: String?
    /** Terms and conditions of a competition. Can be translated */
    public var termsAndConditions: String?
    public var entrantMemberType: String?
    /** Maximum number of partiipants allowed in a competition */
    public var maxNumberOfEntrants: Int?
    /** Maximum number of partiipants allowed in a competition */
    public var minNumberOfEntrants: Int
    public var rules: [Rule]?
    /** ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone */
    public var scheduledStartDate: Date
    /** ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone */
    public var scheduledEndDate: Date
    public var translations: [Translation]?
    public var contests: CreateContestRequest?
    public var rewards: [CreateRewardRequest]?
    /** Additional constraints */
    @available(*, deprecated, message: "This property is deprecated.")
    public var constraints: [String]
    /** Additional constraints */
    public var addConstraints: [String]?
    public var productIds: [String]
    public var entrantMemberTagsFilter: DependantOn?
    public var productTagsFilter: DependantOn?

    public init(competitionType: CompetitionType, numberOfRounds: Int, numberOfGroupStages: Int? = nil, name: String, description: String? = nil, termsAndConditions: String? = nil, entrantMemberType: String? = nil, maxNumberOfEntrants: Int? = nil, minNumberOfEntrants: Int, rules: [Rule]? = nil, scheduledStartDate: Date, scheduledEndDate: Date, translations: [Translation]? = nil, contests: CreateContestRequest? = nil, rewards: [CreateRewardRequest]? = nil, constraints: [String], addConstraints: [String]? = nil, productIds: [String], entrantMemberTagsFilter: DependantOn? = nil, productTagsFilter: DependantOn? = nil) {
        self.competitionType = competitionType
        self.numberOfRounds = numberOfRounds
        self.numberOfGroupStages = numberOfGroupStages
        self.name = name
        self.description = description
        self.termsAndConditions = termsAndConditions
        self.entrantMemberType = entrantMemberType
        self.maxNumberOfEntrants = maxNumberOfEntrants
        self.minNumberOfEntrants = minNumberOfEntrants
        self.rules = rules
        self.scheduledStartDate = scheduledStartDate
        self.scheduledEndDate = scheduledEndDate
        self.translations = translations
        self.contests = contests
        self.rewards = rewards
        self.constraints = constraints
        self.addConstraints = addConstraints
        self.productIds = productIds
        self.entrantMemberTagsFilter = entrantMemberTagsFilter
        self.productTagsFilter = productTagsFilter
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case competitionType
        case numberOfRounds
        case numberOfGroupStages
        case name
        case description
        case termsAndConditions
        case entrantMemberType
        case maxNumberOfEntrants
        case minNumberOfEntrants
        case rules
        case scheduledStartDate
        case scheduledEndDate
        case translations
        case contests
        case rewards
        case constraints
        case addConstraints
        case productIds
        case entrantMemberTagsFilter
        case productTagsFilter
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(competitionType, forKey: .competitionType)
        try container.encode(numberOfRounds, forKey: .numberOfRounds)
        try container.encodeIfPresent(numberOfGroupStages, forKey: .numberOfGroupStages)
        try container.encode(name, forKey: .name)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encodeIfPresent(termsAndConditions, forKey: .termsAndConditions)
        try container.encodeIfPresent(entrantMemberType, forKey: .entrantMemberType)
        try container.encodeIfPresent(maxNumberOfEntrants, forKey: .maxNumberOfEntrants)
        try container.encode(minNumberOfEntrants, forKey: .minNumberOfEntrants)
        try container.encodeIfPresent(rules, forKey: .rules)
        try container.encode(scheduledStartDate, forKey: .scheduledStartDate)
        try container.encode(scheduledEndDate, forKey: .scheduledEndDate)
        try container.encodeIfPresent(translations, forKey: .translations)
        try container.encodeIfPresent(contests, forKey: .contests)
        try container.encodeIfPresent(rewards, forKey: .rewards)
        try container.encode(constraints, forKey: .constraints)
        try container.encodeIfPresent(addConstraints, forKey: .addConstraints)
        try container.encode(productIds, forKey: .productIds)
        try container.encodeIfPresent(entrantMemberTagsFilter, forKey: .entrantMemberTagsFilter)
        try container.encodeIfPresent(productTagsFilter, forKey: .productTagsFilter)
    }
}

