//
// UpdateMemberRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** This is a request for Member update */
public struct UpdateMemberRequest: Codable, Hashable {

    /** A unique system generated identifier */
    public var id: String
    /** A list of id's used to add cutom fields */
    public var customFields: [String: AnyCodable]?
    /** A list of id's used to tag models */
    public var tags: [String]?
    public var metadata: [String: String]?
    /** The name of the member that is used on leader boards and public displays */
    public var name: String?
    public var memberType: MemberType?
    /** A social group like Guilds */
    public var teamMembers: [String]?
    /** Additional constraints */
    public var addConstraints: [String]?
    /** Additional constraints */
    public var removeConstraints: [String]?
    /** To what time zone teh emmber belongs to */
    public var timeZoneOffset: String?

    public init(id: String, customFields: [String: AnyCodable]? = nil, tags: [String]? = nil, metadata: [String: String]? = nil, name: String? = nil, memberType: MemberType? = nil, teamMembers: [String]? = nil, addConstraints: [String]? = nil, removeConstraints: [String]? = nil, timeZoneOffset: String? = nil) {
        self.id = id
        self.customFields = customFields
        self.tags = tags
        self.metadata = metadata
        self.name = name
        self.memberType = memberType
        self.teamMembers = teamMembers
        self.addConstraints = addConstraints
        self.removeConstraints = removeConstraints
        self.timeZoneOffset = timeZoneOffset
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case customFields
        case tags
        case metadata
        case name
        case memberType
        case teamMembers
        case addConstraints
        case removeConstraints
        case timeZoneOffset
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encodeIfPresent(customFields, forKey: .customFields)
        try container.encodeIfPresent(tags, forKey: .tags)
        try container.encodeIfPresent(metadata, forKey: .metadata)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(memberType, forKey: .memberType)
        try container.encodeIfPresent(teamMembers, forKey: .teamMembers)
        try container.encodeIfPresent(addConstraints, forKey: .addConstraints)
        try container.encodeIfPresent(removeConstraints, forKey: .removeConstraints)
        try container.encodeIfPresent(timeZoneOffset, forKey: .timeZoneOffset)
    }
}

