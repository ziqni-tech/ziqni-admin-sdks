/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.13
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Translation from './Translation';

/**
 * The CreateRewardTypeRequestAllOf model module.
 * @module model/CreateRewardTypeRequestAllOf
 * @version 0.0.26
 */
class CreateRewardTypeRequestAllOf {
    /**
     * Constructs a new <code>CreateRewardTypeRequestAllOf</code>.
     * @alias module:model/CreateRewardTypeRequestAllOf
     * @param name {String} The name of the Reward type
     * @param key {String} A unique key that represents the reward type
     * @param unitOfMeasure {String} 
     */
    constructor(name, key, unitOfMeasure) { 
        
        CreateRewardTypeRequestAllOf.initialize(this, name, key, unitOfMeasure);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, key, unitOfMeasure) { 
        obj['name'] = name;
        obj['key'] = key;
        obj['unitOfMeasure'] = unitOfMeasure;
    }

    /**
     * Constructs a <code>CreateRewardTypeRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRewardTypeRequestAllOf} obj Optional instance to populate.
     * @return {module:model/CreateRewardTypeRequestAllOf} The populated <code>CreateRewardTypeRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRewardTypeRequestAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
            if (data.hasOwnProperty('unitOfMeasure')) {
                obj['unitOfMeasure'] = ApiClient.convertToType(data['unitOfMeasure'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the Reward type
 * @member {String} name
 */
CreateRewardTypeRequestAllOf.prototype['name'] = undefined;

/**
 * The description of a reward type
 * @member {String} description
 */
CreateRewardTypeRequestAllOf.prototype['description'] = undefined;

/**
 * A unique key that represents the reward type
 * @member {String} key
 */
CreateRewardTypeRequestAllOf.prototype['key'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateRewardTypeRequestAllOf.prototype['translations'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
CreateRewardTypeRequestAllOf.prototype['addConstraints'] = undefined;

/**
 * @member {String} unitOfMeasure
 */
CreateRewardTypeRequestAllOf.prototype['unitOfMeasure'] = undefined;






export default CreateRewardTypeRequestAllOf;

