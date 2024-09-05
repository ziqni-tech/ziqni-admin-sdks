/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.15
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EntityChangeSubscription model module.
 * @module model/EntityChangeSubscription
 * @version 0.0.26
 */
class EntityChangeSubscription {
    /**
     * Constructs a new <code>EntityChangeSubscription</code>.
     * Subscribes a client to receive out-of-band data
     * @alias module:model/EntityChangeSubscription
     * @param entityType {String} 
     * @param subscriptionId {String} 
     */
    constructor(entityType, subscriptionId) { 
        
        EntityChangeSubscription.initialize(this, entityType, subscriptionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entityType, subscriptionId) { 
        obj['entityType'] = entityType;
        obj['subscriptionId'] = subscriptionId;
    }

    /**
     * Constructs a <code>EntityChangeSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityChangeSubscription} obj Optional instance to populate.
     * @return {module:model/EntityChangeSubscription} The populated <code>EntityChangeSubscription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntityChangeSubscription();

            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
            }
            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('topic')) {
                obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} entityType
 */
EntityChangeSubscription.prototype['entityType'] = undefined;

/**
 * 
 * @member {String} subscriptionId
 */
EntityChangeSubscription.prototype['subscriptionId'] = undefined;

/**
 * Constraints of this subscription like gauranteedDelivery
 * @member {Array.<String>} constraints
 */
EntityChangeSubscription.prototype['constraints'] = undefined;

/**
 * /user/queue/callbacks
 * @member {String} topic
 */
EntityChangeSubscription.prototype['topic'] = undefined;






export default EntityChangeSubscription;

