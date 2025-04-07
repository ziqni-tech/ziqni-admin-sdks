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

/**
 * The LogEvent model module.
 * @module model/LogEvent
 * @version 0.0.26
 */
class LogEvent {
    /**
     * Constructs a new <code>LogEvent</code>.
     * @alias module:model/LogEvent
     * @param accountId {String} 
     * @param logLevel {String} 
     * @param message {String} 
     * @param hostName {String} 
     * @param created {Date} date-time
     * @param serverType {String} 
     * @param id {String} 
     * @param stackTrace {String} 
     * @param privateIpAddress {String} 
     * @param entityId {String} 
     * @param entityType {String} 
     */
    constructor(accountId, logLevel, message, hostName, created, serverType, id, stackTrace, privateIpAddress, entityId, entityType) { 
        
        LogEvent.initialize(this, accountId, logLevel, message, hostName, created, serverType, id, stackTrace, privateIpAddress, entityId, entityType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountId, logLevel, message, hostName, created, serverType, id, stackTrace, privateIpAddress, entityId, entityType) { 
        obj['accountId'] = accountId;
        obj['logLevel'] = logLevel;
        obj['message'] = message;
        obj['hostName'] = hostName;
        obj['created'] = created;
        obj['serverType'] = serverType;
        obj['id'] = id;
        obj['stackTrace'] = stackTrace;
        obj['privateIpAddress'] = privateIpAddress;
        obj['entityId'] = entityId;
        obj['entityType'] = entityType;
    }

    /**
     * Constructs a <code>LogEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogEvent} obj Optional instance to populate.
     * @return {module:model/LogEvent} The populated <code>LogEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogEvent();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('logLevel')) {
                obj['logLevel'] = ApiClient.convertToType(data['logLevel'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('hostName')) {
                obj['hostName'] = ApiClient.convertToType(data['hostName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('serverType')) {
                obj['serverType'] = ApiClient.convertToType(data['serverType'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('stackTrace')) {
                obj['stackTrace'] = ApiClient.convertToType(data['stackTrace'], 'String');
            }
            if (data.hasOwnProperty('privateIpAddress')) {
                obj['privateIpAddress'] = ApiClient.convertToType(data['privateIpAddress'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} accountId
 */
LogEvent.prototype['accountId'] = undefined;

/**
 * @member {String} logLevel
 */
LogEvent.prototype['logLevel'] = undefined;

/**
 * @member {String} message
 */
LogEvent.prototype['message'] = undefined;

/**
 * @member {String} hostName
 */
LogEvent.prototype['hostName'] = undefined;

/**
 * date-time
 * @member {Date} created
 */
LogEvent.prototype['created'] = undefined;

/**
 * @member {String} serverType
 */
LogEvent.prototype['serverType'] = undefined;

/**
 * @member {String} id
 */
LogEvent.prototype['id'] = undefined;

/**
 * @member {String} stackTrace
 */
LogEvent.prototype['stackTrace'] = undefined;

/**
 * @member {String} privateIpAddress
 */
LogEvent.prototype['privateIpAddress'] = undefined;

/**
 * @member {Number} version
 */
LogEvent.prototype['version'] = undefined;

/**
 * 
 * @member {String} entityId
 */
LogEvent.prototype['entityId'] = undefined;

/**
 * 
 * @member {String} entityType
 */
LogEvent.prototype['entityType'] = undefined;






export default LogEvent;

