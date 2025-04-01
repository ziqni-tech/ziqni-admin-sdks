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
 * The EventAllOf model module.
 * @module model/EventAllOf
 * @version 0.0.26
 */
class EventAllOf {
    /**
     * Constructs a new <code>EventAllOf</code>.
     * @alias module:model/EventAllOf
     * @param action {String} The identifier that describes the meaning of this event
     * @param sourceValue {Number} The actual numerical value related to the event
     * @param points {Number} A value derived from the source value field. In the context of Product additionally an adjustment factor will be applied
     * @param transactionTimestamp {Date} ISO8601 timestamp for when this event happened. All records are stored in UTC time zone
     */
    constructor(action, sourceValue, points, transactionTimestamp) { 
        
        EventAllOf.initialize(this, action, sourceValue, points, transactionTimestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, sourceValue, points, transactionTimestamp) { 
        obj['action'] = action;
        obj['sourceValue'] = sourceValue;
        obj['points'] = points;
        obj['transactionTimestamp'] = transactionTimestamp;
    }

    /**
     * Constructs a <code>EventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventAllOf} obj Optional instance to populate.
     * @return {module:model/EventAllOf} The populated <code>EventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventAllOf();

            if (data.hasOwnProperty('memberId')) {
                obj['memberId'] = ApiClient.convertToType(data['memberId'], 'String');
            }
            if (data.hasOwnProperty('memberRefId')) {
                obj['memberRefId'] = ApiClient.convertToType(data['memberRefId'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('batchId')) {
                obj['batchId'] = ApiClient.convertToType(data['batchId'], 'String');
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('eventRefId')) {
                obj['eventRefId'] = ApiClient.convertToType(data['eventRefId'], 'String');
            }
            if (data.hasOwnProperty('entityRefId')) {
                obj['entityRefId'] = ApiClient.convertToType(data['entityRefId'], 'String');
            }
            if (data.hasOwnProperty('sourceValue')) {
                obj['sourceValue'] = ApiClient.convertToType(data['sourceValue'], 'Number');
            }
            if (data.hasOwnProperty('points')) {
                obj['points'] = ApiClient.convertToType(data['points'], 'Number');
            }
            if (data.hasOwnProperty('transactionTimestamp')) {
                obj['transactionTimestamp'] = ApiClient.convertToType(data['transactionTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': Object});
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('relatesTo')) {
                obj['relatesTo'] = ApiClient.convertToType(data['relatesTo'], ['String']);
            }
            if (data.hasOwnProperty('relatesToExternal')) {
                obj['relatesToExternal'] = ApiClient.convertToType(data['relatesToExternal'], ['String']);
            }
            if (data.hasOwnProperty('unitOfMeasure')) {
                obj['unitOfMeasure'] = ApiClient.convertToType(data['unitOfMeasure'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique system identifier of a Member
 * @member {String} memberId
 */
EventAllOf.prototype['memberId'] = undefined;

/**
 * The reference to this member in external system
 * @member {String} memberRefId
 */
EventAllOf.prototype['memberRefId'] = undefined;

/**
 * The identifier that describes the meaning of this event
 * @member {String} action
 */
EventAllOf.prototype['action'] = undefined;

/**
 * The batch identifier is used to group related event stream data together. This could be as simple as a UUID or your internal reference to that distinct player session event
 * @member {String} batchId
 */
EventAllOf.prototype['batchId'] = undefined;

/**
 * It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award
 * @member {String} entityId
 */
EventAllOf.prototype['entityId'] = undefined;

/**
 * It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award
 * @member {String} eventRefId
 */
EventAllOf.prototype['eventRefId'] = undefined;

/**
 * It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award
 * @member {String} entityRefId
 */
EventAllOf.prototype['entityRefId'] = undefined;

/**
 * The actual numerical value related to the event
 * @member {Number} sourceValue
 */
EventAllOf.prototype['sourceValue'] = undefined;

/**
 * A value derived from the source value field. In the context of Product additionally an adjustment factor will be applied
 * @member {Number} points
 */
EventAllOf.prototype['points'] = undefined;

/**
 * ISO8601 timestamp for when this event happened. All records are stored in UTC time zone
 * @member {Date} transactionTimestamp
 */
EventAllOf.prototype['transactionTimestamp'] = undefined;

/**
 * Event metadata map.
 * @member {Object.<String, Object>} metadata
 */
EventAllOf.prototype['metadata'] = undefined;

/**
 * @member {Object.<String, Object>} customFields
 */
EventAllOf.prototype['customFields'] = undefined;

/**
 * A list of Strings of groups that the tag belongs to
 * @member {Array.<String>} tags
 */
EventAllOf.prototype['tags'] = undefined;

/**
 * @member {Array.<String>} relatesTo
 */
EventAllOf.prototype['relatesTo'] = undefined;

/**
 * @member {Array.<String>} relatesToExternal
 */
EventAllOf.prototype['relatesToExternal'] = undefined;

/**
 * The unit of measure is used to determine the type of the source value. It is used to normalize points values for currency based calculations by normalizing the source value.
 * @member {String} unitOfMeasure
 */
EventAllOf.prototype['unitOfMeasure'] = undefined;






export default EventAllOf;

