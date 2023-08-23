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

/**
 * The Triggers model module.
 * @module model/Triggers
 * @version 0.0.26
 */
class Triggers {
    /**
     * Constructs a new <code>Triggers</code>.
     * 
     * @alias module:model/Triggers
     */
    constructor() { 
        
        Triggers.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Triggers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Triggers} obj Optional instance to populate.
     * @return {module:model/Triggers} The populated <code>Triggers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Triggers();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
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
 * @member {String} id
 */
Triggers.prototype['id'] = undefined;

/**
 * 
 * @member {String} name
 */
Triggers.prototype['name'] = undefined;

/**
 * 
 * @member {String} key
 */
Triggers.prototype['key'] = undefined;






export default Triggers;

