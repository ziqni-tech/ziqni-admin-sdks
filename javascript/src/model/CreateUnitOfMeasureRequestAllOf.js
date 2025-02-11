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
import UnitOfMeasureType from './UnitOfMeasureType';

/**
 * The CreateUnitOfMeasureRequestAllOf model module.
 * @module model/CreateUnitOfMeasureRequestAllOf
 * @version 0.0.26
 */
class CreateUnitOfMeasureRequestAllOf {
    /**
     * Constructs a new <code>CreateUnitOfMeasureRequestAllOf</code>.
     * @alias module:model/CreateUnitOfMeasureRequestAllOf
     * @param name {String} The name of a unit of measure
     * @param key {String} The reference to the unit of measure in your system
     * @param multiplier {Number} Is used to multiply the value from the standardised one that is being used
     * @param unitOfMeasureType {module:model/UnitOfMeasureType} 
     */
    constructor(name, key, multiplier, unitOfMeasureType) { 
        
        CreateUnitOfMeasureRequestAllOf.initialize(this, name, key, multiplier, unitOfMeasureType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, key, multiplier, unitOfMeasureType) { 
        obj['name'] = name;
        obj['key'] = key;
        obj['multiplier'] = multiplier;
        obj['unitOfMeasureType'] = unitOfMeasureType;
    }

    /**
     * Constructs a <code>CreateUnitOfMeasureRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUnitOfMeasureRequestAllOf} obj Optional instance to populate.
     * @return {module:model/CreateUnitOfMeasureRequestAllOf} The populated <code>CreateUnitOfMeasureRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateUnitOfMeasureRequestAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
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
CreateUnitOfMeasureRequestAllOf.prototype['name'] = undefined;

/**
 * The reference to the unit of measure in your system
 * @member {String} key
 */
CreateUnitOfMeasureRequestAllOf.prototype['key'] = undefined;

/**
 * The description of a unit of measure
 * @member {String} description
 */
CreateUnitOfMeasureRequestAllOf.prototype['description'] = undefined;

/**
 * An alphabetical or numerical code to identify a unit of measure
 * @member {String} isoCode
 */
CreateUnitOfMeasureRequestAllOf.prototype['isoCode'] = undefined;

/**
 * The symbol of a unit of measure
 * @member {String} symbol
 */
CreateUnitOfMeasureRequestAllOf.prototype['symbol'] = undefined;

/**
 * Is used to multiply the value from the standardised one that is being used
 * @member {Number} multiplier
 */
CreateUnitOfMeasureRequestAllOf.prototype['multiplier'] = undefined;

/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
CreateUnitOfMeasureRequestAllOf.prototype['unitOfMeasureType'] = undefined;






export default CreateUnitOfMeasureRequestAllOf;

