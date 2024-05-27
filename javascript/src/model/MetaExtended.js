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
import MetaExtendedAllOf from './MetaExtendedAllOf';
import MetaInfo from './MetaInfo';

/**
 * The MetaExtended model module.
 * @module model/MetaExtended
 * @version 0.0.26
 */
class MetaExtended {
    /**
     * Constructs a new <code>MetaExtended</code>.
     * @alias module:model/MetaExtended
     * @implements module:model/MetaInfo
     * @implements module:model/MetaExtendedAllOf
     * @param objectType {String} 
     * @param resultCount {Number} The count of successful results
     * @param errorCount {Number} The count of errors
     * @param skip {Number} Number of records to skip
     * @param limit {Number} Number of records to return
     */
    constructor(objectType, resultCount, errorCount, skip, limit) { 
        MetaInfo.initialize(this, objectType, resultCount, errorCount);MetaExtendedAllOf.initialize(this, skip, limit);
        MetaExtended.initialize(this, objectType, resultCount, errorCount, skip, limit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objectType, resultCount, errorCount, skip, limit) { 
        obj['objectType'] = objectType;
        obj['resultCount'] = resultCount;
        obj['errorCount'] = errorCount;
        obj['skip'] = skip;
        obj['limit'] = limit;
    }

    /**
     * Constructs a <code>MetaExtended</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaExtended} obj Optional instance to populate.
     * @return {module:model/MetaExtended} The populated <code>MetaExtended</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaExtended();
            MetaInfo.constructFromObject(data, obj);
            MetaExtendedAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('objectType')) {
                obj['objectType'] = ApiClient.convertToType(data['objectType'], 'String');
            }
            if (data.hasOwnProperty('totalRecords')) {
                obj['totalRecords'] = ApiClient.convertToType(data['totalRecords'], 'Number');
            }
            if (data.hasOwnProperty('resultCount')) {
                obj['resultCount'] = ApiClient.convertToType(data['resultCount'], 'Number');
            }
            if (data.hasOwnProperty('errorCount')) {
                obj['errorCount'] = ApiClient.convertToType(data['errorCount'], 'Number');
            }
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
 * @member {String} objectType
 */
MetaExtended.prototype['objectType'] = undefined;

/**
 * The count of all results
 * @member {Number} totalRecords
 */
MetaExtended.prototype['totalRecords'] = undefined;

/**
 * The count of successful results
 * @member {Number} resultCount
 */
MetaExtended.prototype['resultCount'] = undefined;

/**
 * The count of errors
 * @member {Number} errorCount
 */
MetaExtended.prototype['errorCount'] = undefined;

/**
 * Number of records to skip
 * @member {Number} skip
 */
MetaExtended.prototype['skip'] = undefined;

/**
 * Number of records to return
 * @member {Number} limit
 */
MetaExtended.prototype['limit'] = undefined;


// Implement MetaInfo interface:
/**
 * @member {String} objectType
 */
MetaInfo.prototype['objectType'] = undefined;
/**
 * The count of all results
 * @member {Number} totalRecords
 */
MetaInfo.prototype['totalRecords'] = undefined;
/**
 * The count of successful results
 * @member {Number} resultCount
 */
MetaInfo.prototype['resultCount'] = undefined;
/**
 * The count of errors
 * @member {Number} errorCount
 */
MetaInfo.prototype['errorCount'] = undefined;
// Implement MetaExtendedAllOf interface:
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




export default MetaExtended;

