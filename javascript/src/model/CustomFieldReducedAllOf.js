/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.5
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FieldType from './FieldType';

/**
 * The CustomFieldReducedAllOf model module.
 * @module model/CustomFieldReducedAllOf
 * @version 0.0.26
 */
class CustomFieldReducedAllOf {
    /**
     * Constructs a new <code>CustomFieldReducedAllOf</code>.
     * @alias module:model/CustomFieldReducedAllOf
     * @param key {String} The key of a Custom field
     * @param fieldType {module:model/FieldType} 
     */
    constructor(key, fieldType) { 
        
        CustomFieldReducedAllOf.initialize(this, key, fieldType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, fieldType) { 
        obj['key'] = key;
        obj['fieldType'] = fieldType;
    }

    /**
     * Constructs a <code>CustomFieldReducedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldReducedAllOf} obj Optional instance to populate.
     * @return {module:model/CustomFieldReducedAllOf} The populated <code>CustomFieldReducedAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldReducedAllOf();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('fieldType')) {
                obj['fieldType'] = FieldType.constructFromObject(data['fieldType']);
            }
        }
        return obj;
    }


}

/**
 * The key of a Custom field
 * @member {String} key
 */
CustomFieldReducedAllOf.prototype['key'] = undefined;

/**
 * @member {module:model/FieldType} fieldType
 */
CustomFieldReducedAllOf.prototype['fieldType'] = undefined;






export default CustomFieldReducedAllOf;

