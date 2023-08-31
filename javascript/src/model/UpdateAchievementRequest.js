/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.9
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AchievementLiveStatus from './AchievementLiveStatus';
import AchievementStrategies from './AchievementStrategies';
import DependantOn from './DependantOn';
import Scheduling from './Scheduling';
import UpdateAchievementRequestAllOf from './UpdateAchievementRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';

/**
 * The UpdateAchievementRequest model module.
 * @module model/UpdateAchievementRequest
 * @version 0.0.26
 */
class UpdateAchievementRequest {
    /**
     * Constructs a new <code>UpdateAchievementRequest</code>.
     * @alias module:model/UpdateAchievementRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateAchievementRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateAchievementRequestAllOf.initialize(this);
        UpdateAchievementRequest.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>UpdateAchievementRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAchievementRequest} obj Optional instance to populate.
     * @return {module:model/UpdateAchievementRequest} The populated <code>UpdateAchievementRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAchievementRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateOptParamModels.constructFromObject(data, obj);
            UpdateAchievementRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
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
            if (data.hasOwnProperty('scheduling')) {
                obj['scheduling'] = Scheduling.constructFromObject(data['scheduling']);
            }
            if (data.hasOwnProperty('achievementLiveStatus')) {
                obj['achievementLiveStatus'] = AchievementLiveStatus.constructFromObject(data['achievementLiveStatus']);
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
 * A unique system generated identifier
 * @member {String} id
 */
UpdateAchievementRequest.prototype['id'] = undefined;

/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateAchievementRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateAchievementRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
UpdateAchievementRequest.prototype['metadata'] = undefined;

/**
 * A name for the Achievement. Can be translated
 * @member {String} name
 */
UpdateAchievementRequest.prototype['name'] = undefined;

/**
 * A name for the Achievement. Can be translated
 * @member {String} description
 */
UpdateAchievementRequest.prototype['description'] = undefined;

/**
 * Terms and conditions of an achievement. Can be translated
 * @member {String} termsAndConditions
 */
UpdateAchievementRequest.prototype['termsAndConditions'] = undefined;

/**
 * An Icon id that has been pre uploaded to the system to display for Achievement
 * @member {String} icon
 */
UpdateAchievementRequest.prototype['icon'] = undefined;

/**
 * @member {module:model/Scheduling} scheduling
 */
UpdateAchievementRequest.prototype['scheduling'] = undefined;

/**
 * @member {module:model/AchievementLiveStatus} achievementLiveStatus
 */
UpdateAchievementRequest.prototype['achievementLiveStatus'] = undefined;

/**
 * Maximum number of issued achievements
 * @member {Number} maxNumberOfIssues
 */
UpdateAchievementRequest.prototype['maxNumberOfIssues'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
UpdateAchievementRequest.prototype['constraints'] = undefined;

/**
 * @member {module:model/DependantOn} achievementDependencies
 */
UpdateAchievementRequest.prototype['achievementDependencies'] = undefined;

/**
 * @member {module:model/DependantOn} memberTagsFilter
 */
UpdateAchievementRequest.prototype['memberTagsFilter'] = undefined;

/**
 * 
 * @member {Array.<String>} productIds
 */
UpdateAchievementRequest.prototype['productIds'] = undefined;

/**
 * @member {module:model/DependantOn} productTagsFilter
 */
UpdateAchievementRequest.prototype['productTagsFilter'] = undefined;

/**
 * 
 * @member {Array.<String>} addConstraints
 */
UpdateAchievementRequest.prototype['addConstraints'] = undefined;

/**
 * 
 * @member {Array.<String>} removeConstraints
 */
UpdateAchievementRequest.prototype['removeConstraints'] = undefined;

/**
 * @member {module:model/AchievementStrategies} strategies
 */
UpdateAchievementRequest.prototype['strategies'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateOptParamModels interface:
/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
UpdateOptParamModels.prototype['metadata'] = undefined;
// Implement UpdateAchievementRequestAllOf interface:
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
 * @member {module:model/Scheduling} scheduling
 */
UpdateAchievementRequestAllOf.prototype['scheduling'] = undefined;
/**
 * @member {module:model/AchievementLiveStatus} achievementLiveStatus
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




export default UpdateAchievementRequest;

