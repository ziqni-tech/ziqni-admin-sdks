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
import AppliesTo from './AppliesTo';
import FieldType from './FieldType';

/**
 * The CustomFieldAllOf model module.
 * @module model/CustomFieldAllOf
 * @version 0.0.26
 */
class CustomFieldAllOf {
    /**
     * Constructs a new <code>CustomFieldAllOf</code>.
     * @alias module:model/CustomFieldAllOf
     * @param name {String} The name of a Custom field
     * @param key {String} The key of a Custom field
     * @param fieldType {module:model/FieldType} 
     * @param appliesTo {module:model/AppliesTo} 
     */
    constructor(name, key, fieldType, appliesTo) { 
        
        CustomFieldAllOf.initialize(this, name, key, fieldType, appliesTo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, key, fieldType, appliesTo) { 
        obj['name'] = name;
        obj['key'] = key;
        obj['fieldType'] = fieldType;
        obj['appliesTo'] = appliesTo;
    }

    /**
     * Constructs a <code>CustomFieldAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldAllOf} obj Optional instance to populate.
     * @return {module:model/CustomFieldAllOf} The populated <code>CustomFieldAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('fieldType')) {
                obj['fieldType'] = FieldType.constructFromObject(data['fieldType']);
            }
            if (data.hasOwnProperty('appliesTo')) {
                obj['appliesTo'] = AppliesTo.constructFromObject(data['appliesTo']);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The name of a Custom field
 * @member {String} name
 */
CustomFieldAllOf.prototype['name'] = undefined;

/**
 * The key of a Custom field
 * @member {String} key
 */
CustomFieldAllOf.prototype['key'] = undefined;

/**
 * The description of a Custom field
 * @member {String} description
 */
CustomFieldAllOf.prototype['description'] = undefined;

/**
 * @member {module:model/FieldType} fieldType
 */
CustomFieldAllOf.prototype['fieldType'] = undefined;

/**
 * @member {module:model/AppliesTo} appliesTo
 */
CustomFieldAllOf.prototype['appliesTo'] = undefined;

/**
 * For example \"required\" to indicate the field is required.
 * @member {Array.<String>} constraints
 */
CustomFieldAllOf.prototype['constraints'] = undefined;






export default CustomFieldAllOf;

