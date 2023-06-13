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
import CreateActionTypeRequestAllOf from './CreateActionTypeRequestAllOf';
import CreateOptParamModels from './CreateOptParamModels';

/**
 * The CreateActionTypeRequest model module.
 * @module model/CreateActionTypeRequest
 * @version 0.0.26
 */
class CreateActionTypeRequest {
    /**
     * Constructs a new <code>CreateActionTypeRequest</code>.
     * @alias module:model/CreateActionTypeRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateActionTypeRequestAllOf
     * @param name {String} The name of the Action Helper
     * @param key {String} A unique key that represents an action helper
     * @param unitOfMeasure {String} The unit of measure id
     */
    constructor(name, key, unitOfMeasure) { 
        CreateOptParamModels.initialize(this);CreateActionTypeRequestAllOf.initialize(this, name, key, unitOfMeasure);
        CreateActionTypeRequest.initialize(this, name, key, unitOfMeasure);
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
     * Constructs a <code>CreateActionTypeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateActionTypeRequest} obj Optional instance to populate.
     * @return {module:model/CreateActionTypeRequest} The populated <code>CreateActionTypeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateActionTypeRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateActionTypeRequestAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
            if (data.hasOwnProperty('unitOfMeasure')) {
                obj['unitOfMeasure'] = ApiClient.convertToType(data['unitOfMeasure'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateActionTypeRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateActionTypeRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateActionTypeRequest.prototype['metadata'] = undefined;

/**
 * The name of the Action Helper
 * @member {String} name
 */
CreateActionTypeRequest.prototype['name'] = undefined;

/**
 * A unique key that represents an action helper
 * @member {String} key
 */
CreateActionTypeRequest.prototype['key'] = undefined;

/**
 * The description of the rule action helper for your reference
 * @member {String} description
 */
CreateActionTypeRequest.prototype['description'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
CreateActionTypeRequest.prototype['addConstraints'] = undefined;

/**
 * The unit of measure id
 * @member {String} unitOfMeasure
 */
CreateActionTypeRequest.prototype['unitOfMeasure'] = undefined;


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
// Implement CreateActionTypeRequestAllOf interface:
/**
 * The name of the Action Helper
 * @member {String} name
 */
CreateActionTypeRequestAllOf.prototype['name'] = undefined;
/**
 * A unique key that represents an action helper
 * @member {String} key
 */
CreateActionTypeRequestAllOf.prototype['key'] = undefined;
/**
 * The description of the rule action helper for your reference
 * @member {String} description
 */
CreateActionTypeRequestAllOf.prototype['description'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
CreateActionTypeRequestAllOf.prototype['addConstraints'] = undefined;
/**
 * The unit of measure id
 * @member {String} unitOfMeasure
 */
CreateActionTypeRequestAllOf.prototype['unitOfMeasure'] = undefined;




export default CreateActionTypeRequest;

