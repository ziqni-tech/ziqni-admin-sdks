/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.7
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TranslationEntry from './TranslationEntry';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateTranslationRequestAllOf from './UpdateTranslationRequestAllOf';

/**
 * The UpdateTranslationRequest model module.
 * @module model/UpdateTranslationRequest
 * @version 0.0.26
 */
class UpdateTranslationRequest {
    /**
     * Constructs a new <code>UpdateTranslationRequest</code>.
     * @alias module:model/UpdateTranslationRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateTranslationRequestAllOf
     * @param id {String} A unique system generated identifier
     * @param translations {Array.<module:model/TranslationEntry>} 
     */
    constructor(id, translations) { 
        UpdateModelDefault.initialize(this, id);UpdateTranslationRequestAllOf.initialize(this, translations);
        UpdateTranslationRequest.initialize(this, id, translations);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, translations) { 
        obj['id'] = id;
        obj['translations'] = translations;
    }

    /**
     * Constructs a <code>UpdateTranslationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTranslationRequest} obj Optional instance to populate.
     * @return {module:model/UpdateTranslationRequest} The populated <code>UpdateTranslationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTranslationRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateTranslationRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
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
 * A unique system generated identifier
 * @member {String} id
 */
UpdateTranslationRequest.prototype['id'] = undefined;

/**
 * 
 * @member {String} entityId
 */
UpdateTranslationRequest.prototype['entityId'] = undefined;

/**
 * 
 * @member {String} entityType
 */
UpdateTranslationRequest.prototype['entityType'] = undefined;

/**
 * 
 * @member {String} languageId
 */
UpdateTranslationRequest.prototype['languageId'] = undefined;

/**
 * 
 * @member {String} languageKey
 */
UpdateTranslationRequest.prototype['languageKey'] = undefined;

/**
 * 
 * @member {Array.<module:model/TranslationEntry>} translations
 */
UpdateTranslationRequest.prototype['translations'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateTranslationRequestAllOf interface:
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




export default UpdateTranslationRequest;

