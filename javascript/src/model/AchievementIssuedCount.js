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
import CountResponse from './CountResponse';

/**
 * The AchievementIssuedCount model module.
 * @module model/AchievementIssuedCount
 * @version 0.0.26
 */
class AchievementIssuedCount {
    /**
     * Constructs a new <code>AchievementIssuedCount</code>.
     * @alias module:model/AchievementIssuedCount
     * @implements module:model/CountResponse
     * @param entityId {String} A unique identifier of a Entity
     * @param countValue {Number} The value in how many times the achievemnt was issued
     */
    constructor(entityId, countValue) { 
        CountResponse.initialize(this, entityId, countValue);
        AchievementIssuedCount.initialize(this, entityId, countValue);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entityId, countValue) { 
        obj['entityId'] = entityId;
        obj['countValue'] = countValue;
    }

    /**
     * Constructs a <code>AchievementIssuedCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AchievementIssuedCount} obj Optional instance to populate.
     * @return {module:model/AchievementIssuedCount} The populated <code>AchievementIssuedCount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AchievementIssuedCount();
            CountResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('countValue')) {
                obj['countValue'] = ApiClient.convertToType(data['countValue'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A unique identifier of a Entity
 * @member {String} entityId
 */
AchievementIssuedCount.prototype['entityId'] = undefined;

/**
 * The value in how many times the achievemnt was issued
 * @member {Number} countValue
 */
AchievementIssuedCount.prototype['countValue'] = undefined;


// Implement CountResponse interface:
/**
 * A unique identifier of a Entity
 * @member {String} entityId
 */
CountResponse.prototype['entityId'] = undefined;
/**
 * The value in how many times the achievemnt was issued
 * @member {Number} countValue
 */
CountResponse.prototype['countValue'] = undefined;




export default AchievementIssuedCount;

