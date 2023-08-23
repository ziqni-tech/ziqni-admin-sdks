/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.7
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import MessageType from './MessageType';
import ModelDefault from './ModelDefault';
import NotificationAllOf from './NotificationAllOf';
import NotificationStatus from './NotificationStatus';
import OptParamModels from './OptParamModels';
import Scheduling from './Scheduling';
import Translation from './Translation';

/**
 * The Notification model module.
 * @module model/Notification
 * @version 0.0.26
 */
class Notification {
    /**
     * Constructs a new <code>Notification</code>.
     * @alias module:model/Notification
     * @implements module:model/ModelDefault
     * @implements module:model/OptParamModels
     * @implements module:model/NotificationAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param messageType {module:model/MessageType} 
     * @param subject {String} The title of the message
     * @param body {String} The context of the message
     * @param status {module:model/NotificationStatus} 
     * @param scheduling {module:model/Scheduling} 
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(id, spaceName, created, messageType, subject, body, status, scheduling, constraints) { 
        ModelDefault.initialize(this, id, spaceName, created);OptParamModels.initialize(this);NotificationAllOf.initialize(this, messageType, subject, body, status, scheduling, constraints);
        Notification.initialize(this, id, spaceName, created, messageType, subject, body, status, scheduling, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, messageType, subject, body, status, scheduling, constraints) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['messageType'] = messageType;
        obj['subject'] = subject;
        obj['body'] = body;
        obj['status'] = status;
        obj['scheduling'] = scheduling;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notification} obj Optional instance to populate.
     * @return {module:model/Notification} The populated <code>Notification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Notification();
            ModelDefault.constructFromObject(data, obj);
            OptParamModels.constructFromObject(data, obj);
            NotificationAllOf.constructFromObject(data, obj);

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
                obj['status'] = NotificationStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
            if (data.hasOwnProperty('scheduling')) {
                obj['scheduling'] = Scheduling.constructFromObject(data['scheduling']);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('memberTags')) {
                obj['memberTags'] = ApiClient.convertToType(data['memberTags'], ['String']);
            }
            if (data.hasOwnProperty('memberIds')) {
                obj['memberIds'] = ApiClient.convertToType(data['memberIds'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
Notification.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Notification.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Notification.prototype['created'] = undefined;

/**
 * @member {Object.<String, Object>} customFields
 */
Notification.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
Notification.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
Notification.prototype['metadata'] = undefined;

/**
 * @member {module:model/MessageType} messageType
 */
Notification.prototype['messageType'] = undefined;

/**
 * The title of the message
 * @member {String} subject
 */
Notification.prototype['subject'] = undefined;

/**
 * The context of the message
 * @member {String} body
 */
Notification.prototype['body'] = undefined;

/**
 * @member {module:model/NotificationStatus} status
 */
Notification.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
Notification.prototype['translations'] = undefined;

/**
 * @member {module:model/Scheduling} scheduling
 */
Notification.prototype['scheduling'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
Notification.prototype['constraints'] = undefined;

/**
 * 
 * @member {Array.<String>} memberTags
 */
Notification.prototype['memberTags'] = undefined;

/**
 * 
 * @member {Array.<String>} memberIds
 */
Notification.prototype['memberIds'] = undefined;


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
// Implement NotificationAllOf interface:
/**
 * @member {module:model/MessageType} messageType
 */
NotificationAllOf.prototype['messageType'] = undefined;
/**
 * The title of the message
 * @member {String} subject
 */
NotificationAllOf.prototype['subject'] = undefined;
/**
 * The context of the message
 * @member {String} body
 */
NotificationAllOf.prototype['body'] = undefined;
/**
 * @member {module:model/NotificationStatus} status
 */
NotificationAllOf.prototype['status'] = undefined;
/**
 * @member {Array.<module:model/Translation>} translations
 */
NotificationAllOf.prototype['translations'] = undefined;
/**
 * @member {module:model/Scheduling} scheduling
 */
NotificationAllOf.prototype['scheduling'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
NotificationAllOf.prototype['constraints'] = undefined;
/**
 * 
 * @member {Array.<String>} memberTags
 */
NotificationAllOf.prototype['memberTags'] = undefined;
/**
 * 
 * @member {Array.<String>} memberIds
 */
NotificationAllOf.prototype['memberIds'] = undefined;




export default Notification;

