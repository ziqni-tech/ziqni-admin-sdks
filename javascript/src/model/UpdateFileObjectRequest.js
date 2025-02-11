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
import UpdateFileObjectRequestAllOf from './UpdateFileObjectRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';

/**
 * The UpdateFileObjectRequest model module.
 * @module model/UpdateFileObjectRequest
 * @version 0.0.26
 */
class UpdateFileObjectRequest {
    /**
     * Constructs a new <code>UpdateFileObjectRequest</code>.
     * @alias module:model/UpdateFileObjectRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateFileObjectRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateFileObjectRequestAllOf.initialize(this);
        UpdateFileObjectRequest.initialize(this, id);
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
     * Constructs a <code>UpdateFileObjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateFileObjectRequest} obj Optional instance to populate.
     * @return {module:model/UpdateFileObjectRequest} The populated <code>UpdateFileObjectRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateFileObjectRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateOptParamModels.constructFromObject(data, obj);
            UpdateFileObjectRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('repositoryId')) {
                obj['repositoryId'] = ApiClient.convertToType(data['repositoryId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('mimeType')) {
                obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
            }
            if (data.hasOwnProperty('parentFolderPath')) {
                obj['parentFolderPath'] = ApiClient.convertToType(data['parentFolderPath'], 'String');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateFileObjectRequest.prototype['id'] = undefined;

/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateFileObjectRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateFileObjectRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
UpdateFileObjectRequest.prototype['metadata'] = undefined;

/**
 * The repository identifier this file belongs too
 * @member {String} repositoryId
 */
UpdateFileObjectRequest.prototype['repositoryId'] = undefined;

/**
 * Name of the original file uploaded
 * @member {String} name
 */
UpdateFileObjectRequest.prototype['name'] = undefined;

/**
 * Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excel
 * @member {String} mimeType
 */
UpdateFileObjectRequest.prototype['mimeType'] = undefined;

/**
 * The folder containing the attachment within the repository
 * @member {String} parentFolderPath
 */
UpdateFileObjectRequest.prototype['parentFolderPath'] = undefined;

/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
UpdateFileObjectRequest.prototype['constraints'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateOptParamModels interface:
/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
UpdateOptParamModels.prototype['metadata'] = undefined;
// Implement UpdateFileObjectRequestAllOf interface:
/**
 * The repository identifier this file belongs too
 * @member {String} repositoryId
 */
UpdateFileObjectRequestAllOf.prototype['repositoryId'] = undefined;
/**
 * Name of the original file uploaded
 * @member {String} name
 */
UpdateFileObjectRequestAllOf.prototype['name'] = undefined;
/**
 * Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excel
 * @member {String} mimeType
 */
UpdateFileObjectRequestAllOf.prototype['mimeType'] = undefined;
/**
 * The folder containing the attachment within the repository
 * @member {String} parentFolderPath
 */
UpdateFileObjectRequestAllOf.prototype['parentFolderPath'] = undefined;
/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
UpdateFileObjectRequestAllOf.prototype['constraints'] = undefined;




export default UpdateFileObjectRequest;

