//
// MessageStatus.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** The status of the message */
public enum MessageStatus: String, Codable, CaseIterable {
    case new = "New"
    case read = "Read"
    case draft = "Draft"
    case sent = "Sent"
    case collaborationRequest = "CollaborationRequest"
    case actioned = "Actioned"
    case claimed = "Claimed"
    case expired = "Expired"
    case canceled = "Canceled"
    case deleted = "Deleted"
}
