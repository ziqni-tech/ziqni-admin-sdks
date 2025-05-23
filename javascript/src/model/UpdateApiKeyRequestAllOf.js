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
 * The UpdateApiKeyRequestAllOf model module.
 * @module model/UpdateApiKeyRequestAllOf
 * @version 0.0.26
 */
class UpdateApiKeyRequestAllOf {
    /**
     * Constructs a new <code>UpdateApiKeyRequestAllOf</code>.
     * @alias module:model/UpdateApiKeyRequestAllOf
     */
    constructor() { 
        
        UpdateApiKeyRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateApiKeyRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateApiKeyRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateApiKeyRequestAllOf} The populated <code>UpdateApiKeyRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateApiKeyRequestAllOf();

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
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
            if (data.hasOwnProperty('removeConstraints')) {
                obj['removeConstraints'] = ApiClient.convertToType(data['removeConstraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The description of an Api key
 * @member {String} description
 */
UpdateApiKeyRequestAllOf.prototype['description'] = undefined;

/**
 * the IP's that need to be whitelisted with the Api key
 * @member {Array.<String>} whiteListIPs
 */
UpdateApiKeyRequestAllOf.prototype['whiteListIPs'] = undefined;

/**
 * An Api key hash
 * @member {String} key
 */
UpdateApiKeyRequestAllOf.prototype['key'] = undefined;

/**
 * @member {module:model/Role} role
 */
UpdateApiKeyRequestAllOf.prototype['role'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
UpdateApiKeyRequestAllOf.prototype['addConstraints'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} removeConstraints
 */
UpdateApiKeyRequestAllOf.prototype['removeConstraints'] = undefined;






export default UpdateApiKeyRequestAllOf;

