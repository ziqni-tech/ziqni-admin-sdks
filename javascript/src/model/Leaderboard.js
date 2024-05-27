/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.14
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LeaderboardAllOf from './LeaderboardAllOf';
import LeaderboardEntry from './LeaderboardEntry';
import ModelDefault from './ModelDefault';

/**
 * The Leaderboard model module.
 * @module model/Leaderboard
 * @version 0.0.26
 */
class Leaderboard {
    /**
     * Constructs a new <code>Leaderboard</code>.
     * @alias module:model/Leaderboard
     * @implements module:model/ModelDefault
     * @implements module:model/LeaderboardAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(id, spaceName, created, constraints) { 
        ModelDefault.initialize(this, id, spaceName, created);LeaderboardAllOf.initialize(this, constraints);
        Leaderboard.initialize(this, id, spaceName, created, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, constraints) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>Leaderboard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Leaderboard} obj Optional instance to populate.
     * @return {module:model/Leaderboard} The populated <code>Leaderboard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Leaderboard();
            ModelDefault.constructFromObject(data, obj);
            LeaderboardAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('leaderboardEntries')) {
                obj['leaderboardEntries'] = ApiClient.convertToType(data['leaderboardEntries'], [LeaderboardEntry]);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
Leaderboard.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Leaderboard.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Leaderboard.prototype['created'] = undefined;

/**
 * @member {Array.<module:model/LeaderboardEntry>} leaderboardEntries
 */
Leaderboard.prototype['leaderboardEntries'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
Leaderboard.prototype['constraints'] = undefined;

/**
 * how many changes were made to teh leaderboard
 * @member {Number} sequence
 */
Leaderboard.prototype['sequence'] = undefined;


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
// Implement LeaderboardAllOf interface:
/**
 * @member {Array.<module:model/LeaderboardEntry>} leaderboardEntries
 */
LeaderboardAllOf.prototype['leaderboardEntries'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
LeaderboardAllOf.prototype['constraints'] = undefined;
/**
 * how many changes were made to teh leaderboard
 * @member {Number} sequence
 */
LeaderboardAllOf.prototype['sequence'] = undefined;




export default Leaderboard;

