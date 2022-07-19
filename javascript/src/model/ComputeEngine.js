/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ComputeEngineAllOf from './ComputeEngineAllOf';
import ModelDefault from './ModelDefault';
import OptParamModels from './OptParamModels';

/**
 * The ComputeEngine model module.
 * @module model/ComputeEngine
 * @version 0.0.26
 */
class ComputeEngine {
    /**
     * Constructs a new <code>ComputeEngine</code>.
     * @alias module:model/ComputeEngine
     * @implements module:model/ModelDefault
     * @implements module:model/OptParamModels
     * @implements module:model/ComputeEngineAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param description {String} 
     * @param name {String} 
     */
    constructor(id, spaceName, created, description, name) { 
        ModelDefault.initialize(this, id, spaceName, created);OptParamModels.initialize(this);ComputeEngineAllOf.initialize(this, description, name);
        ComputeEngine.initialize(this, id, spaceName, created, description, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, description, name) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['description'] = description;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ComputeEngine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ComputeEngine} obj Optional instance to populate.
     * @return {module:model/ComputeEngine} The populated <code>ComputeEngine</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComputeEngine();
            ModelDefault.constructFromObject(data, obj);
            OptParamModels.constructFromObject(data, obj);
            ComputeEngineAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
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
 * A unique system generated identifier
 * @member {String} id
 */
ComputeEngine.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ComputeEngine.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ComputeEngine.prototype['created'] = undefined;

/**
 * @member {Object.<String, Object>} customFields
 */
ComputeEngine.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
ComputeEngine.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
ComputeEngine.prototype['metadata'] = undefined;

/**
 * @member {String} description
 */
ComputeEngine.prototype['description'] = undefined;

/**
 * @member {Number} version
 */
ComputeEngine.prototype['version'] = undefined;

/**
 * @member {String} name
 */
ComputeEngine.prototype['name'] = undefined;

/**
 * Long
 * @member {Number} uptime
 */
ComputeEngine.prototype['uptime'] = undefined;

/**
 * @member {Array.<String>} constraints
 */
ComputeEngine.prototype['constraints'] = undefined;

/**
 * @member {Object.<String, String>} statistics
 */
ComputeEngine.prototype['statistics'] = undefined;

/**
 * 
 * @member {Number} lastKnownStatusCode
 */
ComputeEngine.prototype['lastKnownStatusCode'] = undefined;


// Implement ModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
ModelDefault.prototype['id'] = undefined;
/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ModelDefault.prototype['spaceName'] = undefined;
/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ModelDefault.prototype['created'] = undefined;
// Implement OptParamModels interface:
/**
 * @member {Object.<String, Object>} customFields
 */
OptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
OptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
OptParamModels.prototype['metadata'] = undefined;
// Implement ComputeEngineAllOf interface:
/**
 * @member {String} description
 */
ComputeEngineAllOf.prototype['description'] = undefined;
/**
 * @member {Number} version
 */
ComputeEngineAllOf.prototype['version'] = undefined;
/**
 * @member {String} name
 */
ComputeEngineAllOf.prototype['name'] = undefined;
/**
 * Long
 * @member {Number} uptime
 */
ComputeEngineAllOf.prototype['uptime'] = undefined;
/**
 * @member {Array.<String>} constraints
 */
ComputeEngineAllOf.prototype['constraints'] = undefined;
/**
 * @member {Object.<String, String>} statistics
 */
ComputeEngineAllOf.prototype['statistics'] = undefined;
/**
 * 
 * @member {Number} lastKnownStatusCode
 */
ComputeEngineAllOf.prototype['lastKnownStatusCode'] = undefined;




export default ComputeEngine;

