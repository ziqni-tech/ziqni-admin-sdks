//
// UpdateWebhookRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct UpdateWebhookRequest: Codable, Hashable {

    /** A unique system generated identifier */
    public var id: String
    /** A list of id's used to add cutom fields */
    public var customFields: [String: AnyCodable]?
    /** A list of id's used to tag models */
    public var tags: [String]?
    public var metadata: [String: String]?
    /** A URL to post the webhook to */
    public var postToUrl: String?
    /** A list of event triggers */
    public var triggers: [String]?
    /** The description of a Webhook */
    public var description: String?
    /** The name of a Webhook */
    public var name: String?
    public var headers: [String: String]?

    public init(id: String, customFields: [String: AnyCodable]? = nil, tags: [String]? = nil, metadata: [String: String]? = nil, postToUrl: String? = nil, triggers: [String]? = nil, description: String? = nil, name: String? = nil, headers: [String: String]? = nil) {
        self.id = id
        self.customFields = customFields
        self.tags = tags
        self.metadata = metadata
        self.postToUrl = postToUrl
        self.triggers = triggers
        self.description = description
        self.name = name
        self.headers = headers
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case customFields
        case tags
        case metadata
        case postToUrl
        case triggers
        case description
        case name
        case headers
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encodeIfPresent(customFields, forKey: .customFields)
        try container.encodeIfPresent(tags, forKey: .tags)
        try container.encodeIfPresent(metadata, forKey: .metadata)
        try container.encodeIfPresent(postToUrl, forKey: .postToUrl)
        try container.encodeIfPresent(triggers, forKey: .triggers)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(headers, forKey: .headers)
    }
}
