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
import DataSetsValue from './DataSetsValue';
import Modules from './Modules';

/**
 * The Dashboard model module.
 * @module model/Dashboard
 * @version 0.0.26
 */
class Dashboard {
    /**
     * Constructs a new <code>Dashboard</code>.
     * The dashboard to be rendered.
     * @alias module:model/Dashboard
     * @param dataSets {Object.<String, module:model/DataSetsValue>} This is a map of data sets. The keys for this map are the data set labels and values are complex object which consist of data to be populated.
     * @param labels {Object.<String, Array.<String>>} Labels for the charts as a map.
     * @param modules {Array.<module:model/Modules>} Modules to inject into the chart for rendering.
     */
    constructor(dataSets, labels, modules) { 
        
        Dashboard.initialize(this, dataSets, labels, modules);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dataSets, labels, modules) { 
        obj['dataSets'] = dataSets;
        obj['labels'] = labels;
        obj['modules'] = modules;
    }

    /**
     * Constructs a <code>Dashboard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Dashboard} obj Optional instance to populate.
     * @return {module:model/Dashboard} The populated <code>Dashboard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Dashboard();

            if (data.hasOwnProperty('dataSets')) {
                obj['dataSets'] = ApiClient.convertToType(data['dataSets'], {'String': DataSetsValue});
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], {'String': ['String']});
            }
            if (data.hasOwnProperty('modules')) {
                obj['modules'] = ApiClient.convertToType(data['modules'], [Modules]);
            }
        }
        return obj;
    }


}

/**
 * This is a map of data sets. The keys for this map are the data set labels and values are complex object which consist of data to be populated.
 * @member {Object.<String, module:model/DataSetsValue>} dataSets
 */
Dashboard.prototype['dataSets'] = undefined;

/**
 * Labels for the charts as a map.
 * @member {Object.<String, Array.<String>>} labels
 */
Dashboard.prototype['labels'] = undefined;

/**
 * Modules to inject into the chart for rendering.
 * @member {Array.<module:model/Modules>} modules
 */
Dashboard.prototype['modules'] = undefined;






export default Dashboard;

