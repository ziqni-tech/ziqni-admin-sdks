/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.5
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EntityChanged model module.
 * @module model/EntityChanged
 * @version 0.0.26
 */
class EntityChanged {
    /**
     * Constructs a new <code>EntityChanged</code>.
     * 
     * @alias module:model/EntityChanged
     */
    constructor() { 
        
        EntityChanged.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntityChanged</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityChanged} obj Optional instance to populate.
     * @return {module:model/EntityChanged} The populated <code>EntityChanged</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntityChanged();

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
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} entityId
 */
EntityChanged.prototype['entityId'] = undefined;

/**
 * 
 * @member {String} entityType
 */
EntityChanged.prototype['entityType'] = undefined;

/**
 * 
 * @member {Date} changedAt
 */
EntityChanged.prototype['changedAt'] = undefined;

/**
 * 
 * @member {String} changedBy
 */
EntityChanged.prototype['changedBy'] = undefined;

/**
 * 
 * @member {Number} typeOffChange
 */
EntityChanged.prototype['typeOffChange'] = undefined;

/**
 * 
 * @member {String} displayName
 */
EntityChanged.prototype['displayName'] = undefined;

/**
 * 
 * @member {String} accountId
 */
EntityChanged.prototype['accountId'] = undefined;

/**
 * 
 * @member {Number} sequenceNumber
 */
EntityChanged.prototype['sequenceNumber'] = undefined;

/**
 * 
 * @member {String} entityRefId
 */
EntityChanged.prototype['entityRefId'] = undefined;

/**
 * 
 * @member {String} entityParentId
 */
EntityChanged.prototype['entityParentId'] = undefined;

/**
 * @member {Object.<String, Object>} metadata
 */
EntityChanged.prototype['metadata'] = undefined;






export default EntityChanged;

