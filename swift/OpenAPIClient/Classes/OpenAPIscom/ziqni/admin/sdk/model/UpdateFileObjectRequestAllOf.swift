//
// UpdateFileObjectRequestAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct UpdateFileObjectRequestAllOf: Codable, Hashable {

    /** The repository identifier this file belongs too */
    public var repositoryId: String?
    /** Name of the original file uploaded */
    public var name: String?
    /** Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excel */
    public var mimeType: String?
    /** The folder containing the attachment within the repository */
    public var parentFolderPath: String?
    /** Additional constraints, if the value is present it means the */
    public var constraints: [String]?

    public init(repositoryId: String? = nil, name: String? = nil, mimeType: String? = nil, parentFolderPath: String? = nil, constraints: [String]? = nil) {
        self.repositoryId = repositoryId
        self.name = name
        self.mimeType = mimeType
        self.parentFolderPath = parentFolderPath
        self.constraints = constraints
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case repositoryId
        case name
        case mimeType
        case parentFolderPath
        case constraints
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(repositoryId, forKey: .repositoryId)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(mimeType, forKey: .mimeType)
        try container.encodeIfPresent(parentFolderPath, forKey: .parentFolderPath)
        try container.encodeIfPresent(constraints, forKey: .constraints)
    }
}

