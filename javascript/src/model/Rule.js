/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.2
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RuleExpression from './RuleExpression';

/**
 * The Rule model module.
 * @module model/Rule
 * @version 0.0.26
 */
class Rule {
    /**
     * Constructs a new <code>Rule</code>.
     * @alias module:model/Rule
     * @param entityId {String} The id of the context object this rule refers to
     * @param action {String} The action this rule describes, like start.contest, or points.awarded
     * @param context {String} The context of this rule like achievement, competition, or contest 
     * @param rules {module:model/RuleExpression} 
     * @param id {String} Unique system identifier of a Main Rule
     * @param entityType {String} Achievement, Competition, or Contest 
     */
    constructor(entityId, action, context, rules, id, entityType) { 
        
        Rule.initialize(this, entityId, action, context, rules, id, entityType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entityId, action, context, rules, id, entityType) { 
        obj['entityId'] = entityId;
        obj['action'] = action;
        obj['context'] = context;
        obj['rules'] = rules;
        obj['id'] = id;
        obj['entityType'] = entityType;
    }

    /**
     * Constructs a <code>Rule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Rule} obj Optional instance to populate.
     * @return {module:model/Rule} The populated <code>Rule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Rule();

            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = RuleExpression.constructFromObject(data['rules']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The id of the context object this rule refers to
 * @member {String} entityId
 */
Rule.prototype['entityId'] = undefined;

/**
 * The action this rule describes, like start.contest, or points.awarded
 * @member {String} action
 */
Rule.prototype['action'] = undefined;

/**
 * The context of this rule like achievement, competition, or contest 
 * @member {String} context
 */
Rule.prototype['context'] = undefined;

/**
 * @member {module:model/RuleExpression} rules
 */
Rule.prototype['rules'] = undefined;

/**
 * Unique system identifier of a Main Rule
 * @member {String} id
 */
Rule.prototype['id'] = undefined;

/**
 * Achievement, Competition, or Contest 
 * @member {String} entityType
 */
Rule.prototype['entityType'] = undefined;






export default Rule;

