/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.13
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SubscriptionTypes model module.
 * @module model/SubscriptionTypes
 * @version 0.0.26
 */
class SubscriptionTypes {
    /**
     * Constructs a new <code>SubscriptionTypes</code>.
     * 
     * @alias module:model/SubscriptionTypes
     */
    constructor() { 
        
        SubscriptionTypes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubscriptionTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubscriptionTypes} obj Optional instance to populate.
     * @return {module:model/SubscriptionTypes} The populated <code>SubscriptionTypes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionTypes();

            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {Array.<String>} entityType
 */
SubscriptionTypes.prototype['entityType'] = undefined;






export default SubscriptionTypes;

