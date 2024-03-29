//
// LogEvent.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct LogEvent: Codable, Hashable {

    public var accountId: String
    public var logLevel: String
    public var message: String
    public var hostName: String
    /** date-time */
    public var created: Date
    public var serverType: String
    public var id: String
    public var stackTrace: String
    public var privateIpAddress: String
    public var version: Int64?
    public var entityId: String
    public var entityType: String

    public init(accountId: String, logLevel: String, message: String, hostName: String, created: Date, serverType: String, id: String, stackTrace: String, privateIpAddress: String, version: Int64? = nil, entityId: String, entityType: String) {
        self.accountId = accountId
        self.logLevel = logLevel
        self.message = message
        self.hostName = hostName
        self.created = created
        self.serverType = serverType
        self.id = id
        self.stackTrace = stackTrace
        self.privateIpAddress = privateIpAddress
        self.version = version
        self.entityId = entityId
        self.entityType = entityType
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case accountId
        case logLevel
        case message
        case hostName
        case created
        case serverType
        case id
        case stackTrace
        case privateIpAddress
        case version
        case entityId
        case entityType
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(accountId, forKey: .accountId)
        try container.encode(logLevel, forKey: .logLevel)
        try container.encode(message, forKey: .message)
        try container.encode(hostName, forKey: .hostName)
        try container.encode(created, forKey: .created)
        try container.encode(serverType, forKey: .serverType)
        try container.encode(id, forKey: .id)
        try container.encode(stackTrace, forKey: .stackTrace)
        try container.encode(privateIpAddress, forKey: .privateIpAddress)
        try container.encodeIfPresent(version, forKey: .version)
        try container.encode(entityId, forKey: .entityId)
        try container.encode(entityType, forKey: .entityType)
    }
}

