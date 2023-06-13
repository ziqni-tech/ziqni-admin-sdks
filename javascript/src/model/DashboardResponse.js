/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.5
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Dashboard from './Dashboard';
import Error from './Error';
import MetaExtended from './MetaExtended';

/**
 * The DashboardResponse model module.
 * @module model/DashboardResponse
 * @version 0.0.26
 */
class DashboardResponse {
    /**
     * Constructs a new <code>DashboardResponse</code>.
     * The dashboard response.
     * @alias module:model/DashboardResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        DashboardResponse.initialize(this, meta);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, meta) { 
        obj['meta'] = meta;
    }

    /**
     * Constructs a <code>DashboardResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DashboardResponse} obj Optional instance to populate.
     * @return {module:model/DashboardResponse} The populated <code>DashboardResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DashboardResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Dashboard]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MetaExtended} meta
 */
DashboardResponse.prototype['meta'] = undefined;

/**
 * Valid result as a part of the response.
 * @member {Array.<module:model/Dashboard>} results
 */
DashboardResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
DashboardResponse.prototype['errors'] = undefined;






export default DashboardResponse;

