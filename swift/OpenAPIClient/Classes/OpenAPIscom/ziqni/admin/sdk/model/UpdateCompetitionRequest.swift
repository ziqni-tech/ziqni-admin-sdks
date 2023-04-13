//
// UpdateCompetitionRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct UpdateCompetitionRequest: Codable, Hashable {

    /** A unique system generated identifier */
    public var id: String
    /** A list of id's used to add cutom fields */
    public var customFields: [String: AnyCodable]?
    /** A list of id's used to tag models */
    public var tags: [String]?
    public var metadata: [String: String]?
    public var competitionType: CompetitionType?
    /** Number of rounds to be played in a competition */
    public var numberOfRounds: Int?
    /** Number of group stages */
    public var numberOfGroupStages: Int?
    /** A name or a name of a competition. Can be translated */
    public var name: String?
    /** Description of the competition. Can be translated */
    public var description: String?
    /** Terms and conditions of a competition. Can be translated */
    public var termsAndConditions: String?
    public var entrantMemberType: String?
    /** Maximum number of partiipants allowed in a competition */
    public var maxNumberOfEntrants: Int?
    /** Maximum number of partiipants allowed in a competition */
    public var minNumberOfEntrants: Int?
    /** ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone */
    public var scheduledStartDate: Date?
    /** ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone */
    public var scheduledEndDate: Date?
    /** Additional constraints */
    @available(*, deprecated, message: "This property is deprecated.")
    public var constraints: [String]?
    /** Additional constraints */
    public var addConstraints: [String]?
    /** Additional constraints */
    public var removeConstraints: [String]?
    public var productIds: [String]?
    public var createContests: CreateContestForCompetitionRequest?
    public var updateContests: UpdateContestRequest?
    public var entrantMemberTagsFilter: DependantOn?
    public var productTagsFilter: DependantOn?

    public init(id: String, customFields: [String: AnyCodable]? = nil, tags: [String]? = nil, metadata: [String: String]? = nil, competitionType: CompetitionType? = nil, numberOfRounds: Int? = nil, numberOfGroupStages: Int? = nil, name: String? = nil, description: String? = nil, termsAndConditions: String? = nil, entrantMemberType: String? = nil, maxNumberOfEntrants: Int? = nil, minNumberOfEntrants: Int? = nil, scheduledStartDate: Date? = nil, scheduledEndDate: Date? = nil, constraints: [String]? = nil, addConstraints: [String]? = nil, removeConstraints: [String]? = nil, productIds: [String]? = nil, createContests: CreateContestForCompetitionRequest? = nil, updateContests: UpdateContestRequest? = nil, entrantMemberTagsFilter: DependantOn? = nil, productTagsFilter: DependantOn? = nil) {
        self.id = id
        self.customFields = customFields
        self.tags = tags
        self.metadata = metadata
        self.competitionType = competitionType
        self.numberOfRounds = numberOfRounds
        self.numberOfGroupStages = numberOfGroupStages
        self.name = name
        self.description = description
        self.termsAndConditions = termsAndConditions
        self.entrantMemberType = entrantMemberType
        self.maxNumberOfEntrants = maxNumberOfEntrants
        self.minNumberOfEntrants = minNumberOfEntrants
        self.scheduledStartDate = scheduledStartDate
        self.scheduledEndDate = scheduledEndDate
        self.constraints = constraints
        self.addConstraints = addConstraints
        self.removeConstraints = removeConstraints
        self.productIds = productIds
        self.createContests = createContests
        self.updateContests = updateContests
        self.entrantMemberTagsFilter = entrantMemberTagsFilter
        self.productTagsFilter = productTagsFilter
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case customFields
        case tags
        case metadata
        case competitionType
        case numberOfRounds
        case numberOfGroupStages
        case name
        case description
        case termsAndConditions
        case entrantMemberType
        case maxNumberOfEntrants
        case minNumberOfEntrants
        case scheduledStartDate
        case scheduledEndDate
        case constraints
        case addConstraints
        case removeConstraints
        case productIds
        case createContests
        case updateContests
        case entrantMemberTagsFilter
        case productTagsFilter
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encodeIfPresent(customFields, forKey: .customFields)
        try container.encodeIfPresent(tags, forKey: .tags)
        try container.encodeIfPresent(metadata, forKey: .metadata)
        try container.encodeIfPresent(competitionType, forKey: .competitionType)
        try container.encodeIfPresent(numberOfRounds, forKey: .numberOfRounds)
        try container.encodeIfPresent(numberOfGroupStages, forKey: .numberOfGroupStages)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encodeIfPresent(termsAndConditions, forKey: .termsAndConditions)
        try container.encodeIfPresent(entrantMemberType, forKey: .entrantMemberType)
        try container.encodeIfPresent(maxNumberOfEntrants, forKey: .maxNumberOfEntrants)
        try container.encodeIfPresent(minNumberOfEntrants, forKey: .minNumberOfEntrants)
        try container.encodeIfPresent(scheduledStartDate, forKey: .scheduledStartDate)
        try container.encodeIfPresent(scheduledEndDate, forKey: .scheduledEndDate)
        try container.encodeIfPresent(constraints, forKey: .constraints)
        try container.encodeIfPresent(addConstraints, forKey: .addConstraints)
        try container.encodeIfPresent(removeConstraints, forKey: .removeConstraints)
        try container.encodeIfPresent(productIds, forKey: .productIds)
        try container.encodeIfPresent(createContests, forKey: .createContests)
        try container.encodeIfPresent(updateContests, forKey: .updateContests)
        try container.encodeIfPresent(entrantMemberTagsFilter, forKey: .entrantMemberTagsFilter)
        try container.encodeIfPresent(productTagsFilter, forKey: .productTagsFilter)
    }
}

