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

/**
 * The ValueLookupResult model module.
 * @module model/ValueLookupResult
 * @version 0.0.26
 */
class ValueLookupResult {
    /**
     * Constructs a new <code>ValueLookupResult</code>.
     * The result of a generic lookup query
     * @alias module:model/ValueLookupResult
     */
    constructor() { 
        
        ValueLookupResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValueLookupResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValueLookupResult} obj Optional instance to populate.
     * @return {module:model/ValueLookupResult} The populated <code>ValueLookupResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValueLookupResult();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('referenceId')) {
                obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
            }
            if (data.hasOwnProperty('relatesToId')) {
                obj['relatesToId'] = ApiClient.convertToType(data['relatesToId'], 'String');
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
        }
        return obj;
    }


}

/**
 * 
 * @member {String} id
 */
ValueLookupResult.prototype['id'] = undefined;

/**
 * 
 * @member {String} referenceId
 */
ValueLookupResult.prototype['referenceId'] = undefined;

/**
 * 
 * @member {String} relatesToId
 */
ValueLookupResult.prototype['relatesToId'] = undefined;

/**
 * 
 * @member {String} name
 */
ValueLookupResult.prototype['name'] = undefined;

/**
 * 
 * @member {String} key
 */
ValueLookupResult.prototype['key'] = undefined;

/**
 * 
 * @member {String} description
 */
ValueLookupResult.prototype['description'] = undefined;






export default ValueLookupResult;

