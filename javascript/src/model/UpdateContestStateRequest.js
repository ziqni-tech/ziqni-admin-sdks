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
import ContestStateActions from './ContestStateActions';

/**
 * The UpdateContestStateRequest model module.
 * @module model/UpdateContestStateRequest
 * @version 0.0.26
 */
class UpdateContestStateRequest {
    /**
     * Constructs a new <code>UpdateContestStateRequest</code>.
     * @alias module:model/UpdateContestStateRequest
     */
    constructor() { 
        
        UpdateContestStateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateContestStateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateContestStateRequest} obj Optional instance to populate.
     * @return {module:model/UpdateContestStateRequest} The populated <code>UpdateContestStateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateContestStateRequest();

            if (data.hasOwnProperty('contestId')) {
                obj['contestId'] = ApiClient.convertToType(data['contestId'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ContestStateActions.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * A unique identifier of a Contest
 * @member {String} contestId
 */
UpdateContestStateRequest.prototype['contestId'] = undefined;

/**
 * @member {module:model/ContestStateActions} status
 */
UpdateContestStateRequest.prototype['status'] = undefined;






export default UpdateContestStateRequest;

