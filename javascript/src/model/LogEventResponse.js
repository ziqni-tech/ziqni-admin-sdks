/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.6
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Error from './Error';
import LogEvent from './LogEvent';
import MetaExtended from './MetaExtended';

/**
 * The LogEventResponse model module.
 * @module model/LogEventResponse
 * @version 0.0.26
 */
class LogEventResponse {
    /**
     * Constructs a new <code>LogEventResponse</code>.
     * @alias module:model/LogEventResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        LogEventResponse.initialize(this, meta);
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
     * Constructs a <code>LogEventResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogEventResponse} obj Optional instance to populate.
     * @return {module:model/LogEventResponse} The populated <code>LogEventResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogEventResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [LogEvent]);
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
LogEventResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/LogEvent>} results
 */
LogEventResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
LogEventResponse.prototype['errors'] = undefined;






export default LogEventResponse;

