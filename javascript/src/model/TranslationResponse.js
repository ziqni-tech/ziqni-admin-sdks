/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.19
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Error from './Error';
import MetaExtended from './MetaExtended';
import Translation from './Translation';

/**
 * The TranslationResponse model module.
 * @module model/TranslationResponse
 * @version 0.0.26
 */
class TranslationResponse {
    /**
     * Constructs a new <code>TranslationResponse</code>.
     * @alias module:model/TranslationResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        TranslationResponse.initialize(this, meta);
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
     * Constructs a <code>TranslationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TranslationResponse} obj Optional instance to populate.
     * @return {module:model/TranslationResponse} The populated <code>TranslationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TranslationResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Translation]);
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
TranslationResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Translation>} results
 */
TranslationResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
TranslationResponse.prototype['errors'] = undefined;






export default TranslationResponse;

