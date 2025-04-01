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
import NotificationStatus from './NotificationStatus';

/**
 * The UpdateNotificationStatusRequestAllOf model module.
 * @module model/UpdateNotificationStatusRequestAllOf
 * @version 0.0.26
 */
class UpdateNotificationStatusRequestAllOf {
    /**
     * Constructs a new <code>UpdateNotificationStatusRequestAllOf</code>.
     * @alias module:model/UpdateNotificationStatusRequestAllOf
     */
    constructor() { 
        
        UpdateNotificationStatusRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateNotificationStatusRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateNotificationStatusRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateNotificationStatusRequestAllOf} The populated <code>UpdateNotificationStatusRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateNotificationStatusRequestAllOf();

            if (data.hasOwnProperty('status')) {
                obj['status'] = NotificationStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NotificationStatus} status
 */
UpdateNotificationStatusRequestAllOf.prototype['status'] = undefined;






export default UpdateNotificationStatusRequestAllOf;

