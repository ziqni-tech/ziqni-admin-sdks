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
import CustomFieldEntry from './CustomFieldEntry';
import CustomFieldEntryStringArrayAllOf from './CustomFieldEntryStringArrayAllOf';

/**
 * The CustomFieldEntryStringArray model module.
 * @module model/CustomFieldEntryStringArray
 * @version 0.0.26
 */
class CustomFieldEntryStringArray {
    /**
     * Constructs a new <code>CustomFieldEntryStringArray</code>.
     * The base type for custom field entries
     * @alias module:model/CustomFieldEntryStringArray
     * @implements module:model/CustomFieldEntryStringArrayAllOf
     * @implements module:model/CustomFieldEntry
     * @param fieldType {String} The data type stored in this generic object ( string, number, string[], number[])
     */
    constructor(fieldType) { 
        CustomFieldEntryStringArrayAllOf.initialize(this, fieldType);CustomFieldEntry.initialize(this, fieldType);
        CustomFieldEntryStringArray.initialize(this, fieldType);
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
     * Constructs a <code>CustomFieldEntryStringArray</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldEntryStringArray} obj Optional instance to populate.
     * @return {module:model/CustomFieldEntryStringArray} The populated <code>CustomFieldEntryStringArray</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldEntryStringArray();
            CustomFieldEntryStringArrayAllOf.constructFromObject(data, obj);
            CustomFieldEntry.constructFromObject(data, obj);

            if (data.hasOwnProperty('fieldType')) {
                obj['fieldType'] = ApiClient.convertToType(data['fieldType'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The data type stored in this generic object ( string, number, string[], number[])
 * @member {String} fieldType
 */
CustomFieldEntryStringArray.prototype['fieldType'] = undefined;

/**
 * 
 * @member {Array.<String>} value
 */
CustomFieldEntryStringArray.prototype['value'] = undefined;


// Implement CustomFieldEntryStringArrayAllOf interface:
/**
 * The data type stored in this generic object ( string, number, string[], number[])
 * @member {String} fieldType
 */
CustomFieldEntryStringArrayAllOf.prototype['fieldType'] = undefined;
/**
 * 
 * @member {Array.<String>} value
 */
CustomFieldEntryStringArrayAllOf.prototype['value'] = undefined;
// Implement CustomFieldEntry interface:
/**
 * The data type stored in this generic object ( string, number, string[], number[])
 * @member {String} fieldType
 */
CustomFieldEntry.prototype['fieldType'] = undefined;




export default CustomFieldEntryStringArray;

