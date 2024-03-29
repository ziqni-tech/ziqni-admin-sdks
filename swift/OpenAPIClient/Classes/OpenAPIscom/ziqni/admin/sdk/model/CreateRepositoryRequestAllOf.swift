//
// CreateRepositoryRequestAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct CreateRepositoryRequestAllOf: Codable, Hashable {

    /** The name of the repository. No special charaters or spaces permitted */
    public var name: String
    /** The description of the repository */
    public var description: String?
    /** Additional constraints */
    public var constraints: [String]
    public var hostingOptions: HostingOptions?

    public init(name: String, description: String? = nil, constraints: [String], hostingOptions: HostingOptions? = nil) {
        self.name = name
        self.description = description
        self.constraints = constraints
        self.hostingOptions = hostingOptions
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case name
        case description
        case constraints
        case hostingOptions
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(name, forKey: .name)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encode(constraints, forKey: .constraints)
        try container.encodeIfPresent(hostingOptions, forKey: .hostingOptions)
    }
}

