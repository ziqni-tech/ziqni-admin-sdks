/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateActionTypeRequestAllOf model module.
 * @module model/CreateActionTypeRequestAllOf
 * @version 0.0.26
 */
class CreateActionTypeRequestAllOf {
    /**
     * Constructs a new <code>CreateActionTypeRequestAllOf</code>.
     * @alias module:model/CreateActionTypeRequestAllOf
     * @param name {String} The name of the Action Helper
     * @param key {String} A unique key that represents an action helper
     * @param unitOfMeasure {String} The unit of measure id
     */
    constructor(name, key, unitOfMeasure) { 
        
        CreateActionTypeRequestAllOf.initialize(this, name, key, unitOfMeasure);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, key, unitOfMeasure) { 
        obj['name'] = name;
        obj['key'] = key;
        obj['unitOfMeasure'] = unitOfMeasure;
    }

    /**
     * Constructs a <code>CreateActionTypeRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateActionTypeRequestAllOf} obj Optional instance to populate.
     * @return {module:model/CreateActionTypeRequestAllOf} The populated <code>CreateActionTypeRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateActionTypeRequestAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
            if (data.hasOwnProperty('unitOfMeasure')) {
                obj['unitOfMeasure'] = ApiClient.convertToType(data['unitOfMeasure'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the Action Helper
 * @member {String} name
 */
CreateActionTypeRequestAllOf.prototype['name'] = undefined;

/**
 * A unique key that represents an action helper
 * @member {String} key
 */
CreateActionTypeRequestAllOf.prototype['key'] = undefined;

/**
 * The description of the rule action helper for your reference
 * @member {String} description
 */
CreateActionTypeRequestAllOf.prototype['description'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
CreateActionTypeRequestAllOf.prototype['addConstraints'] = undefined;

/**
 * The unit of measure id
 * @member {String} unitOfMeasure
 */
CreateActionTypeRequestAllOf.prototype['unitOfMeasure'] = undefined;






export default CreateActionTypeRequestAllOf;

