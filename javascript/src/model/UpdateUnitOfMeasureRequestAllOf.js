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
import UnitOfMeasureType from './UnitOfMeasureType';

/**
 * The UpdateUnitOfMeasureRequestAllOf model module.
 * @module model/UpdateUnitOfMeasureRequestAllOf
 * @version 0.0.26
 */
class UpdateUnitOfMeasureRequestAllOf {
    /**
     * Constructs a new <code>UpdateUnitOfMeasureRequestAllOf</code>.
     * @alias module:model/UpdateUnitOfMeasureRequestAllOf
     */
    constructor() { 
        
        UpdateUnitOfMeasureRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateUnitOfMeasureRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateUnitOfMeasureRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateUnitOfMeasureRequestAllOf} The populated <code>UpdateUnitOfMeasureRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateUnitOfMeasureRequestAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('isoCode')) {
                obj['isoCode'] = ApiClient.convertToType(data['isoCode'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('multiplier')) {
                obj['multiplier'] = ApiClient.convertToType(data['multiplier'], 'Number');
            }
            if (data.hasOwnProperty('unitOfMeasureType')) {
                obj['unitOfMeasureType'] = UnitOfMeasureType.constructFromObject(data['unitOfMeasureType']);
            }
        }
        return obj;
    }


}

/**
 * The name of a unit of measure
 * @member {String} name
 */
UpdateUnitOfMeasureRequestAllOf.prototype['name'] = undefined;

/**
 * The description of a unit of measure
 * @member {String} description
 */
UpdateUnitOfMeasureRequestAllOf.prototype['description'] = undefined;

/**
 * An alphabetical or numerical code to identify a unit of measure
 * @member {String} isoCode
 */
UpdateUnitOfMeasureRequestAllOf.prototype['isoCode'] = undefined;

/**
 * The symbol of a unit of measure
 * @member {String} symbol
 */
UpdateUnitOfMeasureRequestAllOf.prototype['symbol'] = undefined;

/**
 * Is used to multiply the value from the standardised one that is being used
 * @member {Number} multiplier
 */
UpdateUnitOfMeasureRequestAllOf.prototype['multiplier'] = undefined;

/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
UpdateUnitOfMeasureRequestAllOf.prototype['unitOfMeasureType'] = undefined;






export default UpdateUnitOfMeasureRequestAllOf;

