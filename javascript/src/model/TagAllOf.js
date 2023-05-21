/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.2
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TagAllOf model module.
 * @module model/TagAllOf
 * @version 0.0.26
 */
class TagAllOf {
    /**
     * Constructs a new <code>TagAllOf</code>.
     * @alias module:model/TagAllOf
     * @param name {String} The name of the tag
     * @param key {String} A unique key that represents a tag
     */
    constructor(name, key) { 
        
        TagAllOf.initialize(this, name, key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, key) { 
        obj['name'] = name;
        obj['key'] = key;
    }

    /**
     * Constructs a <code>TagAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagAllOf} obj Optional instance to populate.
     * @return {module:model/TagAllOf} The populated <code>TagAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TagAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('entityTypes')) {
                obj['entityTypes'] = ApiClient.convertToType(data['entityTypes'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * The name of the tag
 * @member {String} name
 */
TagAllOf.prototype['name'] = undefined;

/**
 * A unique key that represents a tag
 * @member {String} key
 */
TagAllOf.prototype['key'] = undefined;

/**
 * The description of the tag for your reference
 * @member {String} description
 */
TagAllOf.prototype['description'] = undefined;

/**
 * The model name the tag refers to
 * @member {Array.<String>} entityTypes
 */
TagAllOf.prototype['entityTypes'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
TagAllOf.prototype['metadata'] = undefined;






export default TagAllOf;

