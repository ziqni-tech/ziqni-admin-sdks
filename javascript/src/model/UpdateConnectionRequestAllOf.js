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
import ConnectionType from './ConnectionType';

/**
 * The UpdateConnectionRequestAllOf model module.
 * @module model/UpdateConnectionRequestAllOf
 * @version 0.0.26
 */
class UpdateConnectionRequestAllOf {
    /**
     * Constructs a new <code>UpdateConnectionRequestAllOf</code>.
     * @alias module:model/UpdateConnectionRequestAllOf
     */
    constructor() { 
        
        UpdateConnectionRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateConnectionRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateConnectionRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateConnectionRequestAllOf} The populated <code>UpdateConnectionRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateConnectionRequestAllOf();

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
 * The name of the consumer
 * @member {String} name
 */
UpdateConnectionRequestAllOf.prototype['name'] = undefined;

/**
 * The description of the consumer
 * @member {String} description
 */
UpdateConnectionRequestAllOf.prototype['description'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
UpdateConnectionRequestAllOf.prototype['constraints'] = undefined;

/**
 * The transformer to use, if empty the default system transformer will be used
 * @member {String} transformerId
 */
UpdateConnectionRequestAllOf.prototype['transformerId'] = undefined;

/**
 * @member {module:model/ConnectionType} connectionType
 */
UpdateConnectionRequestAllOf.prototype['connectionType'] = undefined;

/**
 * Consumer secret used for authentication
 * @member {String} secret
 */
UpdateConnectionRequestAllOf.prototype['secret'] = undefined;

/**
 * Consumer username for authentication
 * @member {String} user
 */
UpdateConnectionRequestAllOf.prototype['user'] = undefined;






export default UpdateConnectionRequestAllOf;

