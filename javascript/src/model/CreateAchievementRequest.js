/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.2
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AchievementStrategies from './AchievementStrategies';
import CreateAchievementRequestAllOf from './CreateAchievementRequestAllOf';
import CreateOptParamModels from './CreateOptParamModels';
import CreateRewardRequest from './CreateRewardRequest';
import DependantOn from './DependantOn';
import Rule from './Rule';
import Scheduling from './Scheduling';
import Translation from './Translation';

/**
 * The CreateAchievementRequest model module.
 * @module model/CreateAchievementRequest
 * @version 0.0.26
 */
class CreateAchievementRequest {
    /**
     * Constructs a new <code>CreateAchievementRequest</code>.
     * @alias module:model/CreateAchievementRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateAchievementRequestAllOf
     * @param name {String} A name for the Achievement. Can be translated
     * @param scheduling {module:model/Scheduling} 
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(name, scheduling, constraints) { 
        CreateOptParamModels.initialize(this);CreateAchievementRequestAllOf.initialize(this, name, scheduling, constraints);
        CreateAchievementRequest.initialize(this, name, scheduling, constraints);
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
     * Constructs a <code>CreateAchievementRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAchievementRequest} obj Optional instance to populate.
     * @return {module:model/CreateAchievementRequest} The populated <code>CreateAchievementRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAchievementRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateAchievementRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
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
            if (data.hasOwnProperty('productTagsFilter')) {
                obj['productTagsFilter'] = DependantOn.constructFromObject(data['productTagsFilter']);
            }
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
            if (data.hasOwnProperty('strategies')) {
                obj['strategies'] = AchievementStrategies.constructFromObject(data['strategies']);
            }
        }
        return obj;
    }


}

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateAchievementRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateAchievementRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateAchievementRequest.prototype['metadata'] = undefined;

/**
 * A name for the Achievement. Can be translated
 * @member {String} name
 */
CreateAchievementRequest.prototype['name'] = undefined;

/**
 * A name for the Achievement. Can be translated
 * @member {String} description
 */
CreateAchievementRequest.prototype['description'] = undefined;

/**
 * Terms and conditions of an achievement. Can be translated
 * @member {String} termsAndConditions
 */
CreateAchievementRequest.prototype['termsAndConditions'] = undefined;

/**
 * An Icon id that has been pre uploaded to the system to display for Achievement
 * @member {String} icon
 */
CreateAchievementRequest.prototype['icon'] = undefined;

/**
 * @member {Array.<module:model/Rule>} rules
 */
CreateAchievementRequest.prototype['rules'] = undefined;

/**
 * @member {module:model/Scheduling} scheduling
 */
CreateAchievementRequest.prototype['scheduling'] = undefined;

/**
 * Maximum number of issued achievements
 * @member {Number} maxNumberOfIssues
 */
CreateAchievementRequest.prototype['maxNumberOfIssues'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateAchievementRequest.prototype['translations'] = undefined;

/**
 * @member {Array.<module:model/CreateRewardRequest>} rewards
 */
CreateAchievementRequest.prototype['rewards'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateAchievementRequest.prototype['constraints'] = undefined;

/**
 * @member {module:model/DependantOn} achievementDependencies
 */
CreateAchievementRequest.prototype['achievementDependencies'] = undefined;

/**
 * @member {module:model/DependantOn} memberTagsFilter
 */
CreateAchievementRequest.prototype['memberTagsFilter'] = undefined;

/**
 * @member {module:model/DependantOn} productTagsFilter
 */
CreateAchievementRequest.prototype['productTagsFilter'] = undefined;

/**
 * 
 * @member {Array.<String>} addConstraints
 */
CreateAchievementRequest.prototype['addConstraints'] = undefined;

/**
 * @member {module:model/AchievementStrategies} strategies
 */
CreateAchievementRequest.prototype['strategies'] = undefined;


// Implement CreateOptParamModels interface:
/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
CreateOptParamModels.prototype['metadata'] = undefined;
// Implement CreateAchievementRequestAllOf interface:
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
 * @member {module:model/DependantOn} productTagsFilter
 */
CreateAchievementRequestAllOf.prototype['productTagsFilter'] = undefined;
/**
 * 
 * @member {Array.<String>} addConstraints
 */
CreateAchievementRequestAllOf.prototype['addConstraints'] = undefined;
/**
 * @member {module:model/AchievementStrategies} strategies
 */
CreateAchievementRequestAllOf.prototype['strategies'] = undefined;




export default CreateAchievementRequest;

