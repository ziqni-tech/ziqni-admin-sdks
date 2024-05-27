/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.14
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateTagRequestAllOf from './UpdateTagRequestAllOf';

/**
 * The UpdateTagRequest model module.
 * @module model/UpdateTagRequest
 * @version 0.0.26
 */
class UpdateTagRequest {
    /**
     * Constructs a new <code>UpdateTagRequest</code>.
     * Request for tag update
     * @alias module:model/UpdateTagRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateTagRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateTagRequestAllOf.initialize(this);
        UpdateTagRequest.initialize(this, id);
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
     * Constructs a <code>UpdateTagRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTagRequest} obj Optional instance to populate.
     * @return {module:model/UpdateTagRequest} The populated <code>UpdateTagRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTagRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateTagRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('entityTypes')) {
                obj['entityTypes'] = ApiClient.convertToType(data['entityTypes'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateTagRequest.prototype['id'] = undefined;

/**
 * The name of the tag
 * @member {String} name
 */
UpdateTagRequest.prototype['name'] = undefined;

/**
 * The description of the tag for your reference
 * @member {String} description
 */
UpdateTagRequest.prototype['description'] = undefined;

/**
 * The model name the tag refers to
 * @member {Array.<String>} entityTypes
 */
UpdateTagRequest.prototype['entityTypes'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
UpdateTagRequest.prototype['metadata'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateTagRequestAllOf interface:
/**
 * The name of the tag
 * @member {String} name
 */
UpdateTagRequestAllOf.prototype['name'] = undefined;
/**
 * The description of the tag for your reference
 * @member {String} description
 */
UpdateTagRequestAllOf.prototype['description'] = undefined;
/**
 * The model name the tag refers to
 * @member {Array.<String>} entityTypes
 */
UpdateTagRequestAllOf.prototype['entityTypes'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
UpdateTagRequestAllOf.prototype['metadata'] = undefined;




export default UpdateTagRequest;

