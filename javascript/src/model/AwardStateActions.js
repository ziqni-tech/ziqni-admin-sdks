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
* Enum class AwardStateActions.
* @enum {}
* @readonly
*/
export default class AwardStateActions {
    
        /**
         * value: "Issued"
         * @const
         */
        "Issued" = "Issued";

    
        /**
         * value: "Held"
         * @const
         */
        "Held" = "Held";

    
        /**
         * value: "Claimed"
         * @const
         */
        "Claimed" = "Claimed";

    
        /**
         * value: "Processing"
         * @const
         */
        "Processing" = "Processing";

    
        /**
         * value: "Delivered"
         * @const
         */
        "Delivered" = "Delivered";

    
        /**
         * value: "Expired"
         * @const
         */
        "Expired" = "Expired";

    
        /**
         * value: "Cancelled"
         * @const
         */
        "Cancelled" = "Cancelled";

    
        /**
         * value: "Declined"
         * @const
         */
        "Declined" = "Declined";

    
        /**
         * value: "Completed"
         * @const
         */
        "Completed" = "Completed";

    

    /**
    * Returns a <code>AwardStateActions</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AwardStateActions} The enum <code>AwardStateActions</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

