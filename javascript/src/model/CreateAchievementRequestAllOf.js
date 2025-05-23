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
import AchievementStrategies from './AchievementStrategies';
import CreateRewardRequest from './CreateRewardRequest';
import DependantOn from './DependantOn';
import Rule from './Rule';
import Scheduling from './Scheduling';
import Translation from './Translation';

/**
 * The CreateAchievementRequestAllOf model module.
 * @module model/CreateAchievementRequestAllOf
 * @version 0.0.26
 */
class CreateAchievementRequestAllOf {
    /**
     * Constructs a new <code>CreateAchievementRequestAllOf</code>.
     * @alias module:model/CreateAchievementRequestAllOf
     * @param name {String} A name for the Achievement. Can be translated
     * @param scheduling {module:model/Scheduling} 
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(name, scheduling, constraints) { 
        
        CreateAchievementRequestAllOf.initialize(this, name, scheduling, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, scheduling, constraints) { 
        obj['name'] = name;
        obj['scheduling'] = scheduling;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>CreateAchievementRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAchievementRequestAllOf} obj Optional instance to populate.
     * @return {module:model/CreateAchievementRequestAllOf} The populated <code>CreateAchievementRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAchievementRequestAllOf();

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
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [Rule]);
            }
            if (data.hasOwnProperty('scheduling')) {
                obj['scheduling'] = Scheduling.constructFromObject(data['scheduling']);
            }
            if (data.hasOwnProperty('maxNumberOfIssues')) {
                obj['maxNumberOfIssues'] = ApiClient.convertToType(data['maxNumberOfIssues'], 'Number');
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
            if (data.hasOwnProperty('rewards')) {
                obj['rewards'] = ApiClient.convertToType(data['rewards'], [CreateRewardRequest]);
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
            if (data.hasOwnProperty('strategies')) {
                obj['strategies'] = AchievementStrategies.constructFromObject(data['strategies']);
            }
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A name for the Achievement. Can be translated
 * @member {String} name
 */
CreateAchievementRequestAllOf.prototype['name'] = undefined;

/**
 * A name for the Achievement. Can be translated
 * @member {String} description
 */
CreateAchievementRequestAllOf.prototype['description'] = undefined;

/**
 * Terms and conditions of an achievement. Can be translated
 * @member {String} termsAndConditions
 */
CreateAchievementRequestAllOf.prototype['termsAndConditions'] = undefined;

/**
 * An Icon id that has been pre uploaded to the system to display for Achievement
 * @member {String} icon
 */
CreateAchievementRequestAllOf.prototype['icon'] = undefined;

/**
 * A banner id that has been pre uploaded to the system to display for Achievement
 * @member {String} banner
 */
CreateAchievementRequestAllOf.prototype['banner'] = undefined;

/**
 * A bannerLowResolution id that has been pre uploaded to the system to display for Achievement
 * @member {String} bannerLowResolution
 */
CreateAchievementRequestAllOf.prototype['bannerLowResolution'] = undefined;

/**
 * A bannerHighResolution id that has been pre uploaded to the system to display for Achievement
 * @member {String} bannerHighResolution
 */
CreateAchievementRequestAllOf.prototype['bannerHighResolution'] = undefined;

/**
 * @member {Array.<module:model/Rule>} rules
 */
CreateAchievementRequestAllOf.prototype['rules'] = undefined;

/**
 * @member {module:model/Scheduling} scheduling
 */
CreateAchievementRequestAllOf.prototype['scheduling'] = undefined;

/**
 * Maximum number of issued achievements
 * @member {Number} maxNumberOfIssues
 */
CreateAchievementRequestAllOf.prototype['maxNumberOfIssues'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateAchievementRequestAllOf.prototype['translations'] = undefined;

/**
 * @member {Array.<module:model/CreateRewardRequest>} rewards
 */
CreateAchievementRequestAllOf.prototype['rewards'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateAchievementRequestAllOf.prototype['constraints'] = undefined;

/**
 * @member {module:model/DependantOn} achievementDependencies
 */
CreateAchievementRequestAllOf.prototype['achievementDependencies'] = undefined;

/**
 * @member {module:model/DependantOn} memberTagsFilter
 */
CreateAchievementRequestAllOf.prototype['memberTagsFilter'] = undefined;

/**
 * Restrict this to specific products
 * @member {Array.<String>} productIds
 */
CreateAchievementRequestAllOf.prototype['productIds'] = undefined;

/**
 * @member {module:model/DependantOn} productTagsFilter
 */
CreateAchievementRequestAllOf.prototype['productTagsFilter'] = undefined;

/**
 * @member {module:model/AchievementStrategies} strategies
 */
CreateAchievementRequestAllOf.prototype['strategies'] = undefined;

/**
 * 
 * @member {Array.<String>} addConstraints
 */
CreateAchievementRequestAllOf.prototype['addConstraints'] = undefined;






export default CreateAchievementRequestAllOf;

