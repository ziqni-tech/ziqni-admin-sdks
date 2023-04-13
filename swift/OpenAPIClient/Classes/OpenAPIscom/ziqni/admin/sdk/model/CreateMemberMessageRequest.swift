//
// CreateMemberMessageRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct CreateMemberMessageRequest: Codable, Hashable {

    /** A list of custom field entries */
    public var customFields: [String: AnyCodable]?
    /** A list of id's used to tag models */
    public var tags: [String]?
    public var metadata: [String: String]?
    public var eventRefType: EventRefType
    /** The reference ID of the event object */
    public var eventRefId: String?
    public var messageType: MessageType
    /** The title of the message */
    public var subject: String
    /** The context of the message */
    public var body: String
    public var status: MessageStatus
    /** Specify the expiry as a date after creation of the record. If expireAfterDays is specified then expireAfterDate should not be specified. */
    public var expireAfterDate: Date?
    /** Specify the expiry in number of days after creation of the record. If expireAfterDate is specified then expireAfterDays should not be specified. */
    public var expireAfterDays: Int?
    public var links: [MessageLink]
    public var memberIds: [String]?
    public var translations: [Translation]?

    public init(customFields: [String: AnyCodable]? = nil, tags: [String]? = nil, metadata: [String: String]? = nil, eventRefType: EventRefType, eventRefId: String? = nil, messageType: MessageType, subject: String, body: String, status: MessageStatus, expireAfterDate: Date? = nil, expireAfterDays: Int? = nil, links: [MessageLink], memberIds: [String]? = nil, translations: [Translation]? = nil) {
        self.customFields = customFields
        self.tags = tags
        self.metadata = metadata
        self.eventRefType = eventRefType
        self.eventRefId = eventRefId
        self.messageType = messageType
        self.subject = subject
        self.body = body
        self.status = status
        self.expireAfterDate = expireAfterDate
        self.expireAfterDays = expireAfterDays
        self.links = links
        self.memberIds = memberIds
        self.translations = translations
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case customFields
        case tags
        case metadata
        case eventRefType
        case eventRefId
        case messageType
        case subject
        case body
        case status
        case expireAfterDate
        case expireAfterDays
        case links
        case memberIds
        case translations
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(customFields, forKey: .customFields)
        try container.encodeIfPresent(tags, forKey: .tags)
        try container.encodeIfPresent(metadata, forKey: .metadata)
        try container.encode(eventRefType, forKey: .eventRefType)
        try container.encodeIfPresent(eventRefId, forKey: .eventRefId)
        try container.encode(messageType, forKey: .messageType)
        try container.encode(subject, forKey: .subject)
        try container.encode(body, forKey: .body)
        try container.encode(status, forKey: .status)
        try container.encodeIfPresent(expireAfterDate, forKey: .expireAfterDate)
        try container.encodeIfPresent(expireAfterDays, forKey: .expireAfterDays)
        try container.encode(links, forKey: .links)
        try container.encodeIfPresent(memberIds, forKey: .memberIds)
        try container.encodeIfPresent(translations, forKey: .translations)
    }
}

