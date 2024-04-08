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
import SourceLanguage from './SourceLanguage';

/**
 * The UpdateTransformerRequestAllOf model module.
 * @module model/UpdateTransformerRequestAllOf
 * @version 0.0.26
 */
class UpdateTransformerRequestAllOf {
    /**
     * Constructs a new <code>UpdateTransformerRequestAllOf</code>.
     * @alias module:model/UpdateTransformerRequestAllOf
     */
    constructor() { 
        
        UpdateTransformerRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateTransformerRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTransformerRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateTransformerRequestAllOf} The populated <code>UpdateTransformerRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTransformerRequestAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('sourceLanguage')) {
                obj['sourceLanguage'] = SourceLanguage.constructFromObject(data['sourceLanguage']);
            }
        }
        return obj;
    }


}

/**
 * The name of the Transformer
 * @member {String} name
 */
UpdateTransformerRequestAllOf.prototype['name'] = undefined;

/**
 * Source code
 * @member {String} source
 */
UpdateTransformerRequestAllOf.prototype['source'] = undefined;

/**
 * @member {module:model/SourceLanguage} sourceLanguage
 */
UpdateTransformerRequestAllOf.prototype['sourceLanguage'] = undefined;






export default UpdateTransformerRequestAllOf;

