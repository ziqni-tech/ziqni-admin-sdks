//
// DataSetsValue.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct DataSetsValue: Codable, Hashable {

    /** Label of the data set */
    public var label: String
    /** Labels to reference data sets */
    public var labels: String
    /** The actual data points for the data set */
    public var data: [String]

    public init(label: String, labels: String, data: [String]) {
        self.label = label
        self.labels = labels
        self.data = data
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case label
        case labels
        case data
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(label, forKey: .label)
        try container.encode(labels, forKey: .labels)
        try container.encode(data, forKey: .data)
    }
}
