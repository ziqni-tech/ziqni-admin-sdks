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
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';
import UpdateRewardRequestAllOf from './UpdateRewardRequestAllOf';

/**
 * The UpdateRewardRequest model module.
 * @module model/UpdateRewardRequest
 * @version 0.0.26
 */
class UpdateRewardRequest {
    /**
     * Constructs a new <code>UpdateRewardRequest</code>.
     * @alias module:model/UpdateRewardRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateRewardRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateRewardRequestAllOf.initialize(this);
        UpdateRewardRequest.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>UpdateRewardRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRewardRequest} obj Optional instance to populate.
     * @return {module:model/UpdateRewardRequest} The populated <code>UpdateRewardRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRewardRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateOptParamModels.constructFromObject(data, obj);
            UpdateRewardRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
            if (data.hasOwnProperty('rewardTypeId')) {
                obj['rewardTypeId'] = ApiClient.convertToType(data['rewardTypeId'], 'String');
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
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
            if (data.hasOwnProperty('removeConstraints')) {
                obj['removeConstraints'] = ApiClient.convertToType(data['removeConstraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateRewardRequest.prototype['id'] = undefined;

/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateRewardRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateRewardRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
UpdateRewardRequest.prototype['metadata'] = undefined;

/**
 * The name of a reward
 * @member {String} name
 */
UpdateRewardRequest.prototype['name'] = undefined;

/**
 * The description of a Reward
 * @member {String} description
 */
UpdateRewardRequest.prototype['description'] = undefined;

/**
 * If used in the context of contest this will associate with the rank of the leaderboard
 * @member {String} rewardRank
 */
UpdateRewardRequest.prototype['rewardRank'] = undefined;

/**
 * Numerical value of the reward that will be issued based on the reward type
 * @member {Number} rewardValue
 */
UpdateRewardRequest.prototype['rewardValue'] = undefined;

/**
 * A unique id of the Reward Type
 * @member {String} rewardTypeId
 */
UpdateRewardRequest.prototype['rewardTypeId'] = undefined;

/**
 * An Icon id that has been pre uploaded to the system to display for reward
 * @member {String} icon
 */
UpdateRewardRequest.prototype['icon'] = undefined;

/**
 * how many of thsese rewards are
 * @member {Number} issueLimit
 */
UpdateRewardRequest.prototype['issueLimit'] = undefined;

/**
 * Delay of issuing a reward in minutes
 * @member {Number} delay
 */
UpdateRewardRequest.prototype['delay'] = undefined;

/**
 * ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone
 * @member {Date} pointInTime
 */
UpdateRewardRequest.prototype['pointInTime'] = undefined;

/**
 * Reward available for a period of time from issuing in minutes
 * @member {Number} period
 */
UpdateRewardRequest.prototype['period'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
UpdateRewardRequest.prototype['addConstraints'] = undefined;

/**
 * Remove constraints
 * @member {Array.<String>} removeConstraints
 */
UpdateRewardRequest.prototype['removeConstraints'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateOptParamModels interface:
/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
UpdateOptParamModels.prototype['metadata'] = undefined;
// Implement UpdateRewardRequestAllOf interface:
/**
 * The name of a reward
 * @member {String} name
 */
UpdateRewardRequestAllOf.prototype['name'] = undefined;
/**
 * The description of a Reward
 * @member {String} description
 */
UpdateRewardRequestAllOf.prototype['description'] = undefined;
/**
 * If used in the context of contest this will associate with the rank of the leaderboard
 * @member {String} rewardRank
 */
UpdateRewardRequestAllOf.prototype['rewardRank'] = undefined;
/**
 * Numerical value of the reward that will be issued based on the reward type
 * @member {Number} rewardValue
 */
UpdateRewardRequestAllOf.prototype['rewardValue'] = undefined;
/**
 * A unique id of the Reward Type
 * @member {String} rewardTypeId
 */
UpdateRewardRequestAllOf.prototype['rewardTypeId'] = undefined;
/**
 * An Icon id that has been pre uploaded to the system to display for reward
 * @member {String} icon
 */
UpdateRewardRequestAllOf.prototype['icon'] = undefined;
/**
 * how many of thsese rewards are
 * @member {Number} issueLimit
 */
UpdateRewardRequestAllOf.prototype['issueLimit'] = undefined;
/**
 * Delay of issuing a reward in minutes
 * @member {Number} delay
 */
UpdateRewardRequestAllOf.prototype['delay'] = undefined;
/**
 * ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone
 * @member {Date} pointInTime
 */
UpdateRewardRequestAllOf.prototype['pointInTime'] = undefined;
/**
 * Reward available for a period of time from issuing in minutes
 * @member {Number} period
 */
UpdateRewardRequestAllOf.prototype['period'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
UpdateRewardRequestAllOf.prototype['addConstraints'] = undefined;
/**
 * Remove constraints
 * @member {Array.<String>} removeConstraints
 */
UpdateRewardRequestAllOf.prototype['removeConstraints'] = undefined;




export default UpdateRewardRequest;

