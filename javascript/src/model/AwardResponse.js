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
import Award from './Award';
import Error from './Error';
import MetaExtended from './MetaExtended';

/**
 * The AwardResponse model module.
 * @module model/AwardResponse
 * @version 0.0.26
 */
class AwardResponse {
    /**
     * Constructs a new <code>AwardResponse</code>.
     * @alias module:model/AwardResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        AwardResponse.initialize(this, meta);
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
     * Constructs a <code>AwardResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AwardResponse} obj Optional instance to populate.
     * @return {module:model/AwardResponse} The populated <code>AwardResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AwardResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Award]);
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
AwardResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Award>} results
 */
AwardResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
AwardResponse.prototype['errors'] = undefined;






export default AwardResponse;

