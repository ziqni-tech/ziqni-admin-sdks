/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.2
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ConnectionState from './ConnectionState';

/**
 * The UpdateStateRequestAllOf model module.
 * @module model/UpdateStateRequestAllOf
 * @version 0.0.26
 */
class UpdateStateRequestAllOf {
    /**
     * Constructs a new <code>UpdateStateRequestAllOf</code>.
     * @alias module:model/UpdateStateRequestAllOf
     * @param status {module:model/ConnectionState} 
     */
    constructor(status) { 
        
        UpdateStateRequestAllOf.initialize(this, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status) { 
        obj['status'] = status;
    }

    /**
     * Constructs a <code>UpdateStateRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateStateRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateStateRequestAllOf} The populated <code>UpdateStateRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateStateRequestAllOf();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ConnectionState.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ConnectionState} status
 */
UpdateStateRequestAllOf.prototype['status'] = undefined;






export default UpdateStateRequestAllOf;

