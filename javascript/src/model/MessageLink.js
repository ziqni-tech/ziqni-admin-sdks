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
 * The MessageLink model module.
 * @module model/MessageLink
 * @version 0.0.26
 */
class MessageLink {
    /**
     * Constructs a new <code>MessageLink</code>.
     * 
     * @alias module:model/MessageLink
     * @param entityId {String} The identifier of the entity
     * @param entityType {String} The type of entity the link refers to like Award or Achievement, Contest, etc
     * @param linkType {String} The type of link, relatesTo, refersTo, describes
     */
    constructor(entityId, entityType, linkType) { 
        
        MessageLink.initialize(this, entityId, entityType, linkType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entityId, entityType, linkType) { 
        obj['entityId'] = entityId;
        obj['entityType'] = entityType;
        obj['linkType'] = linkType;
    }

    /**
     * Constructs a <code>MessageLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageLink} obj Optional instance to populate.
     * @return {module:model/MessageLink} The populated <code>MessageLink</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageLink();

            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
            }
            if (data.hasOwnProperty('linkType')) {
                obj['linkType'] = ApiClient.convertToType(data['linkType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The identifier of the entity
 * @member {String} entityId
 */
MessageLink.prototype['entityId'] = undefined;

/**
 * The type of entity the link refers to like Award or Achievement, Contest, etc
 * @member {String} entityType
 */
MessageLink.prototype['entityType'] = undefined;

/**
 * The type of link, relatesTo, refersTo, describes
 * @member {String} linkType
 */
MessageLink.prototype['linkType'] = undefined;






export default MessageLink;

