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

/**
 * The ObjectConstraint model module.
 * @module model/ObjectConstraint
 * @version 0.0.26
 */
class ObjectConstraint {
    /**
     * Constructs a new <code>ObjectConstraint</code>.
     * 
     * @alias module:model/ObjectConstraint
     * @param name {String} 
     * @param key {String} 
     */
    constructor(name, key) { 
        
        ObjectConstraint.initialize(this, name, key);
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
     * Constructs a <code>ObjectConstraint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ObjectConstraint} obj Optional instance to populate.
     * @return {module:model/ObjectConstraint} The populated <code>ObjectConstraint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ObjectConstraint();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} name
 */
ObjectConstraint.prototype['name'] = undefined;

/**
 * 
 * @member {String} key
 */
ObjectConstraint.prototype['key'] = undefined;






export default ObjectConstraint;

