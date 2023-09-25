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
* Enum class ContestStatus.
* @enum {}
* @readonly
*/
export default class ContestStatus {
    
        /**
         * value: "Unknown"
         * @const
         */
        "Unknown" = "Unknown";

    
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
         * value: "Draft"
         * @const
         */
        "Draft" = "Draft";

    
        /**
         * value: "Template"
         * @const
         */
        "Template" = "Template";

    
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
         * value: "Finalising"
         * @const
         */
        "Finalising" = "Finalising";

    
        /**
         * value: "Finalised"
         * @const
         */
        "Finalised" = "Finalised";

    

    /**
    * Returns a <code>ContestStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ContestStatus} The enum <code>ContestStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

