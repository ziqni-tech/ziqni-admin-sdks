/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.18
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AwardStateActions from './AwardStateActions';
import UpdateAwardStateRequestAllOf from './UpdateAwardStateRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';

/**
 * The UpdateAwardStateRequest model module.
 * @module model/UpdateAwardStateRequest
 * @version 0.0.26
 */
class UpdateAwardStateRequest {
    /**
     * Constructs a new <code>UpdateAwardStateRequest</code>.
     * 
     * @alias module:model/UpdateAwardStateRequest
     * @implements module:model/UpdateAwardStateRequestAllOf
     * @implements module:model/UpdateModelDefault
     * @param action {module:model/AwardStateActions} 
     * @param id {String} A unique system generated identifier
     */
    constructor(action, id) { 
        UpdateAwardStateRequestAllOf.initialize(this, action);UpdateModelDefault.initialize(this, id);
        UpdateAwardStateRequest.initialize(this, action, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, id) { 
        obj['action'] = action;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>UpdateAwardStateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAwardStateRequest} obj Optional instance to populate.
     * @return {module:model/UpdateAwardStateRequest} The populated <code>UpdateAwardStateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAwardStateRequest();
            UpdateAwardStateRequestAllOf.constructFromObject(data, obj);
            UpdateModelDefault.constructFromObject(data, obj);

            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = AwardStateActions.constructFromObject(data['action']);
            }
            if (data.hasOwnProperty('transactionReferenceId')) {
                obj['transactionReferenceId'] = ApiClient.convertToType(data['transactionReferenceId'], 'String');
            }
            if (data.hasOwnProperty('reasonForChange')) {
                obj['reasonForChange'] = ApiClient.convertToType(data['reasonForChange'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Additional system contraints if any
 * @member {Array.<String>} constraints
 */
UpdateAwardStateRequest.prototype['constraints'] = undefined;

/**
 * @member {module:model/AwardStateActions} action
 */
UpdateAwardStateRequest.prototype['action'] = undefined;

/**
 * The transaction ID to correlate with this request, max 128 characters
 * @member {String} transactionReferenceId
 */
UpdateAwardStateRequest.prototype['transactionReferenceId'] = undefined;

/**
 * Up to 300 character reason why this change was made [optional]
 * @member {String} reasonForChange
 */
UpdateAwardStateRequest.prototype['reasonForChange'] = undefined;

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateAwardStateRequest.prototype['id'] = undefined;


// Implement UpdateAwardStateRequestAllOf interface:
/**
 * Additional system contraints if any
 * @member {Array.<String>} constraints
 */
UpdateAwardStateRequestAllOf.prototype['constraints'] = undefined;
/**
 * @member {module:model/AwardStateActions} action
 */
UpdateAwardStateRequestAllOf.prototype['action'] = undefined;
/**
 * The transaction ID to correlate with this request, max 128 characters
 * @member {String} transactionReferenceId
 */
UpdateAwardStateRequestAllOf.prototype['transactionReferenceId'] = undefined;
/**
 * Up to 300 character reason why this change was made [optional]
 * @member {String} reasonForChange
 */
UpdateAwardStateRequestAllOf.prototype['reasonForChange'] = undefined;
// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;




export default UpdateAwardStateRequest;

