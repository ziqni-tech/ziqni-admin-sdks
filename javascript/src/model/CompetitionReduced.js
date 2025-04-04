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
import CompetitionReducedAllOf from './CompetitionReducedAllOf';
import CompetitionStatus from './CompetitionStatus';
import CompetitionType from './CompetitionType';
import Dependancy from './Dependancy';
import ModelDefault from './ModelDefault';

/**
 * The CompetitionReduced model module.
 * @module model/CompetitionReduced
 * @version 0.0.26
 */
class CompetitionReduced {
    /**
     * Constructs a new <code>CompetitionReduced</code>.
     * @alias module:model/CompetitionReduced
     * @implements module:model/ModelDefault
     * @implements module:model/CompetitionReducedAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param competitionType {module:model/CompetitionType} 
     * @param numberOfRounds {Number} Number of rounds to be played in a competition
     * @param name {String} A name or a name of a competition. Can be translated
     * @param status {module:model/CompetitionStatus} 
     * @param statusCode {Number} The code of the competition
     * @param dependantOn {Array.<module:model/Dependancy>} 
     * @param scheduledStartDate {Date} ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
     * @param scheduledEndDate {Date} ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(id, spaceName, created, competitionType, numberOfRounds, name, status, statusCode, dependantOn, scheduledStartDate, scheduledEndDate, constraints) { 
        ModelDefault.initialize(this, id, spaceName, created);CompetitionReducedAllOf.initialize(this, competitionType, numberOfRounds, name, status, statusCode, dependantOn, scheduledStartDate, scheduledEndDate, constraints);
        CompetitionReduced.initialize(this, id, spaceName, created, competitionType, numberOfRounds, name, status, statusCode, dependantOn, scheduledStartDate, scheduledEndDate, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, competitionType, numberOfRounds, name, status, statusCode, dependantOn, scheduledStartDate, scheduledEndDate, constraints) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['competitionType'] = competitionType;
        obj['numberOfRounds'] = numberOfRounds;
        obj['name'] = name;
        obj['status'] = status;
        obj['statusCode'] = statusCode;
        obj['dependantOn'] = dependantOn;
        obj['scheduledStartDate'] = scheduledStartDate;
        obj['scheduledEndDate'] = scheduledEndDate;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>CompetitionReduced</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompetitionReduced} obj Optional instance to populate.
     * @return {module:model/CompetitionReduced} The populated <code>CompetitionReduced</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompetitionReduced();
            ModelDefault.constructFromObject(data, obj);
            CompetitionReducedAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('competitionType')) {
                obj['competitionType'] = CompetitionType.constructFromObject(data['competitionType']);
            }
            if (data.hasOwnProperty('numberOfRounds')) {
                obj['numberOfRounds'] = ApiClient.convertToType(data['numberOfRounds'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = CompetitionStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
            if (data.hasOwnProperty('dependantOn')) {
                obj['dependantOn'] = ApiClient.convertToType(data['dependantOn'], [Dependancy]);
            }
            if (data.hasOwnProperty('entrantMemberType')) {
                obj['entrantMemberType'] = ApiClient.convertToType(data['entrantMemberType'], 'String');
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
CompetitionReduced.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
CompetitionReduced.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
CompetitionReduced.prototype['created'] = undefined;

/**
 * @member {module:model/CompetitionType} competitionType
 */
CompetitionReduced.prototype['competitionType'] = undefined;

/**
 * Number of rounds to be played in a competition
 * @member {Number} numberOfRounds
 */
CompetitionReduced.prototype['numberOfRounds'] = undefined;

/**
 * A name or a name of a competition. Can be translated
 * @member {String} name
 */
CompetitionReduced.prototype['name'] = undefined;

/**
 * @member {module:model/CompetitionStatus} status
 */
CompetitionReduced.prototype['status'] = undefined;

/**
 * The code of the competition
 * @member {Number} statusCode
 */
CompetitionReduced.prototype['statusCode'] = undefined;

/**
 * @member {Array.<module:model/Dependancy>} dependantOn
 */
CompetitionReduced.prototype['dependantOn'] = undefined;

/**
 * @member {String} entrantMemberType
 */
CompetitionReduced.prototype['entrantMemberType'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
CompetitionReduced.prototype['scheduledStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
CompetitionReduced.prototype['scheduledEndDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone
 * @member {Date} actualStartDate
 */
CompetitionReduced.prototype['actualStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone
 * @member {Date} actualEndDate
 */
CompetitionReduced.prototype['actualEndDate'] = undefined;

/**
 * A list of id's used to tag
 * @member {Array.<String>} tags
 */
CompetitionReduced.prototype['tags'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CompetitionReduced.prototype['constraints'] = undefined;


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
// Implement CompetitionReducedAllOf interface:
/**
 * @member {module:model/CompetitionType} competitionType
 */
CompetitionReducedAllOf.prototype['competitionType'] = undefined;
/**
 * Number of rounds to be played in a competition
 * @member {Number} numberOfRounds
 */
CompetitionReducedAllOf.prototype['numberOfRounds'] = undefined;
/**
 * A name or a name of a competition. Can be translated
 * @member {String} name
 */
CompetitionReducedAllOf.prototype['name'] = undefined;
/**
 * @member {module:model/CompetitionStatus} status
 */
CompetitionReducedAllOf.prototype['status'] = undefined;
/**
 * The code of the competition
 * @member {Number} statusCode
 */
CompetitionReducedAllOf.prototype['statusCode'] = undefined;
/**
 * @member {Array.<module:model/Dependancy>} dependantOn
 */
CompetitionReducedAllOf.prototype['dependantOn'] = undefined;
/**
 * @member {String} entrantMemberType
 */
CompetitionReducedAllOf.prototype['entrantMemberType'] = undefined;
/**
 * ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
CompetitionReducedAllOf.prototype['scheduledStartDate'] = undefined;
/**
 * ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
CompetitionReducedAllOf.prototype['scheduledEndDate'] = undefined;
/**
 * ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone
 * @member {Date} actualStartDate
 */
CompetitionReducedAllOf.prototype['actualStartDate'] = undefined;
/**
 * ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone
 * @member {Date} actualEndDate
 */
CompetitionReducedAllOf.prototype['actualEndDate'] = undefined;
/**
 * A list of id's used to tag
 * @member {Array.<String>} tags
 */
CompetitionReducedAllOf.prototype['tags'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CompetitionReducedAllOf.prototype['constraints'] = undefined;




export default CompetitionReduced;

