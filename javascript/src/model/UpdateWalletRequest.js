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
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';
import UpdateWalletRequestAllOf from './UpdateWalletRequestAllOf';

/**
 * The UpdateWalletRequest model module.
 * @module model/UpdateWalletRequest
 * @version 0.0.26
 */
class UpdateWalletRequest {
    /**
     * Constructs a new <code>UpdateWalletRequest</code>.
     * @alias module:model/UpdateWalletRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateWalletRequestAllOf
     * @param id {String} The unique tenant identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateWalletRequestAllOf.initialize(this);
        UpdateWalletRequest.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>UpdateWalletRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateWalletRequest} obj Optional instance to populate.
     * @return {module:model/UpdateWalletRequest} The populated <code>UpdateWalletRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateWalletRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateOptParamModels.constructFromObject(data, obj);
            UpdateWalletRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('walletTypeId')) {
                obj['walletTypeId'] = ApiClient.convertToType(data['walletTypeId'], 'String');
            }
            if (data.hasOwnProperty('memberId')) {
                obj['memberId'] = ApiClient.convertToType(data['memberId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The unique tenant identifier
 * @member {String} id
 */
UpdateWalletRequest.prototype['id'] = undefined;

/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateWalletRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateWalletRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
UpdateWalletRequest.prototype['metadata'] = undefined;

/**
 * balance
 * @member {Number} balance
 */
UpdateWalletRequest.prototype['balance'] = undefined;

/**
 * wallet type id
 * @member {String} walletTypeId
 */
UpdateWalletRequest.prototype['walletTypeId'] = undefined;

/**
 * player id
 * @member {String} memberId
 */
UpdateWalletRequest.prototype['memberId'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateOptParamModels interface:
/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
UpdateOptParamModels.prototype['metadata'] = undefined;
// Implement UpdateWalletRequestAllOf interface:
/**
 * The unique tenant identifier
 * @member {String} id
 */
UpdateWalletRequestAllOf.prototype['id'] = undefined;
/**
 * balance
 * @member {Number} balance
 */
UpdateWalletRequestAllOf.prototype['balance'] = undefined;
/**
 * wallet type id
 * @member {String} walletTypeId
 */
UpdateWalletRequestAllOf.prototype['walletTypeId'] = undefined;
/**
 * player id
 * @member {String} memberId
 */
UpdateWalletRequestAllOf.prototype['memberId'] = undefined;




export default UpdateWalletRequest;

