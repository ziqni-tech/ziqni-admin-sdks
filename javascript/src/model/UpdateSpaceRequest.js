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

/**
 * The UpdateSpaceRequest model module.
 * @module model/UpdateSpaceRequest
 * @version 0.0.26
 */
class UpdateSpaceRequest {
    /**
     * Constructs a new <code>UpdateSpaceRequest</code>.
     * @alias module:model/UpdateSpaceRequest
     */
    constructor() { 
        
        UpdateSpaceRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateSpaceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateSpaceRequest} obj Optional instance to populate.
     * @return {module:model/UpdateSpaceRequest} The populated <code>UpdateSpaceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateSpaceRequest();

            if (data.hasOwnProperty('accountType')) {
                obj['accountType'] = ApiClient.convertToType(data['accountType'], 'String');
            }
            if (data.hasOwnProperty('masterSpace')) {
                obj['masterSpace'] = ApiClient.convertToType(data['masterSpace'], 'String');
            }
            if (data.hasOwnProperty('baseCurrencyUOM')) {
                obj['baseCurrencyUOM'] = ApiClient.convertToType(data['baseCurrencyUOM'], 'String');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Type of account; personal or company or vendor
 * @member {String} accountType
 */
UpdateSpaceRequest.prototype['accountType'] = undefined;

/**
 * The master account for this account
 * @member {String} masterSpace
 */
UpdateSpaceRequest.prototype['masterSpace'] = undefined;

/**
 * Foreign key to unit of measure id.
 * @member {String} baseCurrencyUOM
 */
UpdateSpaceRequest.prototype['baseCurrencyUOM'] = undefined;

/**
 * Additional constraints, if set means true
 * @member {Array.<String>} constraints
 */
UpdateSpaceRequest.prototype['constraints'] = undefined;






export default UpdateSpaceRequest;

