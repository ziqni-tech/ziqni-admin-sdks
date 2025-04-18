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

/**
 * The LeaderboardMember model module.
 * @module model/LeaderboardMember
 * @version 0.0.26
 */
class LeaderboardMember {
    /**
     * Constructs a new <code>LeaderboardMember</code>.
     * @alias module:model/LeaderboardMember
     * @param name {String} The name of the player
     * @param memberId {String} Unique system identifier of a Member
     * @param memberRefId {String} The reference to this member in your system
     */
    constructor(name, memberId, memberRefId) { 
        
        LeaderboardMember.initialize(this, name, memberId, memberRefId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, memberId, memberRefId) { 
        obj['name'] = name;
        obj['memberId'] = memberId;
        obj['memberRefId'] = memberRefId;
    }

    /**
     * Constructs a <code>LeaderboardMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeaderboardMember} obj Optional instance to populate.
     * @return {module:model/LeaderboardMember} The populated <code>LeaderboardMember</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeaderboardMember();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('memberId')) {
                obj['memberId'] = ApiClient.convertToType(data['memberId'], 'String');
            }
            if (data.hasOwnProperty('memberRefId')) {
                obj['memberRefId'] = ApiClient.convertToType(data['memberRefId'], 'String');
            }
            if (data.hasOwnProperty('rankChangeFrom')) {
                obj['rankChangeFrom'] = ApiClient.convertToType(data['rankChangeFrom'], 'Number');
            }
            if (data.hasOwnProperty('rankChangeType')) {
                obj['rankChangeType'] = ApiClient.convertToType(data['rankChangeType'], 'Number');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], {'String': 'Number'});
            }
        }
        return obj;
    }


}

/**
 * The name of the player
 * @member {String} name
 */
LeaderboardMember.prototype['name'] = undefined;

/**
 * Unique system identifier of a Member
 * @member {String} memberId
 */
LeaderboardMember.prototype['memberId'] = undefined;

/**
 * The reference to this member in your system
 * @member {String} memberRefId
 */
LeaderboardMember.prototype['memberRefId'] = undefined;

/**
 * Previous rank held, null if no changes are recorded
 * @member {Number} rankChangeFrom
 */
LeaderboardMember.prototype['rankChangeFrom'] = undefined;

/**
 * [-1] for rank-down, like 5 to 8. [0] for no change, [1] for rank-up like 9 to 3
 * @member {Number} rankChangeType
 */
LeaderboardMember.prototype['rankChangeType'] = undefined;

/**
 * The user defined values used in the rules builder
 * @member {Object.<String, Number>} params
 */
LeaderboardMember.prototype['params'] = undefined;






export default LeaderboardMember;

