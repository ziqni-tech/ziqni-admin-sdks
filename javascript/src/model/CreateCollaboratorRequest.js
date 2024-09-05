/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.15
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateCollaboratorRequest model module.
 * @module model/CreateCollaboratorRequest
 * @version 0.0.26
 */
class CreateCollaboratorRequest {
    /**
     * Constructs a new <code>CreateCollaboratorRequest</code>.
     * @alias module:model/CreateCollaboratorRequest
     * @param email {String} The email of the user to log in
     * @param addRoles {Array.<String>} 
     */
    constructor(email, addRoles) { 
        
        CreateCollaboratorRequest.initialize(this, email, addRoles);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, addRoles) { 
        obj['email'] = email;
        obj['addRoles'] = addRoles;
    }

    /**
     * Constructs a <code>CreateCollaboratorRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCollaboratorRequest} obj Optional instance to populate.
     * @return {module:model/CreateCollaboratorRequest} The populated <code>CreateCollaboratorRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCollaboratorRequest();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('addRoles')) {
                obj['addRoles'] = ApiClient.convertToType(data['addRoles'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The email of the user to log in
 * @member {String} email
 */
CreateCollaboratorRequest.prototype['email'] = undefined;

/**
 * 
 * @member {Array.<String>} addRoles
 */
CreateCollaboratorRequest.prototype['addRoles'] = undefined;






export default CreateCollaboratorRequest;

