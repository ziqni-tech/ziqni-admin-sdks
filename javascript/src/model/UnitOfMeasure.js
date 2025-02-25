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
import ModelDefault from './ModelDefault';
import OptParamModels from './OptParamModels';
import UnitOfMeasureAllOf from './UnitOfMeasureAllOf';
import UnitOfMeasureType from './UnitOfMeasureType';

/**
 * The UnitOfMeasure model module.
 * @module model/UnitOfMeasure
 * @version 0.0.26
 */
class UnitOfMeasure {
    /**
     * Constructs a new <code>UnitOfMeasure</code>.
     * @alias module:model/UnitOfMeasure
     * @implements module:model/ModelDefault
     * @implements module:model/OptParamModels
     * @implements module:model/UnitOfMeasureAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} The name of a unit of measure
     * @param key {String} The reference to the unit of measure in your system
     * @param multiplier {Number} Is used to multiply the value from the standardised one that is being used
     * @param unitOfMeasureType {module:model/UnitOfMeasureType} 
     */
    constructor(id, spaceName, created, name, key, multiplier, unitOfMeasureType) { 
        ModelDefault.initialize(this, id, spaceName, created);OptParamModels.initialize(this);UnitOfMeasureAllOf.initialize(this, name, key, multiplier, unitOfMeasureType);
        UnitOfMeasure.initialize(this, id, spaceName, created, name, key, multiplier, unitOfMeasureType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, name, key, multiplier, unitOfMeasureType) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['name'] = name;
        obj['key'] = key;
        obj['multiplier'] = multiplier;
        obj['unitOfMeasureType'] = unitOfMeasureType;
    }

    /**
     * Constructs a <code>UnitOfMeasure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnitOfMeasure} obj Optional instance to populate.
     * @return {module:model/UnitOfMeasure} The populated <code>UnitOfMeasure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnitOfMeasure();
            ModelDefault.constructFromObject(data, obj);
            OptParamModels.constructFromObject(data, obj);
            UnitOfMeasureAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
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
 * A unique system generated identifier
 * @member {String} id
 */
UnitOfMeasure.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
UnitOfMeasure.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
UnitOfMeasure.prototype['created'] = undefined;

/**
 * @member {Object.<String, Object>} customFields
 */
UnitOfMeasure.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UnitOfMeasure.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
UnitOfMeasure.prototype['metadata'] = undefined;

/**
 * The name of a unit of measure
 * @member {String} name
 */
UnitOfMeasure.prototype['name'] = undefined;

/**
 * The reference to the unit of measure in your system
 * @member {String} key
 */
UnitOfMeasure.prototype['key'] = undefined;

/**
 * The description of a unit of measure
 * @member {String} description
 */
UnitOfMeasure.prototype['description'] = undefined;

/**
 * An alphabetical or numerical code to identify a unit of measure
 * @member {String} isoCode
 */
UnitOfMeasure.prototype['isoCode'] = undefined;

/**
 * The symbol of a unit of measure
 * @member {String} symbol
 */
UnitOfMeasure.prototype['symbol'] = undefined;

/**
 * Is used to multiply the value from the standardised one that is being used
 * @member {Number} multiplier
 */
UnitOfMeasure.prototype['multiplier'] = undefined;

/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
UnitOfMeasure.prototype['unitOfMeasureType'] = undefined;


// Implement ModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
ModelDefault.prototype['id'] = undefined;
/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ModelDefault.prototype['spaceName'] = undefined;
/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ModelDefault.prototype['created'] = undefined;
// Implement OptParamModels interface:
/**
 * @member {Object.<String, Object>} customFields
 */
OptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
OptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
OptParamModels.prototype['metadata'] = undefined;
// Implement UnitOfMeasureAllOf interface:
/**
 * The name of a unit of measure
 * @member {String} name
 */
UnitOfMeasureAllOf.prototype['name'] = undefined;
/**
 * The reference to the unit of measure in your system
 * @member {String} key
 */
UnitOfMeasureAllOf.prototype['key'] = undefined;
/**
 * The description of a unit of measure
 * @member {String} description
 */
UnitOfMeasureAllOf.prototype['description'] = undefined;
/**
 * An alphabetical or numerical code to identify a unit of measure
 * @member {String} isoCode
 */
UnitOfMeasureAllOf.prototype['isoCode'] = undefined;
/**
 * The symbol of a unit of measure
 * @member {String} symbol
 */
UnitOfMeasureAllOf.prototype['symbol'] = undefined;
/**
 * Is used to multiply the value from the standardised one that is being used
 * @member {Number} multiplier
 */
UnitOfMeasureAllOf.prototype['multiplier'] = undefined;
/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
UnitOfMeasureAllOf.prototype['unitOfMeasureType'] = undefined;




export default UnitOfMeasure;

