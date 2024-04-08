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
import Error from './Error';
import MetaExtended from './MetaExtended';
import Transformer from './Transformer';

/**
 * The TransformerResponse model module.
 * @module model/TransformerResponse
 * @version 0.0.26
 */
class TransformerResponse {
    /**
     * Constructs a new <code>TransformerResponse</code>.
     * @alias module:model/TransformerResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        TransformerResponse.initialize(this, meta);
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
     * Constructs a <code>TransformerResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransformerResponse} obj Optional instance to populate.
     * @return {module:model/TransformerResponse} The populated <code>TransformerResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransformerResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Transformer]);
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
TransformerResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Transformer>} results
 */
TransformerResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
TransformerResponse.prototype['errors'] = undefined;






export default TransformerResponse;

