/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LeaderboardMember from './LeaderboardMember';

/**
 * The LeaderboardEntry model module.
 * @module model/LeaderboardEntry
 * @version 0.0.26
 */
class LeaderboardEntry {
    /**
     * Constructs a new <code>LeaderboardEntry</code>.
     * @alias module:model/LeaderboardEntry
     * @param rank {Number} The reank of the player
     */
    constructor(rank) { 
        
        LeaderboardEntry.initialize(this, rank);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rank) { 
        obj['rank'] = rank;
    }

    /**
     * Constructs a <code>LeaderboardEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeaderboardEntry} obj Optional instance to populate.
     * @return {module:model/LeaderboardEntry} The populated <code>LeaderboardEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeaderboardEntry();

            if (data.hasOwnProperty('rank')) {
                obj['rank'] = ApiClient.convertToType(data['rank'], 'Number');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
            if (data.hasOwnProperty('bestScores')) {
                obj['bestScores'] = ApiClient.convertToType(data['bestScores'], ['Number']);
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], [LeaderboardMember]);
            }
        }
        return obj;
    }


}

/**
 * The reank of the player
 * @member {Number} rank
 */
LeaderboardEntry.prototype['rank'] = undefined;

/**
 * The members current score
 * @member {Number} score
 */
LeaderboardEntry.prototype['score'] = undefined;

/**
 * The multiplier to apply to source values received for this product action helper events
 * @member {Array.<Number>} bestScores
 */
LeaderboardEntry.prototype['bestScores'] = undefined;

/**
 * Member details
 * @member {Array.<module:model/LeaderboardMember>} members
 */
LeaderboardEntry.prototype['members'] = undefined;






export default LeaderboardEntry;

