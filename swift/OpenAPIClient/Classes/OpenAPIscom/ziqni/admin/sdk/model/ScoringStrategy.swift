//
// ScoringStrategy.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct ScoringStrategy: Codable, Hashable {

    /** The scoring strategies types \"SumBest\" value */
    public var limitUpdatesTo: Int
    /** The scoring strategies types \"LimitedTo\" value */
    public var sumBestXOf: Int
    /** The scoring strategies types \"FirstTo\" value */
    public var lastUpdateTimeStamp: Int64
    /** Not supported at the moment */
    public var recordTimeWhenSumReaches: Double

    public init(limitUpdatesTo: Int, sumBestXOf: Int, lastUpdateTimeStamp: Int64, recordTimeWhenSumReaches: Double) {
        self.limitUpdatesTo = limitUpdatesTo
        self.sumBestXOf = sumBestXOf
        self.lastUpdateTimeStamp = lastUpdateTimeStamp
        self.recordTimeWhenSumReaches = recordTimeWhenSumReaches
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case limitUpdatesTo
        case sumBestXOf
        case lastUpdateTimeStamp
        case recordTimeWhenSumReaches
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(limitUpdatesTo, forKey: .limitUpdatesTo)
        try container.encode(sumBestXOf, forKey: .sumBestXOf)
        try container.encode(lastUpdateTimeStamp, forKey: .lastUpdateTimeStamp)
        try container.encode(recordTimeWhenSumReaches, forKey: .recordTimeWhenSumReaches)
    }
}

