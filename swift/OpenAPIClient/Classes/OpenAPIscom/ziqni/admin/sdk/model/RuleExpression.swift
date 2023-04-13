//
// RuleExpression.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** A conditional expressions is an element that declares either a rule expression, condition or routine to be evaluated or executed */
public struct RuleExpression: Codable, Hashable {

    /** condition or expression or routine */
    public var type: String
    /** All expressions in the condition must either evaluate to TRUE or FALSE if set to TRUE */
    public var mustMatchAll: Bool?
    /** All the expressions of this condition must either evaluate to TRUE or FALSE */
    public var mustEvaluateTo: Bool?
    /** The scope of the operand used in the expression */
    public var scope: String?
    /** The operand for the rule. */
    public var operand: String?
    /** [ *.* ] or [ .* ] or [ == ] or [ > ] or [ >= ] or [ <=]  or [ < ] or [ <> ] */
    public var _operator: String?
    /** The value associated with the expression */
    public var value: String?
    public var rules: [RuleExpression]?
    /** The routine to run when all the conditions have evaluted to the required level */
    public var then: [RuleRoutine]?
    /** The order the rules have to be executed in. */
    public var lineNumber: Int?

    public init(type: String, mustMatchAll: Bool? = nil, mustEvaluateTo: Bool? = nil, scope: String? = nil, operand: String? = nil, _operator: String? = nil, value: String? = nil, rules: [RuleExpression]? = nil, then: [RuleRoutine]? = nil, lineNumber: Int? = nil) {
        self.type = type
        self.mustMatchAll = mustMatchAll
        self.mustEvaluateTo = mustEvaluateTo
        self.scope = scope
        self.operand = operand
        self._operator = _operator
        self.value = value
        self.rules = rules
        self.then = then
        self.lineNumber = lineNumber
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case type
        case mustMatchAll
        case mustEvaluateTo
        case scope
        case operand
        case _operator = "operator"
        case value
        case rules
        case then
        case lineNumber
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(type, forKey: .type)
        try container.encodeIfPresent(mustMatchAll, forKey: .mustMatchAll)
        try container.encodeIfPresent(mustEvaluateTo, forKey: .mustEvaluateTo)
        try container.encodeIfPresent(scope, forKey: .scope)
        try container.encodeIfPresent(operand, forKey: .operand)
        try container.encodeIfPresent(_operator, forKey: ._operator)
        try container.encodeIfPresent(value, forKey: .value)
        try container.encodeIfPresent(rules, forKey: .rules)
        try container.encodeIfPresent(then, forKey: .then)
        try container.encodeIfPresent(lineNumber, forKey: .lineNumber)
    }
}

