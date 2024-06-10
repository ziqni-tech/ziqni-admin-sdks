/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.15
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import UpdateInstantWinTile from './UpdateInstantWinTile';

/**
 * The UpdateInstantWinRequestAllOf model module.
 * @module model/UpdateInstantWinRequestAllOf
 * @version 0.0.26
 */
class UpdateInstantWinRequestAllOf {
    /**
     * Constructs a new <code>UpdateInstantWinRequestAllOf</code>.
     * @alias module:model/UpdateInstantWinRequestAllOf
     */
    constructor() { 
        
        UpdateInstantWinRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateInstantWinRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateInstantWinRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateInstantWinRequestAllOf} The populated <code>UpdateInstantWinRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateInstantWinRequestAllOf();

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
                obj['tiles'] = ApiClient.convertToType(data['tiles'], [UpdateInstantWinTile]);
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
UpdateInstantWinRequestAllOf.prototype['name'] = undefined;

/**
 * @member {String} description
 */
UpdateInstantWinRequestAllOf.prototype['description'] = undefined;

/**
 * @member {String} termsAndConditions
 */
UpdateInstantWinRequestAllOf.prototype['termsAndConditions'] = undefined;

/**
 * @member {Array.<String>} constraints
 */
UpdateInstantWinRequestAllOf.prototype['constraints'] = undefined;

/**
 * integer
 * @member {Number} statusCode
 */
UpdateInstantWinRequestAllOf.prototype['statusCode'] = undefined;

/**
 * integer
 * @member {Number} instantWinType
 */
UpdateInstantWinRequestAllOf.prototype['instantWinType'] = undefined;

/**
 * Attachement id for the corresponding icon image.
 * @member {String} icon
 */
UpdateInstantWinRequestAllOf.prototype['icon'] = undefined;

/**
 * Link to the banner
 * @member {String} banner
 */
UpdateInstantWinRequestAllOf.prototype['banner'] = undefined;

/**
 * Link to the bannerLowResolution
 * @member {String} bannerLowResolution
 */
UpdateInstantWinRequestAllOf.prototype['bannerLowResolution'] = undefined;

/**
 * Link to the bannerHighResolution
 * @member {String} bannerHighResolution
 */
UpdateInstantWinRequestAllOf.prototype['bannerHighResolution'] = undefined;

/**
 * 
 * @member {Array.<module:model/UpdateInstantWinTile>} tiles
 */
UpdateInstantWinRequestAllOf.prototype['tiles'] = undefined;

/**
 * A link link to the cms entry for this objects style sheet
 * @member {String} style
 */
UpdateInstantWinRequestAllOf.prototype['style'] = undefined;






export default UpdateInstantWinRequestAllOf;

