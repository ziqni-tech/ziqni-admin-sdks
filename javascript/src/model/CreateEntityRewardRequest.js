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
import CreateEntityRewardRequestAllOf from './CreateEntityRewardRequestAllOf';
import CreateOptParamModels from './CreateOptParamModels';
import DependantOn from './DependantOn';
import RewardEntityType from './RewardEntityType';
import Translation from './Translation';

/**
 * The CreateEntityRewardRequest model module.
 * @module model/CreateEntityRewardRequest
 * @version 0.0.26
 */
class CreateEntityRewardRequest {
    /**
     * Constructs a new <code>CreateEntityRewardRequest</code>.
     * @alias module:model/CreateEntityRewardRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateEntityRewardRequestAllOf
     * @param entityType {module:model/RewardEntityType} 
     * @param entityId {String} A unique identifier of an achievement or contest. Dependant on entityType
     * @param name {String} The name of a reward
     * @param rewardRank {String} If used in the context of contest this will associate with the rank of the leaderboard
     * @param rewardValue {Number} Numerical value of the reward that will be issued based on the reward type
     * @param constraints {Array.<String>} Additional constraints
     * @param rewardTypeId {String} A unique id of the Reward Type
     */
    constructor(entityType, entityId, name, rewardRank, rewardValue, constraints, rewardTypeId) { 
        CreateOptParamModels.initialize(this);CreateEntityRewardRequestAllOf.initialize(this, entityType, entityId, name, rewardRank, rewardValue, constraints, rewardTypeId);
        CreateEntityRewardRequest.initialize(this, entityType, entityId, name, rewardRank, rewardValue, constraints, rewardTypeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entityType, entityId, name, rewardRank, rewardValue, constraints, rewardTypeId) { 
        obj['entityType'] = entityType;
        obj['entityId'] = entityId;
        obj['name'] = name;
        obj['rewardRank'] = rewardRank;
        obj['rewardValue'] = rewardValue;
        obj['constraints'] = constraints;
        obj['rewardTypeId'] = rewardTypeId;
    }

    /**
     * Constructs a <code>CreateEntityRewardRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEntityRewardRequest} obj Optional instance to populate.
     * @return {module:model/CreateEntityRewardRequest} The populated <code>CreateEntityRewardRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEntityRewardRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateEntityRewardRequestAllOf.constructFromObject(data, obj);

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
                obj['entityType'] = RewardEntityType.constructFromObject(data['entityType']);
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
            if (data.hasOwnProperty('memberTagsFilter')) {
                obj['memberTagsFilter'] = DependantOn.constructFromObject(data['memberTagsFilter']);
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('rewardTypeId')) {
                obj['rewardTypeId'] = ApiClient.convertToType(data['rewardTypeId'], 'String');
            }
            if (data.hasOwnProperty('scheduling')) {
                obj['scheduling'] = ApiClient.convertToType(data['scheduling'], [AwardScheduling]);
            }
        }
        return obj;
    }


}

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateEntityRewardRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateEntityRewardRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateEntityRewardRequest.prototype['metadata'] = undefined;

/**
 * @member {module:model/RewardEntityType} entityType
 */
CreateEntityRewardRequest.prototype['entityType'] = undefined;

/**
 * A unique identifier of an achievement or contest. Dependant on entityType
 * @member {String} entityId
 */
CreateEntityRewardRequest.prototype['entityId'] = undefined;

/**
 * The name of a reward
 * @member {String} name
 */
CreateEntityRewardRequest.prototype['name'] = undefined;

/**
 * The description of a Reward
 * @member {String} description
 */
CreateEntityRewardRequest.prototype['description'] = undefined;

/**
 * If used in the context of contest this will associate with the rank of the leaderboard
 * @member {String} rewardRank
 */
CreateEntityRewardRequest.prototype['rewardRank'] = undefined;

/**
 * Numerical value of the reward that will be issued based on the reward type
 * @member {Number} rewardValue
 */
CreateEntityRewardRequest.prototype['rewardValue'] = undefined;

/**
 * An Icon id that has been pre uploaded to the system to display for reward
 * @member {String} icon
 */
CreateEntityRewardRequest.prototype['icon'] = undefined;

/**
 * how many of thsese rewards are
 * @member {Number} issueLimit
 */
CreateEntityRewardRequest.prototype['issueLimit'] = undefined;

/**
 * ***DEPRECATED, use scheduling*** Delay of issuing a reward in minutes
 * @member {Number} delay
 */
CreateEntityRewardRequest.prototype['delay'] = undefined;

/**
 * ***DEPRECATED, use scheduling*** ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone
 * @member {Date} pointInTime
 */
CreateEntityRewardRequest.prototype['pointInTime'] = undefined;

/**
 * ***DEPRECATED, use scheduling*** Reward available for a period of time from issuing in minutes
 * @member {Number} period
 */
CreateEntityRewardRequest.prototype['period'] = undefined;

/**
 * @member {module:model/DependantOn} memberTagsFilter
 */
CreateEntityRewardRequest.prototype['memberTagsFilter'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateEntityRewardRequest.prototype['translations'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateEntityRewardRequest.prototype['constraints'] = undefined;

/**
 * A unique id of the Reward Type
 * @member {String} rewardTypeId
 */
CreateEntityRewardRequest.prototype['rewardTypeId'] = undefined;

/**
 * Set the default time based constraints using either an exact point in time or duration to manage the life cycle of the award
 * @member {Array.<module:model/AwardScheduling>} scheduling
 */
CreateEntityRewardRequest.prototype['scheduling'] = undefined;


// Implement CreateOptParamModels interface:
/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
CreateOptParamModels.prototype['metadata'] = undefined;
// Implement CreateEntityRewardRequestAllOf interface:
/**
 * @member {module:model/RewardEntityType} entityType
 */
CreateEntityRewardRequestAllOf.prototype['entityType'] = undefined;
/**
 * A unique identifier of an achievement or contest. Dependant on entityType
 * @member {String} entityId
 */
CreateEntityRewardRequestAllOf.prototype['entityId'] = undefined;
/**
 * The name of a reward
 * @member {String} name
 */
CreateEntityRewardRequestAllOf.prototype['name'] = undefined;
/**
 * The description of a Reward
 * @member {String} description
 */
CreateEntityRewardRequestAllOf.prototype['description'] = undefined;
/**
 * If used in the context of contest this will associate with the rank of the leaderboard
 * @member {String} rewardRank
 */
CreateEntityRewardRequestAllOf.prototype['rewardRank'] = undefined;
/**
 * Numerical value of the reward that will be issued based on the reward type
 * @member {Number} rewardValue
 */
CreateEntityRewardRequestAllOf.prototype['rewardValue'] = undefined;
/**
 * An Icon id that has been pre uploaded to the system to display for reward
 * @member {String} icon
 */
CreateEntityRewardRequestAllOf.prototype['icon'] = undefined;
/**
 * how many of thsese rewards are
 * @member {Number} issueLimit
 */
CreateEntityRewardRequestAllOf.prototype['issueLimit'] = undefined;
/**
 * ***DEPRECATED, use scheduling*** Delay of issuing a reward in minutes
 * @member {Number} delay
 */
CreateEntityRewardRequestAllOf.prototype['delay'] = undefined;
/**
 * ***DEPRECATED, use scheduling*** ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone
 * @member {Date} pointInTime
 */
CreateEntityRewardRequestAllOf.prototype['pointInTime'] = undefined;
/**
 * ***DEPRECATED, use scheduling*** Reward available for a period of time from issuing in minutes
 * @member {Number} period
 */
CreateEntityRewardRequestAllOf.prototype['period'] = undefined;
/**
 * @member {module:model/DependantOn} memberTagsFilter
 */
CreateEntityRewardRequestAllOf.prototype['memberTagsFilter'] = undefined;
/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateEntityRewardRequestAllOf.prototype['translations'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateEntityRewardRequestAllOf.prototype['constraints'] = undefined;
/**
 * A unique id of the Reward Type
 * @member {String} rewardTypeId
 */
CreateEntityRewardRequestAllOf.prototype['rewardTypeId'] = undefined;
/**
 * Set the default time based constraints using either an exact point in time or duration to manage the life cycle of the award
 * @member {Array.<module:model/AwardScheduling>} scheduling
 */
CreateEntityRewardRequestAllOf.prototype['scheduling'] = undefined;




export default CreateEntityRewardRequest;

