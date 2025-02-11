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

/**
 * The CreateWalletRequestAllOf model module.
 * @module model/CreateWalletRequestAllOf
 * @version 0.0.26
 */
class CreateWalletRequestAllOf {
    /**
     * Constructs a new <code>CreateWalletRequestAllOf</code>.
     * @alias module:model/CreateWalletRequestAllOf
     */
    constructor() { 
        
        CreateWalletRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateWalletRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWalletRequestAllOf} obj Optional instance to populate.
     * @return {module:model/CreateWalletRequestAllOf} The populated <code>CreateWalletRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateWalletRequestAllOf();

            if (data.hasOwnProperty('walletTypeId')) {
                obj['walletTypeId'] = ApiClient.convertToType(data['walletTypeId'], 'String');
            }
            if (data.hasOwnProperty('memberId')) {
                obj['memberId'] = ApiClient.convertToType(data['memberId'], 'String');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * wallet type id
 * @member {String} walletTypeId
 */
CreateWalletRequestAllOf.prototype['walletTypeId'] = undefined;

/**
 * member id
 * @member {String} memberId
 */
CreateWalletRequestAllOf.prototype['memberId'] = undefined;

/**
 * Numerical value of the balance that will be added to the wallet
 * @member {Number} balance
 */
CreateWalletRequestAllOf.prototype['balance'] = undefined;






export default CreateWalletRequestAllOf;

