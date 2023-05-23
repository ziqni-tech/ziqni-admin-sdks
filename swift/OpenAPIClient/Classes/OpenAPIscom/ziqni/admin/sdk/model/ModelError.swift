//
// ModelError.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct ModelError: Codable, Hashable {

    /** The identifier of the record this error relates to (This value only gets set if the error could relate to more than one object) */
    public var modelId: String?
    /** A unique system identifier that describes this specific error */
    public var errorCode: Int
    /** The error description */
    public var message: String
    /** The object number that returned the error */
    public var errorAt: Int?
    public var detail: [ErrorDetail]?

    public init(modelId: String? = nil, errorCode: Int, message: String, errorAt: Int? = nil, detail: [ErrorDetail]? = nil) {
        self.modelId = modelId
        self.errorCode = errorCode
        self.message = message
        self.errorAt = errorAt
        self.detail = detail
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case modelId
        case errorCode
        case message
        case errorAt
        case detail
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(modelId, forKey: .modelId)
        try container.encode(errorCode, forKey: .errorCode)
        try container.encode(message, forKey: .message)
        try container.encodeIfPresent(errorAt, forKey: .errorAt)
        try container.encodeIfPresent(detail, forKey: .detail)
    }
}
