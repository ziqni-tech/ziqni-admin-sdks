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
import CustomFieldEntry from './CustomFieldEntry';
import CustomFieldEntryStringAllOf from './CustomFieldEntryStringAllOf';

/**
 * The CustomFieldEntryString model module.
 * @module model/CustomFieldEntryString
 * @version 0.0.26
 */
class CustomFieldEntryString {
    /**
     * Constructs a new <code>CustomFieldEntryString</code>.
     * The base type for custom field entries
     * @alias module:model/CustomFieldEntryString
     * @implements module:model/CustomFieldEntryStringAllOf
     * @implements module:model/CustomFieldEntry
     * @param fieldType {String} The data type stored in this generic object ( string, number, string[], number[])
     */
    constructor(fieldType) { 
        CustomFieldEntryStringAllOf.initialize(this, fieldType);CustomFieldEntry.initialize(this, fieldType);
        CustomFieldEntryString.initialize(this, fieldType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fieldType) { 
        obj['fieldType'] = fieldType;
    }

    /**
     * Constructs a <code>CustomFieldEntryString</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldEntryString} obj Optional instance to populate.
     * @return {module:model/CustomFieldEntryString} The populated <code>CustomFieldEntryString</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldEntryString();
            CustomFieldEntryStringAllOf.constructFromObject(data, obj);
            CustomFieldEntry.constructFromObject(data, obj);

            if (data.hasOwnProperty('fieldType')) {
                obj['fieldType'] = ApiClient.convertToType(data['fieldType'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The data type stored in this generic object ( string, number, string[], number[])
 * @member {String} fieldType
 */
CustomFieldEntryString.prototype['fieldType'] = undefined;

/**
 * 
 * @member {String} value
 */
CustomFieldEntryString.prototype['value'] = undefined;


// Implement CustomFieldEntryStringAllOf interface:
/**
 * The data type stored in this generic object ( string, number, string[], number[])
 * @member {String} fieldType
 */
CustomFieldEntryStringAllOf.prototype['fieldType'] = undefined;
/**
 * 
 * @member {String} value
 */
CustomFieldEntryStringAllOf.prototype['value'] = undefined;
// Implement CustomFieldEntry interface:
/**
 * The data type stored in this generic object ( string, number, string[], number[])
 * @member {String} fieldType
 */
CustomFieldEntry.prototype['fieldType'] = undefined;




export default CustomFieldEntryString;

