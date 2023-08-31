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

/**
 * The EntityChangeSubscriptionRequest model module.
 * @module model/EntityChangeSubscriptionRequest
 * @version 0.0.26
 */
class EntityChangeSubscriptionRequest {
    /**
     * Constructs a new <code>EntityChangeSubscriptionRequest</code>.
     * 
     * @alias module:model/EntityChangeSubscriptionRequest
     * @param entityType {String} What you are subscribing to, like Competition, Contest, Member, Award etc.
     * @param callback {String} The callback operation you are subscribing too. Like entityChanged or entityStateChanged
     * @param action {module:model/EntityChangeSubscriptionRequest.ActionEnum} Either subscribe or unsubscribe from the data feed
     */
    constructor(entityType, callback, action) { 
        
        EntityChangeSubscriptionRequest.initialize(this, entityType, callback, action);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entityType, callback, action) { 
        obj['entityType'] = entityType;
        obj['callback'] = callback;
        obj['action'] = action;
    }

    /**
     * Constructs a <code>EntityChangeSubscriptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityChangeSubscriptionRequest} obj Optional instance to populate.
     * @return {module:model/EntityChangeSubscriptionRequest} The populated <code>EntityChangeSubscriptionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntityChangeSubscriptionRequest();

            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('callback')) {
                obj['callback'] = ApiClient.convertToType(data['callback'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
        }
        return obj;
    }


}

/**
 * What you are subscribing to, like Competition, Contest, Member, Award etc.
 * @member {String} entityType
 */
EntityChangeSubscriptionRequest.prototype['entityType'] = undefined;

/**
 * Constraints of this subscription.
 * @member {Array.<String>} constraints
 */
EntityChangeSubscriptionRequest.prototype['constraints'] = undefined;

/**
 * The callback operation you are subscribing too. Like entityChanged or entityStateChanged
 * @member {String} callback
 */
EntityChangeSubscriptionRequest.prototype['callback'] = undefined;

/**
 * Either subscribe or unsubscribe from the data feed
 * @member {module:model/EntityChangeSubscriptionRequest.ActionEnum} action
 */
EntityChangeSubscriptionRequest.prototype['action'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
EntityChangeSubscriptionRequest['ActionEnum'] = {

    /**
     * value: "Subscribe"
     * @const
     */
    "Subscribe": "Subscribe",

    /**
     * value: "Unsubscribe"
     * @const
     */
    "Unsubscribe": "Unsubscribe"
};



export default EntityChangeSubscriptionRequest;

