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
import AchievementStateActions from './AchievementStateActions';
import AchievementStrategies from './AchievementStrategies';
import DependantOn from './DependantOn';
import Scheduling from './Scheduling';

/**
 * The UpdateAchievementRequestAllOf model module.
 * @module model/UpdateAchievementRequestAllOf
 * @version 0.0.26
 */
class UpdateAchievementRequestAllOf {
    /**
     * Constructs a new <code>UpdateAchievementRequestAllOf</code>.
     * @alias module:model/UpdateAchievementRequestAllOf
     */
    constructor() { 
        
        UpdateAchievementRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateAchievementRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAchievementRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateAchievementRequestAllOf} The populated <code>UpdateAchievementRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAchievementRequestAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('termsAndConditions')) {
                obj['termsAndConditions'] = ApiClient.convertToType(data['termsAndConditions'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('banner')) {
                obj['banner'] = ApiClient.convertToType(data['banner'], 'String');
            }
            if (data.hasOwnProperty('bannerLowResolution')) {
                obj['bannerLowResolution'] = ApiClient.convertToType(data['bannerLowResolution'], 'String');
            }
            if (data.hasOwnProperty('bannerHighResolution')) {
                obj['bannerHighResolution'] = ApiClient.convertToType(data['bannerHighResolution'], 'String');
            }
            if (data.hasOwnProperty('scheduling')) {
                obj['scheduling'] = Scheduling.constructFromObject(data['scheduling']);
            }
            if (data.hasOwnProperty('achievementLiveStatus')) {
                obj['achievementLiveStatus'] = AchievementStateActions.constructFromObject(data['achievementLiveStatus']);
            }
            if (data.hasOwnProperty('maxNumberOfIssues')) {
                obj['maxNumberOfIssues'] = ApiClient.convertToType(data['maxNumberOfIssues'], 'Number');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('achievementDependencies')) {
                obj['achievementDependencies'] = DependantOn.constructFromObject(data['achievementDependencies']);
            }
            if (data.hasOwnProperty('memberTagsFilter')) {
                obj['memberTagsFilter'] = DependantOn.constructFromObject(data['memberTagsFilter']);
            }
            if (data.hasOwnProperty('productIds')) {
                obj['productIds'] = ApiClient.convertToType(data['productIds'], ['String']);
            }
            if (data.hasOwnProperty('productTagsFilter')) {
                obj['productTagsFilter'] = DependantOn.constructFromObject(data['productTagsFilter']);
            }
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
            if (data.hasOwnProperty('removeConstraints')) {
                obj['removeConstraints'] = ApiClient.convertToType(data['removeConstraints'], ['String']);
            }
            if (data.hasOwnProperty('strategies')) {
                obj['strategies'] = AchievementStrategies.constructFromObject(data['strategies']);
            }
        }
        return obj;
    }


}

/**
 * A name for the Achievement. Can be translated
 * @member {String} name
 */
UpdateAchievementRequestAllOf.prototype['name'] = undefined;

/**
 * A name for the Achievement. Can be translated
 * @member {String} description
 */
UpdateAchievementRequestAllOf.prototype['description'] = undefined;

/**
 * Terms and conditions of an achievement. Can be translated
 * @member {String} termsAndConditions
 */
UpdateAchievementRequestAllOf.prototype['termsAndConditions'] = undefined;

/**
 * An Icon id that has been pre uploaded to the system to display for Achievement
 * @member {String} icon
 */
UpdateAchievementRequestAllOf.prototype['icon'] = undefined;

/**
 * A banner id that has been pre uploaded to the system to display for Achievement
 * @member {String} banner
 */
UpdateAchievementRequestAllOf.prototype['banner'] = undefined;

/**
 * A bannerLowResolution id that has been pre uploaded to the system to display for Achievement
 * @member {String} bannerLowResolution
 */
UpdateAchievementRequestAllOf.prototype['bannerLowResolution'] = undefined;

/**
 * A bannerHighResolution id that has been pre uploaded to the system to display for Achievement
 * @member {String} bannerHighResolution
 */
UpdateAchievementRequestAllOf.prototype['bannerHighResolution'] = undefined;

/**
 * @member {module:model/Scheduling} scheduling
 */
UpdateAchievementRequestAllOf.prototype['scheduling'] = undefined;

/**
 * @member {module:model/AchievementStateActions} achievementLiveStatus
 */
UpdateAchievementRequestAllOf.prototype['achievementLiveStatus'] = undefined;

/**
 * Maximum number of issued achievements
 * @member {Number} maxNumberOfIssues
 */
UpdateAchievementRequestAllOf.prototype['maxNumberOfIssues'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
UpdateAchievementRequestAllOf.prototype['constraints'] = undefined;

/**
 * @member {module:model/DependantOn} achievementDependencies
 */
UpdateAchievementRequestAllOf.prototype['achievementDependencies'] = undefined;

/**
 * @member {module:model/DependantOn} memberTagsFilter
 */
UpdateAchievementRequestAllOf.prototype['memberTagsFilter'] = undefined;

/**
 * 
 * @member {Array.<String>} productIds
 */
UpdateAchievementRequestAllOf.prototype['productIds'] = undefined;

/**
 * @member {module:model/DependantOn} productTagsFilter
 */
UpdateAchievementRequestAllOf.prototype['productTagsFilter'] = undefined;

/**
 * 
 * @member {Array.<String>} addConstraints
 */
UpdateAchievementRequestAllOf.prototype['addConstraints'] = undefined;

/**
 * 
 * @member {Array.<String>} removeConstraints
 */
UpdateAchievementRequestAllOf.prototype['removeConstraints'] = undefined;

/**
 * @member {module:model/AchievementStrategies} strategies
 */
UpdateAchievementRequestAllOf.prototype['strategies'] = undefined;






export default UpdateAchievementRequestAllOf;

