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
import EntityType from './EntityType';

/**
 * The MemberAwardAllOf model module.
 * @module model/MemberAwardAllOf
 * @version 0.0.26
 */
class MemberAwardAllOf {
    /**
     * Constructs a new <code>MemberAwardAllOf</code>.
     * @alias module:model/MemberAwardAllOf
     * @param rewardId {String} A unique identifier of a Reward
     * @param rewardType {String} The type of the Reward
     * @param rewardTypeId {String} A unique id of the Reward Type
     * @param rewardValue {Number} Numerical value of the reward that will be issued based on the reward type
     * @param entityType {module:model/EntityType} 
     * @param entityId {String} The Id of the contest or achievement related to this Award. Dependant on entityType
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(rewardId, rewardType, rewardTypeId, rewardValue, entityType, entityId, constraints) { 
        
        MemberAwardAllOf.initialize(this, rewardId, rewardType, rewardTypeId, rewardValue, entityType, entityId, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rewardId, rewardType, rewardTypeId, rewardValue, entityType, entityId, constraints) { 
        obj['rewardId'] = rewardId;
        obj['rewardType'] = rewardType;
        obj['rewardTypeId'] = rewardTypeId;
        obj['rewardValue'] = rewardValue;
        obj['entityType'] = entityType;
        obj['entityId'] = entityId;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>MemberAwardAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemberAwardAllOf} obj Optional instance to populate.
     * @return {module:model/MemberAwardAllOf} The populated <code>MemberAwardAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MemberAwardAllOf();

            if (data.hasOwnProperty('rewardId')) {
                obj['rewardId'] = ApiClient.convertToType(data['rewardId'], 'String');
            }
            if (data.hasOwnProperty('rewardType')) {
                obj['rewardType'] = ApiClient.convertToType(data['rewardType'], 'String');
            }
            if (data.hasOwnProperty('rewardTypeId')) {
                obj['rewardTypeId'] = ApiClient.convertToType(data['rewardTypeId'], 'String');
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
        }
        return obj;
    }


}

/**
 * A unique identifier of a Reward
 * @member {String} rewardId
 */
MemberAwardAllOf.prototype['rewardId'] = undefined;

/**
 * The type of the Reward
 * @member {String} rewardType
 */
MemberAwardAllOf.prototype['rewardType'] = undefined;

/**
 * A unique id of the Reward Type
 * @member {String} rewardTypeId
 */
MemberAwardAllOf.prototype['rewardTypeId'] = undefined;

/**
 * Numerical value of the reward that will be issued based on the reward type
 * @member {Number} rewardValue
 */
MemberAwardAllOf.prototype['rewardValue'] = undefined;

/**
 * Delay of issuing a reward in minutes
 * @member {Number} delay
 */
MemberAwardAllOf.prototype['delay'] = undefined;

/**
 * @member {module:model/EntityType} entityType
 */
MemberAwardAllOf.prototype['entityType'] = undefined;

/**
 * The Id of the contest or achievement related to this Award. Dependant on entityType
 * @member {String} entityId
 */
MemberAwardAllOf.prototype['entityId'] = undefined;

/**
 * ISO8601 timestamp for when an Award is available until a specific point in time. All records are stored in UTC time zone. * There can only be one time definition used for claim period either \"pointInTime\" or \"period\"
 * @member {Date} pointInTime
 */
MemberAwardAllOf.prototype['pointInTime'] = undefined;

/**
 * Claimable duration in minutes, this value will set the controls until when the award is claimable. * There can only be one time definition used for claim period either \"pointInTime\" or \"period\"
 * @member {Number} period
 */
MemberAwardAllOf.prototype['period'] = undefined;

/**
 * A list of Strings of groups that the reward belongs to.
 * @member {Array.<String>} tags
 */
MemberAwardAllOf.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
MemberAwardAllOf.prototype['metadata'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
MemberAwardAllOf.prototype['constraints'] = undefined;

/**
 * ISO8601 timestamp for when an Award is claimed. All records are stored in UTC time zone. *
 * @member {Date} claimedTimestamp
 */
MemberAwardAllOf.prototype['claimedTimestamp'] = undefined;






export default MemberAwardAllOf;

