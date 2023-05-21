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
* Enum class MatchCondition.
* @enum {}
* @readonly
*/
export default class MatchCondition {
    
        /**
         * value: "All"
         * @const
         */
        "All" = "All";

    
        /**
         * value: "Any"
         * @const
         */
        "Any" = "Any";

    

    /**
    * Returns a <code>MatchCondition</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MatchCondition} The enum <code>MatchCondition</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

