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
import EntrantAction from './EntrantAction';
import EntrantStatus from './EntrantStatus';

/**
 * The UpdateEntrantRequest model module.
 * @module model/UpdateEntrantRequest
 * @version 0.0.26
 */
class UpdateEntrantRequest {
    /**
     * Constructs a new <code>UpdateEntrantRequest</code>.
     * @alias module:model/UpdateEntrantRequest
     * @param entityId {String} Unique competition identifier
     * @param entrantStatus {module:model/EntrantStatus} 
     * @param entrantAction {module:model/EntrantAction} 
     */
    constructor(entityId, entrantStatus, entrantAction) { 
        
        UpdateEntrantRequest.initialize(this, entityId, entrantStatus, entrantAction);
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
     * Constructs a <code>UpdateEntrantRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateEntrantRequest} obj Optional instance to populate.
     * @return {module:model/UpdateEntrantRequest} The populated <code>UpdateEntrantRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateEntrantRequest();

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
UpdateEntrantRequest.prototype['memberId'] = undefined;

/**
 * Unique competition identifier
 * @member {String} entityId
 */
UpdateEntrantRequest.prototype['entityId'] = undefined;

/**
 * @member {module:model/EntrantStatus} entrantStatus
 */
UpdateEntrantRequest.prototype['entrantStatus'] = undefined;

/**
 * @member {module:model/EntrantAction} entrantAction
 */
UpdateEntrantRequest.prototype['entrantAction'] = undefined;






export default UpdateEntrantRequest;

