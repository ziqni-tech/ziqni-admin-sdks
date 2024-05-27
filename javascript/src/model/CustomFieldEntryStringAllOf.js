/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.14
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CustomFieldEntryStringAllOf model module.
 * @module model/CustomFieldEntryStringAllOf
 * @version 0.0.26
 */
class CustomFieldEntryStringAllOf {
    /**
     * Constructs a new <code>CustomFieldEntryStringAllOf</code>.
     * @alias module:model/CustomFieldEntryStringAllOf
     * @param fieldType {String} The data type stored in this generic object ( string, number, string[], number[])
     */
    constructor(fieldType) { 
        
        CustomFieldEntryStringAllOf.initialize(this, fieldType);
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
     * Constructs a <code>CustomFieldEntryStringAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldEntryStringAllOf} obj Optional instance to populate.
     * @return {module:model/CustomFieldEntryStringAllOf} The populated <code>CustomFieldEntryStringAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldEntryStringAllOf();

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
CustomFieldEntryStringAllOf.prototype['fieldType'] = undefined;

/**
 * 
 * @member {String} value
 */
CustomFieldEntryStringAllOf.prototype['value'] = undefined;






export default CustomFieldEntryStringAllOf;

