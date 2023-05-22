//
// RewardEntityType.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Entity the item is associated to. */
public enum RewardEntityType: String, Codable, CaseIterable {
    case achievement = "Achievement"
    case competition = "Competition"
    case contest = "Contest"
}
