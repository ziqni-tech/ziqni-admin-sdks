/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.15
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CreateComputeEngineRequestAllOf from './CreateComputeEngineRequestAllOf';
import CreateOptParamModels from './CreateOptParamModels';

/**
 * The CreateComputeEngineRequest model module.
 * @module model/CreateComputeEngineRequest
 * @version 0.0.26
 */
class CreateComputeEngineRequest {
    /**
     * Constructs a new <code>CreateComputeEngineRequest</code>.
     * @alias module:model/CreateComputeEngineRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateComputeEngineRequestAllOf
     * @param constraints {Array.<String>} 
     */
    constructor(constraints) { 
        CreateOptParamModels.initialize(this);CreateComputeEngineRequestAllOf.initialize(this, constraints);
        CreateComputeEngineRequest.initialize(this, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, constraints) { 
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>CreateComputeEngineRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateComputeEngineRequest} obj Optional instance to populate.
     * @return {module:model/CreateComputeEngineRequest} The populated <code>CreateComputeEngineRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateComputeEngineRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateComputeEngineRequestAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('statistics')) {
                obj['statistics'] = ApiClient.convertToType(data['statistics'], {'String': 'String'});
            }
            if (data.hasOwnProperty('lastKnownStatusCode')) {
                obj['lastKnownStatusCode'] = ApiClient.convertToType(data['lastKnownStatusCode'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateComputeEngineRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateComputeEngineRequest.prototype['tags'] = undefined;

/**
 * 
 * @member {Object.<String, String>} metadata
 */
CreateComputeEngineRequest.prototype['metadata'] = undefined;

/**
 * @member {String} description
 */
CreateComputeEngineRequest.prototype['description'] = undefined;

/**
 * @member {Number} version
 */
CreateComputeEngineRequest.prototype['version'] = undefined;

/**
 * @member {String} name
 */
CreateComputeEngineRequest.prototype['name'] = undefined;

/**
 * Long
 * @member {Number} uptime
 */
CreateComputeEngineRequest.prototype['uptime'] = undefined;

/**
 * @member {Array.<String>} constraints
 */
CreateComputeEngineRequest.prototype['constraints'] = undefined;

/**
 * 
 * @member {Object.<String, String>} statistics
 */
CreateComputeEngineRequest.prototype['statistics'] = undefined;

/**
 * 
 * @member {Number} lastKnownStatusCode
 */
CreateComputeEngineRequest.prototype['lastKnownStatusCode'] = undefined;


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
// Implement CreateComputeEngineRequestAllOf interface:
/**
 * @member {String} description
 */
CreateComputeEngineRequestAllOf.prototype['description'] = undefined;
/**
 * @member {Number} version
 */
CreateComputeEngineRequestAllOf.prototype['version'] = undefined;
/**
 * @member {String} name
 */
CreateComputeEngineRequestAllOf.prototype['name'] = undefined;
/**
 * Long
 * @member {Number} uptime
 */
CreateComputeEngineRequestAllOf.prototype['uptime'] = undefined;
/**
 * @member {Array.<String>} constraints
 */
CreateComputeEngineRequestAllOf.prototype['constraints'] = undefined;
/**
 * 
 * @member {Object.<String, String>} statistics
 */
CreateComputeEngineRequestAllOf.prototype['statistics'] = undefined;
/**
 * 
 * @member {Number} lastKnownStatusCode
 */
CreateComputeEngineRequestAllOf.prototype['lastKnownStatusCode'] = undefined;
/**
 * 
 * @member {Object.<String, String>} metadata
 */
CreateComputeEngineRequestAllOf.prototype['metadata'] = undefined;




export default CreateComputeEngineRequest;

