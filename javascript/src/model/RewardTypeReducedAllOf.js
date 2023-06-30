/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.6
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RewardTypeReducedAllOf model module.
 * @module model/RewardTypeReducedAllOf
 * @version 0.0.26
 */
class RewardTypeReducedAllOf {
    /**
     * Constructs a new <code>RewardTypeReducedAllOf</code>.
     * @alias module:model/RewardTypeReducedAllOf
     * @param key {String} A unique key that represents the reward type
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     */
    constructor(key, id, spaceName) { 
        
        RewardTypeReducedAllOf.initialize(this, key, id, spaceName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, id, spaceName) { 
        obj['key'] = key;
        obj['id'] = id;
        obj['spaceName'] = spaceName;
    }

    /**
     * Constructs a <code>RewardTypeReducedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RewardTypeReducedAllOf} obj Optional instance to populate.
     * @return {module:model/RewardTypeReducedAllOf} The populated <code>RewardTypeReducedAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RewardTypeReducedAllOf();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique key that represents the reward type
 * @member {String} key
 */
RewardTypeReducedAllOf.prototype['key'] = undefined;

/**
 * A unique system generated identifier
 * @member {String} id
 */
RewardTypeReducedAllOf.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
RewardTypeReducedAllOf.prototype['spaceName'] = undefined;






export default RewardTypeReducedAllOf;

