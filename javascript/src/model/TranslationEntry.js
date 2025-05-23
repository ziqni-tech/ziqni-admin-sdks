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

/**
 * The TranslationEntry model module.
 * @module model/TranslationEntry
 * @version 0.0.26
 */
class TranslationEntry {
    /**
     * Constructs a new <code>TranslationEntry</code>.
     * This the translationEntry model
     * @alias module:model/TranslationEntry
     * @param fieldName {String} Field name to associate the translationEntry to.
     * @param text {String} Corresponding translated text
     */
    constructor(fieldName, text) { 
        
        TranslationEntry.initialize(this, fieldName, text);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fieldName, text) { 
        obj['fieldName'] = fieldName;
        obj['text'] = text;
    }

    /**
     * Constructs a <code>TranslationEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TranslationEntry} obj Optional instance to populate.
     * @return {module:model/TranslationEntry} The populated <code>TranslationEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TranslationEntry();

            if (data.hasOwnProperty('fieldName')) {
                obj['fieldName'] = ApiClient.convertToType(data['fieldName'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Field name to associate the translationEntry to.
 * @member {String} fieldName
 */
TranslationEntry.prototype['fieldName'] = undefined;

/**
 * Corresponding translated text
 * @member {String} text
 */
TranslationEntry.prototype['text'] = undefined;






export default TranslationEntry;

