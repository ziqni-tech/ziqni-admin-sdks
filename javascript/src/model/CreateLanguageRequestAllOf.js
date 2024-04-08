/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.13
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateLanguageRequestAllOf model module.
 * @module model/CreateLanguageRequestAllOf
 * @version 0.0.26
 */
class CreateLanguageRequestAllOf {
    /**
     * Constructs a new <code>CreateLanguageRequestAllOf</code>.
     * @alias module:model/CreateLanguageRequestAllOf
     * @param key {String} A reference to the pre created language keys
     */
    constructor(key) { 
        
        CreateLanguageRequestAllOf.initialize(this, key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key) { 
        obj['key'] = key;
    }

    /**
     * Constructs a <code>CreateLanguageRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLanguageRequestAllOf} obj Optional instance to populate.
     * @return {module:model/CreateLanguageRequestAllOf} The populated <code>CreateLanguageRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateLanguageRequestAllOf();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A reference to the pre created language keys
 * @member {String} key
 */
CreateLanguageRequestAllOf.prototype['key'] = undefined;






export default CreateLanguageRequestAllOf;

