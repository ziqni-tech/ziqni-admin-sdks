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

/**
 * The CollaboratorRolesAvailableAllOf model module.
 * @module model/CollaboratorRolesAvailableAllOf
 * @version 0.0.26
 */
class CollaboratorRolesAvailableAllOf {
    /**
     * Constructs a new <code>CollaboratorRolesAvailableAllOf</code>.
     * @alias module:model/CollaboratorRolesAvailableAllOf
     */
    constructor() { 
        
        CollaboratorRolesAvailableAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CollaboratorRolesAvailableAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollaboratorRolesAvailableAllOf} obj Optional instance to populate.
     * @return {module:model/CollaboratorRolesAvailableAllOf} The populated <code>CollaboratorRolesAvailableAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CollaboratorRolesAvailableAllOf();

            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The access role of an individual
 * @member {Array.<String>} roles
 */
CollaboratorRolesAvailableAllOf.prototype['roles'] = undefined;






export default CollaboratorRolesAvailableAllOf;

