/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.6
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdateRewardRequestAllOf model module.
 * @module model/UpdateRewardRequestAllOf
 * @version 0.0.26
 */
class UpdateRewardRequestAllOf {
    /**
     * Constructs a new <code>UpdateRewardRequestAllOf</code>.
     * @alias module:model/UpdateRewardRequestAllOf
     */
    constructor() { 
        
        UpdateRewardRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateRewardRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRewardRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateRewardRequestAllOf} The populated <code>UpdateRewardRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRewardRequestAllOf();

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






export default UpdateRewardRequestAllOf;

