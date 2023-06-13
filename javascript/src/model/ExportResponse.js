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
import Entrant from './Entrant';
import Error from './Error';
import MetaExtended from './MetaExtended';

/**
 * The ExportResponse model module.
 * @module model/ExportResponse
 * @version 0.0.26
 */
class ExportResponse {
    /**
     * Constructs a new <code>ExportResponse</code>.
     * @alias module:model/ExportResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        ExportResponse.initialize(this, meta);
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
     * Constructs a <code>ExportResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportResponse} obj Optional instance to populate.
     * @return {module:model/ExportResponse} The populated <code>ExportResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExportResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Entrant]);
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
ExportResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Entrant>} results
 */
ExportResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
ExportResponse.prototype['errors'] = undefined;






export default ExportResponse;

