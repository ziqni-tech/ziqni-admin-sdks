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
 * The UpdateWalletTypeRequestAllOf model module.
 * @module model/UpdateWalletTypeRequestAllOf
 * @version 0.0.26
 */
class UpdateWalletTypeRequestAllOf {
    /**
     * Constructs a new <code>UpdateWalletTypeRequestAllOf</code>.
     * @alias module:model/UpdateWalletTypeRequestAllOf
     */
    constructor() { 
        
        UpdateWalletTypeRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateWalletTypeRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateWalletTypeRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateWalletTypeRequestAllOf} The populated <code>UpdateWalletTypeRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateWalletTypeRequestAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('currencySymbol')) {
                obj['currencySymbol'] = ApiClient.convertToType(data['currencySymbol'], 'String');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The unique tenant identifier
 * @member {String} id
 */
UpdateWalletTypeRequestAllOf.prototype['id'] = undefined;

/**
 * currency symbol example $
 * @member {String} currencySymbol
 */
UpdateWalletTypeRequestAllOf.prototype['currencySymbol'] = undefined;

/**
 * currency code example USD
 * @member {String} currencyCode
 */
UpdateWalletTypeRequestAllOf.prototype['currencyCode'] = undefined;






export default UpdateWalletTypeRequestAllOf;

