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
import LeaderboardEntry from './LeaderboardEntry';

/**
 * The LeaderboardAllOf model module.
 * @module model/LeaderboardAllOf
 * @version 0.0.26
 */
class LeaderboardAllOf {
    /**
     * Constructs a new <code>LeaderboardAllOf</code>.
     * @alias module:model/LeaderboardAllOf
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(constraints) { 
        
        LeaderboardAllOf.initialize(this, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, constraints) { 
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>LeaderboardAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeaderboardAllOf} obj Optional instance to populate.
     * @return {module:model/LeaderboardAllOf} The populated <code>LeaderboardAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeaderboardAllOf();

            if (data.hasOwnProperty('leaderboardEntries')) {
                obj['leaderboardEntries'] = ApiClient.convertToType(data['leaderboardEntries'], [LeaderboardEntry]);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/LeaderboardEntry>} leaderboardEntries
 */
LeaderboardAllOf.prototype['leaderboardEntries'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
LeaderboardAllOf.prototype['constraints'] = undefined;

/**
 * how many changes were made to teh leaderboard
 * @member {Number} sequence
 */
LeaderboardAllOf.prototype['sequence'] = undefined;






export default LeaderboardAllOf;

