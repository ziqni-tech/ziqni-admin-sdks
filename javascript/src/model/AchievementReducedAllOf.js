/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.7
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AchievementLiveStatus from './AchievementLiveStatus';
import Dependancy from './Dependancy';

/**
 * The AchievementReducedAllOf model module.
 * @module model/AchievementReducedAllOf
 * @version 0.0.26
 */
class AchievementReducedAllOf {
    /**
     * Constructs a new <code>AchievementReducedAllOf</code>.
     * @alias module:model/AchievementReducedAllOf
     * @param name {String} A name for the Achievement. Can be translated
     * @param achievementLiveStatus {module:model/AchievementLiveStatus} 
     */
    constructor(name, achievementLiveStatus) { 
        
        AchievementReducedAllOf.initialize(this, name, achievementLiveStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, achievementLiveStatus) { 
        obj['name'] = name;
        obj['achievementLiveStatus'] = achievementLiveStatus;
    }

    /**
     * Constructs a <code>AchievementReducedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AchievementReducedAllOf} obj Optional instance to populate.
     * @return {module:model/AchievementReducedAllOf} The populated <code>AchievementReducedAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AchievementReducedAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('achievementLiveStatus')) {
                obj['achievementLiveStatus'] = AchievementLiveStatus.constructFromObject(data['achievementLiveStatus']);
            }
            if (data.hasOwnProperty('tagsId')) {
                obj['tagsId'] = ApiClient.convertToType(data['tagsId'], ['String']);
            }
            if (data.hasOwnProperty('dependantOn')) {
                obj['dependantOn'] = ApiClient.convertToType(data['dependantOn'], [Dependancy]);
            }
        }
        return obj;
    }


}

/**
 * A name for the Achievement. Can be translated
 * @member {String} name
 */
AchievementReducedAllOf.prototype['name'] = undefined;

/**
 * @member {module:model/AchievementLiveStatus} achievementLiveStatus
 */
AchievementReducedAllOf.prototype['achievementLiveStatus'] = undefined;

/**
 * Categorisation of the achievements
 * @member {Array.<String>} tagsId
 */
AchievementReducedAllOf.prototype['tagsId'] = undefined;

/**
 * @member {Array.<module:model/Dependancy>} dependantOn
 */
AchievementReducedAllOf.prototype['dependantOn'] = undefined;






export default AchievementReducedAllOf;

