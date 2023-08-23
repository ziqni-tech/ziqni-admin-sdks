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
import ConnectionType from './ConnectionType';
import CreateConnectionRequestAllOf from './CreateConnectionRequestAllOf';
import CreateOptParamModels from './CreateOptParamModels';

/**
 * The CreateConnectionRequest model module.
 * @module model/CreateConnectionRequest
 * @version 0.0.26
 */
class CreateConnectionRequest {
    /**
     * Constructs a new <code>CreateConnectionRequest</code>.
     * @alias module:model/CreateConnectionRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateConnectionRequestAllOf
     * @param name {String} The name of the consumer
     * @param connectionType {module:model/ConnectionType} 
     */
    constructor(name, connectionType) { 
        CreateOptParamModels.initialize(this);CreateConnectionRequestAllOf.initialize(this, name, connectionType);
        CreateConnectionRequest.initialize(this, name, connectionType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, connectionType) { 
        obj['name'] = name;
        obj['connectionType'] = connectionType;
    }

    /**
     * Constructs a <code>CreateConnectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateConnectionRequest} obj Optional instance to populate.
     * @return {module:model/CreateConnectionRequest} The populated <code>CreateConnectionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateConnectionRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateConnectionRequestAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('transformerId')) {
                obj['transformerId'] = ApiClient.convertToType(data['transformerId'], 'String');
            }
            if (data.hasOwnProperty('connectionType')) {
                obj['connectionType'] = ConnectionType.constructFromObject(data['connectionType']);
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateConnectionRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateConnectionRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateConnectionRequest.prototype['metadata'] = undefined;

/**
 * The name of the consumer
 * @member {String} name
 */
CreateConnectionRequest.prototype['name'] = undefined;

/**
 * The description of the consumer
 * @member {String} description
 */
CreateConnectionRequest.prototype['description'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateConnectionRequest.prototype['constraints'] = undefined;

/**
 * The transformer to use, if empty the default system transformer will be used
 * @member {String} transformerId
 */
CreateConnectionRequest.prototype['transformerId'] = undefined;

/**
 * @member {module:model/ConnectionType} connectionType
 */
CreateConnectionRequest.prototype['connectionType'] = undefined;

/**
 * Consumer secret used for authentication
 * @member {String} secret
 */
CreateConnectionRequest.prototype['secret'] = undefined;

/**
 * Consumer username for authentication
 * @member {String} user
 */
CreateConnectionRequest.prototype['user'] = undefined;


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
// Implement CreateConnectionRequestAllOf interface:
/**
 * The name of the consumer
 * @member {String} name
 */
CreateConnectionRequestAllOf.prototype['name'] = undefined;
/**
 * The description of the consumer
 * @member {String} description
 */
CreateConnectionRequestAllOf.prototype['description'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateConnectionRequestAllOf.prototype['constraints'] = undefined;
/**
 * The transformer to use, if empty the default system transformer will be used
 * @member {String} transformerId
 */
CreateConnectionRequestAllOf.prototype['transformerId'] = undefined;
/**
 * @member {module:model/ConnectionType} connectionType
 */
CreateConnectionRequestAllOf.prototype['connectionType'] = undefined;
/**
 * Consumer secret used for authentication
 * @member {String} secret
 */
CreateConnectionRequestAllOf.prototype['secret'] = undefined;
/**
 * Consumer username for authentication
 * @member {String} user
 */
CreateConnectionRequestAllOf.prototype['user'] = undefined;




export default CreateConnectionRequest;

