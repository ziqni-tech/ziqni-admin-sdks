//
// Result.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct Result: Codable, Hashable {

    /** A unique system identifier of an updated record */
    public var id: String
    /** A reference id from external system */
    public var externalReference: String?
    /** The response of an action Possible values:   * created: Will be returned for a POST action to create entity   * updated: Will be returned for a PUT action to update entity   * deleted: Will be returned for a DELETE action on an entity  */
    public var result: String
    public var relations: [Relation]?

    public init(id: String, externalReference: String? = nil, result: String, relations: [Relation]? = nil) {
        self.id = id
        self.externalReference = externalReference
        self.result = result
        self.relations = relations
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case externalReference
        case result
        case relations
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encodeIfPresent(externalReference, forKey: .externalReference)
        try container.encode(result, forKey: .result)
        try container.encodeIfPresent(relations, forKey: .relations)
    }
}

