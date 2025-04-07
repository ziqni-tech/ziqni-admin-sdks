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

/**
 * The FileObjectAllOf model module.
 * @module model/FileObjectAllOf
 * @version 0.0.26
 */
class FileObjectAllOf {
    /**
     * Constructs a new <code>FileObjectAllOf</code>.
     * @alias module:model/FileObjectAllOf
     * @param repositoryId {String} The repository identifier this file belongs too
     * @param name {String} Name of the original file uploaded
     * @param mimeType {String} Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excelor or application/x-directory for directories
     * @param path {String} The name of the attachment within the bucket
     * @param parentFolderPath {String} The folder name containing the attachment within the bucket
     */
    constructor(repositoryId, name, mimeType, path, parentFolderPath) { 
        
        FileObjectAllOf.initialize(this, repositoryId, name, mimeType, path, parentFolderPath);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, repositoryId, name, mimeType, path, parentFolderPath) { 
        obj['repositoryId'] = repositoryId;
        obj['name'] = name;
        obj['mimeType'] = mimeType;
        obj['path'] = path;
        obj['parentFolderPath'] = parentFolderPath;
    }

    /**
     * Constructs a <code>FileObjectAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileObjectAllOf} obj Optional instance to populate.
     * @return {module:model/FileObjectAllOf} The populated <code>FileObjectAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileObjectAllOf();

            if (data.hasOwnProperty('repositoryId')) {
                obj['repositoryId'] = ApiClient.convertToType(data['repositoryId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('mimeType')) {
                obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('parentFolderPath')) {
                obj['parentFolderPath'] = ApiClient.convertToType(data['parentFolderPath'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
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
FileObjectAllOf.prototype['repositoryId'] = undefined;

/**
 * Name of the original file uploaded
 * @member {String} name
 */
FileObjectAllOf.prototype['name'] = undefined;

/**
 * Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excelor or application/x-directory for directories
 * @member {String} mimeType
 */
FileObjectAllOf.prototype['mimeType'] = undefined;

/**
 * The name of the attachment within the bucket
 * @member {String} path
 */
FileObjectAllOf.prototype['path'] = undefined;

/**
 * The folder name containing the attachment within the bucket
 * @member {String} parentFolderPath
 */
FileObjectAllOf.prototype['parentFolderPath'] = undefined;

/**
 * The uniform resource identifier where the file can be viewed/downloaded
 * @member {String} uri
 */
FileObjectAllOf.prototype['uri'] = undefined;

/**
 * The size of the file
 * @member {Number} size
 */
FileObjectAllOf.prototype['size'] = undefined;

/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
FileObjectAllOf.prototype['constraints'] = undefined;






export default FileObjectAllOf;

