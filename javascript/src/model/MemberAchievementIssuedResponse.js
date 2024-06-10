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
import MemberAchievementCount from './MemberAchievementCount';
import MetaExtended from './MetaExtended';

/**
 * The MemberAchievementIssuedResponse model module.
 * @module model/MemberAchievementIssuedResponse
 * @version 0.0.26
 */
class MemberAchievementIssuedResponse {
    /**
     * Constructs a new <code>MemberAchievementIssuedResponse</code>.
     * This is the response for Member Achievement Issued Response
     * @alias module:model/MemberAchievementIssuedResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        MemberAchievementIssuedResponse.initialize(this, meta);
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
     * Constructs a <code>MemberAchievementIssuedResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemberAchievementIssuedResponse} obj Optional instance to populate.
     * @return {module:model/MemberAchievementIssuedResponse} The populated <code>MemberAchievementIssuedResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MemberAchievementIssuedResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [MemberAchievementCount]);
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
MemberAchievementIssuedResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/MemberAchievementCount>} results
 */
MemberAchievementIssuedResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
MemberAchievementIssuedResponse.prototype['errors'] = undefined;






export default MemberAchievementIssuedResponse;

