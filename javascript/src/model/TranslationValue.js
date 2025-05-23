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
import TranslatedField from './TranslatedField';

/**
 * The TranslationValue model module.
 * @module model/TranslationValue
 * @version 0.0.26
 */
class TranslationValue {
    /**
     * Constructs a new <code>TranslationValue</code>.
     * @alias module:model/TranslationValue
     */
    constructor() { 
        
        TranslationValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TranslationValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TranslationValue} obj Optional instance to populate.
     * @return {module:model/TranslationValue} The populated <code>TranslationValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TranslationValue();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('translatedFields')) {
                obj['translatedFields'] = ApiClient.convertToType(data['translatedFields'], [TranslatedField]);
            }
        }
        return obj;
    }


}

/**
 * This is the field from language key
 * @member {String} key
 */
TranslationValue.prototype['key'] = undefined;

/**
 * @member {Array.<module:model/TranslatedField>} translatedFields
 */
TranslationValue.prototype['translatedFields'] = undefined;






export default TranslationValue;

