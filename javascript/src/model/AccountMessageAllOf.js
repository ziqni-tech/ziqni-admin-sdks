/**
 * Ziqni Admin Api
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
import MessageStatus from './MessageStatus';
import MessageType from './MessageType';

/**
 * The AccountMessageAllOf model module.
 * @module model/AccountMessageAllOf
 * @version 0.0.26
 */
class AccountMessageAllOf {
    /**
     * Constructs a new <code>AccountMessageAllOf</code>.
     * @alias module:model/AccountMessageAllOf
     * @param eventRefType {module:model/EventRefType} 
     * @param eventRefId {String} The reference ID of the event object
     * @param messageType {module:model/MessageType} 
     * @param subject {String} The title of the message
     * @param body {String} The context of the message
     * @param status {module:model/MessageStatus} 
     * @param userId {String} 
     */
    constructor(eventRefType, eventRefId, messageType, subject, body, status, userId) { 
        
        AccountMessageAllOf.initialize(this, eventRefType, eventRefId, messageType, subject, body, status, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eventRefType, eventRefId, messageType, subject, body, status, userId) { 
        obj['eventRefType'] = eventRefType;
        obj['eventRefId'] = eventRefId;
        obj['messageType'] = messageType;
        obj['subject'] = subject;
        obj['body'] = body;
        obj['status'] = status;
        obj['userId'] = userId;
    }

    /**
     * Constructs a <code>AccountMessageAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountMessageAllOf} obj Optional instance to populate.
     * @return {module:model/AccountMessageAllOf} The populated <code>AccountMessageAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountMessageAllOf();

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
        }
        return obj;
    }


}

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






export default AccountMessageAllOf;

