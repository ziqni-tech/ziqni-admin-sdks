/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.18
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Rule from './Rule';

/**
 * The UpdateRuleRequestAllOf model module.
 * @module model/UpdateRuleRequestAllOf
 * @version 0.0.26
 */
class UpdateRuleRequestAllOf {
    /**
     * Constructs a new <code>UpdateRuleRequestAllOf</code>.
     * @alias module:model/UpdateRuleRequestAllOf
     * @param rules {module:model/Rule} 
     */
    constructor(rules) { 
        
        UpdateRuleRequestAllOf.initialize(this, rules);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rules) { 
        obj['rules'] = rules;
    }

    /**
     * Constructs a <code>UpdateRuleRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRuleRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateRuleRequestAllOf} The populated <code>UpdateRuleRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRuleRequestAllOf();

            if (data.hasOwnProperty('rules')) {
                obj['rules'] = Rule.constructFromObject(data['rules']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Rule} rules
 */
UpdateRuleRequestAllOf.prototype['rules'] = undefined;






export default UpdateRuleRequestAllOf;

