/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.17
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CompetitionStateActions from './CompetitionStateActions';
import UpdateCompetitionStateRequestAllOf from './UpdateCompetitionStateRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';

/**
 * The UpdateCompetitionStateRequest model module.
 * @module model/UpdateCompetitionStateRequest
 * @version 0.0.26
 */
class UpdateCompetitionStateRequest {
    /**
     * Constructs a new <code>UpdateCompetitionStateRequest</code>.
     * @alias module:model/UpdateCompetitionStateRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateCompetitionStateRequestAllOf
     * @param id {String} A unique system generated identifier
     * @param status {module:model/CompetitionStateActions} 
     */
    constructor(id, status) { 
        UpdateModelDefault.initialize(this, id);UpdateCompetitionStateRequestAllOf.initialize(this, status);
        UpdateCompetitionStateRequest.initialize(this, id, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, status) { 
        obj['id'] = id;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>UpdateCompetitionStateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCompetitionStateRequest} obj Optional instance to populate.
     * @return {module:model/UpdateCompetitionStateRequest} The populated <code>UpdateCompetitionStateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCompetitionStateRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateCompetitionStateRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = CompetitionStateActions.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateCompetitionStateRequest.prototype['id'] = undefined;

/**
 * @member {module:model/CompetitionStateActions} status
 */
UpdateCompetitionStateRequest.prototype['status'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateCompetitionStateRequestAllOf interface:
/**
 * @member {module:model/CompetitionStateActions} status
 */
UpdateCompetitionStateRequestAllOf.prototype['status'] = undefined;




export default UpdateCompetitionStateRequest;

