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
 * The UpdateWalletRequestAllOf model module.
 * @module model/UpdateWalletRequestAllOf
 * @version 0.0.26
 */
class UpdateWalletRequestAllOf {
    /**
     * Constructs a new <code>UpdateWalletRequestAllOf</code>.
     * @alias module:model/UpdateWalletRequestAllOf
     */
    constructor() { 
        
        UpdateWalletRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateWalletRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateWalletRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateWalletRequestAllOf} The populated <code>UpdateWalletRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateWalletRequestAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
 * The unique identifier
 * @member {String} id
 */
UpdateWalletRequestAllOf.prototype['id'] = undefined;

/**
 * wallet type id
 * @member {String} walletTypeId
 */
UpdateWalletRequestAllOf.prototype['walletTypeId'] = undefined;

/**
 * Member id
 * @member {String} memberId
 */
UpdateWalletRequestAllOf.prototype['memberId'] = undefined;






export default UpdateWalletRequestAllOf;

