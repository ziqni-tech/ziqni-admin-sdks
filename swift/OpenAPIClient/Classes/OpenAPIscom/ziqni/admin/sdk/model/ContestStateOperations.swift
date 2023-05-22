//
// ContestStateOperations.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Operations supported by update contest state action. */
public enum ContestStateOperations: String, Codable, CaseIterable {
    case deleted = "Deleted"
    case ready = "Ready"
    case active = "Active"
    case finished = "Finished"
    case finalised = "Finalised"
    case cancelled = "Cancelled"
}
