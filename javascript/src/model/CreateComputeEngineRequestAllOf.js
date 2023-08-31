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

/**
 * The CreateComputeEngineRequestAllOf model module.
 * @module model/CreateComputeEngineRequestAllOf
 * @version 0.0.26
 */
class CreateComputeEngineRequestAllOf {
    /**
     * Constructs a new <code>CreateComputeEngineRequestAllOf</code>.
     * @alias module:model/CreateComputeEngineRequestAllOf
     * @param constraints {Array.<String>} 
     */
    constructor(constraints) { 
        
        CreateComputeEngineRequestAllOf.initialize(this, constraints);
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
     * Constructs a <code>CreateComputeEngineRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateComputeEngineRequestAllOf} obj Optional instance to populate.
     * @return {module:model/CreateComputeEngineRequestAllOf} The populated <code>CreateComputeEngineRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateComputeEngineRequestAllOf();

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
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
        }
        return obj;
    }


}

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






export default CreateComputeEngineRequestAllOf;

