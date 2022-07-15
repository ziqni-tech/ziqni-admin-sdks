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
* Enum class ConnectionState.
* @enum {}
* @readonly
*/
export default class ConnectionState {
    
        /**
         * value: "Start"
         * @const
         */
        "Start" = "Start";

    
        /**
         * value: "Stop"
         * @const
         */
        "Stop" = "Stop";

    

    /**
    * Returns a <code>ConnectionState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ConnectionState} The enum <code>ConnectionState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

