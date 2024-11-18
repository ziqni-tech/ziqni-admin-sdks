/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.17
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EventRefType from './EventRefType';
import MessageLink from './MessageLink';
import MessageStatus from './MessageStatus';
import MessageType from './MessageType';

/**
 * The MemberMessageAllOf model module.
 * @module model/MemberMessageAllOf
 * @version 0.0.26
 */
class MemberMessageAllOf {
    /**
     * Constructs a new <code>MemberMessageAllOf</code>.
     * @alias module:model/MemberMessageAllOf
     * @param eventRefType {module:model/EventRefType} 
     * @param messageType {module:model/MessageType} 
     * @param subject {String} The title of the message
     * @param body {String} The context of the message
     * @param status {module:model/MessageStatus} 
     * @param expiry {Date} The time that the message will disappear after. ISO8601 timestamp
     * @param links {module:model/MessageLink} 
     */
    constructor(eventRefType, messageType, subject, body, status, expiry, links) { 
        
        MemberMessageAllOf.initialize(this, eventRefType, messageType, subject, body, status, expiry, links);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eventRefType, messageType, subject, body, status, expiry, links) { 
        obj['eventRefType'] = eventRefType;
        obj['messageType'] = messageType;
        obj['subject'] = subject;
        obj['body'] = body;
        obj['status'] = status;
        obj['expiry'] = expiry;
        obj['links'] = links;
    }

    /**
     * Constructs a <code>MemberMessageAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemberMessageAllOf} obj Optional instance to populate.
     * @return {module:model/MemberMessageAllOf} The populated <code>MemberMessageAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MemberMessageAllOf();

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
            if (data.hasOwnProperty('expiry')) {
                obj['expiry'] = ApiClient.convertToType(data['expiry'], 'Date');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = MessageLink.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('memberIds')) {
                obj['memberIds'] = ApiClient.convertToType(data['memberIds'], ['String']);
            }
        }
        return obj;
    }


}

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
 * @member {module:model/MessageStatus} status
 */
MemberMessageAllOf.prototype['status'] = undefined;

/**
 * The time that the message will disappear after. ISO8601 timestamp
 * @member {Date} expiry
 */
MemberMessageAllOf.prototype['expiry'] = undefined;

/**
 * @member {module:model/MessageLink} links
 */
MemberMessageAllOf.prototype['links'] = undefined;

/**
 * 
 * @member {Array.<String>} memberIds
 */
MemberMessageAllOf.prototype['memberIds'] = undefined;






export default MemberMessageAllOf;

