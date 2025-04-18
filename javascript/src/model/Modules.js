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
import DataSetsReference from './DataSetsReference';

/**
 * The Modules model module.
 * @module model/Modules
 * @version 0.0.26
 */
class Modules {
    /**
     * Constructs a new <code>Modules</code>.
     * Various modules returned for rendering dashboard.
     * @alias module:model/Modules
     * @param key {String} Key of the chart.
     * @param label {String} Label for the chart.
     * @param moduleType {String} Type of chart to insert te data into.
     * @param order {String} Order at which the chart appears on the web page.
     * @param dataSets {Array.<module:model/DataSetsReference>} Array of DataSets map reference keys. If style information is required for a specific chart type then it will be returned.
     */
    constructor(key, label, moduleType, order, dataSets) { 
        
        Modules.initialize(this, key, label, moduleType, order, dataSets);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, label, moduleType, order, dataSets) { 
        obj['key'] = key;
        obj['label'] = label;
        obj['moduleType'] = moduleType;
        obj['order'] = order;
        obj['dataSets'] = dataSets;
    }

    /**
     * Constructs a <code>Modules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Modules} obj Optional instance to populate.
     * @return {module:model/Modules} The populated <code>Modules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Modules();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('moduleType')) {
                obj['moduleType'] = ApiClient.convertToType(data['moduleType'], 'String');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'String');
            }
            if (data.hasOwnProperty('dataSets')) {
                obj['dataSets'] = ApiClient.convertToType(data['dataSets'], [DataSetsReference]);
            }
        }
        return obj;
    }


}

/**
 * Key of the chart.
 * @member {String} key
 */
Modules.prototype['key'] = undefined;

/**
 * Label for the chart.
 * @member {String} label
 */
Modules.prototype['label'] = undefined;

/**
 * Type of chart to insert te data into.
 * @member {String} moduleType
 */
Modules.prototype['moduleType'] = undefined;

/**
 * Order at which the chart appears on the web page.
 * @member {String} order
 */
Modules.prototype['order'] = undefined;

/**
 * Array of DataSets map reference keys. If style information is required for a specific chart type then it will be returned.
 * @member {Array.<module:model/DataSetsReference>} dataSets
 */
Modules.prototype['dataSets'] = undefined;






export default Modules;

