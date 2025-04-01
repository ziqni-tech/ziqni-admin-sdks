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
import TranslationEntry from './TranslationEntry';

/**
 * The UpdateTranslationRequestAllOf model module.
 * @module model/UpdateTranslationRequestAllOf
 * @version 0.0.26
 */
class UpdateTranslationRequestAllOf {
    /**
     * Constructs a new <code>UpdateTranslationRequestAllOf</code>.
     * @alias module:model/UpdateTranslationRequestAllOf
     * @param translations {Array.<module:model/TranslationEntry>} 
     */
    constructor(translations) { 
        
        UpdateTranslationRequestAllOf.initialize(this, translations);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, translations) { 
        obj['translations'] = translations;
    }

    /**
     * Constructs a <code>UpdateTranslationRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTranslationRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateTranslationRequestAllOf} The populated <code>UpdateTranslationRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTranslationRequestAllOf();

            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
            }
            if (data.hasOwnProperty('languageId')) {
                obj['languageId'] = ApiClient.convertToType(data['languageId'], 'String');
            }
            if (data.hasOwnProperty('languageKey')) {
                obj['languageKey'] = ApiClient.convertToType(data['languageKey'], 'String');
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [TranslationEntry]);
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} entityId
 */
UpdateTranslationRequestAllOf.prototype['entityId'] = undefined;

/**
 * 
 * @member {String} entityType
 */
UpdateTranslationRequestAllOf.prototype['entityType'] = undefined;

/**
 * 
 * @member {String} languageId
 */
UpdateTranslationRequestAllOf.prototype['languageId'] = undefined;

/**
 * 
 * @member {String} languageKey
 */
UpdateTranslationRequestAllOf.prototype['languageKey'] = undefined;

/**
 * 
 * @member {Array.<module:model/TranslationEntry>} translations
 */
UpdateTranslationRequestAllOf.prototype['translations'] = undefined;






export default UpdateTranslationRequestAllOf;

