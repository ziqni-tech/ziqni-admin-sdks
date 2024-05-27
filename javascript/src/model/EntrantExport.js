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
import Award from './Award';
import Reward from './Reward';

/**
 * The EntrantExport model module.
 * @module model/EntrantExport
 * @version 0.0.26
 */
class EntrantExport {
    /**
     * Constructs a new <code>EntrantExport</code>.
     * @alias module:model/EntrantExport
     */
    constructor() { 
        
        EntrantExport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntrantExport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrantExport} obj Optional instance to populate.
     * @return {module:model/EntrantExport} The populated <code>EntrantExport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntrantExport();

            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('memberId')) {
                obj['memberId'] = ApiClient.convertToType(data['memberId'], 'String');
            }
            if (data.hasOwnProperty('memberRefId')) {
                obj['memberRefId'] = ApiClient.convertToType(data['memberRefId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('points')) {
                obj['points'] = ApiClient.convertToType(data['points'], 'Number');
            }
            if (data.hasOwnProperty('rank')) {
                obj['rank'] = ApiClient.convertToType(data['rank'], 'Number');
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], ['String']);
            }
            if (data.hasOwnProperty('awards')) {
                obj['awards'] = ApiClient.convertToType(data['awards'], [Award]);
            }
            if (data.hasOwnProperty('rewards')) {
                obj['rewards'] = ApiClient.convertToType(data['rewards'], [Reward]);
            }
        }
        return obj;
    }


}

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
EntrantExport.prototype['created'] = undefined;

/**
 * @member {String} memberId
 */
EntrantExport.prototype['memberId'] = undefined;

/**
 * @member {String} memberRefId
 */
EntrantExport.prototype['memberRefId'] = undefined;

/**
 * @member {String} name
 */
EntrantExport.prototype['name'] = undefined;

/**
 * double
 * @member {Number} points
 */
EntrantExport.prototype['points'] = undefined;

/**
 * integer
 * @member {Number} rank
 */
EntrantExport.prototype['rank'] = undefined;

/**
 * @member {Array.<String>} groups
 */
EntrantExport.prototype['groups'] = undefined;

/**
 * Rewards
 * @member {Array.<module:model/Award>} awards
 */
EntrantExport.prototype['awards'] = undefined;

/**
 * Rewards
 * @member {Array.<module:model/Reward>} rewards
 */
EntrantExport.prototype['rewards'] = undefined;






export default EntrantExport;

