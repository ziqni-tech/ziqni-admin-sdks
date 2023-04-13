//
// ProductReduced.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** This is a Product model with fewer parameters */
public struct ProductReduced: Codable, Hashable {

    /** A unique system generated identifier */
    public var id: String
    /** This is the space name which is linked to the account */
    public var spaceName: String
    /** ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone */
    public var created: Date
    /** The name of the product */
    public var name: String?
    /** The reference to this product in your system. The reference identifier can not be changed after the product has been created */
    public var productRefId: String
    /** A list of Strings used to tag products with taxonomy terms */
    public var tags: [String]?

    public init(id: String, spaceName: String, created: Date, name: String? = nil, productRefId: String, tags: [String]? = nil) {
        self.id = id
        self.spaceName = spaceName
        self.created = created
        self.name = name
        self.productRefId = productRefId
        self.tags = tags
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case spaceName
        case created
        case name
        case productRefId
        case tags
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(spaceName, forKey: .spaceName)
        try container.encode(created, forKey: .created)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encode(productRefId, forKey: .productRefId)
        try container.encodeIfPresent(tags, forKey: .tags)
    }
}

