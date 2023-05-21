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
import Achievement from './Achievement';
import Error from './Error';
import MetaExtended from './MetaExtended';

/**
 * The AchievementResponse model module.
 * @module model/AchievementResponse
 * @version 0.0.26
 */
class AchievementResponse {
    /**
     * Constructs a new <code>AchievementResponse</code>.
     * @alias module:model/AchievementResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        AchievementResponse.initialize(this, meta);
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
     * Constructs a <code>AchievementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AchievementResponse} obj Optional instance to populate.
     * @return {module:model/AchievementResponse} The populated <code>AchievementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AchievementResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Achievement]);
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
AchievementResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Achievement>} results
 */
AchievementResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
AchievementResponse.prototype['errors'] = undefined;






export default AchievementResponse;

