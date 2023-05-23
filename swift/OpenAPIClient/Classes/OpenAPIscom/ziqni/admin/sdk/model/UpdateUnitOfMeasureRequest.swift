//
// UpdateUnitOfMeasureRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct UpdateUnitOfMeasureRequest: Codable, Hashable {

    /** A unique system generated identifier */
    public var id: String
    /** A list of id's used to add cutom fields */
    public var customFields: [String: AnyCodable]?
    /** A list of id's used to tag models */
    public var tags: [String]?
    public var metadata: [String: String]?
    /** The name of a unit of measure */
    public var name: String?
    /** The description of a unit of measure */
    public var description: String?
    /** An alphabetical or numerical code to identify a unit of measure */
    public var isoCode: String?
    /** The symbol of a unit of measure */
    public var symbol: String?
    /** Is used to multiply the value from the standardised one that is being used */
    public var multiplier: Double?
    public var unitOfMeasureType: UnitOfMeasureType?

    public init(id: String, customFields: [String: AnyCodable]? = nil, tags: [String]? = nil, metadata: [String: String]? = nil, name: String? = nil, description: String? = nil, isoCode: String? = nil, symbol: String? = nil, multiplier: Double? = nil, unitOfMeasureType: UnitOfMeasureType? = nil) {
        self.id = id
        self.customFields = customFields
        self.tags = tags
        self.metadata = metadata
        self.name = name
        self.description = description
        self.isoCode = isoCode
        self.symbol = symbol
        self.multiplier = multiplier
        self.unitOfMeasureType = unitOfMeasureType
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case customFields
        case tags
        case metadata
        case name
        case description
        case isoCode
        case symbol
        case multiplier
        case unitOfMeasureType
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encodeIfPresent(customFields, forKey: .customFields)
        try container.encodeIfPresent(tags, forKey: .tags)
        try container.encodeIfPresent(metadata, forKey: .metadata)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encodeIfPresent(isoCode, forKey: .isoCode)
        try container.encodeIfPresent(symbol, forKey: .symbol)
        try container.encodeIfPresent(multiplier, forKey: .multiplier)
        try container.encodeIfPresent(unitOfMeasureType, forKey: .unitOfMeasureType)
    }
}
