/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.17
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
 * The ContestLeaderboardResponse model module.
 * @module model/ContestLeaderboardResponse
 * @version 0.0.26
 */
class ContestLeaderboardResponse {
    /**
     * Constructs a new <code>ContestLeaderboardResponse</code>.
     * @alias module:model/ContestLeaderboardResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        ContestLeaderboardResponse.initialize(this, meta);
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
     * Constructs a <code>ContestLeaderboardResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContestLeaderboardResponse} obj Optional instance to populate.
     * @return {module:model/ContestLeaderboardResponse} The populated <code>ContestLeaderboardResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContestLeaderboardResponse();

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
ContestLeaderboardResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Leaderboard>} results
 */
ContestLeaderboardResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
ContestLeaderboardResponse.prototype['errors'] = undefined;






export default ContestLeaderboardResponse;

