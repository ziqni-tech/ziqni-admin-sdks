/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.5
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';
import UpdateRewardTypeRequestAllOf from './UpdateRewardTypeRequestAllOf';

/**
 * The UpdateRewardTypeRequest model module.
 * @module model/UpdateRewardTypeRequest
 * @version 0.0.26
 */
class UpdateRewardTypeRequest {
    /**
     * Constructs a new <code>UpdateRewardTypeRequest</code>.
     * @alias module:model/UpdateRewardTypeRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateRewardTypeRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateRewardTypeRequestAllOf.initialize(this);
        UpdateRewardTypeRequest.initialize(this, id);
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
     * Constructs a <code>UpdateRewardTypeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRewardTypeRequest} obj Optional instance to populate.
     * @return {module:model/UpdateRewardTypeRequest} The populated <code>UpdateRewardTypeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRewardTypeRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateOptParamModels.constructFromObject(data, obj);
            UpdateRewardTypeRequestAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
            if (data.hasOwnProperty('removeConstraints')) {
                obj['removeConstraints'] = ApiClient.convertToType(data['removeConstraints'], ['String']);
            }
            if (data.hasOwnProperty('unitOfMeasure')) {
                obj['unitOfMeasure'] = ApiClient.convertToType(data['unitOfMeasure'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateRewardTypeRequest.prototype['id'] = undefined;

/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateRewardTypeRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateRewardTypeRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
UpdateRewardTypeRequest.prototype['metadata'] = undefined;

/**
 * The name of the Reward type
 * @member {String} name
 */
UpdateRewardTypeRequest.prototype['name'] = undefined;

/**
 * The description of a reward type
 * @member {String} description
 */
UpdateRewardTypeRequest.prototype['description'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
UpdateRewardTypeRequest.prototype['addConstraints'] = undefined;

/**
 * Remove constraints
 * @member {Array.<String>} removeConstraints
 */
UpdateRewardTypeRequest.prototype['removeConstraints'] = undefined;

/**
 * @member {String} unitOfMeasure
 */
UpdateRewardTypeRequest.prototype['unitOfMeasure'] = undefined;


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
// Implement UpdateRewardTypeRequestAllOf interface:
/**
 * The name of the Reward type
 * @member {String} name
 */
UpdateRewardTypeRequestAllOf.prototype['name'] = undefined;
/**
 * The description of a reward type
 * @member {String} description
 */
UpdateRewardTypeRequestAllOf.prototype['description'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
UpdateRewardTypeRequestAllOf.prototype['addConstraints'] = undefined;
/**
 * Remove constraints
 * @member {Array.<String>} removeConstraints
 */
UpdateRewardTypeRequestAllOf.prototype['removeConstraints'] = undefined;
/**
 * @member {String} unitOfMeasure
 */
UpdateRewardTypeRequestAllOf.prototype['unitOfMeasure'] = undefined;




export default UpdateRewardTypeRequest;

