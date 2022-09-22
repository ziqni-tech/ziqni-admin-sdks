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
import CreateMemberMessageRequestAllOf from './CreateMemberMessageRequestAllOf';
import CreateOptParamModels from './CreateOptParamModels';
import EventRefType from './EventRefType';
import MessageLink from './MessageLink';
import MessageStatus from './MessageStatus';
import MessageType from './MessageType';
import Translation from './Translation';

/**
 * The CreateMemberMessageRequest model module.
 * @module model/CreateMemberMessageRequest
 * @version 0.0.26
 */
class CreateMemberMessageRequest {
    /**
     * Constructs a new <code>CreateMemberMessageRequest</code>.
     * @alias module:model/CreateMemberMessageRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateMemberMessageRequestAllOf
     * @param eventRefType {module:model/EventRefType} 
     * @param messageType {module:model/MessageType} 
     * @param subject {String} The title of the message
     * @param body {String} The context of the message
     * @param status {module:model/MessageStatus} 
     * @param links {Array.<module:model/MessageLink>} 
     */
    constructor(eventRefType, messageType, subject, body, status, links) { 
        CreateOptParamModels.initialize(this);CreateMemberMessageRequestAllOf.initialize(this, eventRefType, messageType, subject, body, status, links);
        CreateMemberMessageRequest.initialize(this, eventRefType, messageType, subject, body, status, links);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eventRefType, messageType, subject, body, status, links) { 
        obj['eventRefType'] = eventRefType;
        obj['messageType'] = messageType;
        obj['subject'] = subject;
        obj['body'] = body;
        obj['status'] = status;
        obj['links'] = links;
    }

    /**
     * Constructs a <code>CreateMemberMessageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateMemberMessageRequest} obj Optional instance to populate.
     * @return {module:model/CreateMemberMessageRequest} The populated <code>CreateMemberMessageRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateMemberMessageRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateMemberMessageRequestAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('status')) {
                obj['status'] = MessageStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('expireAfterDate')) {
                obj['expireAfterDate'] = ApiClient.convertToType(data['expireAfterDate'], 'Date');
            }
            if (data.hasOwnProperty('expireAfterDays')) {
                obj['expireAfterDays'] = ApiClient.convertToType(data['expireAfterDays'], 'Number');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [MessageLink]);
            }
            if (data.hasOwnProperty('memberIds')) {
                obj['memberIds'] = ApiClient.convertToType(data['memberIds'], ['String']);
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
        }
        return obj;
    }


}

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateMemberMessageRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateMemberMessageRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateMemberMessageRequest.prototype['metadata'] = undefined;

/**
 * @member {module:model/EventRefType} eventRefType
 */
CreateMemberMessageRequest.prototype['eventRefType'] = undefined;

/**
 * The reference ID of the event object
 * @member {String} eventRefId
 */
CreateMemberMessageRequest.prototype['eventRefId'] = undefined;

/**
 * @member {module:model/MessageType} messageType
 */
CreateMemberMessageRequest.prototype['messageType'] = undefined;

/**
 * The title of the message
 * @member {String} subject
 */
CreateMemberMessageRequest.prototype['subject'] = undefined;

/**
 * The context of the message
 * @member {String} body
 */
CreateMemberMessageRequest.prototype['body'] = undefined;

/**
 * @member {module:model/MessageStatus} status
 */
CreateMemberMessageRequest.prototype['status'] = undefined;

/**
 * Specify the expiry as a date after creation of the record. If expireAfterDays is specified then expireAfterDate should not be specified.
 * @member {Date} expireAfterDate
 */
CreateMemberMessageRequest.prototype['expireAfterDate'] = undefined;

/**
 * Specify the expiry in number of days after creation of the record. If expireAfterDate is specified then expireAfterDays should not be specified.
 * @member {Number} expireAfterDays
 */
CreateMemberMessageRequest.prototype['expireAfterDays'] = undefined;

/**
 * 
 * @member {Array.<module:model/MessageLink>} links
 */
CreateMemberMessageRequest.prototype['links'] = undefined;

/**
 * 
 * @member {Array.<String>} memberIds
 */
CreateMemberMessageRequest.prototype['memberIds'] = undefined;

/**
 * 
 * @member {Array.<module:model/Translation>} translations
 */
CreateMemberMessageRequest.prototype['translations'] = undefined;


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
// Implement CreateMemberMessageRequestAllOf interface:
/**
 * @member {module:model/EventRefType} eventRefType
 */
CreateMemberMessageRequestAllOf.prototype['eventRefType'] = undefined;
/**
 * The reference ID of the event object
 * @member {String} eventRefId
 */
CreateMemberMessageRequestAllOf.prototype['eventRefId'] = undefined;
/**
 * @member {module:model/MessageType} messageType
 */
CreateMemberMessageRequestAllOf.prototype['messageType'] = undefined;
/**
 * The title of the message
 * @member {String} subject
 */
CreateMemberMessageRequestAllOf.prototype['subject'] = undefined;
/**
 * The context of the message
 * @member {String} body
 */
CreateMemberMessageRequestAllOf.prototype['body'] = undefined;
/**
 * @member {module:model/MessageStatus} status
 */
CreateMemberMessageRequestAllOf.prototype['status'] = undefined;
/**
 * Specify the expiry as a date after creation of the record. If expireAfterDays is specified then expireAfterDate should not be specified.
 * @member {Date} expireAfterDate
 */
CreateMemberMessageRequestAllOf.prototype['expireAfterDate'] = undefined;
/**
 * Specify the expiry in number of days after creation of the record. If expireAfterDate is specified then expireAfterDays should not be specified.
 * @member {Number} expireAfterDays
 */
CreateMemberMessageRequestAllOf.prototype['expireAfterDays'] = undefined;
/**
 * 
 * @member {Array.<module:model/MessageLink>} links
 */
CreateMemberMessageRequestAllOf.prototype['links'] = undefined;
/**
 * 
 * @member {Array.<String>} memberIds
 */
CreateMemberMessageRequestAllOf.prototype['memberIds'] = undefined;
/**
 * 
 * @member {Array.<module:model/Translation>} translations
 */
CreateMemberMessageRequestAllOf.prototype['translations'] = undefined;




export default CreateMemberMessageRequest;

