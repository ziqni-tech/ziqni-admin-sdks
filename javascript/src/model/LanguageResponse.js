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
import Error from './Error';
import Language from './Language';
import MetaExtended from './MetaExtended';

/**
 * The LanguageResponse model module.
 * @module model/LanguageResponse
 * @version 0.0.26
 */
class LanguageResponse {
    /**
     * Constructs a new <code>LanguageResponse</code>.
     * @alias module:model/LanguageResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        LanguageResponse.initialize(this, meta);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, meta) { 
        obj['meta'] = meta;
    }

    /**
     * Constructs a <code>LanguageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LanguageResponse} obj Optional instance to populate.
     * @return {module:model/LanguageResponse} The populated <code>LanguageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LanguageResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Language]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MetaExtended} meta
 */
LanguageResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Language>} results
 */
LanguageResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
LanguageResponse.prototype['errors'] = undefined;






export default LanguageResponse;

