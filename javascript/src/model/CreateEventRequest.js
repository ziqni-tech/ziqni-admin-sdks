/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.9
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateEventRequest model module.
 * @module model/CreateEventRequest
 * @version 0.0.26
 */
class CreateEventRequest {
    /**
     * Constructs a new <code>CreateEventRequest</code>.
     * @alias module:model/CreateEventRequest
     * @param memberRefId {String} The reference to this member in external system
     * @param action {String} The identifier that describes the meaning of this event
     * @param entityRefId {String} It is a reference to a game/product ID from external system
     * @param sourceValue {Number} The actual numerical value related to the event
     * @param transactionTimestamp {Date} ISO8601 timestamp for when this event happened. All records are stored in UTC time zone
     * @param eventRefId {String} 
     */
    constructor(memberRefId, action, entityRefId, sourceValue, transactionTimestamp, eventRefId) { 
        
        CreateEventRequest.initialize(this, memberRefId, action, entityRefId, sourceValue, transactionTimestamp, eventRefId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, memberRefId, action, entityRefId, sourceValue, transactionTimestamp, eventRefId) { 
        obj['memberRefId'] = memberRefId;
        obj['action'] = action;
        obj['entityRefId'] = entityRefId;
        obj['sourceValue'] = sourceValue;
        obj['transactionTimestamp'] = transactionTimestamp;
        obj['eventRefId'] = eventRefId;
    }

    /**
     * Constructs a <code>CreateEventRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEventRequest} obj Optional instance to populate.
     * @return {module:model/CreateEventRequest} The populated <code>CreateEventRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEventRequest();

            if (data.hasOwnProperty('memberRefId')) {
                obj['memberRefId'] = ApiClient.convertToType(data['memberRefId'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('batchId')) {
                obj['batchId'] = ApiClient.convertToType(data['batchId'], 'String');
            }
            if (data.hasOwnProperty('entityRefId')) {
                obj['entityRefId'] = ApiClient.convertToType(data['entityRefId'], 'String');
            }
            if (data.hasOwnProperty('sourceValue')) {
                obj['sourceValue'] = ApiClient.convertToType(data['sourceValue'], 'Number');
            }
            if (data.hasOwnProperty('transactionTimestamp')) {
                obj['transactionTimestamp'] = ApiClient.convertToType(data['transactionTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('eventRefId')) {
                obj['eventRefId'] = ApiClient.convertToType(data['eventRefId'], 'String');
            }
            if (data.hasOwnProperty('memberId')) {
                obj['memberId'] = ApiClient.convertToType(data['memberId'], 'String');
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
            }
            if (data.hasOwnProperty('unitOfMeasure')) {
                obj['unitOfMeasure'] = ApiClient.convertToType(data['unitOfMeasure'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The reference to this member in external system
 * @member {String} memberRefId
 */
CreateEventRequest.prototype['memberRefId'] = undefined;

/**
 * The identifier that describes the meaning of this event
 * @member {String} action
 */
CreateEventRequest.prototype['action'] = undefined;

/**
 * The batch identifier is used to group related event stream data together. This could be as simple as a UUID or your internal reference to that distinct player session event
 * @member {String} batchId
 */
CreateEventRequest.prototype['batchId'] = undefined;

/**
 * It is a reference to a game/product ID from external system
 * @member {String} entityRefId
 */
CreateEventRequest.prototype['entityRefId'] = undefined;

/**
 * The actual numerical value related to the event
 * @member {Number} sourceValue
 */
CreateEventRequest.prototype['sourceValue'] = undefined;

/**
 * ISO8601 timestamp for when this event happened. All records are stored in UTC time zone
 * @member {Date} transactionTimestamp
 */
CreateEventRequest.prototype['transactionTimestamp'] = undefined;

/**
 * A list of Strings of groups that the tag belongs to
 * @member {Array.<String>} tags
 */
CreateEventRequest.prototype['tags'] = undefined;

/**
 * 
 * @member {String} eventRefId
 */
CreateEventRequest.prototype['eventRefId'] = undefined;

/**
 * 
 * @member {String} memberId
 */
CreateEventRequest.prototype['memberId'] = undefined;

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateEventRequest.prototype['customFields'] = undefined;

/**
 * The unit of measure is used to determine the type of the source value. It is used to normalize points values for currency based calculations by normalizing the source value.
 * @member {String} unitOfMeasure
 */
CreateEventRequest.prototype['unitOfMeasure'] = undefined;






export default CreateEventRequest;

