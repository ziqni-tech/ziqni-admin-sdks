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
import Error from './Error';

/**
 * The EntrantCountResponse model module.
 * @module model/EntrantCountResponse
 * @version 0.0.26
 */
class EntrantCountResponse {
    /**
     * Constructs a new <code>EntrantCountResponse</code>.
     * @alias module:model/EntrantCountResponse
     * @param numberOfRecords {Number} 
     * @param downloadUrl {String} 
     */
    constructor(numberOfRecords, downloadUrl) { 
        
        EntrantCountResponse.initialize(this, numberOfRecords, downloadUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, numberOfRecords, downloadUrl) { 
        obj['numberOfRecords'] = numberOfRecords;
        obj['downloadUrl'] = downloadUrl;
    }

    /**
     * Constructs a <code>EntrantCountResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrantCountResponse} obj Optional instance to populate.
     * @return {module:model/EntrantCountResponse} The populated <code>EntrantCountResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntrantCountResponse();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
            if (data.hasOwnProperty('numberOfRecords')) {
                obj['numberOfRecords'] = ApiClient.convertToType(data['numberOfRecords'], 'Number');
            }
            if (data.hasOwnProperty('downloadUrl')) {
                obj['downloadUrl'] = ApiClient.convertToType(data['downloadUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Error>} errors
 */
EntrantCountResponse.prototype['errors'] = undefined;

/**
 * @member {Number} numberOfRecords
 */
EntrantCountResponse.prototype['numberOfRecords'] = undefined;

/**
 * @member {String} downloadUrl
 */
EntrantCountResponse.prototype['downloadUrl'] = undefined;






export default EntrantCountResponse;

