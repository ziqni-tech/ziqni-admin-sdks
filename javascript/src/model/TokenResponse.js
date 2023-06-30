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
import Error from './Error';
import MetaBasic from './MetaBasic';
import Token from './Token';

/**
 * The TokenResponse model module.
 * @module model/TokenResponse
 * @version 0.0.26
 */
class TokenResponse {
    /**
     * Constructs a new <code>TokenResponse</code>.
     *         
     * @alias module:model/TokenResponse
     */
    constructor() { 
        
        TokenResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenResponse} obj Optional instance to populate.
     * @return {module:model/TokenResponse} The populated <code>TokenResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaBasic.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = Token.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MetaBasic} meta
 */
TokenResponse.prototype['meta'] = undefined;

/**
 * @member {module:model/Token} data
 */
TokenResponse.prototype['data'] = undefined;

/**
 * 
 * @member {Array.<module:model/Error>} errors
 */
TokenResponse.prototype['errors'] = undefined;






export default TokenResponse;

