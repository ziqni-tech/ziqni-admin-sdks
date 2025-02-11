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
import UpdateModelDefault from './UpdateModelDefault';
import UpdateRuleRequestAllOf from './UpdateRuleRequestAllOf';

/**
 * The UpdateRuleRequest model module.
 * @module model/UpdateRuleRequest
 * @version 0.0.26
 */
class UpdateRuleRequest {
    /**
     * Constructs a new <code>UpdateRuleRequest</code>.
     * @alias module:model/UpdateRuleRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateRuleRequestAllOf
     * @param id {String} A unique system generated identifier
     * @param rules {module:model/Rule} 
     */
    constructor(id, rules) { 
        UpdateModelDefault.initialize(this, id);UpdateRuleRequestAllOf.initialize(this, rules);
        UpdateRuleRequest.initialize(this, id, rules);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, rules) { 
        obj['id'] = id;
        obj['rules'] = rules;
    }

    /**
     * Constructs a <code>UpdateRuleRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRuleRequest} obj Optional instance to populate.
     * @return {module:model/UpdateRuleRequest} The populated <code>UpdateRuleRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRuleRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateRuleRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = Rule.constructFromObject(data['rules']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateRuleRequest.prototype['id'] = undefined;

/**
 * @member {module:model/Rule} rules
 */
UpdateRuleRequest.prototype['rules'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateRuleRequestAllOf interface:
/**
 * @member {module:model/Rule} rules
 */
UpdateRuleRequestAllOf.prototype['rules'] = undefined;




export default UpdateRuleRequest;

