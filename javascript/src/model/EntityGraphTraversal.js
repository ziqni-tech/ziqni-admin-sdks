/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.18
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class EntityGraphTraversal.
* @enum {}
* @readonly
*/
export default class EntityGraphTraversal {
    
        /**
         * value: "DEPTH_FIRST"
         * @const
         */
        "DEPTH_FIRST" = "DEPTH_FIRST";

    
        /**
         * value: "BREADTH_FIRST"
         * @const
         */
        "BREADTH_FIRST" = "BREADTH_FIRST";

    

    /**
    * Returns a <code>EntityGraphTraversal</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EntityGraphTraversal} The enum <code>EntityGraphTraversal</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

