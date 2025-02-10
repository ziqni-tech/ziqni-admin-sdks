/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.17
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Collaborator from './Collaborator';
import Error from './Error';
import MetaExtended from './MetaExtended';

/**
 * The CollaboratorResponse model module.
 * @module model/CollaboratorResponse
 * @version 0.0.26
 */
class CollaboratorResponse {
    /**
     * Constructs a new <code>CollaboratorResponse</code>.
     * @alias module:model/CollaboratorResponse
     * @param meta {module:model/MetaExtended} 
     * @param results {Array.<module:model/Collaborator>} 
     */
    constructor(meta, results) { 
        
        CollaboratorResponse.initialize(this, meta, results);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, meta, results) { 
        obj['meta'] = meta;
        obj['results'] = results;
    }

    /**
     * Constructs a <code>CollaboratorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollaboratorResponse} obj Optional instance to populate.
     * @return {module:model/CollaboratorResponse} The populated <code>CollaboratorResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CollaboratorResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Collaborator]);
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
CollaboratorResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Collaborator>} results
 */
CollaboratorResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
CollaboratorResponse.prototype['errors'] = undefined;






export default CollaboratorResponse;

