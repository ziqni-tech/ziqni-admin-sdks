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
import AwardScheduling from './AwardScheduling';
import DependantOn from './DependantOn';
import EntityType from './EntityType';
import ModelDefault from './ModelDefault';
import OptParamModels from './OptParamModels';
import RewardAllOf from './RewardAllOf';
import RewardTypeReduced from './RewardTypeReduced';

/**
 * The Reward model module.
 * @module model/Reward
 * @version 0.0.26
 */
class Reward {
    /**
     * Constructs a new <code>Reward</code>.
     * @alias module:model/Reward
     * @implements module:model/ModelDefault
     * @implements module:model/OptParamModels
     * @implements module:model/RewardAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param rewardRank {String} If used in the context of contest this will associate with the rank of the leaderboard
     * @param rewardValue {Number} Numerical value of the reward that will be issued based on the reward type
     * @param rewardType {module:model/RewardTypeReduced} 
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(id, spaceName, created, rewardRank, rewardValue, rewardType, constraints) { 
        ModelDefault.initialize(this, id, spaceName, created);OptParamModels.initialize(this);RewardAllOf.initialize(this, rewardRank, rewardValue, rewardType, constraints);
        Reward.initialize(this, id, spaceName, created, rewardRank, rewardValue, rewardType, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, rewardRank, rewardValue, rewardType, constraints) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['rewardRank'] = rewardRank;
        obj['rewardValue'] = rewardValue;
        obj['rewardType'] = rewardType;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>Reward</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Reward} obj Optional instance to populate.
     * @return {module:model/Reward} The populated <code>Reward</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Reward();
            ModelDefault.constructFromObject(data, obj);
            OptParamModels.constructFromObject(data, obj);
            RewardAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = EntityType.constructFromObject(data['entityType']);
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('rewardRank')) {
                obj['rewardRank'] = ApiClient.convertToType(data['rewardRank'], 'String');
            }
            if (data.hasOwnProperty('rewardValue')) {
                obj['rewardValue'] = ApiClient.convertToType(data['rewardValue'], 'Number');
            }
            if (data.hasOwnProperty('rewardType')) {
                obj['rewardType'] = RewardTypeReduced.constructFromObject(data['rewardType']);
            }
            if (data.hasOwnProperty('memberTagsFilter')) {
                obj['memberTagsFilter'] = DependantOn.constructFromObject(data['memberTagsFilter']);
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('issueLimit')) {
                obj['issueLimit'] = ApiClient.convertToType(data['issueLimit'], 'Number');
            }
            if (data.hasOwnProperty('delay')) {
                obj['delay'] = ApiClient.convertToType(data['delay'], 'Number');
            }
            if (data.hasOwnProperty('pointInTime')) {
                obj['pointInTime'] = ApiClient.convertToType(data['pointInTime'], 'Date');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Number');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('scheduling')) {
                obj['scheduling'] = ApiClient.convertToType(data['scheduling'], [AwardScheduling]);
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
Reward.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Reward.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Reward.prototype['created'] = undefined;

/**
 * @member {Object.<String, Object>} customFields
 */
Reward.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
Reward.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
Reward.prototype['metadata'] = undefined;

/**
 * @member {module:model/EntityType} entityType
 */
Reward.prototype['entityType'] = undefined;

/**
 * A unique identifier of an achievement or contest. Dependant on entityType
 * @member {String} entityId
 */
Reward.prototype['entityId'] = undefined;

/**
 * The name of a reward
 * @member {String} name
 */
Reward.prototype['name'] = undefined;

/**
 * The description of a Reward
 * @member {String} description
 */
Reward.prototype['description'] = undefined;

/**
 * If used in the context of contest this will associate with the rank of the leaderboard
 * @member {String} rewardRank
 */
Reward.prototype['rewardRank'] = undefined;

/**
 * Numerical value of the reward that will be issued based on the reward type
 * @member {Number} rewardValue
 */
Reward.prototype['rewardValue'] = undefined;

/**
 * @member {module:model/RewardTypeReduced} rewardType
 */
Reward.prototype['rewardType'] = undefined;

/**
 * @member {module:model/DependantOn} memberTagsFilter
 */
Reward.prototype['memberTagsFilter'] = undefined;

/**
 * An Icon id that has been pre uploaded to the system to display for reward
 * @member {String} icon
 */
Reward.prototype['icon'] = undefined;

/**
 * how many of thsese rewards are available in total to all members
 * @member {Number} issueLimit
 */
Reward.prototype['issueLimit'] = undefined;

/**
 * ***DEPRECATED, use scheduling*** Delay of issuing a reward in minutes
 * @member {Number} delay
 */
Reward.prototype['delay'] = undefined;

/**
 * ***DEPRECATED, use scheduling*** ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone *** deprecation candidate - use scheduling ***
 * @member {Date} pointInTime
 */
Reward.prototype['pointInTime'] = undefined;

/**
 * ***DEPRECATED, use scheduling*** Reward available for a period of time from issuing in minutes
 * @member {Number} period
 */
Reward.prototype['period'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
Reward.prototype['constraints'] = undefined;

/**
 * Set time based constraints using either an exact point in time or duration to manage the life cycle of the award
 * @member {Array.<module:model/AwardScheduling>} scheduling
 */
Reward.prototype['scheduling'] = undefined;

/**
 * The order the rewards are issued
 * @member {Number} order
 */
Reward.prototype['order'] = undefined;


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
// Implement OptParamModels interface:
/**
 * @member {Object.<String, Object>} customFields
 */
OptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
OptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
OptParamModels.prototype['metadata'] = undefined;
// Implement RewardAllOf interface:
/**
 * @member {module:model/EntityType} entityType
 */
RewardAllOf.prototype['entityType'] = undefined;
/**
 * A unique identifier of an achievement or contest. Dependant on entityType
 * @member {String} entityId
 */
RewardAllOf.prototype['entityId'] = undefined;
/**
 * The name of a reward
 * @member {String} name
 */
RewardAllOf.prototype['name'] = undefined;
/**
 * The description of a Reward
 * @member {String} description
 */
RewardAllOf.prototype['description'] = undefined;
/**
 * If used in the context of contest this will associate with the rank of the leaderboard
 * @member {String} rewardRank
 */
RewardAllOf.prototype['rewardRank'] = undefined;
/**
 * Numerical value of the reward that will be issued based on the reward type
 * @member {Number} rewardValue
 */
RewardAllOf.prototype['rewardValue'] = undefined;
/**
 * @member {module:model/RewardTypeReduced} rewardType
 */
RewardAllOf.prototype['rewardType'] = undefined;
/**
 * @member {module:model/DependantOn} memberTagsFilter
 */
RewardAllOf.prototype['memberTagsFilter'] = undefined;
/**
 * An Icon id that has been pre uploaded to the system to display for reward
 * @member {String} icon
 */
RewardAllOf.prototype['icon'] = undefined;
/**
 * how many of thsese rewards are available in total to all members
 * @member {Number} issueLimit
 */
RewardAllOf.prototype['issueLimit'] = undefined;
/**
 * ***DEPRECATED, use scheduling*** Delay of issuing a reward in minutes
 * @member {Number} delay
 */
RewardAllOf.prototype['delay'] = undefined;
/**
 * ***DEPRECATED, use scheduling*** ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone *** deprecation candidate - use scheduling ***
 * @member {Date} pointInTime
 */
RewardAllOf.prototype['pointInTime'] = undefined;
/**
 * ***DEPRECATED, use scheduling*** Reward available for a period of time from issuing in minutes
 * @member {Number} period
 */
RewardAllOf.prototype['period'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
RewardAllOf.prototype['constraints'] = undefined;
/**
 * Set time based constraints using either an exact point in time or duration to manage the life cycle of the award
 * @member {Array.<module:model/AwardScheduling>} scheduling
 */
RewardAllOf.prototype['scheduling'] = undefined;
/**
 * The order the rewards are issued
 * @member {Number} order
 */
RewardAllOf.prototype['order'] = undefined;




export default Reward;

