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
* Enum class RoundType.
* @enum {}
* @readonly
*/
export default class RoundType {
    
        /**
         * value: "TimeBound"
         * @const
         */
        "TimeBound" = "TimeBound";

    
        /**
         * value: "TargetBased"
         * @const
         */
        "TargetBased" = "TargetBased";

    

    /**
    * Returns a <code>RoundType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RoundType} The enum <code>RoundType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

