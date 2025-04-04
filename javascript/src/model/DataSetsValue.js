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
 * The DataSetsValue model module.
 * @module model/DataSetsValue
 * @version 0.0.26
 */
class DataSetsValue {
    /**
     * Constructs a new <code>DataSetsValue</code>.
     * 
     * @alias module:model/DataSetsValue
     * @param label {String} Label of the data set
     * @param labels {String} Labels to reference data sets
     * @param data {Array.<String>} The actual data points for the data set
     */
    constructor(label, labels, data) { 
        
        DataSetsValue.initialize(this, label, labels, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, label, labels, data) { 
        obj['label'] = label;
        obj['labels'] = labels;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>DataSetsValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataSetsValue} obj Optional instance to populate.
     * @return {module:model/DataSetsValue} The populated <code>DataSetsValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataSetsValue();

            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Label of the data set
 * @member {String} label
 */
DataSetsValue.prototype['label'] = undefined;

/**
 * Labels to reference data sets
 * @member {String} labels
 */
DataSetsValue.prototype['labels'] = undefined;

/**
 * The actual data points for the data set
 * @member {Array.<String>} data
 */
DataSetsValue.prototype['data'] = undefined;






export default DataSetsValue;

