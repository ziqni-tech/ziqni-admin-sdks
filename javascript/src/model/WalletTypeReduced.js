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
import UnitOfMeasureReduced from './UnitOfMeasureReduced';

/**
 * The WalletTypeReduced model module.
 * @module model/WalletTypeReduced
 * @version 0.0.26
 */
class WalletTypeReduced {
    /**
     * Constructs a new <code>WalletTypeReduced</code>.
     * @alias module:model/WalletTypeReduced
     * @param unitOfMeasure {module:model/UnitOfMeasureReduced} 
     * @param id {String} 
     */
    constructor(unitOfMeasure, id) { 
        
        WalletTypeReduced.initialize(this, unitOfMeasure, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, unitOfMeasure, id) { 
        obj['unitOfMeasure'] = unitOfMeasure;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>WalletTypeReduced</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WalletTypeReduced} obj Optional instance to populate.
     * @return {module:model/WalletTypeReduced} The populated <code>WalletTypeReduced</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletTypeReduced();

            if (data.hasOwnProperty('unitOfMeasure')) {
                obj['unitOfMeasure'] = UnitOfMeasureReduced.constructFromObject(data['unitOfMeasure']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UnitOfMeasureReduced} unitOfMeasure
 */
WalletTypeReduced.prototype['unitOfMeasure'] = undefined;

/**
 * 
 * @member {String} id
 */
WalletTypeReduced.prototype['id'] = undefined;






export default WalletTypeReduced;

