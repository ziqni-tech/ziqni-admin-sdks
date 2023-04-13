//
// ObjectParameters.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct ObjectParameters: Codable, Hashable {

    /** Custom fields for this object */
    public var customFields: [CustomField]
    public var objectType: AppliesTo
    /** The sub type of the object */
    public var objectSubType: String?
    /** Valid contraints for this object type that the user can set and unset */
    public var userConstraints: [ObjectConstraint]
    /** System contraints that the user connot modify */
    public var systemConstraints: [ObjectConstraint]

    public init(customFields: [CustomField], objectType: AppliesTo, objectSubType: String? = nil, userConstraints: [ObjectConstraint], systemConstraints: [ObjectConstraint]) {
        self.customFields = customFields
        self.objectType = objectType
        self.objectSubType = objectSubType
        self.userConstraints = userConstraints
        self.systemConstraints = systemConstraints
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case customFields
        case objectType
        case objectSubType
        case userConstraints
        case systemConstraints
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(customFields, forKey: .customFields)
        try container.encode(objectType, forKey: .objectType)
        try container.encodeIfPresent(objectSubType, forKey: .objectSubType)
        try container.encode(userConstraints, forKey: .userConstraints)
        try container.encode(systemConstraints, forKey: .systemConstraints)
    }
}

