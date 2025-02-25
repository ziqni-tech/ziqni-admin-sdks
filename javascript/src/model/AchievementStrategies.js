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
import PointsStrategy from './PointsStrategy';

/**
 * The AchievementStrategies model module.
 * @module model/AchievementStrategies
 * @version 0.0.26
 */
class AchievementStrategies {
    /**
     * Constructs a new <code>AchievementStrategies</code>.
     * @alias module:model/AchievementStrategies
     */
    constructor() { 
        
        AchievementStrategies.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AchievementStrategies</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AchievementStrategies} obj Optional instance to populate.
     * @return {module:model/AchievementStrategies} The populated <code>AchievementStrategies</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AchievementStrategies();

            if (data.hasOwnProperty('pointsStrategy')) {
                obj['pointsStrategy'] = PointsStrategy.constructFromObject(data['pointsStrategy']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PointsStrategy} pointsStrategy
 */
AchievementStrategies.prototype['pointsStrategy'] = undefined;






export default AchievementStrategies;

