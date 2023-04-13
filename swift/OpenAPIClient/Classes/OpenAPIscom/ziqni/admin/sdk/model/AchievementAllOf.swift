//
// AchievementAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct AchievementAllOf: Codable, Hashable {

    /** A name for the Achievement. Can be translated */
    public var name: String
    /** A name for the Achievement. Can be translated */
    public var description: String?
    /** Terms and conditions of an achievement. Can be translated */
    public var termsAndConditions: String?
    /** An Icon id that has been pre uploaded to the system to display for Achievement */
    public var icon: String
    public var scheduling: Scheduling?
    /** Maximum number of issued achievements */
    public var maxNumberOfIssues: Int?
    public var status: AchievementStatus?
    /** The code of the contest */
    public var statusCode: Int?
    /** Additional constraints, if set means true */
    public var constraints: [String]
    public var achievementDependencies: DependantOn?
    public var memberTagsFilter: DependantOn?
    public var productTagsFilter: DependantOn?

    public init(name: String, description: String? = nil, termsAndConditions: String? = nil, icon: String, scheduling: Scheduling? = nil, maxNumberOfIssues: Int? = nil, status: AchievementStatus? = nil, statusCode: Int? = nil, constraints: [String], achievementDependencies: DependantOn? = nil, memberTagsFilter: DependantOn? = nil, productTagsFilter: DependantOn? = nil) {
        self.name = name
        self.description = description
        self.termsAndConditions = termsAndConditions
        self.icon = icon
        self.scheduling = scheduling
        self.maxNumberOfIssues = maxNumberOfIssues
        self.status = status
        self.statusCode = statusCode
        self.constraints = constraints
        self.achievementDependencies = achievementDependencies
        self.memberTagsFilter = memberTagsFilter
        self.productTagsFilter = productTagsFilter
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case name
        case description
        case termsAndConditions
        case icon
        case scheduling
        case maxNumberOfIssues
        case status
        case statusCode
        case constraints
        case achievementDependencies
        case memberTagsFilter
        case productTagsFilter
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(name, forKey: .name)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encodeIfPresent(termsAndConditions, forKey: .termsAndConditions)
        try container.encode(icon, forKey: .icon)
        try container.encodeIfPresent(scheduling, forKey: .scheduling)
        try container.encodeIfPresent(maxNumberOfIssues, forKey: .maxNumberOfIssues)
        try container.encodeIfPresent(status, forKey: .status)
        try container.encodeIfPresent(statusCode, forKey: .statusCode)
        try container.encode(constraints, forKey: .constraints)
        try container.encodeIfPresent(achievementDependencies, forKey: .achievementDependencies)
        try container.encodeIfPresent(memberTagsFilter, forKey: .memberTagsFilter)
        try container.encodeIfPresent(productTagsFilter, forKey: .productTagsFilter)
    }
}

