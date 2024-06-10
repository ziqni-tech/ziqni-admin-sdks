/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.15
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AchievementIssuedCount from './AchievementIssuedCount';
import Error from './Error';
import MetaExtended from './MetaExtended';

/**
 * The AchievementIssuedResponse model module.
 * @module model/AchievementIssuedResponse
 * @version 0.0.26
 */
class AchievementIssuedResponse {
    /**
     * Constructs a new <code>AchievementIssuedResponse</code>.
     * @alias module:model/AchievementIssuedResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        AchievementIssuedResponse.initialize(this, meta);
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
     * Constructs a <code>AchievementIssuedResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AchievementIssuedResponse} obj Optional instance to populate.
     * @return {module:model/AchievementIssuedResponse} The populated <code>AchievementIssuedResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AchievementIssuedResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [AchievementIssuedCount]);
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
AchievementIssuedResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/AchievementIssuedCount>} results
 */
AchievementIssuedResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
AchievementIssuedResponse.prototype['errors'] = undefined;






export default AchievementIssuedResponse;

