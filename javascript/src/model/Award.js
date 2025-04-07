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
import AwardAllOf from './AwardAllOf';
import AwardStateActions from './AwardStateActions';
import EntityType from './EntityType';
import ModelDefault from './ModelDefault';
import RewardTypeReduced from './RewardTypeReduced';

/**
 * The Award model module.
 * @module model/Award
 * @version 0.0.26
 */
class Award {
    /**
     * Constructs a new <code>Award</code>.
     * @alias module:model/Award
     * @implements module:model/ModelDefault
     * @implements module:model/AwardAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param memberId {String} A unique identifier of a Member
     * @param rewardId {String} A unique identifier of a Reward
     * @param rewardType {module:model/RewardTypeReduced} 
     * @param rewardRank {String} If used in the context of contest this will associate with the rank of the leaderboard
     * @param rewardValue {Number} Numerical value of the reward that will be issued based on the reward type
     * @param entityType {module:model/EntityType} 
     * @param entityId {String} The Id of the contest or achievement related to this Award. Dependant on entityType
     * @param constraints {Array.<String>} Additional constraints, if the value is present it means the
     */
    constructor(id, spaceName, created, memberId, rewardId, rewardType, rewardRank, rewardValue, entityType, entityId, constraints) { 
        ModelDefault.initialize(this, id, spaceName, created);AwardAllOf.initialize(this, memberId, rewardId, rewardType, rewardRank, rewardValue, entityType, entityId, constraints);
        Award.initialize(this, id, spaceName, created, memberId, rewardId, rewardType, rewardRank, rewardValue, entityType, entityId, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, memberId, rewardId, rewardType, rewardRank, rewardValue, entityType, entityId, constraints) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
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
     * Constructs a <code>Award</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Award} obj Optional instance to populate.
     * @return {module:model/Award} The populated <code>Award</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Award();
            ModelDefault.constructFromObject(data, obj);
            AwardAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
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
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
            if (data.hasOwnProperty('activeFrom')) {
                obj['activeFrom'] = ApiClient.convertToType(data['activeFrom'], 'Date');
            }
            if (data.hasOwnProperty('activeUntil')) {
                obj['activeUntil'] = ApiClient.convertToType(data['activeUntil'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = AwardStateActions.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
Award.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Award.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Award.prototype['created'] = undefined;

/**
 * A unique identifier of a Member
 * @member {String} memberId
 */
Award.prototype['memberId'] = undefined;

/**
 * A unique identifier of a Reward
 * @member {String} rewardId
 */
Award.prototype['rewardId'] = undefined;

/**
 * @member {module:model/RewardTypeReduced} rewardType
 */
Award.prototype['rewardType'] = undefined;

/**
 * If used in the context of contest this will associate with the rank of the leaderboard
 * @member {String} rewardRank
 */
Award.prototype['rewardRank'] = undefined;

/**
 * Numerical value of the reward that will be issued based on the reward type
 * @member {Number} rewardValue
 */
Award.prototype['rewardValue'] = undefined;

/**
 * ***DEPRECATED, use scheduling*** Delay of issuing a reward in minutes
 * @member {Number} delay
 */
Award.prototype['delay'] = undefined;

/**
 * @member {module:model/EntityType} entityType
 */
Award.prototype['entityType'] = undefined;

/**
 * The Id of the contest or achievement related to this Award. Dependant on entityType
 * @member {String} entityId
 */
Award.prototype['entityId'] = undefined;

/**
 * ***DEPRECATED, use scheduling***ISO8601 timestamp for when an Award is available until a specific point in time. All records are stored in UTC time zone. * There can only be one time definition used for claim period either \"pointInTime\" or \"period\"
 * @member {Date} pointInTime
 */
Award.prototype['pointInTime'] = undefined;

/**
 * ***DEPRECATED, use scheduling*** Claimable duration in minutes, this value will set the controls until when the award is claimable. * There can only be one time definition used for claim period either \"pointInTime\" or \"period\"
 * @member {Number} period
 */
Award.prototype['period'] = undefined;

/**
 * A list of Strings of groups that the reward belongs to.
 * @member {Array.<String>} tags
 */
Award.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
Award.prototype['metadata'] = undefined;

/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
Award.prototype['constraints'] = undefined;

/**
 * ISO8601 timestamp for when an Award is claimed. All records are stored in UTC time zone. *
 * @member {Date} claimedTimestamp
 */
Award.prototype['claimedTimestamp'] = undefined;

/**
 * 
 * @member {String} memberRefId
 */
Award.prototype['memberRefId'] = undefined;

/**
 * The current status of this award  1. Available (Code 10) 2. Claimed (Code 20) 3. Processing (Code 30) 4. Delivered  (Code 40) 5. Expired  (Code 50) 6. Cancelled (Code 60) 7. Declined  (Code 70)
 * @member {Number} statusCode
 */
Award.prototype['statusCode'] = undefined;

/**
 * This record is considered active up until this date time
 * @member {Date} activeFrom
 */
Award.prototype['activeFrom'] = undefined;

/**
 * This record is considered active up until this date time
 * @member {Date} activeUntil
 */
Award.prototype['activeUntil'] = undefined;

/**
 * @member {module:model/AwardStateActions} status
 */
Award.prototype['status'] = undefined;


// Implement ModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
ModelDefault.prototype['id'] = undefined;
/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ModelDefault.prototype['spaceName'] = undefined;
/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ModelDefault.prototype['created'] = undefined;
// Implement AwardAllOf interface:
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
 * ***DEPRECATED, use scheduling*** Delay of issuing a reward in minutes
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
 * ***DEPRECATED, use scheduling***ISO8601 timestamp for when an Award is available until a specific point in time. All records are stored in UTC time zone. * There can only be one time definition used for claim period either \"pointInTime\" or \"period\"
 * @member {Date} pointInTime
 */
AwardAllOf.prototype['pointInTime'] = undefined;
/**
 * ***DEPRECATED, use scheduling*** Claimable duration in minutes, this value will set the controls until when the award is claimable. * There can only be one time definition used for claim period either \"pointInTime\" or \"period\"
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
/**
 * The current status of this award  1. Available (Code 10) 2. Claimed (Code 20) 3. Processing (Code 30) 4. Delivered  (Code 40) 5. Expired  (Code 50) 6. Cancelled (Code 60) 7. Declined  (Code 70)
 * @member {Number} statusCode
 */
AwardAllOf.prototype['statusCode'] = undefined;
/**
 * This record is considered active up until this date time
 * @member {Date} activeFrom
 */
AwardAllOf.prototype['activeFrom'] = undefined;
/**
 * This record is considered active up until this date time
 * @member {Date} activeUntil
 */
AwardAllOf.prototype['activeUntil'] = undefined;
/**
 * @member {module:model/AwardStateActions} status
 */
AwardAllOf.prototype['status'] = undefined;




export default Award;

