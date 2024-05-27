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
import ConnectionType from './ConnectionType';

/**
 * The CreateConnectionRequestAllOf model module.
 * @module model/CreateConnectionRequestAllOf
 * @version 0.0.26
 */
class CreateConnectionRequestAllOf {
    /**
     * Constructs a new <code>CreateConnectionRequestAllOf</code>.
     * @alias module:model/CreateConnectionRequestAllOf
     * @param name {String} The name of the consumer
     * @param connectionType {module:model/ConnectionType} 
     */
    constructor(name, connectionType) { 
        
        CreateConnectionRequestAllOf.initialize(this, name, connectionType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, connectionType) { 
        obj['name'] = name;
        obj['connectionType'] = connectionType;
    }

    /**
     * Constructs a <code>CreateConnectionRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateConnectionRequestAllOf} obj Optional instance to populate.
     * @return {module:model/CreateConnectionRequestAllOf} The populated <code>CreateConnectionRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateConnectionRequestAllOf();

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
CreateConnectionRequestAllOf.prototype['name'] = undefined;

/**
 * The description of the consumer
 * @member {String} description
 */
CreateConnectionRequestAllOf.prototype['description'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateConnectionRequestAllOf.prototype['constraints'] = undefined;

/**
 * The transformer to use, if empty the default system transformer will be used
 * @member {String} transformerId
 */
CreateConnectionRequestAllOf.prototype['transformerId'] = undefined;

/**
 * @member {module:model/ConnectionType} connectionType
 */
CreateConnectionRequestAllOf.prototype['connectionType'] = undefined;

/**
 * Consumer secret used for authentication
 * @member {String} secret
 */
CreateConnectionRequestAllOf.prototype['secret'] = undefined;

/**
 * Consumer username for authentication
 * @member {String} user
 */
CreateConnectionRequestAllOf.prototype['user'] = undefined;






export default CreateConnectionRequestAllOf;

