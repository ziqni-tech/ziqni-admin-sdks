/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.17
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CustomFieldEntryNumberArrayAllOf model module.
 * @module model/CustomFieldEntryNumberArrayAllOf
 * @version 0.0.26
 */
class CustomFieldEntryNumberArrayAllOf {
    /**
     * Constructs a new <code>CustomFieldEntryNumberArrayAllOf</code>.
     * @alias module:model/CustomFieldEntryNumberArrayAllOf
     * @param fieldType {String} The data type stored in this generic object ( string, number, string[], number[])
     */
    constructor(fieldType) { 
        
        CustomFieldEntryNumberArrayAllOf.initialize(this, fieldType);
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
     * Constructs a <code>CustomFieldEntryNumberArrayAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldEntryNumberArrayAllOf} obj Optional instance to populate.
     * @return {module:model/CustomFieldEntryNumberArrayAllOf} The populated <code>CustomFieldEntryNumberArrayAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldEntryNumberArrayAllOf();

            if (data.hasOwnProperty('fieldType')) {
                obj['fieldType'] = ApiClient.convertToType(data['fieldType'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * The data type stored in this generic object ( string, number, string[], number[])
 * @member {String} fieldType
 */
CustomFieldEntryNumberArrayAllOf.prototype['fieldType'] = undefined;

/**
 * 
 * @member {Array.<Number>} value
 */
CustomFieldEntryNumberArrayAllOf.prototype['value'] = undefined;






export default CustomFieldEntryNumberArrayAllOf;

