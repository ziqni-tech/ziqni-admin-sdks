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
import MetaInfo from './MetaInfo';

/**
 * The MetaBasic model module.
 * @module model/MetaBasic
 * @version 0.0.26
 */
class MetaBasic {
    /**
     * Constructs a new <code>MetaBasic</code>.
     * @alias module:model/MetaBasic
     * @implements module:model/MetaInfo
     * @param objectType {String} 
     * @param resultCount {Number} The count of successful results
     * @param errorCount {Number} The count of errors
     */
    constructor(objectType, resultCount, errorCount) { 
        MetaInfo.initialize(this, objectType, resultCount, errorCount);
        MetaBasic.initialize(this, objectType, resultCount, errorCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objectType, resultCount, errorCount) { 
        obj['objectType'] = objectType;
        obj['resultCount'] = resultCount;
        obj['errorCount'] = errorCount;
    }

    /**
     * Constructs a <code>MetaBasic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaBasic} obj Optional instance to populate.
     * @return {module:model/MetaBasic} The populated <code>MetaBasic</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaBasic();
            MetaInfo.constructFromObject(data, obj);

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
        }
        return obj;
    }


}

/**
 * @member {String} objectType
 */
MetaBasic.prototype['objectType'] = undefined;

/**
 * The count of all results
 * @member {Number} totalRecords
 */
MetaBasic.prototype['totalRecords'] = undefined;

/**
 * The count of successful results
 * @member {Number} resultCount
 */
MetaBasic.prototype['resultCount'] = undefined;

/**
 * The count of errors
 * @member {Number} errorCount
 */
MetaBasic.prototype['errorCount'] = undefined;


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




export default MetaBasic;

