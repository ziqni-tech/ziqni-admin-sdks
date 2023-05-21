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

/**
 * The StartEndDate model module.
 * @module model/StartEndDate
 * @version 0.0.26
 */
class StartEndDate {
    /**
     * Constructs a new <code>StartEndDate</code>.
     * @alias module:model/StartEndDate
     * @param start {Date} The date and time of when something should start. ISO8601 timestamp
     */
    constructor(start) { 
        
        StartEndDate.initialize(this, start);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, start) { 
        obj['start'] = start;
    }

    /**
     * Constructs a <code>StartEndDate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StartEndDate} obj Optional instance to populate.
     * @return {module:model/StartEndDate} The populated <code>StartEndDate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StartEndDate();

            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The date and time of when something should start. ISO8601 timestamp
 * @member {Date} start
 */
StartEndDate.prototype['start'] = undefined;

/**
 * The date and time of when something should end. ISO8601 timestamp
 * @member {Date} end
 */
StartEndDate.prototype['end'] = undefined;






export default StartEndDate;

