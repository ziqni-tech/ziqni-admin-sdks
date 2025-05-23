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

/**
 * The UpdateComputeEngineRequestAllOf model module.
 * @module model/UpdateComputeEngineRequestAllOf
 * @version 0.0.26
 */
class UpdateComputeEngineRequestAllOf {
    /**
     * Constructs a new <code>UpdateComputeEngineRequestAllOf</code>.
     * @alias module:model/UpdateComputeEngineRequestAllOf
     */
    constructor() { 
        
        UpdateComputeEngineRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateComputeEngineRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateComputeEngineRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateComputeEngineRequestAllOf} The populated <code>UpdateComputeEngineRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateComputeEngineRequestAllOf();

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
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
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






export default UpdateComputeEngineRequestAllOf;

