//
// MemberMessageAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct MemberMessageAllOf: Codable, Hashable {

    public var eventRefType: EventRefType
    /** The reference ID of the event object */
    public var eventRefId: String?
    public var messageType: MessageType
    /** The title of the message */
    public var subject: String
    /** The context of the message */
    public var body: String
    public var status: MessageStatus
    /** The time that the message will disappear after. ISO8601 timestamp */
    public var expiry: Date
    public var links: MessageLink
    public var memberIds: [String]?

    public init(eventRefType: EventRefType, eventRefId: String? = nil, messageType: MessageType, subject: String, body: String, status: MessageStatus, expiry: Date, links: MessageLink, memberIds: [String]? = nil) {
        self.eventRefType = eventRefType
        self.eventRefId = eventRefId
        self.messageType = messageType
        self.subject = subject
        self.body = body
        self.status = status
        self.expiry = expiry
        self.links = links
        self.memberIds = memberIds
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case eventRefType
        case eventRefId
        case messageType
        case subject
        case body
        case status
        case expiry
        case links
        case memberIds
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(eventRefType, forKey: .eventRefType)
        try container.encodeIfPresent(eventRefId, forKey: .eventRefId)
        try container.encode(messageType, forKey: .messageType)
        try container.encode(subject, forKey: .subject)
        try container.encode(body, forKey: .body)
        try container.encode(status, forKey: .status)
        try container.encode(expiry, forKey: .expiry)
        try container.encode(links, forKey: .links)
        try container.encodeIfPresent(memberIds, forKey: .memberIds)
    }
}

