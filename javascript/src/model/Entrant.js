/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.2
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EntityType from './EntityType';
import EntrantAction from './EntrantAction';
import EntrantStatus from './EntrantStatus';

/**
 * The Entrant model module.
 * @module model/Entrant
 * @version 0.0.26
 */
class Entrant {
    /**
     * Constructs a new <code>Entrant</code>.
     * @alias module:model/Entrant
     * @param memberId {String} Unique member identifier. A member has to exist in the Ziqni database
     * @param entrantStatus {module:model/EntrantStatus} 
     */
    constructor(memberId, entrantStatus) { 
        
        Entrant.initialize(this, memberId, entrantStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, memberId, entrantStatus) { 
        obj['memberId'] = memberId;
        obj['entrantStatus'] = entrantStatus;
    }

    /**
     * Constructs a <code>Entrant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Entrant} obj Optional instance to populate.
     * @return {module:model/Entrant} The populated <code>Entrant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Entrant();

            if (data.hasOwnProperty('entrantAction')) {
                obj['entrantAction'] = EntrantAction.constructFromObject(data['entrantAction']);
            }
            if (data.hasOwnProperty('memberId')) {
                obj['memberId'] = ApiClient.convertToType(data['memberId'], 'String');
            }
            if (data.hasOwnProperty('entrantStatus')) {
                obj['entrantStatus'] = EntrantStatus.constructFromObject(data['entrantStatus']);
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = EntityType.constructFromObject(data['entityType']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EntrantAction} entrantAction
 */
Entrant.prototype['entrantAction'] = undefined;

/**
 * Unique member identifier. A member has to exist in the Ziqni database
 * @member {String} memberId
 */
Entrant.prototype['memberId'] = undefined;

/**
 * @member {module:model/EntrantStatus} entrantStatus
 */
Entrant.prototype['entrantStatus'] = undefined;

/**
 * Unique identifier of the entity
 * @member {String} entityId
 */
Entrant.prototype['entityId'] = undefined;

/**
 * @member {module:model/EntityType} entityType
 */
Entrant.prototype['entityType'] = undefined;






export default Entrant;

