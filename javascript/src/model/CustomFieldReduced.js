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
import CustomFieldReducedAllOf from './CustomFieldReducedAllOf';
import FieldType from './FieldType';
import ModelDefault from './ModelDefault';

/**
 * The CustomFieldReduced model module.
 * @module model/CustomFieldReduced
 * @version 0.0.26
 */
class CustomFieldReduced {
    /**
     * Constructs a new <code>CustomFieldReduced</code>.
     * This is a Custom field model with fewer parameters
     * @alias module:model/CustomFieldReduced
     * @implements module:model/ModelDefault
     * @implements module:model/CustomFieldReducedAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param key {String} The key of a Custom field
     * @param fieldType {module:model/FieldType} 
     */
    constructor(id, spaceName, created, key, fieldType) { 
        ModelDefault.initialize(this, id, spaceName, created);CustomFieldReducedAllOf.initialize(this, key, fieldType);
        CustomFieldReduced.initialize(this, id, spaceName, created, key, fieldType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, key, fieldType) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['key'] = key;
        obj['fieldType'] = fieldType;
    }

    /**
     * Constructs a <code>CustomFieldReduced</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldReduced} obj Optional instance to populate.
     * @return {module:model/CustomFieldReduced} The populated <code>CustomFieldReduced</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldReduced();
            ModelDefault.constructFromObject(data, obj);
            CustomFieldReducedAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
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
 * A unique system generated identifier
 * @member {String} id
 */
CustomFieldReduced.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
CustomFieldReduced.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
CustomFieldReduced.prototype['created'] = undefined;

/**
 * The key of a Custom field
 * @member {String} key
 */
CustomFieldReduced.prototype['key'] = undefined;

/**
 * @member {module:model/FieldType} fieldType
 */
CustomFieldReduced.prototype['fieldType'] = undefined;


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
// Implement CustomFieldReducedAllOf interface:
/**
 * The key of a Custom field
 * @member {String} key
 */
CustomFieldReducedAllOf.prototype['key'] = undefined;
/**
 * @member {module:model/FieldType} fieldType
 */
CustomFieldReducedAllOf.prototype['fieldType'] = undefined;




export default CustomFieldReduced;

