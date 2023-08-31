/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.9
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
 * The CreateTranslationRequest model module.
 * @module model/CreateTranslationRequest
 * @version 0.0.26
 */
class CreateTranslationRequest {
    /**
     * Constructs a new <code>CreateTranslationRequest</code>.
     * Translations to attach to the models.
     * @alias module:model/CreateTranslationRequest
     * @param entityId {String} 
     * @param entityType {String} 
     * @param translations {Array.<module:model/TranslationEntry>} 
     * @param languageId {String} 
     * @param languageKey {String} 
     */
    constructor(entityId, entityType, translations, languageId, languageKey) { 
        
        CreateTranslationRequest.initialize(this, entityId, entityType, translations, languageId, languageKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entityId, entityType, translations, languageId, languageKey) { 
        obj['entityId'] = entityId;
        obj['entityType'] = entityType;
        obj['translations'] = translations;
        obj['languageId'] = languageId;
        obj['languageKey'] = languageKey;
    }

    /**
     * Constructs a <code>CreateTranslationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTranslationRequest} obj Optional instance to populate.
     * @return {module:model/CreateTranslationRequest} The populated <code>CreateTranslationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTranslationRequest();

            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [TranslationEntry]);
            }
            if (data.hasOwnProperty('languageId')) {
                obj['languageId'] = ApiClient.convertToType(data['languageId'], 'String');
            }
            if (data.hasOwnProperty('languageKey')) {
                obj['languageKey'] = ApiClient.convertToType(data['languageKey'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} entityId
 */
CreateTranslationRequest.prototype['entityId'] = undefined;

/**
 * 
 * @member {String} entityType
 */
CreateTranslationRequest.prototype['entityType'] = undefined;

/**
 * 
 * @member {Array.<module:model/TranslationEntry>} translations
 */
CreateTranslationRequest.prototype['translations'] = undefined;

/**
 * 
 * @member {String} languageId
 */
CreateTranslationRequest.prototype['languageId'] = undefined;

/**
 * 
 * @member {String} languageKey
 */
CreateTranslationRequest.prototype['languageKey'] = undefined;






export default CreateTranslationRequest;

