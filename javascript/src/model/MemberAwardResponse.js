/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.18
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Error from './Error';
import MemberAward from './MemberAward';
import MetaExtended from './MetaExtended';

/**
 * The MemberAwardResponse model module.
 * @module model/MemberAwardResponse
 * @version 0.0.26
 */
class MemberAwardResponse {
    /**
     * Constructs a new <code>MemberAwardResponse</code>.
     * This is the response for Member Award
     * @alias module:model/MemberAwardResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        MemberAwardResponse.initialize(this, meta);
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
     * Constructs a <code>MemberAwardResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemberAwardResponse} obj Optional instance to populate.
     * @return {module:model/MemberAwardResponse} The populated <code>MemberAwardResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MemberAwardResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [MemberAward]);
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
MemberAwardResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/MemberAward>} results
 */
MemberAwardResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
MemberAwardResponse.prototype['errors'] = undefined;






export default MemberAwardResponse;

