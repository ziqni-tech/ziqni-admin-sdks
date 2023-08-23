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
import CreateLanguageRequestAllOf from './CreateLanguageRequestAllOf';
import CreateOptParamModels from './CreateOptParamModels';

/**
 * The CreateLanguageRequest model module.
 * @module model/CreateLanguageRequest
 * @version 0.0.26
 */
class CreateLanguageRequest {
    /**
     * Constructs a new <code>CreateLanguageRequest</code>.
     * @alias module:model/CreateLanguageRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateLanguageRequestAllOf
     * @param key {String} A reference to the pre created language keys
     */
    constructor(key) { 
        CreateOptParamModels.initialize(this);CreateLanguageRequestAllOf.initialize(this, key);
        CreateLanguageRequest.initialize(this, key);
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
     * Constructs a <code>CreateLanguageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLanguageRequest} obj Optional instance to populate.
     * @return {module:model/CreateLanguageRequest} The populated <code>CreateLanguageRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateLanguageRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateLanguageRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateLanguageRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateLanguageRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateLanguageRequest.prototype['metadata'] = undefined;

/**
 * A reference to the pre created language keys
 * @member {String} key
 */
CreateLanguageRequest.prototype['key'] = undefined;


// Implement CreateOptParamModels interface:
/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
CreateOptParamModels.prototype['metadata'] = undefined;
// Implement CreateLanguageRequestAllOf interface:
/**
 * A reference to the pre created language keys
 * @member {String} key
 */
CreateLanguageRequestAllOf.prototype['key'] = undefined;




export default CreateLanguageRequest;

