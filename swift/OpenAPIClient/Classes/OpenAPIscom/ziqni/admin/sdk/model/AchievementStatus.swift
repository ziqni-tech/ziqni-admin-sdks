//
// AchievementStatus.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** The status of achievement */
public enum AchievementStatus: String, Codable, CaseIterable {
    case unknown = "Unknown"
    case draft = "Draft"
    case preparing = "Preparing"
    case ready = "Ready"
    case starting = "Starting"
    case active = "Active"
    case finishing = "Finishing"
    case finished = "Finished"
    case template = "Template"
    case cancelling = "Cancelling"
    case cancelled = "Cancelled"
    case deleting = "Deleting"
    case deleted = "Deleted"
}
