/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.9
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Error from './Error';
import Leaderboard from './Leaderboard';
import MetaExtended from './MetaExtended';

/**
 * The LeaderboardResponse model module.
 * @module model/LeaderboardResponse
 * @version 0.0.26
 */
class LeaderboardResponse {
    /**
     * Constructs a new <code>LeaderboardResponse</code>.
     * @alias module:model/LeaderboardResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        LeaderboardResponse.initialize(this, meta);
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
     * Constructs a <code>LeaderboardResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeaderboardResponse} obj Optional instance to populate.
     * @return {module:model/LeaderboardResponse} The populated <code>LeaderboardResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeaderboardResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Leaderboard]);
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
LeaderboardResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Leaderboard>} results
 */
LeaderboardResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
LeaderboardResponse.prototype['errors'] = undefined;






export default LeaderboardResponse;

