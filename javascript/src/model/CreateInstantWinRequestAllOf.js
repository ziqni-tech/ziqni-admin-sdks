/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.17
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CreateInstantWinTile from './CreateInstantWinTile';
import Translation from './Translation';

/**
 * The CreateInstantWinRequestAllOf model module.
 * @module model/CreateInstantWinRequestAllOf
 * @version 0.0.26
 */
class CreateInstantWinRequestAllOf {
    /**
     * Constructs a new <code>CreateInstantWinRequestAllOf</code>.
     * @alias module:model/CreateInstantWinRequestAllOf
     * @param name {String} 
     */
    constructor(name) { 
        
        CreateInstantWinRequestAllOf.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateInstantWinRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateInstantWinRequestAllOf} obj Optional instance to populate.
     * @return {module:model/CreateInstantWinRequestAllOf} The populated <code>CreateInstantWinRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateInstantWinRequestAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('termsAndConditions')) {
                obj['termsAndConditions'] = ApiClient.convertToType(data['termsAndConditions'], 'String');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
            if (data.hasOwnProperty('instantWinType')) {
                obj['instantWinType'] = ApiClient.convertToType(data['instantWinType'], 'Number');
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
            if (data.hasOwnProperty('tiles')) {
                obj['tiles'] = ApiClient.convertToType(data['tiles'], [CreateInstantWinTile]);
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
            if (data.hasOwnProperty('style')) {
                obj['style'] = ApiClient.convertToType(data['style'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CreateInstantWinRequestAllOf.prototype['name'] = undefined;

/**
 * @member {String} description
 */
CreateInstantWinRequestAllOf.prototype['description'] = undefined;

/**
 * @member {String} termsAndConditions
 */
CreateInstantWinRequestAllOf.prototype['termsAndConditions'] = undefined;

/**
 * @member {Array.<String>} constraints
 */
CreateInstantWinRequestAllOf.prototype['constraints'] = undefined;

/**
 * integer
 * @member {Number} statusCode
 */
CreateInstantWinRequestAllOf.prototype['statusCode'] = undefined;

/**
 * integer
 * @member {Number} instantWinType
 */
CreateInstantWinRequestAllOf.prototype['instantWinType'] = undefined;

/**
 * Attachement id for the corresponding icon image.
 * @member {String} icon
 */
CreateInstantWinRequestAllOf.prototype['icon'] = undefined;

/**
 * Link to the banner
 * @member {String} banner
 */
CreateInstantWinRequestAllOf.prototype['banner'] = undefined;

/**
 * Link to the bannerLowResolution
 * @member {String} bannerLowResolution
 */
CreateInstantWinRequestAllOf.prototype['bannerLowResolution'] = undefined;

/**
 * Link to the bannerHighResolution
 * @member {String} bannerHighResolution
 */
CreateInstantWinRequestAllOf.prototype['bannerHighResolution'] = undefined;

/**
 * 
 * @member {Array.<module:model/CreateInstantWinTile>} tiles
 */
CreateInstantWinRequestAllOf.prototype['tiles'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateInstantWinRequestAllOf.prototype['translations'] = undefined;

/**
 * A link link to the cms entry for this objects style sheet
 * @member {String} style
 */
CreateInstantWinRequestAllOf.prototype['style'] = undefined;






export default CreateInstantWinRequestAllOf;

