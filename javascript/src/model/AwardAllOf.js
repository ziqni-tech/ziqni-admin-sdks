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
import EntityType from './EntityType';
import RewardTypeReduced from './RewardTypeReduced';

/**
 * The AwardAllOf model module.
 * @module model/AwardAllOf
 * @version 0.0.26
 */
class AwardAllOf {
    /**
     * Constructs a new <code>AwardAllOf</code>.
     * @alias module:model/AwardAllOf
     * @param memberId {String} A unique identifier of a Member
     * @param rewardId {String} A unique identifier of a Reward
     * @param rewardType {module:model/RewardTypeReduced} 
     * @param rewardRank {String} If used in the context of contest this will associate with the rank of the leaderboard
     * @param rewardValue {Number} Numerical value of the reward that will be issued based on the reward type
     * @param entityType {module:model/EntityType} 
     * @param entityId {String} The Id of the contest or achievement related to this Award. Dependant on entityType
     * @param constraints {Array.<String>} Additional constraints, if the value is present it means the
     */
    constructor(memberId, rewardId, rewardType, rewardRank, rewardValue, entityType, entityId, constraints) { 
        
        AwardAllOf.initialize(this, memberId, rewardId, rewardType, rewardRank, rewardValue, entityType, entityId, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, memberId, rewardId, rewardType, rewardRank, rewardValue, entityType, entityId, constraints) { 
        obj['memberId'] = memberId;
        obj['rewardId'] = rewardId;
        obj['rewardType'] = rewardType;
        obj['rewardRank'] = rewardRank;
        obj['rewardValue'] = rewardValue;
        obj['entityType'] = entityType;
        obj['entityId'] = entityId;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>AwardAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AwardAllOf} obj Optional instance to populate.
     * @return {module:model/AwardAllOf} The populated <code>AwardAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AwardAllOf();

            if (data.hasOwnProperty('memberId')) {
                obj['memberId'] = ApiClient.convertToType(data['memberId'], 'String');
            }
            if (data.hasOwnProperty('rewardId')) {
                obj['rewardId'] = ApiClient.convertToType(data['rewardId'], 'String');
            }
            if (data.hasOwnProperty('rewardType')) {
                obj['rewardType'] = RewardTypeReduced.constructFromObject(data['rewardType']);
            }
            if (data.hasOwnProperty('rewardRank')) {
                obj['rewardRank'] = ApiClient.convertToType(data['rewardRank'], 'String');
            }
            if (data.hasOwnProperty('rewardValue')) {
                obj['rewardValue'] = ApiClient.convertToType(data['rewardValue'], 'Number');
            }
            if (data.hasOwnProperty('delay')) {
                obj['delay'] = ApiClient.convertToType(data['delay'], 'Number');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = EntityType.constructFromObject(data['entityType']);
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('pointInTime')) {
                obj['pointInTime'] = ApiClient.convertToType(data['pointInTime'], 'Date');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Number');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('claimedTimestamp')) {
                obj['claimedTimestamp'] = ApiClient.convertToType(data['claimedTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('memberRefId')) {
                obj['memberRefId'] = ApiClient.convertToType(data['memberRefId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique identifier of a Member
 * @member {String} memberId
 */
AwardAllOf.prototype['memberId'] = undefined;

/**
 * A unique identifier of a Reward
 * @member {String} rewardId
 */
AwardAllOf.prototype['rewardId'] = undefined;

/**
 * @member {module:model/RewardTypeReduced} rewardType
 */
AwardAllOf.prototype['rewardType'] = undefined;

/**
 * If used in the context of contest this will associate with the rank of the leaderboard
 * @member {String} rewardRank
 */
AwardAllOf.prototype['rewardRank'] = undefined;

/**
 * Numerical value of the reward that will be issued based on the reward type
 * @member {Number} rewardValue
 */
AwardAllOf.prototype['rewardValue'] = undefined;

/**
 * Delay of issuing a reward in minutes
 * @member {Number} delay
 */
AwardAllOf.prototype['delay'] = undefined;

/**
 * @member {module:model/EntityType} entityType
 */
AwardAllOf.prototype['entityType'] = undefined;

/**
 * The Id of the contest or achievement related to this Award. Dependant on entityType
 * @member {String} entityId
 */
AwardAllOf.prototype['entityId'] = undefined;

/**
 * ISO8601 timestamp for when an Award is available until a specific point in time. All records are stored in UTC time zone. * There can only be one time definition used for claim period either \"pointInTime\" or \"period\"
 * @member {Date} pointInTime
 */
AwardAllOf.prototype['pointInTime'] = undefined;

/**
 * Claimable duration in minutes, this value will set the controls until when the award is claimable. * There can only be one time definition used for claim period either \"pointInTime\" or \"period\"
 * @member {Number} period
 */
AwardAllOf.prototype['period'] = undefined;

/**
 * A list of Strings of groups that the reward belongs to.
 * @member {Array.<String>} tags
 */
AwardAllOf.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
AwardAllOf.prototype['metadata'] = undefined;

/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
AwardAllOf.prototype['constraints'] = undefined;

/**
 * ISO8601 timestamp for when an Award is claimed. All records are stored in UTC time zone. *
 * @member {Date} claimedTimestamp
 */
AwardAllOf.prototype['claimedTimestamp'] = undefined;

/**
 * 
 * @member {String} memberRefId
 */
AwardAllOf.prototype['memberRefId'] = undefined;






export default AwardAllOf;

