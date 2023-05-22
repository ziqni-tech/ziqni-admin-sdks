//
// Role.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** The role of the user in the space. */
public enum Role: String, Codable, CaseIterable {
    case owner = "Owner"
    case administrator = "Administrator"
    case web = "Web"
    case user = "User"
}
