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

/**
 * The UpdateTagRequestAllOf model module.
 * @module model/UpdateTagRequestAllOf
 * @version 0.0.26
 */
class UpdateTagRequestAllOf {
    /**
     * Constructs a new <code>UpdateTagRequestAllOf</code>.
     * @alias module:model/UpdateTagRequestAllOf
     */
    constructor() { 
        
        UpdateTagRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateTagRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTagRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateTagRequestAllOf} The populated <code>UpdateTagRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTagRequestAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
UpdateTagRequestAllOf.prototype['name'] = undefined;

/**
 * The description of the tag for your reference
 * @member {String} description
 */
UpdateTagRequestAllOf.prototype['description'] = undefined;

/**
 * The model name the tag refers to
 * @member {Array.<String>} entityTypes
 */
UpdateTagRequestAllOf.prototype['entityTypes'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
UpdateTagRequestAllOf.prototype['metadata'] = undefined;






export default UpdateTagRequestAllOf;

