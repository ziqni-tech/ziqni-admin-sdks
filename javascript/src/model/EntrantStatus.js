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
* Enum class EntrantStatus.
* @enum {}
* @readonly
*/
export default class EntrantStatus {
    
        /**
         * value: "NotEntered"
         * @const
         */
        "NotEntered" = "NotEntered";

    
        /**
         * value: "Entering"
         * @const
         */
        "Entering" = "Entering";

    
        /**
         * value: "Entrant"
         * @const
         */
        "Entrant" = "Entrant";

    
        /**
         * value: "Preparing"
         * @const
         */
        "Preparing" = "Preparing";

    
        /**
         * value: "Running"
         * @const
         */
        "Running" = "Running";

    
        /**
         * value: "Completing"
         * @const
         */
        "Completing" = "Completing";

    
        /**
         * value: "Completed"
         * @const
         */
        "Completed" = "Completed";

    
        /**
         * value: "Rejecting"
         * @const
         */
        "Rejecting" = "Rejecting";

    
        /**
         * value: "Rejected"
         * @const
         */
        "Rejected" = "Rejected";

    
        /**
         * value: "Excluding"
         * @const
         */
        "Excluding" = "Excluding";

    
        /**
         * value: "Excluded"
         * @const
         */
        "Excluded" = "Excluded";

    

    /**
    * Returns a <code>EntrantStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EntrantStatus} The enum <code>EntrantStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

