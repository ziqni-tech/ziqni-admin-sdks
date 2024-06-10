/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.15
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
 * The CreateTransformerRequest model module.
 * @module model/CreateTransformerRequest
 * @version 0.0.26
 */
class CreateTransformerRequest {
    /**
     * Constructs a new <code>CreateTransformerRequest</code>.
     * @alias module:model/CreateTransformerRequest
     * @param name {String} The name of the Transformer
     * @param sourceLanguage {module:model/SourceLanguage} 
     */
    constructor(name, sourceLanguage) { 
        
        CreateTransformerRequest.initialize(this, name, sourceLanguage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, sourceLanguage) { 
        obj['name'] = name;
        obj['sourceLanguage'] = sourceLanguage;
    }

    /**
     * Constructs a <code>CreateTransformerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTransformerRequest} obj Optional instance to populate.
     * @return {module:model/CreateTransformerRequest} The populated <code>CreateTransformerRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTransformerRequest();

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
CreateTransformerRequest.prototype['name'] = undefined;

/**
 * Source code
 * @member {String} source
 */
CreateTransformerRequest.prototype['source'] = undefined;

/**
 * @member {module:model/SourceLanguage} sourceLanguage
 */
CreateTransformerRequest.prototype['sourceLanguage'] = undefined;






export default CreateTransformerRequest;

