/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CompetitionType from './CompetitionType';
import CreateContestForCompetitionRequest from './CreateContestForCompetitionRequest';
import DependantOn from './DependantOn';
import UpdateCompetitionRequestAllOf from './UpdateCompetitionRequestAllOf';
import UpdateContestRequest from './UpdateContestRequest';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';

/**
 * The UpdateCompetitionRequest model module.
 * @module model/UpdateCompetitionRequest
 * @version 0.0.26
 */
class UpdateCompetitionRequest {
    /**
     * Constructs a new <code>UpdateCompetitionRequest</code>.
     * @alias module:model/UpdateCompetitionRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateCompetitionRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateCompetitionRequestAllOf.initialize(this);
        UpdateCompetitionRequest.initialize(this, id);
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
     * Constructs a <code>UpdateCompetitionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCompetitionRequest} obj Optional instance to populate.
     * @return {module:model/UpdateCompetitionRequest} The populated <code>UpdateCompetitionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCompetitionRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateOptParamModels.constructFromObject(data, obj);
            UpdateCompetitionRequestAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('competitionType')) {
                obj['competitionType'] = CompetitionType.constructFromObject(data['competitionType']);
            }
            if (data.hasOwnProperty('numberOfRounds')) {
                obj['numberOfRounds'] = ApiClient.convertToType(data['numberOfRounds'], 'Number');
            }
            if (data.hasOwnProperty('numberOfGroupStages')) {
                obj['numberOfGroupStages'] = ApiClient.convertToType(data['numberOfGroupStages'], 'Number');
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
            if (data.hasOwnProperty('entrantMemberType')) {
                obj['entrantMemberType'] = ApiClient.convertToType(data['entrantMemberType'], 'String');
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
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
            if (data.hasOwnProperty('removeConstraints')) {
                obj['removeConstraints'] = ApiClient.convertToType(data['removeConstraints'], ['String']);
            }
            if (data.hasOwnProperty('productIds')) {
                obj['productIds'] = ApiClient.convertToType(data['productIds'], ['String']);
            }
            if (data.hasOwnProperty('createContests')) {
                obj['createContests'] = CreateContestForCompetitionRequest.constructFromObject(data['createContests']);
            }
            if (data.hasOwnProperty('updateContests')) {
                obj['updateContests'] = UpdateContestRequest.constructFromObject(data['updateContests']);
            }
            if (data.hasOwnProperty('entrantMemberTagsFilter')) {
                obj['entrantMemberTagsFilter'] = DependantOn.constructFromObject(data['entrantMemberTagsFilter']);
            }
            if (data.hasOwnProperty('productTagsFilter')) {
                obj['productTagsFilter'] = DependantOn.constructFromObject(data['productTagsFilter']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateCompetitionRequest.prototype['id'] = undefined;

/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateCompetitionRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateCompetitionRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
UpdateCompetitionRequest.prototype['metadata'] = undefined;

/**
 * @member {module:model/CompetitionType} competitionType
 */
UpdateCompetitionRequest.prototype['competitionType'] = undefined;

/**
 * Number of rounds to be played in a competition
 * @member {Number} numberOfRounds
 */
UpdateCompetitionRequest.prototype['numberOfRounds'] = undefined;

/**
 * Number of group stages
 * @member {Number} numberOfGroupStages
 */
UpdateCompetitionRequest.prototype['numberOfGroupStages'] = undefined;

/**
 * A name or a name of a competition. Can be translated
 * @member {String} name
 */
UpdateCompetitionRequest.prototype['name'] = undefined;

/**
 * Description of the competition. Can be translated
 * @member {String} description
 */
UpdateCompetitionRequest.prototype['description'] = undefined;

/**
 * Terms and conditions of a competition. Can be translated
 * @member {String} termsAndConditions
 */
UpdateCompetitionRequest.prototype['termsAndConditions'] = undefined;

/**
 * @member {String} entrantMemberType
 */
UpdateCompetitionRequest.prototype['entrantMemberType'] = undefined;

/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} maxNumberOfEntrants
 */
UpdateCompetitionRequest.prototype['maxNumberOfEntrants'] = undefined;

/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} minNumberOfEntrants
 */
UpdateCompetitionRequest.prototype['minNumberOfEntrants'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
UpdateCompetitionRequest.prototype['scheduledStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
UpdateCompetitionRequest.prototype['scheduledEndDate'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
UpdateCompetitionRequest.prototype['constraints'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
UpdateCompetitionRequest.prototype['addConstraints'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} removeConstraints
 */
UpdateCompetitionRequest.prototype['removeConstraints'] = undefined;

/**
 * 
 * @member {Array.<String>} productIds
 */
UpdateCompetitionRequest.prototype['productIds'] = undefined;

/**
 * @member {module:model/CreateContestForCompetitionRequest} createContests
 */
UpdateCompetitionRequest.prototype['createContests'] = undefined;

/**
 * @member {module:model/UpdateContestRequest} updateContests
 */
UpdateCompetitionRequest.prototype['updateContests'] = undefined;

/**
 * @member {module:model/DependantOn} entrantMemberTagsFilter
 */
UpdateCompetitionRequest.prototype['entrantMemberTagsFilter'] = undefined;

/**
 * @member {module:model/DependantOn} productTagsFilter
 */
UpdateCompetitionRequest.prototype['productTagsFilter'] = undefined;


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
// Implement UpdateCompetitionRequestAllOf interface:
/**
 * @member {module:model/CompetitionType} competitionType
 */
UpdateCompetitionRequestAllOf.prototype['competitionType'] = undefined;
/**
 * Number of rounds to be played in a competition
 * @member {Number} numberOfRounds
 */
UpdateCompetitionRequestAllOf.prototype['numberOfRounds'] = undefined;
/**
 * Number of group stages
 * @member {Number} numberOfGroupStages
 */
UpdateCompetitionRequestAllOf.prototype['numberOfGroupStages'] = undefined;
/**
 * A name or a name of a competition. Can be translated
 * @member {String} name
 */
UpdateCompetitionRequestAllOf.prototype['name'] = undefined;
/**
 * Description of the competition. Can be translated
 * @member {String} description
 */
UpdateCompetitionRequestAllOf.prototype['description'] = undefined;
/**
 * Terms and conditions of a competition. Can be translated
 * @member {String} termsAndConditions
 */
UpdateCompetitionRequestAllOf.prototype['termsAndConditions'] = undefined;
/**
 * @member {String} entrantMemberType
 */
UpdateCompetitionRequestAllOf.prototype['entrantMemberType'] = undefined;
/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} maxNumberOfEntrants
 */
UpdateCompetitionRequestAllOf.prototype['maxNumberOfEntrants'] = undefined;
/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} minNumberOfEntrants
 */
UpdateCompetitionRequestAllOf.prototype['minNumberOfEntrants'] = undefined;
/**
 * ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
UpdateCompetitionRequestAllOf.prototype['scheduledStartDate'] = undefined;
/**
 * ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
UpdateCompetitionRequestAllOf.prototype['scheduledEndDate'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
UpdateCompetitionRequestAllOf.prototype['constraints'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
UpdateCompetitionRequestAllOf.prototype['addConstraints'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} removeConstraints
 */
UpdateCompetitionRequestAllOf.prototype['removeConstraints'] = undefined;
/**
 * 
 * @member {Array.<String>} productIds
 */
UpdateCompetitionRequestAllOf.prototype['productIds'] = undefined;
/**
 * @member {module:model/CreateContestForCompetitionRequest} createContests
 */
UpdateCompetitionRequestAllOf.prototype['createContests'] = undefined;
/**
 * @member {module:model/UpdateContestRequest} updateContests
 */
UpdateCompetitionRequestAllOf.prototype['updateContests'] = undefined;
/**
 * @member {module:model/DependantOn} entrantMemberTagsFilter
 */
UpdateCompetitionRequestAllOf.prototype['entrantMemberTagsFilter'] = undefined;
/**
 * @member {module:model/DependantOn} productTagsFilter
 */
UpdateCompetitionRequestAllOf.prototype['productTagsFilter'] = undefined;




export default UpdateCompetitionRequest;
