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
import ActionType from './ActionType';
import Error from './Error';
import MetaExtended from './MetaExtended';

/**
 * The ActionTypeResponse model module.
 * @module model/ActionTypeResponse
 * @version 0.0.26
 */
class ActionTypeResponse {
    /**
     * Constructs a new <code>ActionTypeResponse</code>.
     * @alias module:model/ActionTypeResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        ActionTypeResponse.initialize(this, meta);
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
     * Constructs a <code>ActionTypeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionTypeResponse} obj Optional instance to populate.
     * @return {module:model/ActionTypeResponse} The populated <code>ActionTypeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionTypeResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [ActionType]);
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
ActionTypeResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/ActionType>} results
 */
ActionTypeResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
ActionTypeResponse.prototype['errors'] = undefined;






export default ActionTypeResponse;

