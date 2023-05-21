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
/**
* Enum class Role.
* @enum {}
* @readonly
*/
export default class Role {
    
        /**
         * value: "Owner"
         * @const
         */
        "Owner" = "Owner";

    
        /**
         * value: "Administrator"
         * @const
         */
        "Administrator" = "Administrator";

    
        /**
         * value: "Web"
         * @const
         */
        "Web" = "Web";

    
        /**
         * value: "User"
         * @const
         */
        "User" = "User";

    

    /**
    * Returns a <code>Role</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Role} The enum <code>Role</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

