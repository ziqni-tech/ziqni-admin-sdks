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
 * The MetaExtendedAllOf model module.
 * @module model/MetaExtendedAllOf
 * @version 0.0.26
 */
class MetaExtendedAllOf {
    /**
     * Constructs a new <code>MetaExtendedAllOf</code>.
     * @alias module:model/MetaExtendedAllOf
     * @param skip {Number} Number of records to skip
     * @param limit {Number} Number of records to return
     */
    constructor(skip, limit) { 
        
        MetaExtendedAllOf.initialize(this, skip, limit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, skip, limit) { 
        obj['skip'] = skip;
        obj['limit'] = limit;
    }

    /**
     * Constructs a <code>MetaExtendedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaExtendedAllOf} obj Optional instance to populate.
     * @return {module:model/MetaExtendedAllOf} The populated <code>MetaExtendedAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaExtendedAllOf();

            if (data.hasOwnProperty('skip')) {
                obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Number of records to skip
 * @member {Number} skip
 */
MetaExtendedAllOf.prototype['skip'] = undefined;

/**
 * Number of records to return
 * @member {Number} limit
 */
MetaExtendedAllOf.prototype['limit'] = undefined;






export default MetaExtendedAllOf;

