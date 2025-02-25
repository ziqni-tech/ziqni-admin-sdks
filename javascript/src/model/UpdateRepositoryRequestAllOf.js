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
import HostingOptions from './HostingOptions';

/**
 * The UpdateRepositoryRequestAllOf model module.
 * @module model/UpdateRepositoryRequestAllOf
 * @version 0.0.26
 */
class UpdateRepositoryRequestAllOf {
    /**
     * Constructs a new <code>UpdateRepositoryRequestAllOf</code>.
     * @alias module:model/UpdateRepositoryRequestAllOf
     */
    constructor() { 
        
        UpdateRepositoryRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateRepositoryRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRepositoryRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateRepositoryRequestAllOf} The populated <code>UpdateRepositoryRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRepositoryRequestAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
            if (data.hasOwnProperty('removeConstraints')) {
                obj['removeConstraints'] = ApiClient.convertToType(data['removeConstraints'], ['String']);
            }
            if (data.hasOwnProperty('hostingOptions')) {
                obj['hostingOptions'] = HostingOptions.constructFromObject(data['hostingOptions']);
            }
        }
        return obj;
    }


}

/**
 * The name of the repository. No special charaters or spaces permitted
 * @member {String} name
 */
UpdateRepositoryRequestAllOf.prototype['name'] = undefined;

/**
 * The description of the repository
 * @member {String} description
 */
UpdateRepositoryRequestAllOf.prototype['description'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
UpdateRepositoryRequestAllOf.prototype['addConstraints'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} removeConstraints
 */
UpdateRepositoryRequestAllOf.prototype['removeConstraints'] = undefined;

/**
 * @member {module:model/HostingOptions} hostingOptions
 */
UpdateRepositoryRequestAllOf.prototype['hostingOptions'] = undefined;






export default UpdateRepositoryRequestAllOf;

