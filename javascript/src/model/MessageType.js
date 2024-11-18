/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.17
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class MessageType.
* @enum {}
* @readonly
*/
export default class MessageType {
    
        /**
         * value: "Achievement"
         * @const
         */
        "Achievement" = "Achievement";

    
        /**
         * value: "Ticket"
         * @const
         */
        "Ticket" = "Ticket";

    
        /**
         * value: "Reward"
         * @const
         */
        "Reward" = "Reward";

    
        /**
         * value: "Text"
         * @const
         */
        "Text" = "Text";

    
        /**
         * value: "Notification"
         * @const
         */
        "Notification" = "Notification";

    
        /**
         * value: "InboxItem"
         * @const
         */
        "InboxItem" = "InboxItem";

    
        /**
         * value: "NotificationInboxItem"
         * @const
         */
        "NotificationInboxItem" = "NotificationInboxItem";

    

    /**
    * Returns a <code>MessageType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MessageType} The enum <code>MessageType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

