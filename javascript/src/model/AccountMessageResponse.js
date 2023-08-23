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
import AccountMessage from './AccountMessage';
import Error from './Error';
import MetaExtended from './MetaExtended';

/**
 * The AccountMessageResponse model module.
 * @module model/AccountMessageResponse
 * @version 0.0.26
 */
class AccountMessageResponse {
    /**
     * Constructs a new <code>AccountMessageResponse</code>.
     * @alias module:model/AccountMessageResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        AccountMessageResponse.initialize(this, meta);
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
     * Constructs a <code>AccountMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountMessageResponse} obj Optional instance to populate.
     * @return {module:model/AccountMessageResponse} The populated <code>AccountMessageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountMessageResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [AccountMessage]);
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
AccountMessageResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/AccountMessage>} results
 */
AccountMessageResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
AccountMessageResponse.prototype['errors'] = undefined;






export default AccountMessageResponse;

