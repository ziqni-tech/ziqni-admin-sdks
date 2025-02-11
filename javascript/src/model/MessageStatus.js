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
* Enum class MessageStatus.
* @enum {}
* @readonly
*/
export default class MessageStatus {
    
        /**
         * value: "New"
         * @const
         */
        "New" = "New";

    
        /**
         * value: "Read"
         * @const
         */
        "Read" = "Read";

    
        /**
         * value: "Draft"
         * @const
         */
        "Draft" = "Draft";

    
        /**
         * value: "Sent"
         * @const
         */
        "Sent" = "Sent";

    
        /**
         * value: "CollaborationRequest"
         * @const
         */
        "CollaborationRequest" = "CollaborationRequest";

    
        /**
         * value: "Actioned"
         * @const
         */
        "Actioned" = "Actioned";

    
        /**
         * value: "Claimed"
         * @const
         */
        "Claimed" = "Claimed";

    
        /**
         * value: "Expired"
         * @const
         */
        "Expired" = "Expired";

    
        /**
         * value: "Canceled"
         * @const
         */
        "Canceled" = "Canceled";

    
        /**
         * value: "Deleted"
         * @const
         */
        "Deleted" = "Deleted";

    

    /**
    * Returns a <code>MessageStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MessageStatus} The enum <code>MessageStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

