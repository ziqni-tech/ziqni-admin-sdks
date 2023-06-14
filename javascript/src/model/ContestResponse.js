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
import Contest from './Contest';
import Error from './Error';
import MetaExtended from './MetaExtended';

/**
 * The ContestResponse model module.
 * @module model/ContestResponse
 * @version 0.0.26
 */
class ContestResponse {
    /**
     * Constructs a new <code>ContestResponse</code>.
     * @alias module:model/ContestResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        ContestResponse.initialize(this, meta);
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
     * Constructs a <code>ContestResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContestResponse} obj Optional instance to populate.
     * @return {module:model/ContestResponse} The populated <code>ContestResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContestResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Contest]);
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
ContestResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Contest>} results
 */
ContestResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
ContestResponse.prototype['errors'] = undefined;






export default ContestResponse;

