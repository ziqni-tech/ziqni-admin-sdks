/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.9
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
import Tag from './Tag';

/**
 * The TagResponse model module.
 * @module model/TagResponse
 * @version 0.0.26
 */
class TagResponse {
    /**
     * Constructs a new <code>TagResponse</code>.
     * Response for Tag
     * @alias module:model/TagResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        TagResponse.initialize(this, meta);
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
     * Constructs a <code>TagResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagResponse} obj Optional instance to populate.
     * @return {module:model/TagResponse} The populated <code>TagResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TagResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Tag]);
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
TagResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Tag>} results
 */
TagResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
TagResponse.prototype['errors'] = undefined;






export default TagResponse;

