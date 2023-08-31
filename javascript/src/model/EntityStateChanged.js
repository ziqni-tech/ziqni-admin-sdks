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
 * The EntityStateChanged model module.
 * @module model/EntityStateChanged
 * @version 0.0.26
 */
class EntityStateChanged {
    /**
     * Constructs a new <code>EntityStateChanged</code>.
     * 
     * @alias module:model/EntityStateChanged
     */
    constructor() { 
        
        EntityStateChanged.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntityStateChanged</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityStateChanged} obj Optional instance to populate.
     * @return {module:model/EntityStateChanged} The populated <code>EntityStateChanged</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntityStateChanged();

            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
            }
            if (data.hasOwnProperty('changedAt')) {
                obj['changedAt'] = ApiClient.convertToType(data['changedAt'], 'Date');
            }
            if (data.hasOwnProperty('changedBy')) {
                obj['changedBy'] = ApiClient.convertToType(data['changedBy'], 'String');
            }
            if (data.hasOwnProperty('typeOffChange')) {
                obj['typeOffChange'] = ApiClient.convertToType(data['typeOffChange'], 'Number');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('sequenceNumber')) {
                obj['sequenceNumber'] = ApiClient.convertToType(data['sequenceNumber'], 'Number');
            }
            if (data.hasOwnProperty('entityRefId')) {
                obj['entityRefId'] = ApiClient.convertToType(data['entityRefId'], 'String');
            }
            if (data.hasOwnProperty('entityParentId')) {
                obj['entityParentId'] = ApiClient.convertToType(data['entityParentId'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('previousState')) {
                obj['previousState'] = ApiClient.convertToType(data['previousState'], 'Number');
            }
            if (data.hasOwnProperty('currentState')) {
                obj['currentState'] = ApiClient.convertToType(data['currentState'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} entityId
 */
EntityStateChanged.prototype['entityId'] = undefined;

/**
 * 
 * @member {String} entityType
 */
EntityStateChanged.prototype['entityType'] = undefined;

/**
 * 
 * @member {Date} changedAt
 */
EntityStateChanged.prototype['changedAt'] = undefined;

/**
 * 
 * @member {String} changedBy
 */
EntityStateChanged.prototype['changedBy'] = undefined;

/**
 * 
 * @member {Number} typeOffChange
 */
EntityStateChanged.prototype['typeOffChange'] = undefined;

/**
 * 
 * @member {String} displayName
 */
EntityStateChanged.prototype['displayName'] = undefined;

/**
 * 
 * @member {String} accountId
 */
EntityStateChanged.prototype['accountId'] = undefined;

/**
 * 
 * @member {Number} sequenceNumber
 */
EntityStateChanged.prototype['sequenceNumber'] = undefined;

/**
 * 
 * @member {String} entityRefId
 */
EntityStateChanged.prototype['entityRefId'] = undefined;

/**
 * 
 * @member {String} entityParentId
 */
EntityStateChanged.prototype['entityParentId'] = undefined;

/**
 * @member {Object} metadata
 */
EntityStateChanged.prototype['metadata'] = undefined;

/**
 * 
 * @member {Number} previousState
 */
EntityStateChanged.prototype['previousState'] = undefined;

/**
 * 
 * @member {Number} currentState
 */
EntityStateChanged.prototype['currentState'] = undefined;






export default EntityStateChanged;

