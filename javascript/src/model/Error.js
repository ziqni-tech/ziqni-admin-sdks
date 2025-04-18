/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.19
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ErrorDetail from './ErrorDetail';

/**
 * The Error model module.
 * @module model/Error
 * @version 0.0.26
 */
class Error {
    /**
     * Constructs a new <code>Error</code>.
     * @alias module:model/Error
     * @param errorCode {Number} A unique system identifier that describes this specific error
     * @param message {String} The error description
     */
    constructor(errorCode, message) { 
        
        Error.initialize(this, errorCode, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, errorCode, message) { 
        obj['errorCode'] = errorCode;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Error} obj Optional instance to populate.
     * @return {module:model/Error} The populated <code>Error</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Error();

            if (data.hasOwnProperty('modelId')) {
                obj['modelId'] = ApiClient.convertToType(data['modelId'], 'String');
            }
            if (data.hasOwnProperty('errorCode')) {
                obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('errorAt')) {
                obj['errorAt'] = ApiClient.convertToType(data['errorAt'], 'Number');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], [ErrorDetail]);
            }
        }
        return obj;
    }


}

/**
 * The identifier of the record this error relates to (This value only gets set if the error could relate to more than one object)
 * @member {String} modelId
 */
Error.prototype['modelId'] = undefined;

/**
 * A unique system identifier that describes this specific error
 * @member {Number} errorCode
 */
Error.prototype['errorCode'] = undefined;

/**
 * The error description
 * @member {String} message
 */
Error.prototype['message'] = undefined;

/**
 * The object number that returned the error
 * @member {Number} errorAt
 */
Error.prototype['errorAt'] = undefined;

/**
 * @member {Array.<module:model/ErrorDetail>} detail
 */
Error.prototype['detail'] = undefined;






export default Error;

