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
import EntityChangeSubscription from './EntityChangeSubscription';
import EntityChangeSubscriptionResponse from './EntityChangeSubscriptionResponse';
import EntityChanged from './EntityChanged';
import EntityStateChanged from './EntityStateChanged';
import Error from './Error';
import MetaBasic from './MetaBasic';
import SubscriptionTypes from './SubscriptionTypes';

/**
 * The NotificationMessage model module.
 * @module model/NotificationMessage
 * @version 0.0.26
 */
class NotificationMessage {
    /**
     * Constructs a new <code>NotificationMessage</code>.
     * @alias module:model/NotificationMessage
     * @implements module:model/EntityChanged
     * @implements module:model/EntityStateChanged
     * @implements module:model/EntityChangeSubscription
     * @implements module:model/EntityChangeSubscriptionResponse
     * @implements module:model/SubscriptionTypes
     * @param entityType {Array.<String>} 
     * @param subscriptionId {String} 
     */
    constructor(entityType, subscriptionId) { 
        EntityChanged.initialize(this);EntityStateChanged.initialize(this);EntityChangeSubscription.initialize(this, entityType, subscriptionId);EntityChangeSubscriptionResponse.initialize(this);SubscriptionTypes.initialize(this);
        NotificationMessage.initialize(this, entityType, subscriptionId);
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
     * Constructs a <code>NotificationMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationMessage} obj Optional instance to populate.
     * @return {module:model/NotificationMessage} The populated <code>NotificationMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationMessage();
            EntityChanged.constructFromObject(data, obj);
            EntityStateChanged.constructFromObject(data, obj);
            EntityChangeSubscription.constructFromObject(data, obj);
            EntityChangeSubscriptionResponse.constructFromObject(data, obj);
            SubscriptionTypes.constructFromObject(data, obj);

            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], ['String']);
            }
            if (data.hasOwnProperty('changedAt')) {
                obj['changedAt'] = ApiClient.convertToType(data['changedAt'], 'Date');
            }
            if (data.hasOwnProperty('changedBy')) {
                obj['changedBy'] = ApiClient.convertToType(data['changedBy'], 'String');
            }
            if (data.hasOwnProperty('typeOffChange')) {
                obj['typeOffChange'] = ApiClient.convertToType(data['typeOffChange'], 'Number');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('sequenceNumber')) {
                obj['sequenceNumber'] = ApiClient.convertToType(data['sequenceNumber'], 'Number');
            }
            if (data.hasOwnProperty('entityRefId')) {
                obj['entityRefId'] = ApiClient.convertToType(data['entityRefId'], 'String');
            }
            if (data.hasOwnProperty('entityParentId')) {
                obj['entityParentId'] = ApiClient.convertToType(data['entityParentId'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('previousState')) {
                obj['previousState'] = ApiClient.convertToType(data['previousState'], 'Number');
            }
            if (data.hasOwnProperty('currentState')) {
                obj['currentState'] = ApiClient.convertToType(data['currentState'], 'Number');
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
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaBasic.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [EntityChangeSubscription]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} entityId
 */
NotificationMessage.prototype['entityId'] = undefined;

/**
 * 
 * @member {Array.<String>} entityType
 */
NotificationMessage.prototype['entityType'] = undefined;

/**
 * 
 * @member {Date} changedAt
 */
NotificationMessage.prototype['changedAt'] = undefined;

/**
 * 
 * @member {String} changedBy
 */
NotificationMessage.prototype['changedBy'] = undefined;

/**
 * 
 * @member {Number} typeOffChange
 */
NotificationMessage.prototype['typeOffChange'] = undefined;

/**
 * 
 * @member {String} displayName
 */
NotificationMessage.prototype['displayName'] = undefined;

/**
 * 
 * @member {String} accountId
 */
NotificationMessage.prototype['accountId'] = undefined;

/**
 * 
 * @member {Number} sequenceNumber
 */
NotificationMessage.prototype['sequenceNumber'] = undefined;

/**
 * 
 * @member {String} entityRefId
 */
NotificationMessage.prototype['entityRefId'] = undefined;

/**
 * 
 * @member {String} entityParentId
 */
NotificationMessage.prototype['entityParentId'] = undefined;

/**
 * @member {Object} metadata
 */
NotificationMessage.prototype['metadata'] = undefined;

/**
 * 
 * @member {Number} previousState
 */
NotificationMessage.prototype['previousState'] = undefined;

/**
 * 
 * @member {Number} currentState
 */
NotificationMessage.prototype['currentState'] = undefined;

/**
 * 
 * @member {String} subscriptionId
 */
NotificationMessage.prototype['subscriptionId'] = undefined;

/**
 * Constraints of this subscription like gauranteedDelivery
 * @member {Array.<String>} constraints
 */
NotificationMessage.prototype['constraints'] = undefined;

/**
 * /user/queue/callbacks
 * @member {String} topic
 */
NotificationMessage.prototype['topic'] = undefined;

/**
 * @member {module:model/MetaBasic} meta
 */
NotificationMessage.prototype['meta'] = undefined;

/**
 * 
 * @member {Array.<module:model/EntityChangeSubscription>} data
 */
NotificationMessage.prototype['data'] = undefined;

/**
 * 
 * @member {Array.<module:model/Error>} errors
 */
NotificationMessage.prototype['errors'] = undefined;


// Implement EntityChanged interface:
/**
 * 
 * @member {String} entityId
 */
EntityChanged.prototype['entityId'] = undefined;
/**
 * 
 * @member {String} entityType
 */
EntityChanged.prototype['entityType'] = undefined;
/**
 * 
 * @member {Date} changedAt
 */
EntityChanged.prototype['changedAt'] = undefined;
/**
 * 
 * @member {String} changedBy
 */
EntityChanged.prototype['changedBy'] = undefined;
/**
 * 
 * @member {Number} typeOffChange
 */
EntityChanged.prototype['typeOffChange'] = undefined;
/**
 * 
 * @member {String} displayName
 */
EntityChanged.prototype['displayName'] = undefined;
/**
 * 
 * @member {String} accountId
 */
EntityChanged.prototype['accountId'] = undefined;
/**
 * 
 * @member {Number} sequenceNumber
 */
EntityChanged.prototype['sequenceNumber'] = undefined;
/**
 * 
 * @member {String} entityRefId
 */
EntityChanged.prototype['entityRefId'] = undefined;
/**
 * 
 * @member {String} entityParentId
 */
EntityChanged.prototype['entityParentId'] = undefined;
/**
 * @member {Object.<String, Object>} metadata
 */
EntityChanged.prototype['metadata'] = undefined;
// Implement EntityStateChanged interface:
/**
 * 
 * @member {String} entityId
 */
EntityStateChanged.prototype['entityId'] = undefined;
/**
 * 
 * @member {String} entityType
 */
EntityStateChanged.prototype['entityType'] = undefined;
/**
 * 
 * @member {Date} changedAt
 */
EntityStateChanged.prototype['changedAt'] = undefined;
/**
 * 
 * @member {String} changedBy
 */
EntityStateChanged.prototype['changedBy'] = undefined;
/**
 * 
 * @member {Number} typeOffChange
 */
EntityStateChanged.prototype['typeOffChange'] = undefined;
/**
 * 
 * @member {String} displayName
 */
EntityStateChanged.prototype['displayName'] = undefined;
/**
 * 
 * @member {String} accountId
 */
EntityStateChanged.prototype['accountId'] = undefined;
/**
 * 
 * @member {Number} sequenceNumber
 */
EntityStateChanged.prototype['sequenceNumber'] = undefined;
/**
 * 
 * @member {String} entityRefId
 */
EntityStateChanged.prototype['entityRefId'] = undefined;
/**
 * 
 * @member {String} entityParentId
 */
EntityStateChanged.prototype['entityParentId'] = undefined;
/**
 * @member {Object} metadata
 */
EntityStateChanged.prototype['metadata'] = undefined;
/**
 * 
 * @member {Number} previousState
 */
EntityStateChanged.prototype['previousState'] = undefined;
/**
 * 
 * @member {Number} currentState
 */
EntityStateChanged.prototype['currentState'] = undefined;
// Implement EntityChangeSubscription interface:
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
// Implement EntityChangeSubscriptionResponse interface:
/**
 * @member {module:model/MetaBasic} meta
 */
EntityChangeSubscriptionResponse.prototype['meta'] = undefined;
/**
 * 
 * @member {Array.<module:model/EntityChangeSubscription>} data
 */
EntityChangeSubscriptionResponse.prototype['data'] = undefined;
/**
 * 
 * @member {Array.<module:model/Error>} errors
 */
EntityChangeSubscriptionResponse.prototype['errors'] = undefined;
// Implement SubscriptionTypes interface:
/**
 * 
 * @member {Array.<String>} entityType
 */
SubscriptionTypes.prototype['entityType'] = undefined;




export default NotificationMessage;
