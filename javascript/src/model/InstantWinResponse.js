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
import InstantWin from './InstantWin';
import MetaExtended from './MetaExtended';

/**
 * The InstantWinResponse model module.
 * @module model/InstantWinResponse
 * @version 0.0.26
 */
class InstantWinResponse {
    /**
     * Constructs a new <code>InstantWinResponse</code>.
     * This is the Response for Instant win
     * @alias module:model/InstantWinResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        InstantWinResponse.initialize(this, meta);
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
     * Constructs a <code>InstantWinResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstantWinResponse} obj Optional instance to populate.
     * @return {module:model/InstantWinResponse} The populated <code>InstantWinResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstantWinResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [InstantWin]);
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
InstantWinResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/InstantWin>} results
 */
InstantWinResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
InstantWinResponse.prototype['errors'] = undefined;






export default InstantWinResponse;

