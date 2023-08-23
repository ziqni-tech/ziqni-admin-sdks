/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.7
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CompetitionType from './CompetitionType';
import CreateContestRequest from './CreateContestRequest';
import CreateRewardRequest from './CreateRewardRequest';
import DependantOn from './DependantOn';
import Rule from './Rule';
import Translation from './Translation';

/**
 * The CreateCompetitionRequestAllOf model module.
 * @module model/CreateCompetitionRequestAllOf
 * @version 0.0.26
 */
class CreateCompetitionRequestAllOf {
    /**
     * Constructs a new <code>CreateCompetitionRequestAllOf</code>.
     * @alias module:model/CreateCompetitionRequestAllOf
     * @param competitionType {module:model/CompetitionType} 
     * @param numberOfRounds {Number} Number of rounds to be played in a competition
     * @param name {String} A name or a name of a competition. Can be translated
     * @param minNumberOfEntrants {Number} Maximum number of partiipants allowed in a competition
     * @param scheduledStartDate {Date} ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
     * @param scheduledEndDate {Date} ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
     * @param constraints {Array.<String>} Additional constraints
     * @param productIds {Array.<String>} 
     */
    constructor(competitionType, numberOfRounds, name, minNumberOfEntrants, scheduledStartDate, scheduledEndDate, constraints, productIds) { 
        
        CreateCompetitionRequestAllOf.initialize(this, competitionType, numberOfRounds, name, minNumberOfEntrants, scheduledStartDate, scheduledEndDate, constraints, productIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, competitionType, numberOfRounds, name, minNumberOfEntrants, scheduledStartDate, scheduledEndDate, constraints, productIds) { 
        obj['competitionType'] = competitionType;
        obj['numberOfRounds'] = numberOfRounds;
        obj['name'] = name;
        obj['minNumberOfEntrants'] = minNumberOfEntrants;
        obj['scheduledStartDate'] = scheduledStartDate;
        obj['scheduledEndDate'] = scheduledEndDate;
        obj['constraints'] = constraints;
        obj['productIds'] = productIds;
    }

    /**
     * Constructs a <code>CreateCompetitionRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCompetitionRequestAllOf} obj Optional instance to populate.
     * @return {module:model/CreateCompetitionRequestAllOf} The populated <code>CreateCompetitionRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCompetitionRequestAllOf();

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
            if (data.hasOwnProperty('contests')) {
                obj['contests'] = CreateContestRequest.constructFromObject(data['contests']);
            }
            if (data.hasOwnProperty('rewards')) {
                obj['rewards'] = ApiClient.convertToType(data['rewards'], [CreateRewardRequest]);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
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
        }
        return obj;
    }


}

/**
 * @member {module:model/CompetitionType} competitionType
 */
CreateCompetitionRequestAllOf.prototype['competitionType'] = undefined;

/**
 * Number of rounds to be played in a competition
 * @member {Number} numberOfRounds
 */
CreateCompetitionRequestAllOf.prototype['numberOfRounds'] = undefined;

/**
 * Number of group stages
 * @member {Number} numberOfGroupStages
 */
CreateCompetitionRequestAllOf.prototype['numberOfGroupStages'] = undefined;

/**
 * A name or a name of a competition. Can be translated
 * @member {String} name
 */
CreateCompetitionRequestAllOf.prototype['name'] = undefined;

/**
 * Description of the competition. Can be translated
 * @member {String} description
 */
CreateCompetitionRequestAllOf.prototype['description'] = undefined;

/**
 * Terms and conditions of a competition. Can be translated
 * @member {String} termsAndConditions
 */
CreateCompetitionRequestAllOf.prototype['termsAndConditions'] = undefined;

/**
 * @member {String} entrantMemberType
 */
CreateCompetitionRequestAllOf.prototype['entrantMemberType'] = undefined;

/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} maxNumberOfEntrants
 */
CreateCompetitionRequestAllOf.prototype['maxNumberOfEntrants'] = undefined;

/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} minNumberOfEntrants
 */
CreateCompetitionRequestAllOf.prototype['minNumberOfEntrants'] = undefined;

/**
 * @member {Array.<module:model/Rule>} rules
 */
CreateCompetitionRequestAllOf.prototype['rules'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
CreateCompetitionRequestAllOf.prototype['scheduledStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
CreateCompetitionRequestAllOf.prototype['scheduledEndDate'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateCompetitionRequestAllOf.prototype['translations'] = undefined;

/**
 * @member {module:model/CreateContestRequest} contests
 */
CreateCompetitionRequestAllOf.prototype['contests'] = undefined;

/**
 * @member {Array.<module:model/CreateRewardRequest>} rewards
 */
CreateCompetitionRequestAllOf.prototype['rewards'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateCompetitionRequestAllOf.prototype['constraints'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
CreateCompetitionRequestAllOf.prototype['addConstraints'] = undefined;

/**
 * 
 * @member {Array.<String>} productIds
 */
CreateCompetitionRequestAllOf.prototype['productIds'] = undefined;

/**
 * @member {module:model/DependantOn} entrantMemberTagsFilter
 */
CreateCompetitionRequestAllOf.prototype['entrantMemberTagsFilter'] = undefined;

/**
 * @member {module:model/DependantOn} productTagsFilter
 */
CreateCompetitionRequestAllOf.prototype['productTagsFilter'] = undefined;






export default CreateCompetitionRequestAllOf;

