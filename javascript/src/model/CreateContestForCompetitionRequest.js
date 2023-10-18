/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.9
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CreateContestForCompetitionRequestAllOf from './CreateContestForCompetitionRequestAllOf';
import CreateOptParamModels from './CreateOptParamModels';
import CreateRewardRequest from './CreateRewardRequest';
import RoundType from './RoundType';
import Rule from './Rule';
import TournamentStrategies from './TournamentStrategies';
import Translation from './Translation';

/**
 * The CreateContestForCompetitionRequest model module.
 * @module model/CreateContestForCompetitionRequest
 * @version 0.0.26
 */
class CreateContestForCompetitionRequest {
    /**
     * Constructs a new <code>CreateContestForCompetitionRequest</code>.
     * @alias module:model/CreateContestForCompetitionRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateContestForCompetitionRequestAllOf
     * @param competitionId {String} A unique identifier of a Competition
     * @param row {Number} The row number for displaying the Contest in a table
     * @param round {Number} To what round does the contest belong
     * @param name {String} A name for the Contest. Can be translated
     * @param roundType {module:model/RoundType} 
     * @param minNumberOfEntrants {Number} Minimum number of entrants for the contest
     * @param scheduledStartDate {Date} ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone
     * @param scheduledEndDate {Date} ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone
     * @param strategies {module:model/TournamentStrategies} 
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(competitionId, row, round, name, roundType, minNumberOfEntrants, scheduledStartDate, scheduledEndDate, strategies, constraints) { 
        CreateOptParamModels.initialize(this);CreateContestForCompetitionRequestAllOf.initialize(this, competitionId, row, round, name, roundType, minNumberOfEntrants, scheduledStartDate, scheduledEndDate, strategies, constraints);
        CreateContestForCompetitionRequest.initialize(this, competitionId, row, round, name, roundType, minNumberOfEntrants, scheduledStartDate, scheduledEndDate, strategies, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, competitionId, row, round, name, roundType, minNumberOfEntrants, scheduledStartDate, scheduledEndDate, strategies, constraints) { 
        obj['competitionId'] = competitionId;
        obj['row'] = row;
        obj['round'] = round;
        obj['name'] = name;
        obj['roundType'] = roundType;
        obj['minNumberOfEntrants'] = minNumberOfEntrants;
        obj['scheduledStartDate'] = scheduledStartDate;
        obj['scheduledEndDate'] = scheduledEndDate;
        obj['strategies'] = strategies;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>CreateContestForCompetitionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateContestForCompetitionRequest} obj Optional instance to populate.
     * @return {module:model/CreateContestForCompetitionRequest} The populated <code>CreateContestForCompetitionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateContestForCompetitionRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateContestForCompetitionRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('competitionId')) {
                obj['competitionId'] = ApiClient.convertToType(data['competitionId'], 'String');
            }
            if (data.hasOwnProperty('row')) {
                obj['row'] = ApiClient.convertToType(data['row'], 'Number');
            }
            if (data.hasOwnProperty('round')) {
                obj['round'] = ApiClient.convertToType(data['round'], 'Number');
            }
            if (data.hasOwnProperty('groupStage')) {
                obj['groupStage'] = ApiClient.convertToType(data['groupStage'], 'Number');
            }
            if (data.hasOwnProperty('groupStageLabel')) {
                obj['groupStageLabel'] = ApiClient.convertToType(data['groupStageLabel'], 'String');
            }
            if (data.hasOwnProperty('entrantsFromContest')) {
                obj['entrantsFromContest'] = ApiClient.convertToType(data['entrantsFromContest'], ['String']);
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
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [Rule]);
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
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
            if (data.hasOwnProperty('rewards')) {
                obj['rewards'] = ApiClient.convertToType(data['rewards'], [CreateRewardRequest]);
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('banner')) {
                obj['banner'] = ApiClient.convertToType(data['banner'], 'String');
            }
            if (data.hasOwnProperty('bannerLowResolution')) {
                obj['bannerLowResolution'] = ApiClient.convertToType(data['bannerLowResolution'], 'String');
            }
            if (data.hasOwnProperty('bannerHighResolution')) {
                obj['bannerHighResolution'] = ApiClient.convertToType(data['bannerHighResolution'], 'String');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateContestForCompetitionRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateContestForCompetitionRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateContestForCompetitionRequest.prototype['metadata'] = undefined;

/**
 * A unique identifier of a Competition
 * @member {String} competitionId
 */
CreateContestForCompetitionRequest.prototype['competitionId'] = undefined;

/**
 * The row number for displaying the Contest in a table
 * @member {Number} row
 */
CreateContestForCompetitionRequest.prototype['row'] = undefined;

/**
 * To what round does the contest belong
 * @member {Number} round
 */
CreateContestForCompetitionRequest.prototype['round'] = undefined;

/**
 * Is used for more complex Competitions e.g. multi round competitions where round 1 group stage matched round 2
 * @member {Number} groupStage
 */
CreateContestForCompetitionRequest.prototype['groupStage'] = undefined;

/**
 * The name of the group stages
 * @member {String} groupStageLabel
 */
CreateContestForCompetitionRequest.prototype['groupStageLabel'] = undefined;

/**
 * A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional.
 * @member {Array.<String>} entrantsFromContest
 */
CreateContestForCompetitionRequest.prototype['entrantsFromContest'] = undefined;

/**
 * A name for the Contest. Can be translated
 * @member {String} name
 */
CreateContestForCompetitionRequest.prototype['name'] = undefined;

/**
 * A name for the Contest. Can be translated
 * @member {String} description
 */
CreateContestForCompetitionRequest.prototype['description'] = undefined;

/**
 * A name for the Contest. Can be translated
 * @member {String} termsAndConditions
 */
CreateContestForCompetitionRequest.prototype['termsAndConditions'] = undefined;

/**
 * @member {module:model/RoundType} roundType
 */
CreateContestForCompetitionRequest.prototype['roundType'] = undefined;

/**
 * Maximum number of entrants for the contest
 * @member {Number} maxNumberOfEntrants
 */
CreateContestForCompetitionRequest.prototype['maxNumberOfEntrants'] = undefined;

/**
 * Minimum number of entrants for the contest
 * @member {Number} minNumberOfEntrants
 */
CreateContestForCompetitionRequest.prototype['minNumberOfEntrants'] = undefined;

/**
 * @member {Array.<module:model/Rule>} rules
 */
CreateContestForCompetitionRequest.prototype['rules'] = undefined;

/**
 * ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
CreateContestForCompetitionRequest.prototype['scheduledStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
CreateContestForCompetitionRequest.prototype['scheduledEndDate'] = undefined;

/**
 * @member {module:model/TournamentStrategies} strategies
 */
CreateContestForCompetitionRequest.prototype['strategies'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateContestForCompetitionRequest.prototype['translations'] = undefined;

/**
 * @member {Array.<module:model/CreateRewardRequest>} rewards
 */
CreateContestForCompetitionRequest.prototype['rewards'] = undefined;

/**
 * Link to the icon
 * @member {String} icon
 */
CreateContestForCompetitionRequest.prototype['icon'] = undefined;

/**
 * Link to the banner
 * @member {String} banner
 */
CreateContestForCompetitionRequest.prototype['banner'] = undefined;

/**
 * Link to the bannerLowResolution
 * @member {String} bannerLowResolution
 */
CreateContestForCompetitionRequest.prototype['bannerLowResolution'] = undefined;

/**
 * Link to the bannerHighResolution
 * @member {String} bannerHighResolution
 */
CreateContestForCompetitionRequest.prototype['bannerHighResolution'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateContestForCompetitionRequest.prototype['constraints'] = undefined;


// Implement CreateOptParamModels interface:
/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
CreateOptParamModels.prototype['metadata'] = undefined;
// Implement CreateContestForCompetitionRequestAllOf interface:
/**
 * A unique identifier of a Competition
 * @member {String} competitionId
 */
CreateContestForCompetitionRequestAllOf.prototype['competitionId'] = undefined;
/**
 * The row number for displaying the Contest in a table
 * @member {Number} row
 */
CreateContestForCompetitionRequestAllOf.prototype['row'] = undefined;
/**
 * To what round does the contest belong
 * @member {Number} round
 */
CreateContestForCompetitionRequestAllOf.prototype['round'] = undefined;
/**
 * Is used for more complex Competitions e.g. multi round competitions where round 1 group stage matched round 2
 * @member {Number} groupStage
 */
CreateContestForCompetitionRequestAllOf.prototype['groupStage'] = undefined;
/**
 * The name of the group stages
 * @member {String} groupStageLabel
 */
CreateContestForCompetitionRequestAllOf.prototype['groupStageLabel'] = undefined;
/**
 * A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional.
 * @member {Array.<String>} entrantsFromContest
 */
CreateContestForCompetitionRequestAllOf.prototype['entrantsFromContest'] = undefined;
/**
 * A name for the Contest. Can be translated
 * @member {String} name
 */
CreateContestForCompetitionRequestAllOf.prototype['name'] = undefined;
/**
 * A name for the Contest. Can be translated
 * @member {String} description
 */
CreateContestForCompetitionRequestAllOf.prototype['description'] = undefined;
/**
 * A name for the Contest. Can be translated
 * @member {String} termsAndConditions
 */
CreateContestForCompetitionRequestAllOf.prototype['termsAndConditions'] = undefined;
/**
 * @member {module:model/RoundType} roundType
 */
CreateContestForCompetitionRequestAllOf.prototype['roundType'] = undefined;
/**
 * Maximum number of entrants for the contest
 * @member {Number} maxNumberOfEntrants
 */
CreateContestForCompetitionRequestAllOf.prototype['maxNumberOfEntrants'] = undefined;
/**
 * Minimum number of entrants for the contest
 * @member {Number} minNumberOfEntrants
 */
CreateContestForCompetitionRequestAllOf.prototype['minNumberOfEntrants'] = undefined;
/**
 * @member {Array.<module:model/Rule>} rules
 */
CreateContestForCompetitionRequestAllOf.prototype['rules'] = undefined;
/**
 * ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
CreateContestForCompetitionRequestAllOf.prototype['scheduledStartDate'] = undefined;
/**
 * ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
CreateContestForCompetitionRequestAllOf.prototype['scheduledEndDate'] = undefined;
/**
 * @member {module:model/TournamentStrategies} strategies
 */
CreateContestForCompetitionRequestAllOf.prototype['strategies'] = undefined;
/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateContestForCompetitionRequestAllOf.prototype['translations'] = undefined;
/**
 * @member {Array.<module:model/CreateRewardRequest>} rewards
 */
CreateContestForCompetitionRequestAllOf.prototype['rewards'] = undefined;
/**
 * Link to the icon
 * @member {String} icon
 */
CreateContestForCompetitionRequestAllOf.prototype['icon'] = undefined;
/**
 * Link to the banner
 * @member {String} banner
 */
CreateContestForCompetitionRequestAllOf.prototype['banner'] = undefined;
/**
 * Link to the bannerLowResolution
 * @member {String} bannerLowResolution
 */
CreateContestForCompetitionRequestAllOf.prototype['bannerLowResolution'] = undefined;
/**
 * Link to the bannerHighResolution
 * @member {String} bannerHighResolution
 */
CreateContestForCompetitionRequestAllOf.prototype['bannerHighResolution'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateContestForCompetitionRequestAllOf.prototype['constraints'] = undefined;




export default CreateContestForCompetitionRequest;

