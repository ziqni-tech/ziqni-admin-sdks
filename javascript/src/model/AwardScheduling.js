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
import AwardStateActions from './AwardStateActions';

/**
 * The AwardScheduling model module.
 * @module model/AwardScheduling
 * @version 0.0.26
 */
class AwardScheduling {
    /**
     * Constructs a new <code>AwardScheduling</code>.
     * Determines how the award release will be scheduled
     * @alias module:model/AwardScheduling
     * @param onStatusChangeTo {module:model/AwardStateActions} 
     */
    constructor(onStatusChangeTo) { 
        
        AwardScheduling.initialize(this, onStatusChangeTo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, onStatusChangeTo) { 
        obj['onStatusChangeTo'] = onStatusChangeTo;
    }

    /**
     * Constructs a <code>AwardScheduling</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AwardScheduling} obj Optional instance to populate.
     * @return {module:model/AwardScheduling} The populated <code>AwardScheduling</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AwardScheduling();

            if (data.hasOwnProperty('thenAwardActiveFrom')) {
                obj['thenAwardActiveFrom'] = ApiClient.convertToType(data['thenAwardActiveFrom'], 'String');
            }
            if (data.hasOwnProperty('thenAwardActiveUntil')) {
                obj['thenAwardActiveUntil'] = ApiClient.convertToType(data['thenAwardActiveUntil'], 'String');
            }
            if (data.hasOwnProperty('onStatusChangeTo')) {
                obj['onStatusChangeTo'] = AwardStateActions.constructFromObject(data['onStatusChangeTo']);
            }
        }
        return obj;
    }


}

/**
 * This is either a ISO-8601 date string like 2024-06-06T08:00:00 for a specific point in time. For duration: P3Y6M4DT12H30M5S (3 years, 6 months, 4 days, 12 hours, 30 minutes, and 5 seconds)
 * @member {String} thenAwardActiveFrom
 */
AwardScheduling.prototype['thenAwardActiveFrom'] = undefined;

/**
 * This is either a ISO-8601 date string like 2024-06-06T08:00:00 for a specific point in time. For duration: P3Y6M4DT12H30M5S (3 years, 6 months, 4 days, 12 hours, 30 minutes, and 5 seconds)
 * @member {String} thenAwardActiveUntil
 */
AwardScheduling.prototype['thenAwardActiveUntil'] = undefined;

/**
 * @member {module:model/AwardStateActions} onStatusChangeTo
 */
AwardScheduling.prototype['onStatusChangeTo'] = undefined;






export default AwardScheduling;

