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

/**
 * The OptinStatus model module.
 * @module model/OptinStatus
 * @version 0.0.26
 */
class OptinStatus {
    /**
     * Constructs a new <code>OptinStatus</code>.
     * 
     * @alias module:model/OptinStatus
     * @param entityType {String} 
     * @param entityId {String} 
     * @param statusCode {Number} Processing = 0, NotEntered = 5, Entering = 10, Entrant = 15, Preparing = 20, Running = 25, Completing = 30, Completed = 35
     * @param status {String} Processing = 0, NotEntered = 5, Entering = 10, Entrant = 15,\\             \\ Preparing = 20, Running = 25, Completing = 30, Completed = 35
     */
    constructor(entityType, entityId, statusCode, status) { 
        
        OptinStatus.initialize(this, entityType, entityId, statusCode, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entityType, entityId, statusCode, status) { 
        obj['entityType'] = entityType;
        obj['entityId'] = entityId;
        obj['statusCode'] = statusCode;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>OptinStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptinStatus} obj Optional instance to populate.
     * @return {module:model/OptinStatus} The populated <code>OptinStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptinStatus();

            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('percentageComplete')) {
                obj['percentageComplete'] = ApiClient.convertToType(data['percentageComplete'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} entityType
 */
OptinStatus.prototype['entityType'] = undefined;

/**
 * 
 * @member {String} entityId
 */
OptinStatus.prototype['entityId'] = undefined;

/**
 * Processing = 0, NotEntered = 5, Entering = 10, Entrant = 15, Preparing = 20, Running = 25, Completing = 30, Completed = 35
 * @member {Number} statusCode
 */
OptinStatus.prototype['statusCode'] = undefined;

/**
 * Processing = 0, NotEntered = 5, Entering = 10, Entrant = 15,\\             \\ Preparing = 20, Running = 25, Completing = 30, Completed = 35
 * @member {String} status
 */
OptinStatus.prototype['status'] = undefined;

/**
 * What percentage has been completed so far, this is a number between 0 and 100
 * @member {Number} percentageComplete
 */
OptinStatus.prototype['percentageComplete'] = undefined;






export default OptinStatus;

