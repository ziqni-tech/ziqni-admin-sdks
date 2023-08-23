/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.7
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomFieldEntry from './CustomFieldEntry';
import CustomFieldEntryNumberAllOf from './CustomFieldEntryNumberAllOf';

/**
 * The CustomFieldEntryNumber model module.
 * @module model/CustomFieldEntryNumber
 * @version 0.0.26
 */
class CustomFieldEntryNumber {
    /**
     * Constructs a new <code>CustomFieldEntryNumber</code>.
     * The base type for custom field entries
     * @alias module:model/CustomFieldEntryNumber
     * @implements module:model/CustomFieldEntryNumberAllOf
     * @implements module:model/CustomFieldEntry
     * @param fieldType {String} The data type stored in this generic object ( string, number, string[], number[])
     */
    constructor(fieldType) { 
        CustomFieldEntryNumberAllOf.initialize(this, fieldType);CustomFieldEntry.initialize(this, fieldType);
        CustomFieldEntryNumber.initialize(this, fieldType);
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
     * Constructs a <code>CustomFieldEntryNumber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldEntryNumber} obj Optional instance to populate.
     * @return {module:model/CustomFieldEntryNumber} The populated <code>CustomFieldEntryNumber</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldEntryNumber();
            CustomFieldEntryNumberAllOf.constructFromObject(data, obj);
            CustomFieldEntry.constructFromObject(data, obj);

            if (data.hasOwnProperty('fieldType')) {
                obj['fieldType'] = ApiClient.convertToType(data['fieldType'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The data type stored in this generic object ( string, number, string[], number[])
 * @member {String} fieldType
 */
CustomFieldEntryNumber.prototype['fieldType'] = undefined;

/**
 * 
 * @member {Number} value
 */
CustomFieldEntryNumber.prototype['value'] = undefined;


// Implement CustomFieldEntryNumberAllOf interface:
/**
 * The data type stored in this generic object ( string, number, string[], number[])
 * @member {String} fieldType
 */
CustomFieldEntryNumberAllOf.prototype['fieldType'] = undefined;
/**
 * 
 * @member {Number} value
 */
CustomFieldEntryNumberAllOf.prototype['value'] = undefined;
// Implement CustomFieldEntry interface:
/**
 * The data type stored in this generic object ( string, number, string[], number[])
 * @member {String} fieldType
 */
CustomFieldEntry.prototype['fieldType'] = undefined;




export default CustomFieldEntryNumber;

