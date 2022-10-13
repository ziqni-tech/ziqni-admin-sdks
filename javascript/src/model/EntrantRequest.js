/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EntrantAction from './EntrantAction';
import EntrantStatus from './EntrantStatus';

/**
 * The EntrantRequest model module.
 * @module model/EntrantRequest
 * @version 0.0.26
 */
class EntrantRequest {
    /**
     * Constructs a new <code>EntrantRequest</code>.
     * @alias module:model/EntrantRequest
     * @param entityId {String} Unique competition identifier
     * @param entrantStatus {module:model/EntrantStatus} 
     * @param entrantAction {module:model/EntrantAction} 
     */
    constructor(entityId, entrantStatus, entrantAction) { 
        
        EntrantRequest.initialize(this, entityId, entrantStatus, entrantAction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entityId, entrantStatus, entrantAction) { 
        obj['entityId'] = entityId;
        obj['entrantStatus'] = entrantStatus;
        obj['entrantAction'] = entrantAction;
    }

    /**
     * Constructs a <code>EntrantRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrantRequest} obj Optional instance to populate.
     * @return {module:model/EntrantRequest} The populated <code>EntrantRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntrantRequest();

            if (data.hasOwnProperty('memberId')) {
                obj['memberId'] = ApiClient.convertToType(data['memberId'], 'String');
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('entrantStatus')) {
                obj['entrantStatus'] = EntrantStatus.constructFromObject(data['entrantStatus']);
            }
            if (data.hasOwnProperty('entrantAction')) {
                obj['entrantAction'] = EntrantAction.constructFromObject(data['entrantAction']);
            }
        }
        return obj;
    }


}

/**
 * Unique member identifier. A member has to exist in the Ziqni database
 * @member {String} memberId
 */
EntrantRequest.prototype['memberId'] = undefined;

/**
 * Unique competition identifier
 * @member {String} entityId
 */
EntrantRequest.prototype['entityId'] = undefined;

/**
 * @member {module:model/EntrantStatus} entrantStatus
 */
EntrantRequest.prototype['entrantStatus'] = undefined;

/**
 * @member {module:model/EntrantAction} entrantAction
 */
EntrantRequest.prototype['entrantAction'] = undefined;






export default EntrantRequest;

