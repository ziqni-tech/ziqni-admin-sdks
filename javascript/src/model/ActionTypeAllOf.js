/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.6
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ActionTypeAllOf model module.
 * @module model/ActionTypeAllOf
 * @version 0.0.26
 */
class ActionTypeAllOf {
    /**
     * Constructs a new <code>ActionTypeAllOf</code>.
     * @alias module:model/ActionTypeAllOf
     * @param name {String} The name of the Action Helper
     * @param key {String} A unique key that represents an action helper
     * @param constraints {Array.<String>} Additional constraints
     * @param unitOfMeasure {String} unit of measure id
     */
    constructor(name, key, constraints, unitOfMeasure) { 
        
        ActionTypeAllOf.initialize(this, name, key, constraints, unitOfMeasure);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, key, constraints, unitOfMeasure) { 
        obj['name'] = name;
        obj['key'] = key;
        obj['constraints'] = constraints;
        obj['unitOfMeasure'] = unitOfMeasure;
    }

    /**
     * Constructs a <code>ActionTypeAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionTypeAllOf} obj Optional instance to populate.
     * @return {module:model/ActionTypeAllOf} The populated <code>ActionTypeAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionTypeAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
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
ActionTypeAllOf.prototype['name'] = undefined;

/**
 * A unique key that represents an action helper
 * @member {String} key
 */
ActionTypeAllOf.prototype['key'] = undefined;

/**
 * The description of the rule action helper for your reference
 * @member {String} description
 */
ActionTypeAllOf.prototype['description'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
ActionTypeAllOf.prototype['constraints'] = undefined;

/**
 * unit of measure id
 * @member {String} unitOfMeasure
 */
ActionTypeAllOf.prototype['unitOfMeasure'] = undefined;






export default ActionTypeAllOf;

