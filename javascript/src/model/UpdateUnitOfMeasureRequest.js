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
import UnitOfMeasureType from './UnitOfMeasureType';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';
import UpdateUnitOfMeasureRequestAllOf from './UpdateUnitOfMeasureRequestAllOf';

/**
 * The UpdateUnitOfMeasureRequest model module.
 * @module model/UpdateUnitOfMeasureRequest
 * @version 0.0.26
 */
class UpdateUnitOfMeasureRequest {
    /**
     * Constructs a new <code>UpdateUnitOfMeasureRequest</code>.
     * @alias module:model/UpdateUnitOfMeasureRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateUnitOfMeasureRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateUnitOfMeasureRequestAllOf.initialize(this);
        UpdateUnitOfMeasureRequest.initialize(this, id);
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
     * Constructs a <code>UpdateUnitOfMeasureRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateUnitOfMeasureRequest} obj Optional instance to populate.
     * @return {module:model/UpdateUnitOfMeasureRequest} The populated <code>UpdateUnitOfMeasureRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateUnitOfMeasureRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateOptParamModels.constructFromObject(data, obj);
            UpdateUnitOfMeasureRequestAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('subUnit')) {
                obj['subUnit'] = ApiClient.convertToType(data['subUnit'], 'String');
            }
            if (data.hasOwnProperty('subUnitSymbol')) {
                obj['subUnitSymbol'] = ApiClient.convertToType(data['subUnitSymbol'], 'String');
            }
            if (data.hasOwnProperty('subUnitConversion')) {
                obj['subUnitConversion'] = ApiClient.convertToType(data['subUnitConversion'], 'Number');
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
 * A unique system generated identifier
 * @member {String} id
 */
UpdateUnitOfMeasureRequest.prototype['id'] = undefined;

/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateUnitOfMeasureRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateUnitOfMeasureRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
UpdateUnitOfMeasureRequest.prototype['metadata'] = undefined;

/**
 * The name of a unit of measure
 * @member {String} name
 */
UpdateUnitOfMeasureRequest.prototype['name'] = undefined;

/**
 * The description of a unit of measure
 * @member {String} description
 */
UpdateUnitOfMeasureRequest.prototype['description'] = undefined;

/**
 * An alphabetical or numerical code to identify a unit of measure
 * @member {String} isoCode
 */
UpdateUnitOfMeasureRequest.prototype['isoCode'] = undefined;

/**
 * The symbol of a unit of measure
 * @member {String} symbol
 */
UpdateUnitOfMeasureRequest.prototype['symbol'] = undefined;

/**
 * The subunit of a unit of measure
 * @member {String} subUnit
 */
UpdateUnitOfMeasureRequest.prototype['subUnit'] = undefined;

/**
 * The sub unit symbol of a unit of measure
 * @member {String} subUnitSymbol
 */
UpdateUnitOfMeasureRequest.prototype['subUnitSymbol'] = undefined;

/**
 * The sub unit conversion of a unit of measure
 * @member {Number} subUnitConversion
 */
UpdateUnitOfMeasureRequest.prototype['subUnitConversion'] = undefined;

/**
 * Is used to multiply the value from the standardised one that is being used
 * @member {Number} multiplier
 */
UpdateUnitOfMeasureRequest.prototype['multiplier'] = undefined;

/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
UpdateUnitOfMeasureRequest.prototype['unitOfMeasureType'] = undefined;


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
// Implement UpdateUnitOfMeasureRequestAllOf interface:
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
 * The subunit of a unit of measure
 * @member {String} subUnit
 */
UpdateUnitOfMeasureRequestAllOf.prototype['subUnit'] = undefined;
/**
 * The sub unit symbol of a unit of measure
 * @member {String} subUnitSymbol
 */
UpdateUnitOfMeasureRequestAllOf.prototype['subUnitSymbol'] = undefined;
/**
 * The sub unit conversion of a unit of measure
 * @member {Number} subUnitConversion
 */
UpdateUnitOfMeasureRequestAllOf.prototype['subUnitConversion'] = undefined;
/**
 * Is used to multiply the value from the standardised one that is being used
 * @member {Number} multiplier
 */
UpdateUnitOfMeasureRequestAllOf.prototype['multiplier'] = undefined;
/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
UpdateUnitOfMeasureRequestAllOf.prototype['unitOfMeasureType'] = undefined;




export default UpdateUnitOfMeasureRequest;

