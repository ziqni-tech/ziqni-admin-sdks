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
import ContestReducedAllOf from './ContestReducedAllOf';
import ContestStatus from './ContestStatus';
import ModelDefault from './ModelDefault';
import RewardReduced from './RewardReduced';

/**
 * The ContestReduced model module.
 * @module model/ContestReduced
 * @version 0.0.26
 */
class ContestReduced {
    /**
     * Constructs a new <code>ContestReduced</code>.
     * @alias module:model/ContestReduced
     * @implements module:model/ModelDefault
     * @implements module:model/ContestReducedAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param competitionId {String} A unique identifier of a Competition
     * @param row {Number} The row number for displaying the Contest in a table
     * @param name {String} A name for the Contest. Can be translated
     * @param round {Number} To what round does the contest belong
     * @param groupStage {Number} Is used for more complex Competitions e.g. multi round competitions where round 1 group stage matched round 2
     * @param entrantsFromContest {Array.<String>} A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional.
     * @param status {module:model/ContestStatus} 
     * @param statusCode {Number} The code of the contest
     * @param scheduledStartDate {Date} ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone
     * @param scheduledEndDate {Date} ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone
     */
    constructor(id, spaceName, created, competitionId, row, name, round, groupStage, entrantsFromContest, status, statusCode, scheduledStartDate, scheduledEndDate) { 
        ModelDefault.initialize(this, id, spaceName, created);ContestReducedAllOf.initialize(this, competitionId, row, name, round, groupStage, entrantsFromContest, status, statusCode, scheduledStartDate, scheduledEndDate);
        ContestReduced.initialize(this, id, spaceName, created, competitionId, row, name, round, groupStage, entrantsFromContest, status, statusCode, scheduledStartDate, scheduledEndDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, competitionId, row, name, round, groupStage, entrantsFromContest, status, statusCode, scheduledStartDate, scheduledEndDate) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['competitionId'] = competitionId;
        obj['row'] = row;
        obj['name'] = name;
        obj['round'] = round;
        obj['groupStage'] = groupStage;
        obj['entrantsFromContest'] = entrantsFromContest;
        obj['status'] = status;
        obj['statusCode'] = statusCode;
        obj['scheduledStartDate'] = scheduledStartDate;
        obj['scheduledEndDate'] = scheduledEndDate;
    }

    /**
     * Constructs a <code>ContestReduced</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContestReduced} obj Optional instance to populate.
     * @return {module:model/ContestReduced} The populated <code>ContestReduced</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContestReduced();
            ModelDefault.constructFromObject(data, obj);
            ContestReducedAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
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
            if (data.hasOwnProperty('round')) {
                obj['round'] = ApiClient.convertToType(data['round'], 'Number');
            }
            if (data.hasOwnProperty('groupStage')) {
                obj['groupStage'] = ApiClient.convertToType(data['groupStage'], 'Number');
            }
            if (data.hasOwnProperty('entrantsFromContest')) {
                obj['entrantsFromContest'] = ApiClient.convertToType(data['entrantsFromContest'], ['String']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ContestStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
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
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('rewards')) {
                obj['rewards'] = ApiClient.convertToType(data['rewards'], [RewardReduced]);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
ContestReduced.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ContestReduced.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ContestReduced.prototype['created'] = undefined;

/**
 * A unique identifier of a Competition
 * @member {String} competitionId
 */
ContestReduced.prototype['competitionId'] = undefined;

/**
 * The row number for displaying the Contest in a table
 * @member {Number} row
 */
ContestReduced.prototype['row'] = undefined;

/**
 * A name for the Contest. Can be translated
 * @member {String} name
 */
ContestReduced.prototype['name'] = undefined;

/**
 * To what round does the contest belong
 * @member {Number} round
 */
ContestReduced.prototype['round'] = undefined;

/**
 * Is used for more complex Competitions e.g. multi round competitions where round 1 group stage matched round 2
 * @member {Number} groupStage
 */
ContestReduced.prototype['groupStage'] = undefined;

/**
 * A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional.
 * @member {Array.<String>} entrantsFromContest
 */
ContestReduced.prototype['entrantsFromContest'] = undefined;

/**
 * @member {module:model/ContestStatus} status
 */
ContestReduced.prototype['status'] = undefined;

/**
 * The code of the contest
 * @member {Number} statusCode
 */
ContestReduced.prototype['statusCode'] = undefined;

/**
 * ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
ContestReduced.prototype['scheduledStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
ContestReduced.prototype['scheduledEndDate'] = undefined;

/**
 * ISO8601 timestamp for when a Contest started. All records are stored in UTC time zone
 * @member {Date} actualStartDate
 */
ContestReduced.prototype['actualStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Contest ended. All records are stored in UTC time zone
 * @member {Date} actualEndDate
 */
ContestReduced.prototype['actualEndDate'] = undefined;

/**
 * A list of id's used to tag
 * @member {Array.<String>} tags
 */
ContestReduced.prototype['tags'] = undefined;

/**
 * 
 * @member {Array.<module:model/RewardReduced>} rewards
 */
ContestReduced.prototype['rewards'] = undefined;


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
// Implement ContestReducedAllOf interface:
/**
 * A unique identifier of a Competition
 * @member {String} competitionId
 */
ContestReducedAllOf.prototype['competitionId'] = undefined;
/**
 * The row number for displaying the Contest in a table
 * @member {Number} row
 */
ContestReducedAllOf.prototype['row'] = undefined;
/**
 * A name for the Contest. Can be translated
 * @member {String} name
 */
ContestReducedAllOf.prototype['name'] = undefined;
/**
 * To what round does the contest belong
 * @member {Number} round
 */
ContestReducedAllOf.prototype['round'] = undefined;
/**
 * Is used for more complex Competitions e.g. multi round competitions where round 1 group stage matched round 2
 * @member {Number} groupStage
 */
ContestReducedAllOf.prototype['groupStage'] = undefined;
/**
 * A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional.
 * @member {Array.<String>} entrantsFromContest
 */
ContestReducedAllOf.prototype['entrantsFromContest'] = undefined;
/**
 * @member {module:model/ContestStatus} status
 */
ContestReducedAllOf.prototype['status'] = undefined;
/**
 * The code of the contest
 * @member {Number} statusCode
 */
ContestReducedAllOf.prototype['statusCode'] = undefined;
/**
 * ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
ContestReducedAllOf.prototype['scheduledStartDate'] = undefined;
/**
 * ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
ContestReducedAllOf.prototype['scheduledEndDate'] = undefined;
/**
 * ISO8601 timestamp for when a Contest started. All records are stored in UTC time zone
 * @member {Date} actualStartDate
 */
ContestReducedAllOf.prototype['actualStartDate'] = undefined;
/**
 * ISO8601 timestamp for when a Contest ended. All records are stored in UTC time zone
 * @member {Date} actualEndDate
 */
ContestReducedAllOf.prototype['actualEndDate'] = undefined;
/**
 * A list of id's used to tag
 * @member {Array.<String>} tags
 */
ContestReducedAllOf.prototype['tags'] = undefined;
/**
 * 
 * @member {Array.<module:model/RewardReduced>} rewards
 */
ContestReducedAllOf.prototype['rewards'] = undefined;




export default ContestReduced;

