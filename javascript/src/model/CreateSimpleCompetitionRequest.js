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
import CompetitionType from './CompetitionType';
import CreateOptParamModels from './CreateOptParamModels';
import CreateRewardRequest from './CreateRewardRequest';
import CreateSimpleCompetitionRequestAllOf from './CreateSimpleCompetitionRequestAllOf';
import DependantOn from './DependantOn';
import Rule from './Rule';
import TournamentStrategies from './TournamentStrategies';
import Translation from './Translation';

/**
 * The CreateSimpleCompetitionRequest model module.
 * @module model/CreateSimpleCompetitionRequest
 * @version 0.0.26
 */
class CreateSimpleCompetitionRequest {
    /**
     * Constructs a new <code>CreateSimpleCompetitionRequest</code>.
     * @alias module:model/CreateSimpleCompetitionRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateSimpleCompetitionRequestAllOf
     * @param competitionType {module:model/CompetitionType} 
     * @param name {String} A name or a name of a competition. Can be translated
     * @param minNumberOfEntrants {Number} Maximum number of partiipants allowed in a competition
     * @param scheduledStartDate {Date} ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
     * @param scheduledEndDate {Date} ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
     * @param productIds {Array.<String>} 
     */
    constructor(competitionType, name, minNumberOfEntrants, scheduledStartDate, scheduledEndDate, productIds) { 
        CreateOptParamModels.initialize(this);CreateSimpleCompetitionRequestAllOf.initialize(this, competitionType, name, minNumberOfEntrants, scheduledStartDate, scheduledEndDate, productIds);
        CreateSimpleCompetitionRequest.initialize(this, competitionType, name, minNumberOfEntrants, scheduledStartDate, scheduledEndDate, productIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, competitionType, name, minNumberOfEntrants, scheduledStartDate, scheduledEndDate, productIds) { 
        obj['competitionType'] = competitionType;
        obj['name'] = name;
        obj['minNumberOfEntrants'] = minNumberOfEntrants;
        obj['scheduledStartDate'] = scheduledStartDate;
        obj['scheduledEndDate'] = scheduledEndDate;
        obj['productIds'] = productIds;
    }

    /**
     * Constructs a <code>CreateSimpleCompetitionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSimpleCompetitionRequest} obj Optional instance to populate.
     * @return {module:model/CreateSimpleCompetitionRequest} The populated <code>CreateSimpleCompetitionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSimpleCompetitionRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateSimpleCompetitionRequestAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [Rule]);
            }
            if (data.hasOwnProperty('scheduledStartDate')) {
                obj['scheduledStartDate'] = ApiClient.convertToType(data['scheduledStartDate'], 'Date');
            }
            if (data.hasOwnProperty('scheduledEndDate')) {
                obj['scheduledEndDate'] = ApiClient.convertToType(data['scheduledEndDate'], 'Date');
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
            if (data.hasOwnProperty('rewards')) {
                obj['rewards'] = ApiClient.convertToType(data['rewards'], [CreateRewardRequest]);
            }
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
            if (data.hasOwnProperty('productIds')) {
                obj['productIds'] = ApiClient.convertToType(data['productIds'], ['String']);
            }
            if (data.hasOwnProperty('entrantMemberTagsFilter')) {
                obj['entrantMemberTagsFilter'] = DependantOn.constructFromObject(data['entrantMemberTagsFilter']);
            }
            if (data.hasOwnProperty('productTagsFilter')) {
                obj['productTagsFilter'] = DependantOn.constructFromObject(data['productTagsFilter']);
            }
            if (data.hasOwnProperty('strategies')) {
                obj['strategies'] = TournamentStrategies.constructFromObject(data['strategies']);
            }
        }
        return obj;
    }


}

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateSimpleCompetitionRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateSimpleCompetitionRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateSimpleCompetitionRequest.prototype['metadata'] = undefined;

/**
 * @member {module:model/CompetitionType} competitionType
 */
CreateSimpleCompetitionRequest.prototype['competitionType'] = undefined;

/**
 * A name or a name of a competition. Can be translated
 * @member {String} name
 */
CreateSimpleCompetitionRequest.prototype['name'] = undefined;

/**
 * Description of the competition. Can be translated
 * @member {String} description
 */
CreateSimpleCompetitionRequest.prototype['description'] = undefined;

/**
 * Terms and conditions of a competition. Can be translated
 * @member {String} termsAndConditions
 */
CreateSimpleCompetitionRequest.prototype['termsAndConditions'] = undefined;

/**
 * @member {String} entrantMemberType
 */
CreateSimpleCompetitionRequest.prototype['entrantMemberType'] = undefined;

/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} maxNumberOfEntrants
 */
CreateSimpleCompetitionRequest.prototype['maxNumberOfEntrants'] = undefined;

/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} minNumberOfEntrants
 */
CreateSimpleCompetitionRequest.prototype['minNumberOfEntrants'] = undefined;

/**
 * @member {Array.<module:model/Rule>} rules
 */
CreateSimpleCompetitionRequest.prototype['rules'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
CreateSimpleCompetitionRequest.prototype['scheduledStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
CreateSimpleCompetitionRequest.prototype['scheduledEndDate'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateSimpleCompetitionRequest.prototype['translations'] = undefined;

/**
 * @member {Array.<module:model/CreateRewardRequest>} rewards
 */
CreateSimpleCompetitionRequest.prototype['rewards'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
CreateSimpleCompetitionRequest.prototype['addConstraints'] = undefined;

/**
 * 
 * @member {Array.<String>} productIds
 */
CreateSimpleCompetitionRequest.prototype['productIds'] = undefined;

/**
 * @member {module:model/DependantOn} entrantMemberTagsFilter
 */
CreateSimpleCompetitionRequest.prototype['entrantMemberTagsFilter'] = undefined;

/**
 * @member {module:model/DependantOn} productTagsFilter
 */
CreateSimpleCompetitionRequest.prototype['productTagsFilter'] = undefined;

/**
 * @member {module:model/TournamentStrategies} strategies
 */
CreateSimpleCompetitionRequest.prototype['strategies'] = undefined;


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
// Implement CreateSimpleCompetitionRequestAllOf interface:
/**
 * @member {module:model/CompetitionType} competitionType
 */
CreateSimpleCompetitionRequestAllOf.prototype['competitionType'] = undefined;
/**
 * A name or a name of a competition. Can be translated
 * @member {String} name
 */
CreateSimpleCompetitionRequestAllOf.prototype['name'] = undefined;
/**
 * Description of the competition. Can be translated
 * @member {String} description
 */
CreateSimpleCompetitionRequestAllOf.prototype['description'] = undefined;
/**
 * Terms and conditions of a competition. Can be translated
 * @member {String} termsAndConditions
 */
CreateSimpleCompetitionRequestAllOf.prototype['termsAndConditions'] = undefined;
/**
 * @member {String} entrantMemberType
 */
CreateSimpleCompetitionRequestAllOf.prototype['entrantMemberType'] = undefined;
/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} maxNumberOfEntrants
 */
CreateSimpleCompetitionRequestAllOf.prototype['maxNumberOfEntrants'] = undefined;
/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} minNumberOfEntrants
 */
CreateSimpleCompetitionRequestAllOf.prototype['minNumberOfEntrants'] = undefined;
/**
 * @member {Array.<module:model/Rule>} rules
 */
CreateSimpleCompetitionRequestAllOf.prototype['rules'] = undefined;
/**
 * ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
CreateSimpleCompetitionRequestAllOf.prototype['scheduledStartDate'] = undefined;
/**
 * ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
CreateSimpleCompetitionRequestAllOf.prototype['scheduledEndDate'] = undefined;
/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateSimpleCompetitionRequestAllOf.prototype['translations'] = undefined;
/**
 * @member {Array.<module:model/CreateRewardRequest>} rewards
 */
CreateSimpleCompetitionRequestAllOf.prototype['rewards'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
CreateSimpleCompetitionRequestAllOf.prototype['addConstraints'] = undefined;
/**
 * 
 * @member {Array.<String>} productIds
 */
CreateSimpleCompetitionRequestAllOf.prototype['productIds'] = undefined;
/**
 * @member {module:model/DependantOn} entrantMemberTagsFilter
 */
CreateSimpleCompetitionRequestAllOf.prototype['entrantMemberTagsFilter'] = undefined;
/**
 * @member {module:model/DependantOn} productTagsFilter
 */
CreateSimpleCompetitionRequestAllOf.prototype['productTagsFilter'] = undefined;
/**
 * @member {module:model/TournamentStrategies} strategies
 */
CreateSimpleCompetitionRequestAllOf.prototype['strategies'] = undefined;




export default CreateSimpleCompetitionRequest;

