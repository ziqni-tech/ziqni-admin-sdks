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
* Enum class MemberType.
* @enum {}
* @readonly
*/
export default class MemberType {
    
        /**
         * value: "Individual"
         * @const
         */
        "Individual" = "Individual";

    

    /**
    * Returns a <code>MemberType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MemberType} The enum <code>MemberType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

