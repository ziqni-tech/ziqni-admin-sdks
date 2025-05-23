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
import AwardAction from './AwardAction';
import AwardScheduling from './AwardScheduling';
import CreateOptParamModels from './CreateOptParamModels';
import CreateRewardTypeRequestAllOf from './CreateRewardTypeRequestAllOf';
import Translation from './Translation';

/**
 * The CreateRewardTypeRequest model module.
 * @module model/CreateRewardTypeRequest
 * @version 0.0.26
 */
class CreateRewardTypeRequest {
    /**
     * Constructs a new <code>CreateRewardTypeRequest</code>.
     * This is a request for Reward Type creation
     * @alias module:model/CreateRewardTypeRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateRewardTypeRequestAllOf
     * @param name {String} The name of the Reward type
     * @param key {String} A unique key that represents the reward type
     * @param unitOfMeasure {String} 
     */
    constructor(name, key, unitOfMeasure) { 
        CreateOptParamModels.initialize(this);CreateRewardTypeRequestAllOf.initialize(this, name, key, unitOfMeasure);
        CreateRewardTypeRequest.initialize(this, name, key, unitOfMeasure);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, key, unitOfMeasure) { 
        obj['name'] = name;
        obj['key'] = key;
        obj['unitOfMeasure'] = unitOfMeasure;
    }

    /**
     * Constructs a <code>CreateRewardTypeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRewardTypeRequest} obj Optional instance to populate.
     * @return {module:model/CreateRewardTypeRequest} The populated <code>CreateRewardTypeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRewardTypeRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateRewardTypeRequestAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
            if (data.hasOwnProperty('awardActions')) {
                obj['awardActions'] = ApiClient.convertToType(data['awardActions'], [AwardAction]);
            }
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
            if (data.hasOwnProperty('unitOfMeasure')) {
                obj['unitOfMeasure'] = ApiClient.convertToType(data['unitOfMeasure'], 'String');
            }
            if (data.hasOwnProperty('scheduling')) {
                obj['scheduling'] = ApiClient.convertToType(data['scheduling'], [AwardScheduling]);
            }
        }
        return obj;
    }


}

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateRewardTypeRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateRewardTypeRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateRewardTypeRequest.prototype['metadata'] = undefined;

/**
 * The name of the Reward type
 * @member {String} name
 */
CreateRewardTypeRequest.prototype['name'] = undefined;

/**
 * The description of a reward type
 * @member {String} description
 */
CreateRewardTypeRequest.prototype['description'] = undefined;

/**
 * A unique key that represents the reward type
 * @member {String} key
 */
CreateRewardTypeRequest.prototype['key'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateRewardTypeRequest.prototype['translations'] = undefined;

/**
 * When the state changes the action is performed
 * @member {Array.<module:model/AwardAction>} awardActions
 */
CreateRewardTypeRequest.prototype['awardActions'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
CreateRewardTypeRequest.prototype['addConstraints'] = undefined;

/**
 * @member {String} unitOfMeasure
 */
CreateRewardTypeRequest.prototype['unitOfMeasure'] = undefined;

/**
 * Set the default time based constraints using either an exact point in time or duration to manage the life cycle of the award
 * @member {Array.<module:model/AwardScheduling>} scheduling
 */
CreateRewardTypeRequest.prototype['scheduling'] = undefined;


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
// Implement CreateRewardTypeRequestAllOf interface:
/**
 * The name of the Reward type
 * @member {String} name
 */
CreateRewardTypeRequestAllOf.prototype['name'] = undefined;
/**
 * The description of a reward type
 * @member {String} description
 */
CreateRewardTypeRequestAllOf.prototype['description'] = undefined;
/**
 * A unique key that represents the reward type
 * @member {String} key
 */
CreateRewardTypeRequestAllOf.prototype['key'] = undefined;
/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateRewardTypeRequestAllOf.prototype['translations'] = undefined;
/**
 * When the state changes the action is performed
 * @member {Array.<module:model/AwardAction>} awardActions
 */
CreateRewardTypeRequestAllOf.prototype['awardActions'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
CreateRewardTypeRequestAllOf.prototype['addConstraints'] = undefined;
/**
 * @member {String} unitOfMeasure
 */
CreateRewardTypeRequestAllOf.prototype['unitOfMeasure'] = undefined;
/**
 * Set the default time based constraints using either an exact point in time or duration to manage the life cycle of the award
 * @member {Array.<module:model/AwardScheduling>} scheduling
 */
CreateRewardTypeRequestAllOf.prototype['scheduling'] = undefined;




export default CreateRewardTypeRequest;

