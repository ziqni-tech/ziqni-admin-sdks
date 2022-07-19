/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
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
import Product from './Product';

/**
 * The ProductResponse model module.
 * @module model/ProductResponse
 * @version 0.0.26
 */
class ProductResponse {
    /**
     * Constructs a new <code>ProductResponse</code>.
     * This is the Response for Product
     * @alias module:model/ProductResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        ProductResponse.initialize(this, meta);
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
     * Constructs a <code>ProductResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductResponse} obj Optional instance to populate.
     * @return {module:model/ProductResponse} The populated <code>ProductResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Product]);
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
ProductResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Product>} results
 */
ProductResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
ProductResponse.prototype['errors'] = undefined;






export default ProductResponse;
