/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.5
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class AchievementStatus.
* @enum {}
* @readonly
*/
export default class AchievementStatus {
    
        /**
         * value: "Unknown"
         * @const
         */
        "Unknown" = "Unknown";

    
        /**
         * value: "Draft"
         * @const
         */
        "Draft" = "Draft";

    
        /**
         * value: "Preparing"
         * @const
         */
        "Preparing" = "Preparing";

    
        /**
         * value: "Ready"
         * @const
         */
        "Ready" = "Ready";

    
        /**
         * value: "Starting"
         * @const
         */
        "Starting" = "Starting";

    
        /**
         * value: "Active"
         * @const
         */
        "Active" = "Active";

    
        /**
         * value: "Finishing"
         * @const
         */
        "Finishing" = "Finishing";

    
        /**
         * value: "Finished"
         * @const
         */
        "Finished" = "Finished";

    
        /**
         * value: "Template"
         * @const
         */
        "Template" = "Template";

    
        /**
         * value: "Cancelling"
         * @const
         */
        "Cancelling" = "Cancelling";

    
        /**
         * value: "Cancelled"
         * @const
         */
        "Cancelled" = "Cancelled";

    
        /**
         * value: "Deleting"
         * @const
         */
        "Deleting" = "Deleting";

    
        /**
         * value: "Deleted"
         * @const
         */
        "Deleted" = "Deleted";

    

    /**
    * Returns a <code>AchievementStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AchievementStatus} The enum <code>AchievementStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

