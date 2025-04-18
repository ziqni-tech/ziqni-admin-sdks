/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.19
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import MessageType from './MessageType';
import NotificationStatus from './NotificationStatus';
import Scheduling from './Scheduling';
import Translation from './Translation';

/**
 * The NotificationAllOf model module.
 * @module model/NotificationAllOf
 * @version 0.0.26
 */
class NotificationAllOf {
    /**
     * Constructs a new <code>NotificationAllOf</code>.
     * @alias module:model/NotificationAllOf
     * @param messageType {module:model/MessageType} 
     * @param subject {String} The title of the message
     * @param body {String} The context of the message
     * @param status {module:model/NotificationStatus} 
     * @param scheduling {module:model/Scheduling} 
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(messageType, subject, body, status, scheduling, constraints) { 
        
        NotificationAllOf.initialize(this, messageType, subject, body, status, scheduling, constraints);
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
     * Constructs a <code>NotificationAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationAllOf} obj Optional instance to populate.
     * @return {module:model/NotificationAllOf} The populated <code>NotificationAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationAllOf();

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






export default NotificationAllOf;

