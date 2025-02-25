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
import RoundType from './RoundType';
import TournamentStrategies from './TournamentStrategies';

/**
 * The UpdateContestRequestAllOf model module.
 * @module model/UpdateContestRequestAllOf
 * @version 0.0.26
 */
class UpdateContestRequestAllOf {
    /**
     * Constructs a new <code>UpdateContestRequestAllOf</code>.
     * @alias module:model/UpdateContestRequestAllOf
     */
    constructor() { 
        
        UpdateContestRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateContestRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateContestRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateContestRequestAllOf} The populated <code>UpdateContestRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateContestRequestAllOf();

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

/**
 * Link to the icon
 * @member {String} icon
 */
UpdateContestRequestAllOf.prototype['icon'] = undefined;

/**
 * Link to the banner
 * @member {String} banner
 */
UpdateContestRequestAllOf.prototype['banner'] = undefined;

/**
 * Link to the bannerLowResolution
 * @member {String} bannerLowResolution
 */
UpdateContestRequestAllOf.prototype['bannerLowResolution'] = undefined;

/**
 * Link to the bannerHighResolution
 * @member {String} bannerHighResolution
 */
UpdateContestRequestAllOf.prototype['bannerHighResolution'] = undefined;






export default UpdateContestRequestAllOf;

