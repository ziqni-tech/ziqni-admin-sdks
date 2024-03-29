//
// CreateMemberRequestAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct CreateMemberRequestAllOf: Codable, Hashable {

    /** The name of the member that is used on leader boards and public displays */
    public var name: String
    /** The reference to this member in your system */
    public var memberRefId: String
    public var memberType: MemberType
    /** A social group like Guilds */
    public var teamMembers: [String]?
    /** Additional constraints */
    public var addConstraints: [String]?
    /** To what time zone teh emmber belongs to */
    public var timeZoneOffset: String?

    public init(name: String, memberRefId: String, memberType: MemberType, teamMembers: [String]? = nil, addConstraints: [String]? = nil, timeZoneOffset: String? = nil) {
        self.name = name
        self.memberRefId = memberRefId
        self.memberType = memberType
        self.teamMembers = teamMembers
        self.addConstraints = addConstraints
        self.timeZoneOffset = timeZoneOffset
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case name
        case memberRefId
        case memberType
        case teamMembers
        case addConstraints
        case timeZoneOffset
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(name, forKey: .name)
        try container.encode(memberRefId, forKey: .memberRefId)
        try container.encode(memberType, forKey: .memberType)
        try container.encodeIfPresent(teamMembers, forKey: .teamMembers)
        try container.encodeIfPresent(addConstraints, forKey: .addConstraints)
        try container.encodeIfPresent(timeZoneOffset, forKey: .timeZoneOffset)
    }
}

