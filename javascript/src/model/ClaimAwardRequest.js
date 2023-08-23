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

/**
 * The ClaimAwardRequest model module.
 * @module model/ClaimAwardRequest
 * @version 0.0.26
 */
class ClaimAwardRequest {
    /**
     * Constructs a new <code>ClaimAwardRequest</code>.
     * @alias module:model/ClaimAwardRequest
     * @param id {String} Unique system identifier of an Award
     * @param constraints {Array.<String>} Additional constraints, if the value is present it means the
     */
    constructor(id, constraints) { 
        
        ClaimAwardRequest.initialize(this, id, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, constraints) { 
        obj['id'] = id;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>ClaimAwardRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClaimAwardRequest} obj Optional instance to populate.
     * @return {module:model/ClaimAwardRequest} The populated <code>ClaimAwardRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClaimAwardRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Unique system identifier of an Award
 * @member {String} id
 */
ClaimAwardRequest.prototype['id'] = undefined;

/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
ClaimAwardRequest.prototype['constraints'] = undefined;






export default ClaimAwardRequest;

