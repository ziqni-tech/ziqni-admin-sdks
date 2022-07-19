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
import FileObjectAllOf from './FileObjectAllOf';
import ModelDefault from './ModelDefault';
import OptParamModels from './OptParamModels';

/**
 * The FileObject model module.
 * @module model/FileObject
 * @version 0.0.26
 */
class FileObject {
    /**
     * Constructs a new <code>FileObject</code>.
     * @alias module:model/FileObject
     * @implements module:model/ModelDefault
     * @implements module:model/OptParamModels
     * @implements module:model/FileObjectAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param repositoryId {String} The repository identifier this file belongs too
     * @param name {String} Name of the original file uploaded
     * @param mimeType {String} Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excelor or application/x-directory for directories
     * @param path {String} The name of the attachment within the bucket
     * @param parentFolderPath {String} The folder name containing the attachment within the bucket
     */
    constructor(id, spaceName, created, repositoryId, name, mimeType, path, parentFolderPath) { 
        ModelDefault.initialize(this, id, spaceName, created);OptParamModels.initialize(this);FileObjectAllOf.initialize(this, repositoryId, name, mimeType, path, parentFolderPath);
        FileObject.initialize(this, id, spaceName, created, repositoryId, name, mimeType, path, parentFolderPath);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, repositoryId, name, mimeType, path, parentFolderPath) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['repositoryId'] = repositoryId;
        obj['name'] = name;
        obj['mimeType'] = mimeType;
        obj['path'] = path;
        obj['parentFolderPath'] = parentFolderPath;
    }

    /**
     * Constructs a <code>FileObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileObject} obj Optional instance to populate.
     * @return {module:model/FileObject} The populated <code>FileObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileObject();
            ModelDefault.constructFromObject(data, obj);
            OptParamModels.constructFromObject(data, obj);
            FileObjectAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
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
 * A unique system generated identifier
 * @member {String} id
 */
FileObject.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
FileObject.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
FileObject.prototype['created'] = undefined;

/**
 * @member {Object.<String, Object>} customFields
 */
FileObject.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
FileObject.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
FileObject.prototype['metadata'] = undefined;

/**
 * The repository identifier this file belongs too
 * @member {String} repositoryId
 */
FileObject.prototype['repositoryId'] = undefined;

/**
 * Name of the original file uploaded
 * @member {String} name
 */
FileObject.prototype['name'] = undefined;

/**
 * Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excelor or application/x-directory for directories
 * @member {String} mimeType
 */
FileObject.prototype['mimeType'] = undefined;

/**
 * The name of the attachment within the bucket
 * @member {String} path
 */
FileObject.prototype['path'] = undefined;

/**
 * The folder name containing the attachment within the bucket
 * @member {String} parentFolderPath
 */
FileObject.prototype['parentFolderPath'] = undefined;

/**
 * The uniform resource identifier where the file can be viewed/downloaded
 * @member {String} uri
 */
FileObject.prototype['uri'] = undefined;

/**
 * The size of the file
 * @member {Number} size
 */
FileObject.prototype['size'] = undefined;

/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
FileObject.prototype['constraints'] = undefined;


// Implement ModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
ModelDefault.prototype['id'] = undefined;
/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ModelDefault.prototype['spaceName'] = undefined;
/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ModelDefault.prototype['created'] = undefined;
// Implement OptParamModels interface:
/**
 * @member {Object.<String, Object>} customFields
 */
OptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
OptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
OptParamModels.prototype['metadata'] = undefined;
// Implement FileObjectAllOf interface:
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




export default FileObject;

