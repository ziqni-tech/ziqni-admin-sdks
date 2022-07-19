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
import ModelDefault from './ModelDefault';
import RewardReducedAllOf from './RewardReducedAllOf';

/**
 * The RewardReduced model module.
 * @module model/RewardReduced
 * @version 0.0.26
 */
class RewardReduced {
    /**
     * Constructs a new <code>RewardReduced</code>.
     * @alias module:model/RewardReduced
     * @implements module:model/ModelDefault
     * @implements module:model/RewardReducedAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param rewardRank {String} If used in the context of contest this will associate with the rank of the leaderboard
     * @param name {String} The name of a reward
     * @param rewardValue {Number} Numerical value of the reward that will be issued based on the reward type
     * @param rewardType {String} Reward Type key
     * @param rewardTypeId {String} A unique id of the Reward Type
     */
    constructor(id, spaceName, created, rewardRank, name, rewardValue, rewardType, rewardTypeId) { 
        ModelDefault.initialize(this, id, spaceName, created);RewardReducedAllOf.initialize(this, rewardRank, name, rewardValue, rewardType, rewardTypeId);
        RewardReduced.initialize(this, id, spaceName, created, rewardRank, name, rewardValue, rewardType, rewardTypeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, rewardRank, name, rewardValue, rewardType, rewardTypeId) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['rewardRank'] = rewardRank;
        obj['name'] = name;
        obj['rewardValue'] = rewardValue;
        obj['rewardType'] = rewardType;
        obj['rewardTypeId'] = rewardTypeId;
    }

    /**
     * Constructs a <code>RewardReduced</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RewardReduced} obj Optional instance to populate.
     * @return {module:model/RewardReduced} The populated <code>RewardReduced</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RewardReduced();
            ModelDefault.constructFromObject(data, obj);
            RewardReducedAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('rewardRank')) {
                obj['rewardRank'] = ApiClient.convertToType(data['rewardRank'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rewardValue')) {
                obj['rewardValue'] = ApiClient.convertToType(data['rewardValue'], 'Number');
            }
            if (data.hasOwnProperty('rewardType')) {
                obj['rewardType'] = ApiClient.convertToType(data['rewardType'], 'String');
            }
            if (data.hasOwnProperty('rewardTypeId')) {
                obj['rewardTypeId'] = ApiClient.convertToType(data['rewardTypeId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
RewardReduced.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
RewardReduced.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
RewardReduced.prototype['created'] = undefined;

/**
 * If used in the context of contest this will associate with the rank of the leaderboard
 * @member {String} rewardRank
 */
RewardReduced.prototype['rewardRank'] = undefined;

/**
 * The name of a reward
 * @member {String} name
 */
RewardReduced.prototype['name'] = undefined;

/**
 * Numerical value of the reward that will be issued based on the reward type
 * @member {Number} rewardValue
 */
RewardReduced.prototype['rewardValue'] = undefined;

/**
 * Reward Type key
 * @member {String} rewardType
 */
RewardReduced.prototype['rewardType'] = undefined;

/**
 * A unique id of the Reward Type
 * @member {String} rewardTypeId
 */
RewardReduced.prototype['rewardTypeId'] = undefined;


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
// Implement RewardReducedAllOf interface:
/**
 * If used in the context of contest this will associate with the rank of the leaderboard
 * @member {String} rewardRank
 */
RewardReducedAllOf.prototype['rewardRank'] = undefined;
/**
 * The name of a reward
 * @member {String} name
 */
RewardReducedAllOf.prototype['name'] = undefined;
/**
 * Numerical value of the reward that will be issued based on the reward type
 * @member {Number} rewardValue
 */
RewardReducedAllOf.prototype['rewardValue'] = undefined;
/**
 * Reward Type key
 * @member {String} rewardType
 */
RewardReducedAllOf.prototype['rewardType'] = undefined;
/**
 * A unique id of the Reward Type
 * @member {String} rewardTypeId
 */
RewardReducedAllOf.prototype['rewardTypeId'] = undefined;




export default RewardReduced;

