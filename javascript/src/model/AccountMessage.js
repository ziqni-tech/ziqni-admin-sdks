/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.5
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AccountMessageAllOf from './AccountMessageAllOf';
import EventRefType from './EventRefType';
import MessageLink from './MessageLink';
import MessageStatus from './MessageStatus';
import MessageType from './MessageType';
import ModelDefault from './ModelDefault';
import OptParamModels from './OptParamModels';

/**
 * The AccountMessage model module.
 * @module model/AccountMessage
 * @version 0.0.26
 */
class AccountMessage {
    /**
     * Constructs a new <code>AccountMessage</code>.
     * @alias module:model/AccountMessage
     * @implements module:model/ModelDefault
     * @implements module:model/OptParamModels
     * @implements module:model/AccountMessageAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param eventRefType {module:model/EventRefType} 
     * @param eventRefId {String} The reference ID of the event object
     * @param messageType {module:model/MessageType} 
     * @param subject {String} The title of the message
     * @param body {String} The context of the message
     * @param status {module:model/MessageStatus} 
     * @param userId {String} 
     * @param links {Array.<module:model/MessageLink>} 
     */
    constructor(id, spaceName, created, eventRefType, eventRefId, messageType, subject, body, status, userId, links) { 
        ModelDefault.initialize(this, id, spaceName, created);OptParamModels.initialize(this);AccountMessageAllOf.initialize(this, eventRefType, eventRefId, messageType, subject, body, status, userId, links);
        AccountMessage.initialize(this, id, spaceName, created, eventRefType, eventRefId, messageType, subject, body, status, userId, links);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, eventRefType, eventRefId, messageType, subject, body, status, userId, links) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['eventRefType'] = eventRefType;
        obj['eventRefId'] = eventRefId;
        obj['messageType'] = messageType;
        obj['subject'] = subject;
        obj['body'] = body;
        obj['status'] = status;
        obj['userId'] = userId;
        obj['links'] = links;
    }

    /**
     * Constructs a <code>AccountMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountMessage} obj Optional instance to populate.
     * @return {module:model/AccountMessage} The populated <code>AccountMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountMessage();
            ModelDefault.constructFromObject(data, obj);
            OptParamModels.constructFromObject(data, obj);
            AccountMessageAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('expiry')) {
                obj['expiry'] = ApiClient.convertToType(data['expiry'], 'Date');
            }
            if (data.hasOwnProperty('eventRefType')) {
                obj['eventRefType'] = EventRefType.constructFromObject(data['eventRefType']);
            }
            if (data.hasOwnProperty('eventRefId')) {
                obj['eventRefId'] = ApiClient.convertToType(data['eventRefId'], 'String');
            }
            if (data.hasOwnProperty('messageType')) {
                obj['messageType'] = MessageType.constructFromObject(data['messageType']);
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = MessageStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [MessageLink]);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
AccountMessage.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
AccountMessage.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
AccountMessage.prototype['created'] = undefined;

/**
 * @member {Object.<String, Object>} customFields
 */
AccountMessage.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
AccountMessage.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
AccountMessage.prototype['metadata'] = undefined;

/**
 * The time that the message will disappear after. ISO8601 timestamp
 * @member {Date} expiry
 */
AccountMessage.prototype['expiry'] = undefined;

/**
 * @member {module:model/EventRefType} eventRefType
 */
AccountMessage.prototype['eventRefType'] = undefined;

/**
 * The reference ID of the event object
 * @member {String} eventRefId
 */
AccountMessage.prototype['eventRefId'] = undefined;

/**
 * @member {module:model/MessageType} messageType
 */
AccountMessage.prototype['messageType'] = undefined;

/**
 * The title of the message
 * @member {String} subject
 */
AccountMessage.prototype['subject'] = undefined;

/**
 * The context of the message
 * @member {String} body
 */
AccountMessage.prototype['body'] = undefined;

/**
 * @member {module:model/MessageStatus} status
 */
AccountMessage.prototype['status'] = undefined;

/**
 * @member {String} userId
 */
AccountMessage.prototype['userId'] = undefined;

/**
 * 
 * @member {Array.<module:model/MessageLink>} links
 */
AccountMessage.prototype['links'] = undefined;


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
// Implement AccountMessageAllOf interface:
/**
 * The time that the message will disappear after. ISO8601 timestamp
 * @member {Date} expiry
 */
AccountMessageAllOf.prototype['expiry'] = undefined;
/**
 * @member {module:model/EventRefType} eventRefType
 */
AccountMessageAllOf.prototype['eventRefType'] = undefined;
/**
 * The reference ID of the event object
 * @member {String} eventRefId
 */
AccountMessageAllOf.prototype['eventRefId'] = undefined;
/**
 * @member {module:model/MessageType} messageType
 */
AccountMessageAllOf.prototype['messageType'] = undefined;
/**
 * The title of the message
 * @member {String} subject
 */
AccountMessageAllOf.prototype['subject'] = undefined;
/**
 * The context of the message
 * @member {String} body
 */
AccountMessageAllOf.prototype['body'] = undefined;
/**
 * @member {module:model/MessageStatus} status
 */
AccountMessageAllOf.prototype['status'] = undefined;
/**
 * @member {String} userId
 */
AccountMessageAllOf.prototype['userId'] = undefined;
/**
 * 
 * @member {Array.<module:model/MessageLink>} links
 */
AccountMessageAllOf.prototype['links'] = undefined;




export default AccountMessage;

