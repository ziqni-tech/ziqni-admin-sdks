/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.6
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CollaboratorRolesAvailable from './CollaboratorRolesAvailable';
import Error from './Error';
import MetaExtended from './MetaExtended';

/**
 * The CollaboratorRolesResponse model module.
 * @module model/CollaboratorRolesResponse
 * @version 0.0.26
 */
class CollaboratorRolesResponse {
    /**
     * Constructs a new <code>CollaboratorRolesResponse</code>.
     * @alias module:model/CollaboratorRolesResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        CollaboratorRolesResponse.initialize(this, meta);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, meta) { 
        obj['meta'] = meta;
    }

    /**
     * Constructs a <code>CollaboratorRolesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollaboratorRolesResponse} obj Optional instance to populate.
     * @return {module:model/CollaboratorRolesResponse} The populated <code>CollaboratorRolesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CollaboratorRolesResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [CollaboratorRolesAvailable]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MetaExtended} meta
 */
CollaboratorRolesResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/CollaboratorRolesAvailable>} results
 */
CollaboratorRolesResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
CollaboratorRolesResponse.prototype['errors'] = undefined;






export default CollaboratorRolesResponse;

