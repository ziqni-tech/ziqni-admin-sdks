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
import ContestAllOf from './ContestAllOf';
import ContestStatus from './ContestStatus';
import ModelDefault from './ModelDefault';
import OptParamModels from './OptParamModels';
import RoundType from './RoundType';
import TournamentStrategies from './TournamentStrategies';

/**
 * The Contest model module.
 * @module model/Contest
 * @version 0.0.26
 */
class Contest {
    /**
     * Constructs a new <code>Contest</code>.
     * @alias module:model/Contest
     * @implements module:model/ModelDefault
     * @implements module:model/OptParamModels
     * @implements module:model/ContestAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param competitionId {String} A unique identifier of a Competition
     * @param row {Number} The row number for displaying the Contest in a table
     * @param name {String} A name for the Contest. Can be translated
     * @param round {Number} To what round does the contest belong
     * @param roundType {module:model/RoundType} 
     * @param entrantsFromContest {Array.<String>} A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional.
     * @param minNumberOfEntrants {Number} Minimum number of entrants for the contest
     * @param scheduledStartDate {Date} ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone
     * @param scheduledEndDate {Date} ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone
     * @param status {module:model/ContestStatus} 
     * @param statusCode {Number} The code of the contest
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(id, spaceName, created, competitionId, row, name, round, roundType, entrantsFromContest, minNumberOfEntrants, scheduledStartDate, scheduledEndDate, status, statusCode, constraints) { 
        ModelDefault.initialize(this, id, spaceName, created);OptParamModels.initialize(this);ContestAllOf.initialize(this, competitionId, row, name, round, roundType, entrantsFromContest, minNumberOfEntrants, scheduledStartDate, scheduledEndDate, status, statusCode, constraints);
        Contest.initialize(this, id, spaceName, created, competitionId, row, name, round, roundType, entrantsFromContest, minNumberOfEntrants, scheduledStartDate, scheduledEndDate, status, statusCode, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, competitionId, row, name, round, roundType, entrantsFromContest, minNumberOfEntrants, scheduledStartDate, scheduledEndDate, status, statusCode, constraints) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['competitionId'] = competitionId;
        obj['row'] = row;
        obj['name'] = name;
        obj['round'] = round;
        obj['roundType'] = roundType;
        obj['entrantsFromContest'] = entrantsFromContest;
        obj['minNumberOfEntrants'] = minNumberOfEntrants;
        obj['scheduledStartDate'] = scheduledStartDate;
        obj['scheduledEndDate'] = scheduledEndDate;
        obj['status'] = status;
        obj['statusCode'] = statusCode;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>Contest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contest} obj Optional instance to populate.
     * @return {module:model/Contest} The populated <code>Contest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contest();
            ModelDefault.constructFromObject(data, obj);
            OptParamModels.constructFromObject(data, obj);
            ContestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
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
            if (data.hasOwnProperty('competitionId')) {
                obj['competitionId'] = ApiClient.convertToType(data['competitionId'], 'String');
            }
            if (data.hasOwnProperty('row')) {
                obj['row'] = ApiClient.convertToType(data['row'], 'Number');
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
            if (data.hasOwnProperty('round')) {
                obj['round'] = ApiClient.convertToType(data['round'], 'Number');
            }
            if (data.hasOwnProperty('roundType')) {
                obj['roundType'] = RoundType.constructFromObject(data['roundType']);
            }
            if (data.hasOwnProperty('entrantsFromContest')) {
                obj['entrantsFromContest'] = ApiClient.convertToType(data['entrantsFromContest'], ['String']);
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
            if (data.hasOwnProperty('actualStartDate')) {
                obj['actualStartDate'] = ApiClient.convertToType(data['actualStartDate'], 'Date');
            }
            if (data.hasOwnProperty('actualEndDate')) {
                obj['actualEndDate'] = ApiClient.convertToType(data['actualEndDate'], 'Date');
            }
            if (data.hasOwnProperty('strategies')) {
                obj['strategies'] = TournamentStrategies.constructFromObject(data['strategies']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ContestStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
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
Contest.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Contest.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Contest.prototype['created'] = undefined;

/**
 * @member {Object.<String, Object>} customFields
 */
Contest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
Contest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
Contest.prototype['metadata'] = undefined;

/**
 * A unique identifier of a Competition
 * @member {String} competitionId
 */
Contest.prototype['competitionId'] = undefined;

/**
 * The row number for displaying the Contest in a table
 * @member {Number} row
 */
Contest.prototype['row'] = undefined;

/**
 * A name for the Contest. Can be translated
 * @member {String} name
 */
Contest.prototype['name'] = undefined;

/**
 * Description of the contest
 * @member {String} description
 */
Contest.prototype['description'] = undefined;

/**
 * Terms and conditions for participating in the Contest. Can be translated
 * @member {String} termsAndConditions
 */
Contest.prototype['termsAndConditions'] = undefined;

/**
 * To what round does the contest belong
 * @member {Number} round
 */
Contest.prototype['round'] = undefined;

/**
 * @member {module:model/RoundType} roundType
 */
Contest.prototype['roundType'] = undefined;

/**
 * A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional.
 * @member {Array.<String>} entrantsFromContest
 */
Contest.prototype['entrantsFromContest'] = undefined;

/**
 * Maximum number of entrants for the contest
 * @member {Number} maxNumberOfEntrants
 */
Contest.prototype['maxNumberOfEntrants'] = undefined;

/**
 * Minimum number of entrants for the contest
 * @member {Number} minNumberOfEntrants
 */
Contest.prototype['minNumberOfEntrants'] = undefined;

/**
 * ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
Contest.prototype['scheduledStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
Contest.prototype['scheduledEndDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone
 * @member {Date} actualStartDate
 */
Contest.prototype['actualStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone
 * @member {Date} actualEndDate
 */
Contest.prototype['actualEndDate'] = undefined;

/**
 * @member {module:model/TournamentStrategies} strategies
 */
Contest.prototype['strategies'] = undefined;

/**
 * @member {module:model/ContestStatus} status
 */
Contest.prototype['status'] = undefined;

/**
 * The code of the contest
 * @member {Number} statusCode
 */
Contest.prototype['statusCode'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
Contest.prototype['constraints'] = undefined;


// Implement ModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
ModelDefault.prototype['id'] = undefined;
/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ModelDefault.prototype['spaceName'] = undefined;
/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ModelDefault.prototype['created'] = undefined;
// Implement OptParamModels interface:
/**
 * @member {Object.<String, Object>} customFields
 */
OptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
OptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
OptParamModels.prototype['metadata'] = undefined;
// Implement ContestAllOf interface:
/**
 * A unique identifier of a Competition
 * @member {String} competitionId
 */
ContestAllOf.prototype['competitionId'] = undefined;
/**
 * The row number for displaying the Contest in a table
 * @member {Number} row
 */
ContestAllOf.prototype['row'] = undefined;
/**
 * A name for the Contest. Can be translated
 * @member {String} name
 */
ContestAllOf.prototype['name'] = undefined;
/**
 * Description of the contest
 * @member {String} description
 */
ContestAllOf.prototype['description'] = undefined;
/**
 * Terms and conditions for participating in the Contest. Can be translated
 * @member {String} termsAndConditions
 */
ContestAllOf.prototype['termsAndConditions'] = undefined;
/**
 * To what round does the contest belong
 * @member {Number} round
 */
ContestAllOf.prototype['round'] = undefined;
/**
 * @member {module:model/RoundType} roundType
 */
ContestAllOf.prototype['roundType'] = undefined;
/**
 * A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional.
 * @member {Array.<String>} entrantsFromContest
 */
ContestAllOf.prototype['entrantsFromContest'] = undefined;
/**
 * Maximum number of entrants for the contest
 * @member {Number} maxNumberOfEntrants
 */
ContestAllOf.prototype['maxNumberOfEntrants'] = undefined;
/**
 * Minimum number of entrants for the contest
 * @member {Number} minNumberOfEntrants
 */
ContestAllOf.prototype['minNumberOfEntrants'] = undefined;
/**
 * ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
ContestAllOf.prototype['scheduledStartDate'] = undefined;
/**
 * ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
ContestAllOf.prototype['scheduledEndDate'] = undefined;
/**
 * ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone
 * @member {Date} actualStartDate
 */
ContestAllOf.prototype['actualStartDate'] = undefined;
/**
 * ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone
 * @member {Date} actualEndDate
 */
ContestAllOf.prototype['actualEndDate'] = undefined;
/**
 * @member {module:model/TournamentStrategies} strategies
 */
ContestAllOf.prototype['strategies'] = undefined;
/**
 * @member {module:model/ContestStatus} status
 */
ContestAllOf.prototype['status'] = undefined;
/**
 * The code of the contest
 * @member {Number} statusCode
 */
ContestAllOf.prototype['statusCode'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
ContestAllOf.prototype['constraints'] = undefined;




export default Contest;

