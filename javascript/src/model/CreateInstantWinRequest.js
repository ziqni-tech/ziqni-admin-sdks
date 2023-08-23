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
import CreateInstantWinRequestAllOf from './CreateInstantWinRequestAllOf';
import CreateInstantWinTile from './CreateInstantWinTile';
import CreateOptParamModels from './CreateOptParamModels';
import Translation from './Translation';

/**
 * The CreateInstantWinRequest model module.
 * @module model/CreateInstantWinRequest
 * @version 0.0.26
 */
class CreateInstantWinRequest {
    /**
     * Constructs a new <code>CreateInstantWinRequest</code>.
     * This is a request for Instant win creation
     * @alias module:model/CreateInstantWinRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateInstantWinRequestAllOf
     * @param name {String} 
     */
    constructor(name) { 
        CreateOptParamModels.initialize(this);CreateInstantWinRequestAllOf.initialize(this, name);
        CreateInstantWinRequest.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateInstantWinRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateInstantWinRequest} obj Optional instance to populate.
     * @return {module:model/CreateInstantWinRequest} The populated <code>CreateInstantWinRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateInstantWinRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateInstantWinRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('termsAndConditions')) {
                obj['termsAndConditions'] = ApiClient.convertToType(data['termsAndConditions'], 'String');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
            if (data.hasOwnProperty('instantWinType')) {
                obj['instantWinType'] = ApiClient.convertToType(data['instantWinType'], 'Number');
            }
            if (data.hasOwnProperty('tiles')) {
                obj['tiles'] = ApiClient.convertToType(data['tiles'], [CreateInstantWinTile]);
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
        }
        return obj;
    }


}

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateInstantWinRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateInstantWinRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateInstantWinRequest.prototype['metadata'] = undefined;

/**
 * @member {String} name
 */
CreateInstantWinRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
CreateInstantWinRequest.prototype['description'] = undefined;

/**
 * @member {String} termsAndConditions
 */
CreateInstantWinRequest.prototype['termsAndConditions'] = undefined;

/**
 * @member {Array.<String>} constraints
 */
CreateInstantWinRequest.prototype['constraints'] = undefined;

/**
 * integer
 * @member {Number} statusCode
 */
CreateInstantWinRequest.prototype['statusCode'] = undefined;

/**
 * integer
 * @member {Number} instantWinType
 */
CreateInstantWinRequest.prototype['instantWinType'] = undefined;

/**
 * 
 * @member {Array.<module:model/CreateInstantWinTile>} tiles
 */
CreateInstantWinRequest.prototype['tiles'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateInstantWinRequest.prototype['translations'] = undefined;


// Implement CreateOptParamModels interface:
/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
CreateOptParamModels.prototype['metadata'] = undefined;
// Implement CreateInstantWinRequestAllOf interface:
/**
 * @member {String} name
 */
CreateInstantWinRequestAllOf.prototype['name'] = undefined;
/**
 * @member {String} description
 */
CreateInstantWinRequestAllOf.prototype['description'] = undefined;
/**
 * @member {String} termsAndConditions
 */
CreateInstantWinRequestAllOf.prototype['termsAndConditions'] = undefined;
/**
 * @member {Array.<String>} constraints
 */
CreateInstantWinRequestAllOf.prototype['constraints'] = undefined;
/**
 * integer
 * @member {Number} statusCode
 */
CreateInstantWinRequestAllOf.prototype['statusCode'] = undefined;
/**
 * integer
 * @member {Number} instantWinType
 */
CreateInstantWinRequestAllOf.prototype['instantWinType'] = undefined;
/**
 * 
 * @member {Array.<module:model/CreateInstantWinTile>} tiles
 */
CreateInstantWinRequestAllOf.prototype['tiles'] = undefined;
/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateInstantWinRequestAllOf.prototype['translations'] = undefined;




export default CreateInstantWinRequest;

