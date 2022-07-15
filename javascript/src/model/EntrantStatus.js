/**
 * Ziqni Admin Api
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
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
         * value: "Unknown"
         * @const
         */
        "Unknown" = "Unknown";

    
        /**
         * value: "Deleted"
         * @const
         */
        "Deleted" = "Deleted";

    
        /**
         * value: "WrongGroups"
         * @const
         */
        "WrongGroups" = "WrongGroups";

    
        /**
         * value: "Disqualified"
         * @const
         */
        "Disqualified" = "Disqualified";

    
        /**
         * value: "Substituted"
         * @const
         */
        "Substituted" = "Substituted";

    
        /**
         * value: "Injured"
         * @const
         */
        "Injured" = "Injured";

    
        /**
         * value: "OptInRequired"
         * @const
         */
        "OptInRequired" = "OptInRequired";

    
        /**
         * value: "Registered"
         * @const
         */
        "Registered" = "Registered";

    
        /**
         * value: "Entered"
         * @const
         */
        "Entered" = "Entered";

    
        /**
         * value: "Playing"
         * @const
         */
        "Playing" = "Playing";

    
        /**
         * value: "Finished"
         * @const
         */
        "Finished" = "Finished";

    
        /**
         * value: "Finalised"
         * @const
         */
        "Finalised" = "Finalised";

    

    /**
    * Returns a <code>EntrantStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EntrantStatus} The enum <code>EntrantStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

