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
import EventRefType from './EventRefType';
import MemberMessageAllOf from './MemberMessageAllOf';
import MessageStatus from './MessageStatus';
import MessageType from './MessageType';
import ModelDefault from './ModelDefault';
import OptParamModels from './OptParamModels';
import Translation from './Translation';

/**
 * The MemberMessage model module.
 * @module model/MemberMessage
 * @version 0.0.26
 */
class MemberMessage {
    /**
     * Constructs a new <code>MemberMessage</code>.
     * This is the Member Message model
     * @alias module:model/MemberMessage
     * @implements module:model/ModelDefault
     * @implements module:model/OptParamModels
     * @implements module:model/MemberMessageAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param eventRefType {module:model/EventRefType} 
     * @param messageType {module:model/MessageType} 
     * @param subject {String} The title of the message
     * @param body {String} The context of the message
     * @param prize {String} Unique system identifier of an Award
     * @param status {module:model/MessageStatus} 
     * @param expiry {Date} The time that the message will disappear after. ISO8601 timestamp
     * @param memberId {Array.<String>} The reference ID of the event object
     */
    constructor(id, spaceName, created, eventRefType, messageType, subject, body, prize, status, expiry, memberId) { 
        ModelDefault.initialize(this, id, spaceName, created);OptParamModels.initialize(this);MemberMessageAllOf.initialize(this, eventRefType, messageType, subject, body, prize, status, expiry, memberId);
        MemberMessage.initialize(this, id, spaceName, created, eventRefType, messageType, subject, body, prize, status, expiry, memberId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, eventRefType, messageType, subject, body, prize, status, expiry, memberId) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['eventRefType'] = eventRefType;
        obj['messageType'] = messageType;
        obj['subject'] = subject;
        obj['body'] = body;
        obj['prize'] = prize;
        obj['status'] = status;
        obj['expiry'] = expiry;
        obj['memberId'] = memberId;
    }

    /**
     * Constructs a <code>MemberMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemberMessage} obj Optional instance to populate.
     * @return {module:model/MemberMessage} The populated <code>MemberMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MemberMessage();
            ModelDefault.constructFromObject(data, obj);
            OptParamModels.constructFromObject(data, obj);
            MemberMessageAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('prize')) {
                obj['prize'] = ApiClient.convertToType(data['prize'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = MessageStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('expiry')) {
                obj['expiry'] = ApiClient.convertToType(data['expiry'], 'Date');
            }
            if (data.hasOwnProperty('memberId')) {
                obj['memberId'] = ApiClient.convertToType(data['memberId'], ['String']);
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
            if (data.hasOwnProperty('translatableFields')) {
                obj['translatableFields'] = ApiClient.convertToType(data['translatableFields'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
MemberMessage.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
MemberMessage.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
MemberMessage.prototype['created'] = undefined;

/**
 * @member {Object.<String, Object>} customFields
 */
MemberMessage.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
MemberMessage.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
MemberMessage.prototype['metadata'] = undefined;

/**
 * @member {module:model/EventRefType} eventRefType
 */
MemberMessage.prototype['eventRefType'] = undefined;

/**
 * The reference ID of the event object
 * @member {String} eventRefId
 */
MemberMessage.prototype['eventRefId'] = undefined;

/**
 * @member {module:model/MessageType} messageType
 */
MemberMessage.prototype['messageType'] = undefined;

/**
 * The title of the message
 * @member {String} subject
 */
MemberMessage.prototype['subject'] = undefined;

/**
 * The context of the message
 * @member {String} body
 */
MemberMessage.prototype['body'] = undefined;

/**
 * Unique system identifier of an Award
 * @member {String} prize
 */
MemberMessage.prototype['prize'] = undefined;

/**
 * @member {module:model/MessageStatus} status
 */
MemberMessage.prototype['status'] = undefined;

/**
 * The time that the message will disappear after. ISO8601 timestamp
 * @member {Date} expiry
 */
MemberMessage.prototype['expiry'] = undefined;

/**
 * The reference ID of the event object
 * @member {Array.<String>} memberId
 */
MemberMessage.prototype['memberId'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
MemberMessage.prototype['translations'] = undefined;

/**
 * Message translatable fields
 * @member {Array.<String>} translatableFields
 */
MemberMessage.prototype['translatableFields'] = undefined;


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
// Implement MemberMessageAllOf interface:
/**
 * @member {module:model/EventRefType} eventRefType
 */
MemberMessageAllOf.prototype['eventRefType'] = undefined;
/**
 * The reference ID of the event object
 * @member {String} eventRefId
 */
MemberMessageAllOf.prototype['eventRefId'] = undefined;
/**
 * @member {module:model/MessageType} messageType
 */
MemberMessageAllOf.prototype['messageType'] = undefined;
/**
 * The title of the message
 * @member {String} subject
 */
MemberMessageAllOf.prototype['subject'] = undefined;
/**
 * The context of the message
 * @member {String} body
 */
MemberMessageAllOf.prototype['body'] = undefined;
/**
 * Unique system identifier of an Award
 * @member {String} prize
 */
MemberMessageAllOf.prototype['prize'] = undefined;
/**
 * @member {module:model/MessageStatus} status
 */
MemberMessageAllOf.prototype['status'] = undefined;
/**
 * The time that the message will disappear after. ISO8601 timestamp
 * @member {Date} expiry
 */
MemberMessageAllOf.prototype['expiry'] = undefined;
/**
 * The reference ID of the event object
 * @member {Array.<String>} memberId
 */
MemberMessageAllOf.prototype['memberId'] = undefined;
/**
 * @member {Array.<module:model/Translation>} translations
 */
MemberMessageAllOf.prototype['translations'] = undefined;
/**
 * Message translatable fields
 * @member {Array.<String>} translatableFields
 */
MemberMessageAllOf.prototype['translatableFields'] = undefined;




export default MemberMessage;

