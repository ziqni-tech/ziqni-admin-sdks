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
import CreateApiKeyRequestAllOf from './CreateApiKeyRequestAllOf';
import CreateOptParamModels from './CreateOptParamModels';
import Role from './Role';

/**
 * The CreateApiKeyRequest model module.
 * @module model/CreateApiKeyRequest
 * @version 0.0.26
 */
class CreateApiKeyRequest {
    /**
     * Constructs a new <code>CreateApiKeyRequest</code>.
     * @alias module:model/CreateApiKeyRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateApiKeyRequestAllOf
     * @param role {module:model/Role} 
     */
    constructor(role) { 
        CreateOptParamModels.initialize(this);CreateApiKeyRequestAllOf.initialize(this, role);
        CreateApiKeyRequest.initialize(this, role);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, role) { 
        obj['role'] = role;
    }

    /**
     * Constructs a <code>CreateApiKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateApiKeyRequest} obj Optional instance to populate.
     * @return {module:model/CreateApiKeyRequest} The populated <code>CreateApiKeyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateApiKeyRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateApiKeyRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('whiteListIPs')) {
                obj['whiteListIPs'] = ApiClient.convertToType(data['whiteListIPs'], ['String']);
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = Role.constructFromObject(data['role']);
            }
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateApiKeyRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateApiKeyRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateApiKeyRequest.prototype['metadata'] = undefined;

/**
 * The description of an Api key
 * @member {String} description
 */
CreateApiKeyRequest.prototype['description'] = undefined;

/**
 * the IP's that need to be whitelisted with the Api key
 * @member {Array.<String>} whiteListIPs
 */
CreateApiKeyRequest.prototype['whiteListIPs'] = undefined;

/**
 * @member {module:model/Role} role
 */
CreateApiKeyRequest.prototype['role'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
CreateApiKeyRequest.prototype['addConstraints'] = undefined;


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
// Implement CreateApiKeyRequestAllOf interface:
/**
 * The description of an Api key
 * @member {String} description
 */
CreateApiKeyRequestAllOf.prototype['description'] = undefined;
/**
 * the IP's that need to be whitelisted with the Api key
 * @member {Array.<String>} whiteListIPs
 */
CreateApiKeyRequestAllOf.prototype['whiteListIPs'] = undefined;
/**
 * @member {module:model/Role} role
 */
CreateApiKeyRequestAllOf.prototype['role'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
CreateApiKeyRequestAllOf.prototype['addConstraints'] = undefined;




export default CreateApiKeyRequest;

