//
// CreateFileObjectRequestAllOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct CreateFileObjectRequestAllOf: Codable, Hashable {

    /** The repository identifier this file belongs too */
    public var repositoryId: String
    /** Name of the original file uploaded */
    public var name: String
    /** Mime type of the file. Example mime types - text/csv or application/vmd.ms-excel or application/x-directory for directories */
    public var mimeType: String
    /** The folder containing the file within the repository */
    public var parentFolderPath: String
    /** Additional constraints, if the value is present it means the */
    public var constraints: [String]?

    public init(repositoryId: String, name: String, mimeType: String, parentFolderPath: String, constraints: [String]? = nil) {
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
        try container.encode(repositoryId, forKey: .repositoryId)
        try container.encode(name, forKey: .name)
        try container.encode(mimeType, forKey: .mimeType)
        try container.encode(parentFolderPath, forKey: .parentFolderPath)
        try container.encodeIfPresent(constraints, forKey: .constraints)
    }
}

