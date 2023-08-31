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
import UpdateComputeEngineRequestAllOf from './UpdateComputeEngineRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';

/**
 * The UpdateComputeEngineRequest model module.
 * @module model/UpdateComputeEngineRequest
 * @version 0.0.26
 */
class UpdateComputeEngineRequest {
    /**
     * Constructs a new <code>UpdateComputeEngineRequest</code>.
     * @alias module:model/UpdateComputeEngineRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateComputeEngineRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateComputeEngineRequestAllOf.initialize(this);
        UpdateComputeEngineRequest.initialize(this, id);
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
     * Constructs a <code>UpdateComputeEngineRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateComputeEngineRequest} obj Optional instance to populate.
     * @return {module:model/UpdateComputeEngineRequest} The populated <code>UpdateComputeEngineRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateComputeEngineRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateOptParamModels.constructFromObject(data, obj);
            UpdateComputeEngineRequestAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uptime')) {
                obj['uptime'] = ApiClient.convertToType(data['uptime'], 'Number');
            }
            if (data.hasOwnProperty('statistics')) {
                obj['statistics'] = ApiClient.convertToType(data['statistics'], {'String': 'String'});
            }
            if (data.hasOwnProperty('lastKnownStatusCode')) {
                obj['lastKnownStatusCode'] = ApiClient.convertToType(data['lastKnownStatusCode'], 'Number');
            }
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
            if (data.hasOwnProperty('removeConstraints')) {
                obj['removeConstraints'] = ApiClient.convertToType(data['removeConstraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateComputeEngineRequest.prototype['id'] = undefined;

/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateComputeEngineRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateComputeEngineRequest.prototype['tags'] = undefined;

/**
 * 
 * @member {Object.<String, String>} metadata
 */
UpdateComputeEngineRequest.prototype['metadata'] = undefined;

/**
 * @member {String} description
 */
UpdateComputeEngineRequest.prototype['description'] = undefined;

/**
 * @member {Number} version
 */
UpdateComputeEngineRequest.prototype['version'] = undefined;

/**
 * @member {String} name
 */
UpdateComputeEngineRequest.prototype['name'] = undefined;

/**
 * Long
 * @member {Number} uptime
 */
UpdateComputeEngineRequest.prototype['uptime'] = undefined;

/**
 * 
 * @member {Object.<String, String>} statistics
 */
UpdateComputeEngineRequest.prototype['statistics'] = undefined;

/**
 * 
 * @member {Number} lastKnownStatusCode
 */
UpdateComputeEngineRequest.prototype['lastKnownStatusCode'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
UpdateComputeEngineRequest.prototype['addConstraints'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} removeConstraints
 */
UpdateComputeEngineRequest.prototype['removeConstraints'] = undefined;


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
// Implement UpdateComputeEngineRequestAllOf interface:
/**
 * @member {String} description
 */
UpdateComputeEngineRequestAllOf.prototype['description'] = undefined;
/**
 * @member {Number} version
 */
UpdateComputeEngineRequestAllOf.prototype['version'] = undefined;
/**
 * @member {String} name
 */
UpdateComputeEngineRequestAllOf.prototype['name'] = undefined;
/**
 * Long
 * @member {Number} uptime
 */
UpdateComputeEngineRequestAllOf.prototype['uptime'] = undefined;
/**
 * 
 * @member {Object.<String, String>} statistics
 */
UpdateComputeEngineRequestAllOf.prototype['statistics'] = undefined;
/**
 * 
 * @member {Number} lastKnownStatusCode
 */
UpdateComputeEngineRequestAllOf.prototype['lastKnownStatusCode'] = undefined;
/**
 * 
 * @member {Object.<String, String>} metadata
 */
UpdateComputeEngineRequestAllOf.prototype['metadata'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
UpdateComputeEngineRequestAllOf.prototype['addConstraints'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} removeConstraints
 */
UpdateComputeEngineRequestAllOf.prototype['removeConstraints'] = undefined;




export default UpdateComputeEngineRequest;

