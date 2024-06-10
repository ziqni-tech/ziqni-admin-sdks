/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.15
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class ConditionalOperator.
* @enum {}
* @readonly
*/
export default class ConditionalOperator {
    
        /**
         * value: "Equals"
         * @const
         */
        "Equals" = "Equals";

    
        /**
         * value: "GreaterThan"
         * @const
         */
        "GreaterThan" = "GreaterThan";

    
        /**
         * value: "GreaterThanEquals"
         * @const
         */
        "GreaterThanEquals" = "GreaterThanEquals";

    
        /**
         * value: "LessThan"
         * @const
         */
        "LessThan" = "LessThan";

    
        /**
         * value: "LessThanEquals"
         * @const
         */
        "LessThanEquals" = "LessThanEquals";

    
        /**
         * value: "Between"
         * @const
         */
        "Between" = "Between";

    

    /**
    * Returns a <code>ConditionalOperator</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ConditionalOperator} The enum <code>ConditionalOperator</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

