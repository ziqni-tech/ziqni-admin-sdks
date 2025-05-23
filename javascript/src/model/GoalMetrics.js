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
 * The GoalMetrics model module.
 * @module model/GoalMetrics
 * @version 0.0.26
 */
class GoalMetrics {
    /**
     * Constructs a new <code>GoalMetrics</code>.
     * @alias module:model/GoalMetrics
     * @param accountId {String} The account identifier
     */
    constructor(accountId) { 
        
        GoalMetrics.initialize(this, accountId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountId) { 
        obj['accountId'] = accountId;
    }

    /**
     * Constructs a <code>GoalMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GoalMetrics} obj Optional instance to populate.
     * @return {module:model/GoalMetrics} The populated <code>GoalMetrics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoalMetrics();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('memberId')) {
                obj['memberId'] = ApiClient.convertToType(data['memberId'], 'String');
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('percentageComplete')) {
                obj['percentageComplete'] = ApiClient.convertToType(data['percentageComplete'], 'Number');
            }
            if (data.hasOwnProperty('mostSignificantScores')) {
                obj['mostSignificantScores'] = ApiClient.convertToType(data['mostSignificantScores'], ['Number']);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('updateCount')) {
                obj['updateCount'] = ApiClient.convertToType(data['updateCount'], 'Number');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
            }
            if (data.hasOwnProperty('markerTimeStamp')) {
                obj['markerTimeStamp'] = ApiClient.convertToType(data['markerTimeStamp'], 'Number');
            }
            if (data.hasOwnProperty('goalReached')) {
                obj['goalReached'] = ApiClient.convertToType(data['goalReached'], 'Boolean');
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('userDefinedValues')) {
                obj['userDefinedValues'] = ApiClient.convertToType(data['userDefinedValues'], {'String': 'Number'});
            }
        }
        return obj;
    }


}

/**
 * The account identifier
 * @member {String} accountId
 */
GoalMetrics.prototype['accountId'] = undefined;

/**
 * The member identifier
 * @member {String} memberId
 */
GoalMetrics.prototype['memberId'] = undefined;

/**
 * The entity identifier
 * @member {String} entityId
 */
GoalMetrics.prototype['entityId'] = undefined;

/**
 * The current value assigned to this goal
 * @member {Number} value
 */
GoalMetrics.prototype['value'] = undefined;

/**
 * What percentage of this goal has been completed
 * @member {Number} percentageComplete
 */
GoalMetrics.prototype['percentageComplete'] = undefined;

/**
 * The most significant scores
 * @member {Array.<Number>} mostSignificantScores
 */
GoalMetrics.prototype['mostSignificantScores'] = undefined;

/**
 * Internal timestamp associated with this goal
 * @member {Number} timestamp
 */
GoalMetrics.prototype['timestamp'] = undefined;

/**
 * A count of the total number of mutations this goal has undergone
 * @member {Number} updateCount
 */
GoalMetrics.prototype['updateCount'] = undefined;

/**
 * The type of entity
 * @member {String} entityType
 */
GoalMetrics.prototype['entityType'] = undefined;

/**
 * A point in time marker
 * @member {Number} markerTimeStamp
 */
GoalMetrics.prototype['markerTimeStamp'] = undefined;

/**
 * Has the minimum requirements been met
 * @member {Boolean} goalReached
 */
GoalMetrics.prototype['goalReached'] = undefined;

/**
 * The system status assigned to this goal
 * @member {Number} statusCode
 */
GoalMetrics.prototype['statusCode'] = undefined;

/**
 * The position of this record in a sorted index if relevant
 * @member {Number} position
 */
GoalMetrics.prototype['position'] = undefined;

/**
 * The user defined values for this goal
 * @member {Object.<String, Number>} userDefinedValues
 */
GoalMetrics.prototype['userDefinedValues'] = undefined;






export default GoalMetrics;

