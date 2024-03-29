//
// FactDefault.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct FactDefault: Codable, Hashable {

    /** The operators supported by the fact */
    public var operators: [String]
    /** The data type of the constant */
    public var constantType: String
    /** Example of the constant */
    public var constantExample: String
    /** The default value of the constant for the fact */
    public var defaultVale: String?
    public var macros: [Macro]?

    public init(operators: [String], constantType: String, constantExample: String, defaultVale: String? = nil, macros: [Macro]? = nil) {
        self.operators = operators
        self.constantType = constantType
        self.constantExample = constantExample
        self.defaultVale = defaultVale
        self.macros = macros
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case operators
        case constantType
        case constantExample
        case defaultVale
        case macros
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(operators, forKey: .operators)
        try container.encode(constantType, forKey: .constantType)
        try container.encode(constantExample, forKey: .constantExample)
        try container.encodeIfPresent(defaultVale, forKey: .defaultVale)
        try container.encodeIfPresent(macros, forKey: .macros)
    }
}

