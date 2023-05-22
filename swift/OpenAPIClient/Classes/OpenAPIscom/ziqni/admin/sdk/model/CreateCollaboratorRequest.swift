//
// CreateCollaboratorRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct CreateCollaboratorRequest: Codable, Hashable {

    /** The email of the user to log in */
    public var email: String
    public var addRoles: [String]

    public init(email: String, addRoles: [String]) {
        self.email = email
        self.addRoles = addRoles
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case email
        case addRoles
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(email, forKey: .email)
        try container.encode(addRoles, forKey: .addRoles)
    }
}

