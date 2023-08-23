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
import ConnectionState from './ConnectionState';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateStateRequestAllOf from './UpdateStateRequestAllOf';

/**
 * The UpdateConnectionStateRequest model module.
 * @module model/UpdateConnectionStateRequest
 * @version 0.0.26
 */
class UpdateConnectionStateRequest {
    /**
     * Constructs a new <code>UpdateConnectionStateRequest</code>.
     * @alias module:model/UpdateConnectionStateRequest
     * @implements module:model/UpdateStateRequestAllOf
     * @implements module:model/UpdateModelDefault
     * @param status {module:model/ConnectionState} 
     * @param id {String} A unique system generated identifier
     */
    constructor(status, id) { 
        UpdateStateRequestAllOf.initialize(this, status);UpdateModelDefault.initialize(this, id);
        UpdateConnectionStateRequest.initialize(this, status, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, id) { 
        obj['status'] = status;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>UpdateConnectionStateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateConnectionStateRequest} obj Optional instance to populate.
     * @return {module:model/UpdateConnectionStateRequest} The populated <code>UpdateConnectionStateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateConnectionStateRequest();
            UpdateStateRequestAllOf.constructFromObject(data, obj);
            UpdateModelDefault.constructFromObject(data, obj);

            if (data.hasOwnProperty('status')) {
                obj['status'] = ConnectionState.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ConnectionState} status
 */
UpdateConnectionStateRequest.prototype['status'] = undefined;

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateConnectionStateRequest.prototype['id'] = undefined;


// Implement UpdateStateRequestAllOf interface:
/**
 * @member {module:model/ConnectionState} status
 */
UpdateStateRequestAllOf.prototype['status'] = undefined;
// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;




export default UpdateConnectionStateRequest;

