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

/**
 * The UpdateFileObjectRequestAllOf model module.
 * @module model/UpdateFileObjectRequestAllOf
 * @version 0.0.26
 */
class UpdateFileObjectRequestAllOf {
    /**
     * Constructs a new <code>UpdateFileObjectRequestAllOf</code>.
     * @alias module:model/UpdateFileObjectRequestAllOf
     */
    constructor() { 
        
        UpdateFileObjectRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateFileObjectRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateFileObjectRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateFileObjectRequestAllOf} The populated <code>UpdateFileObjectRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateFileObjectRequestAllOf();

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






export default UpdateFileObjectRequestAllOf;

