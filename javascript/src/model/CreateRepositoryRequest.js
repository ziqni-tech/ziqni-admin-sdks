/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.18
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CreateOptParamModels from './CreateOptParamModels';
import CreateRepositoryRequestAllOf from './CreateRepositoryRequestAllOf';
import HostingOptions from './HostingOptions';

/**
 * The CreateRepositoryRequest model module.
 * @module model/CreateRepositoryRequest
 * @version 0.0.26
 */
class CreateRepositoryRequest {
    /**
     * Constructs a new <code>CreateRepositoryRequest</code>.
     * @alias module:model/CreateRepositoryRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateRepositoryRequestAllOf
     * @param name {String} The name of the repository. No special charaters or spaces permitted
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(name, constraints) { 
        CreateOptParamModels.initialize(this);CreateRepositoryRequestAllOf.initialize(this, name, constraints);
        CreateRepositoryRequest.initialize(this, name, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, constraints) { 
        obj['name'] = name;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>CreateRepositoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRepositoryRequest} obj Optional instance to populate.
     * @return {module:model/CreateRepositoryRequest} The populated <code>CreateRepositoryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRepositoryRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateRepositoryRequestAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('hostingOptions')) {
                obj['hostingOptions'] = HostingOptions.constructFromObject(data['hostingOptions']);
            }
        }
        return obj;
    }


}

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateRepositoryRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateRepositoryRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateRepositoryRequest.prototype['metadata'] = undefined;

/**
 * The name of the repository. No special charaters or spaces permitted
 * @member {String} name
 */
CreateRepositoryRequest.prototype['name'] = undefined;

/**
 * The description of the repository
 * @member {String} description
 */
CreateRepositoryRequest.prototype['description'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateRepositoryRequest.prototype['constraints'] = undefined;

/**
 * @member {module:model/HostingOptions} hostingOptions
 */
CreateRepositoryRequest.prototype['hostingOptions'] = undefined;


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
// Implement CreateRepositoryRequestAllOf interface:
/**
 * The name of the repository. No special charaters or spaces permitted
 * @member {String} name
 */
CreateRepositoryRequestAllOf.prototype['name'] = undefined;
/**
 * The description of the repository
 * @member {String} description
 */
CreateRepositoryRequestAllOf.prototype['description'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateRepositoryRequestAllOf.prototype['constraints'] = undefined;
/**
 * @member {module:model/HostingOptions} hostingOptions
 */
CreateRepositoryRequestAllOf.prototype['hostingOptions'] = undefined;




export default CreateRepositoryRequest;

