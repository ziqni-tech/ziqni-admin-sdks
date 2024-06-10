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
import CreateNotificationRequestAllOf from './CreateNotificationRequestAllOf';
import CreateOptParamModels from './CreateOptParamModels';
import MessageStatus from './MessageStatus';
import MessageType from './MessageType';
import Scheduling from './Scheduling';
import Translation from './Translation';

/**
 * The CreateNotificationRequest model module.
 * @module model/CreateNotificationRequest
 * @version 0.0.26
 */
class CreateNotificationRequest {
    /**
     * Constructs a new <code>CreateNotificationRequest</code>.
     * @alias module:model/CreateNotificationRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateNotificationRequestAllOf
     * @param messageType {module:model/MessageType} 
     * @param subject {String} The title of the message
     * @param body {String} The context of the message
     * @param status {module:model/MessageStatus} 
     * @param scheduling {module:model/Scheduling} 
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(messageType, subject, body, status, scheduling, constraints) { 
        CreateOptParamModels.initialize(this);CreateNotificationRequestAllOf.initialize(this, messageType, subject, body, status, scheduling, constraints);
        CreateNotificationRequest.initialize(this, messageType, subject, body, status, scheduling, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, messageType, subject, body, status, scheduling, constraints) { 
        obj['messageType'] = messageType;
        obj['subject'] = subject;
        obj['body'] = body;
        obj['status'] = status;
        obj['scheduling'] = scheduling;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>CreateNotificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateNotificationRequest} obj Optional instance to populate.
     * @return {module:model/CreateNotificationRequest} The populated <code>CreateNotificationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateNotificationRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateNotificationRequestAllOf.constructFromObject(data, obj);

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
                obj['status'] = MessageStatus.constructFromObject(data['status']);
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
            if (data.hasOwnProperty('expireAfterDate')) {
                obj['expireAfterDate'] = ApiClient.convertToType(data['expireAfterDate'], 'Date');
            }
            if (data.hasOwnProperty('expireAfterDays')) {
                obj['expireAfterDays'] = ApiClient.convertToType(data['expireAfterDays'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateNotificationRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateNotificationRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateNotificationRequest.prototype['metadata'] = undefined;

/**
 * @member {module:model/MessageType} messageType
 */
CreateNotificationRequest.prototype['messageType'] = undefined;

/**
 * The title of the message
 * @member {String} subject
 */
CreateNotificationRequest.prototype['subject'] = undefined;

/**
 * The context of the message
 * @member {String} body
 */
CreateNotificationRequest.prototype['body'] = undefined;

/**
 * @member {module:model/MessageStatus} status
 */
CreateNotificationRequest.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateNotificationRequest.prototype['translations'] = undefined;

/**
 * @member {module:model/Scheduling} scheduling
 */
CreateNotificationRequest.prototype['scheduling'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateNotificationRequest.prototype['constraints'] = undefined;

/**
 * 
 * @member {Array.<String>} memberTags
 */
CreateNotificationRequest.prototype['memberTags'] = undefined;

/**
 * 
 * @member {Array.<String>} memberIds
 */
CreateNotificationRequest.prototype['memberIds'] = undefined;

/**
 * Specify the expiry as a date after creation of the record. If expireAfterDays is specified then expireAfterDate should not be specified.
 * @member {Date} expireAfterDate
 */
CreateNotificationRequest.prototype['expireAfterDate'] = undefined;

/**
 * Specify the expiry in number of days after creation of the record. If expireAfterDate is specified then expireAfterDays should not be specified.
 * @member {Number} expireAfterDays
 */
CreateNotificationRequest.prototype['expireAfterDays'] = undefined;


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
// Implement CreateNotificationRequestAllOf interface:
/**
 * @member {module:model/MessageType} messageType
 */
CreateNotificationRequestAllOf.prototype['messageType'] = undefined;
/**
 * The title of the message
 * @member {String} subject
 */
CreateNotificationRequestAllOf.prototype['subject'] = undefined;
/**
 * The context of the message
 * @member {String} body
 */
CreateNotificationRequestAllOf.prototype['body'] = undefined;
/**
 * @member {module:model/MessageStatus} status
 */
CreateNotificationRequestAllOf.prototype['status'] = undefined;
/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateNotificationRequestAllOf.prototype['translations'] = undefined;
/**
 * @member {module:model/Scheduling} scheduling
 */
CreateNotificationRequestAllOf.prototype['scheduling'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateNotificationRequestAllOf.prototype['constraints'] = undefined;
/**
 * 
 * @member {Array.<String>} memberTags
 */
CreateNotificationRequestAllOf.prototype['memberTags'] = undefined;
/**
 * 
 * @member {Array.<String>} memberIds
 */
CreateNotificationRequestAllOf.prototype['memberIds'] = undefined;
/**
 * Specify the expiry as a date after creation of the record. If expireAfterDays is specified then expireAfterDate should not be specified.
 * @member {Date} expireAfterDate
 */
CreateNotificationRequestAllOf.prototype['expireAfterDate'] = undefined;
/**
 * Specify the expiry in number of days after creation of the record. If expireAfterDate is specified then expireAfterDays should not be specified.
 * @member {Number} expireAfterDays
 */
CreateNotificationRequestAllOf.prototype['expireAfterDays'] = undefined;




export default CreateNotificationRequest;

