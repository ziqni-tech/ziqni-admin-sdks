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
import ModelDefault from './ModelDefault';
import TagAllOf from './TagAllOf';

/**
 * The Tag model module.
 * @module model/Tag
 * @version 0.0.26
 */
class Tag {
    /**
     * Constructs a new <code>Tag</code>.
     * Tag model
     * @alias module:model/Tag
     * @implements module:model/ModelDefault
     * @implements module:model/TagAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} The name of the tag
     * @param key {String} A unique key that represents a tag
     */
    constructor(id, spaceName, created, name, key) { 
        ModelDefault.initialize(this, id, spaceName, created);TagAllOf.initialize(this, name, key);
        Tag.initialize(this, id, spaceName, created, name, key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, name, key) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['name'] = name;
        obj['key'] = key;
    }

    /**
     * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tag} obj Optional instance to populate.
     * @return {module:model/Tag} The populated <code>Tag</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tag();
            ModelDefault.constructFromObject(data, obj);
            TagAllOf.constructFromObject(data, obj);

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
 * A unique system generated identifier
 * @member {String} id
 */
Tag.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Tag.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Tag.prototype['created'] = undefined;

/**
 * The name of the tag
 * @member {String} name
 */
Tag.prototype['name'] = undefined;

/**
 * A unique key that represents a tag
 * @member {String} key
 */
Tag.prototype['key'] = undefined;

/**
 * The description of the tag for your reference
 * @member {String} description
 */
Tag.prototype['description'] = undefined;

/**
 * The model name the tag refers to
 * @member {Array.<String>} entityTypes
 */
Tag.prototype['entityTypes'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
Tag.prototype['metadata'] = undefined;


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
// Implement TagAllOf interface:
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




export default Tag;

