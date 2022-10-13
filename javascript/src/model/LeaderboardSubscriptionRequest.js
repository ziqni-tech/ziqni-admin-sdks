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
import LeaderboardFilter from './LeaderboardFilter';

/**
 * The LeaderboardSubscriptionRequest model module.
 * @module model/LeaderboardSubscriptionRequest
 * @version 0.0.26
 */
class LeaderboardSubscriptionRequest {
    /**
     * Constructs a new <code>LeaderboardSubscriptionRequest</code>.
     * 
     * @alias module:model/LeaderboardSubscriptionRequest
     * @param entityId {String} Either the competition, contest, tournament or match identifier
     * @param action {module:model/LeaderboardSubscriptionRequest.ActionEnum} Either subscribe or unsubscribe from the data feed
     */
    constructor(entityId, action) { 
        
        LeaderboardSubscriptionRequest.initialize(this, entityId, action);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entityId, action) { 
        obj['entityId'] = entityId;
        obj['action'] = action;
    }

    /**
     * Constructs a <code>LeaderboardSubscriptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeaderboardSubscriptionRequest} obj Optional instance to populate.
     * @return {module:model/LeaderboardSubscriptionRequest} The populated <code>LeaderboardSubscriptionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeaderboardSubscriptionRequest();

            if (data.hasOwnProperty('leaderboardFilter')) {
                obj['leaderboardFilter'] = LeaderboardFilter.constructFromObject(data['leaderboardFilter']);
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LeaderboardFilter} leaderboardFilter
 */
LeaderboardSubscriptionRequest.prototype['leaderboardFilter'] = undefined;

/**
 * Either the competition, contest, tournament or match identifier
 * @member {String} entityId
 */
LeaderboardSubscriptionRequest.prototype['entityId'] = undefined;

/**
 * Either subscribe or unsubscribe from the data feed
 * @member {module:model/LeaderboardSubscriptionRequest.ActionEnum} action
 */
LeaderboardSubscriptionRequest.prototype['action'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
LeaderboardSubscriptionRequest['ActionEnum'] = {

    /**
     * value: "Subscribe"
     * @const
     */
    "Subscribe": "Subscribe"
};



export default LeaderboardSubscriptionRequest;

