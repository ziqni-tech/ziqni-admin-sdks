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
 * The MetaInfo model module.
 * @module model/MetaInfo
 * @version 0.0.26
 */
class MetaInfo {
    /**
     * Constructs a new <code>MetaInfo</code>.
     * @alias module:model/MetaInfo
     * @param objectType {String} 
     * @param resultCount {Number} The count of successful results
     * @param errorCount {Number} The count of errors
     */
    constructor(objectType, resultCount, errorCount) { 
        
        MetaInfo.initialize(this, objectType, resultCount, errorCount);
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
     * Constructs a <code>MetaInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaInfo} obj Optional instance to populate.
     * @return {module:model/MetaInfo} The populated <code>MetaInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaInfo();

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






export default MetaInfo;

