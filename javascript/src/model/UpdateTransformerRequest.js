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
import SourceLanguage from './SourceLanguage';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateTransformerRequestAllOf from './UpdateTransformerRequestAllOf';

/**
 * The UpdateTransformerRequest model module.
 * @module model/UpdateTransformerRequest
 * @version 0.0.26
 */
class UpdateTransformerRequest {
    /**
     * Constructs a new <code>UpdateTransformerRequest</code>.
     * @alias module:model/UpdateTransformerRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateTransformerRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateTransformerRequestAllOf.initialize(this);
        UpdateTransformerRequest.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>UpdateTransformerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTransformerRequest} obj Optional instance to populate.
     * @return {module:model/UpdateTransformerRequest} The populated <code>UpdateTransformerRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTransformerRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateTransformerRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
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
 * A unique system generated identifier
 * @member {String} id
 */
UpdateTransformerRequest.prototype['id'] = undefined;

/**
 * The name of the Transformer
 * @member {String} name
 */
UpdateTransformerRequest.prototype['name'] = undefined;

/**
 * Source code
 * @member {String} source
 */
UpdateTransformerRequest.prototype['source'] = undefined;

/**
 * @member {module:model/SourceLanguage} sourceLanguage
 */
UpdateTransformerRequest.prototype['sourceLanguage'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateTransformerRequestAllOf interface:
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




export default UpdateTransformerRequest;

