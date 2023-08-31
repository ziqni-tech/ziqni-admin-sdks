/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.9
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class RewardEntityType.
* @enum {}
* @readonly
*/
export default class RewardEntityType {
    
        /**
         * value: "Achievement"
         * @const
         */
        "Achievement" = "Achievement";

    
        /**
         * value: "Competition"
         * @const
         */
        "Competition" = "Competition";

    
        /**
         * value: "Contest"
         * @const
         */
        "Contest" = "Contest";

    

    /**
    * Returns a <code>RewardEntityType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RewardEntityType} The enum <code>RewardEntityType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

