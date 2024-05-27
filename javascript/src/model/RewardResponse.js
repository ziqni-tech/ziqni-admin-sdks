/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.14
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Error from './Error';
import MetaExtended from './MetaExtended';
import Reward from './Reward';

/**
 * The RewardResponse model module.
 * @module model/RewardResponse
 * @version 0.0.26
 */
class RewardResponse {
    /**
     * Constructs a new <code>RewardResponse</code>.
     * @alias module:model/RewardResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        RewardResponse.initialize(this, meta);
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
     * Constructs a <code>RewardResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RewardResponse} obj Optional instance to populate.
     * @return {module:model/RewardResponse} The populated <code>RewardResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RewardResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Reward]);
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
RewardResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Reward>} results
 */
RewardResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
RewardResponse.prototype['errors'] = undefined;






export default RewardResponse;

