/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.19
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Role from './Role';

/**
 * The ApiKeyAllOf model module.
 * @module model/ApiKeyAllOf
 * @version 0.0.26
 */
class ApiKeyAllOf {
    /**
     * Constructs a new <code>ApiKeyAllOf</code>.
     * @alias module:model/ApiKeyAllOf
     * @param key {String} An Api key hash
     * @param role {module:model/Role} 
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(key, role, constraints) { 
        
        ApiKeyAllOf.initialize(this, key, role, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, role, constraints) { 
        obj['key'] = key;
        obj['role'] = role;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>ApiKeyAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiKeyAllOf} obj Optional instance to populate.
     * @return {module:model/ApiKeyAllOf} The populated <code>ApiKeyAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiKeyAllOf();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('whiteListIPs')) {
                obj['whiteListIPs'] = ApiClient.convertToType(data['whiteListIPs'], ['String']);
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = Role.constructFromObject(data['role']);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The description of an Api key
 * @member {String} description
 */
ApiKeyAllOf.prototype['description'] = undefined;

/**
 * the IP's that need to be whitelisted with the Api key
 * @member {Array.<String>} whiteListIPs
 */
ApiKeyAllOf.prototype['whiteListIPs'] = undefined;

/**
 * An Api key hash
 * @member {String} key
 */
ApiKeyAllOf.prototype['key'] = undefined;

/**
 * @member {module:model/Role} role
 */
ApiKeyAllOf.prototype['role'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
ApiKeyAllOf.prototype['constraints'] = undefined;






export default ApiKeyAllOf;

