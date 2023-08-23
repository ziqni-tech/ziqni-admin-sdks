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
import AppliesTo from './AppliesTo';
import CustomFieldAllOf from './CustomFieldAllOf';
import FieldType from './FieldType';
import ModelDefault from './ModelDefault';

/**
 * The CustomField model module.
 * @module model/CustomField
 * @version 0.0.26
 */
class CustomField {
    /**
     * Constructs a new <code>CustomField</code>.
     * Custom field model
     * @alias module:model/CustomField
     * @implements module:model/ModelDefault
     * @implements module:model/CustomFieldAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} The name of a Custom field
     * @param key {String} The key of a Custom field
     * @param fieldType {module:model/FieldType} 
     * @param appliesTo {module:model/AppliesTo} 
     */
    constructor(id, spaceName, created, name, key, fieldType, appliesTo) { 
        ModelDefault.initialize(this, id, spaceName, created);CustomFieldAllOf.initialize(this, name, key, fieldType, appliesTo);
        CustomField.initialize(this, id, spaceName, created, name, key, fieldType, appliesTo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, name, key, fieldType, appliesTo) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['name'] = name;
        obj['key'] = key;
        obj['fieldType'] = fieldType;
        obj['appliesTo'] = appliesTo;
    }

    /**
     * Constructs a <code>CustomField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomField} obj Optional instance to populate.
     * @return {module:model/CustomField} The populated <code>CustomField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomField();
            ModelDefault.constructFromObject(data, obj);
            CustomFieldAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
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
 * A unique system generated identifier
 * @member {String} id
 */
CustomField.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
CustomField.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
CustomField.prototype['created'] = undefined;

/**
 * The name of a Custom field
 * @member {String} name
 */
CustomField.prototype['name'] = undefined;

/**
 * The key of a Custom field
 * @member {String} key
 */
CustomField.prototype['key'] = undefined;

/**
 * The description of a Custom field
 * @member {String} description
 */
CustomField.prototype['description'] = undefined;

/**
 * @member {module:model/FieldType} fieldType
 */
CustomField.prototype['fieldType'] = undefined;

/**
 * @member {module:model/AppliesTo} appliesTo
 */
CustomField.prototype['appliesTo'] = undefined;

/**
 * For example \"required\" to indicate the field is required.
 * @member {Array.<String>} constraints
 */
CustomField.prototype['constraints'] = undefined;


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
// Implement CustomFieldAllOf interface:
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




export default CustomField;

