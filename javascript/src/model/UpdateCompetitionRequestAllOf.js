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
import CompetitionType from './CompetitionType';
import CreateContestForCompetitionRequest from './CreateContestForCompetitionRequest';
import DependantOn from './DependantOn';
import UpdateContestRequest from './UpdateContestRequest';

/**
 * The UpdateCompetitionRequestAllOf model module.
 * @module model/UpdateCompetitionRequestAllOf
 * @version 0.0.26
 */
class UpdateCompetitionRequestAllOf {
    /**
     * Constructs a new <code>UpdateCompetitionRequestAllOf</code>.
     * @alias module:model/UpdateCompetitionRequestAllOf
     */
    constructor() { 
        
        UpdateCompetitionRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateCompetitionRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCompetitionRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateCompetitionRequestAllOf} The populated <code>UpdateCompetitionRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCompetitionRequestAllOf();

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
        }
        return obj;
    }


}

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

/**
 * Link to the icon
 * @member {String} icon
 */
UpdateCompetitionRequestAllOf.prototype['icon'] = undefined;

/**
 * Link to the banner
 * @member {String} banner
 */
UpdateCompetitionRequestAllOf.prototype['banner'] = undefined;

/**
 * Link to the bannerLowResolution
 * @member {String} bannerLowResolution
 */
UpdateCompetitionRequestAllOf.prototype['bannerLowResolution'] = undefined;

/**
 * Link to the bannerHighResolution
 * @member {String} bannerHighResolution
 */
UpdateCompetitionRequestAllOf.prototype['bannerHighResolution'] = undefined;






export default UpdateCompetitionRequestAllOf;

