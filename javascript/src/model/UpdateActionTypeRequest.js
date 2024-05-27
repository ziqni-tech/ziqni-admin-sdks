/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.14
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import UpdateActionTypeRequestAllOf from './UpdateActionTypeRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';

/**
 * The UpdateActionTypeRequest model module.
 * @module model/UpdateActionTypeRequest
 * @version 0.0.26
 */
class UpdateActionTypeRequest {
    /**
     * Constructs a new <code>UpdateActionTypeRequest</code>.
     * @alias module:model/UpdateActionTypeRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateActionTypeRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateActionTypeRequestAllOf.initialize(this);
        UpdateActionTypeRequest.initialize(this, id);
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
     * Constructs a <code>UpdateActionTypeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateActionTypeRequest} obj Optional instance to populate.
     * @return {module:model/UpdateActionTypeRequest} The populated <code>UpdateActionTypeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateActionTypeRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateOptParamModels.constructFromObject(data, obj);
            UpdateActionTypeRequestAllOf.constructFromObject(data, obj);

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
UpdateActionTypeRequest.prototype['id'] = undefined;

/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateActionTypeRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateActionTypeRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
UpdateActionTypeRequest.prototype['metadata'] = undefined;

/**
 * The name of the Action Helper
 * @member {String} name
 */
UpdateActionTypeRequest.prototype['name'] = undefined;

/**
 * The description of the rule action helper for your reference
 * @member {String} description
 */
UpdateActionTypeRequest.prototype['description'] = undefined;

/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} addConstraints
 */
UpdateActionTypeRequest.prototype['addConstraints'] = undefined;

/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} removeConstraints
 */
UpdateActionTypeRequest.prototype['removeConstraints'] = undefined;

/**
 * unit of measure id
 * @member {String} unitOfMeasure
 */
UpdateActionTypeRequest.prototype['unitOfMeasure'] = undefined;


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
// Implement UpdateActionTypeRequestAllOf interface:
/**
 * The name of the Action Helper
 * @member {String} name
 */
UpdateActionTypeRequestAllOf.prototype['name'] = undefined;
/**
 * The description of the rule action helper for your reference
 * @member {String} description
 */
UpdateActionTypeRequestAllOf.prototype['description'] = undefined;
/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} addConstraints
 */
UpdateActionTypeRequestAllOf.prototype['addConstraints'] = undefined;
/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} removeConstraints
 */
UpdateActionTypeRequestAllOf.prototype['removeConstraints'] = undefined;
/**
 * unit of measure id
 * @member {String} unitOfMeasure
 */
UpdateActionTypeRequestAllOf.prototype['unitOfMeasure'] = undefined;




export default UpdateActionTypeRequest;

