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
import RoundType from './RoundType';
import TournamentStrategies from './TournamentStrategies';
import UpdateContestRequestAllOf from './UpdateContestRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';

/**
 * The UpdateContestRequest model module.
 * @module model/UpdateContestRequest
 * @version 0.0.26
 */
class UpdateContestRequest {
    /**
     * Constructs a new <code>UpdateContestRequest</code>.
     * @alias module:model/UpdateContestRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateContestRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateContestRequestAllOf.initialize(this);
        UpdateContestRequest.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>UpdateContestRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateContestRequest} obj Optional instance to populate.
     * @return {module:model/UpdateContestRequest} The populated <code>UpdateContestRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateContestRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateOptParamModels.constructFromObject(data, obj);
            UpdateContestRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('termsAndConditions')) {
                obj['termsAndConditions'] = ApiClient.convertToType(data['termsAndConditions'], 'String');
            }
            if (data.hasOwnProperty('roundType')) {
                obj['roundType'] = RoundType.constructFromObject(data['roundType']);
            }
            if (data.hasOwnProperty('maxNumberOfEntrants')) {
                obj['maxNumberOfEntrants'] = ApiClient.convertToType(data['maxNumberOfEntrants'], 'Number');
            }
            if (data.hasOwnProperty('minNumberOfEntrants')) {
                obj['minNumberOfEntrants'] = ApiClient.convertToType(data['minNumberOfEntrants'], 'Number');
            }
            if (data.hasOwnProperty('scheduledStartDate')) {
                obj['scheduledStartDate'] = ApiClient.convertToType(data['scheduledStartDate'], 'Date');
            }
            if (data.hasOwnProperty('scheduledEndDate')) {
                obj['scheduledEndDate'] = ApiClient.convertToType(data['scheduledEndDate'], 'Date');
            }
            if (data.hasOwnProperty('strategies')) {
                obj['strategies'] = TournamentStrategies.constructFromObject(data['strategies']);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateContestRequest.prototype['id'] = undefined;

/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateContestRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateContestRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
UpdateContestRequest.prototype['metadata'] = undefined;

/**
 * A name for the Contest. Can be translated
 * @member {String} name
 */
UpdateContestRequest.prototype['name'] = undefined;

/**
 * A name for the Contest. Can be translated
 * @member {String} description
 */
UpdateContestRequest.prototype['description'] = undefined;

/**
 * A name for the Contest. Can be translated
 * @member {String} termsAndConditions
 */
UpdateContestRequest.prototype['termsAndConditions'] = undefined;

/**
 * @member {module:model/RoundType} roundType
 */
UpdateContestRequest.prototype['roundType'] = undefined;

/**
 * Maximum number of entrants for the contest
 * @member {Number} maxNumberOfEntrants
 */
UpdateContestRequest.prototype['maxNumberOfEntrants'] = undefined;

/**
 * Minimum number of entrants for the contest
 * @member {Number} minNumberOfEntrants
 */
UpdateContestRequest.prototype['minNumberOfEntrants'] = undefined;

/**
 * ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
UpdateContestRequest.prototype['scheduledStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
UpdateContestRequest.prototype['scheduledEndDate'] = undefined;

/**
 * @member {module:model/TournamentStrategies} strategies
 */
UpdateContestRequest.prototype['strategies'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
UpdateContestRequest.prototype['constraints'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateOptParamModels interface:
/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
UpdateOptParamModels.prototype['metadata'] = undefined;
// Implement UpdateContestRequestAllOf interface:
/**
 * A name for the Contest. Can be translated
 * @member {String} name
 */
UpdateContestRequestAllOf.prototype['name'] = undefined;
/**
 * A name for the Contest. Can be translated
 * @member {String} description
 */
UpdateContestRequestAllOf.prototype['description'] = undefined;
/**
 * A name for the Contest. Can be translated
 * @member {String} termsAndConditions
 */
UpdateContestRequestAllOf.prototype['termsAndConditions'] = undefined;
/**
 * @member {module:model/RoundType} roundType
 */
UpdateContestRequestAllOf.prototype['roundType'] = undefined;
/**
 * Maximum number of entrants for the contest
 * @member {Number} maxNumberOfEntrants
 */
UpdateContestRequestAllOf.prototype['maxNumberOfEntrants'] = undefined;
/**
 * Minimum number of entrants for the contest
 * @member {Number} minNumberOfEntrants
 */
UpdateContestRequestAllOf.prototype['minNumberOfEntrants'] = undefined;
/**
 * ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
UpdateContestRequestAllOf.prototype['scheduledStartDate'] = undefined;
/**
 * ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
UpdateContestRequestAllOf.prototype['scheduledEndDate'] = undefined;
/**
 * @member {module:model/TournamentStrategies} strategies
 */
UpdateContestRequestAllOf.prototype['strategies'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
UpdateContestRequestAllOf.prototype['constraints'] = undefined;




export default UpdateContestRequest;

