//
// MetaBasic.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct MetaBasic: Codable, Hashable {

    public var objectType: String
    /** The count of all results */
    public var totalRecords: Int?
    /** The count of successful results */
    public var resultCount: Int
    /** The count of errors */
    public var errorCount: Int

    public init(objectType: String, totalRecords: Int? = nil, resultCount: Int, errorCount: Int) {
        self.objectType = objectType
        self.totalRecords = totalRecords
        self.resultCount = resultCount
        self.errorCount = errorCount
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case objectType
        case totalRecords
        case resultCount
        case errorCount
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(objectType, forKey: .objectType)
        try container.encodeIfPresent(totalRecords, forKey: .totalRecords)
        try container.encode(resultCount, forKey: .resultCount)
        try container.encode(errorCount, forKey: .errorCount)
    }
}

