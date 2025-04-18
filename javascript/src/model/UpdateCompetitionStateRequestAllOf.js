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
import CompetitionStateActions from './CompetitionStateActions';

/**
 * The UpdateCompetitionStateRequestAllOf model module.
 * @module model/UpdateCompetitionStateRequestAllOf
 * @version 0.0.26
 */
class UpdateCompetitionStateRequestAllOf {
    /**
     * Constructs a new <code>UpdateCompetitionStateRequestAllOf</code>.
     * @alias module:model/UpdateCompetitionStateRequestAllOf
     * @param status {module:model/CompetitionStateActions} 
     */
    constructor(status) { 
        
        UpdateCompetitionStateRequestAllOf.initialize(this, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status) { 
        obj['status'] = status;
    }

    /**
     * Constructs a <code>UpdateCompetitionStateRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCompetitionStateRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateCompetitionStateRequestAllOf} The populated <code>UpdateCompetitionStateRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCompetitionStateRequestAllOf();

            if (data.hasOwnProperty('status')) {
                obj['status'] = CompetitionStateActions.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CompetitionStateActions} status
 */
UpdateCompetitionStateRequestAllOf.prototype['status'] = undefined;






export default UpdateCompetitionStateRequestAllOf;

