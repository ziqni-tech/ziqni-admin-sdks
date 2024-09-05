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
* Enum class EntityGraphEdgeType.
* @enum {}
* @readonly
*/
export default class EntityGraphEdgeType {
    
        /**
         * value: "ROOT"
         * @const
         */
        "ROOT" = "ROOT";

    
        /**
         * value: "MUST"
         * @const
         */
        "MUST" = "MUST";

    
        /**
         * value: "SHOULD"
         * @const
         */
        "SHOULD" = "SHOULD";

    
        /**
         * value: "MUST_NOT"
         * @const
         */
        "MUST_NOT" = "MUST_NOT";

    
        /**
         * value: "UNKNOWN"
         * @const
         */
        "UNKNOWN" = "UNKNOWN";

    
        /**
         * value: "BROKEN"
         * @const
         */
        "BROKEN" = "BROKEN";

    

    /**
    * Returns a <code>EntityGraphEdgeType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EntityGraphEdgeType} The enum <code>EntityGraphEdgeType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

