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
import InstantWinTile from './InstantWinTile';

/**
 * The InstantWinAllOf model module.
 * @module model/InstantWinAllOf
 * @version 0.0.26
 */
class InstantWinAllOf {
    /**
     * Constructs a new <code>InstantWinAllOf</code>.
     * @alias module:model/InstantWinAllOf
     * @param instantWinType {Number} integer
     * @param tiles {Array.<module:model/InstantWinTile>} 
     */
    constructor(instantWinType, tiles) { 
        
        InstantWinAllOf.initialize(this, instantWinType, tiles);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, instantWinType, tiles) { 
        obj['instantWinType'] = instantWinType;
        obj['tiles'] = tiles;
    }

    /**
     * Constructs a <code>InstantWinAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstantWinAllOf} obj Optional instance to populate.
     * @return {module:model/InstantWinAllOf} The populated <code>InstantWinAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstantWinAllOf();

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
            if (data.hasOwnProperty('playedCount')) {
                obj['playedCount'] = ApiClient.convertToType(data['playedCount'], 'Number');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
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
                obj['tiles'] = ApiClient.convertToType(data['tiles'], [InstantWinTile]);
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
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
InstantWinAllOf.prototype['name'] = undefined;

/**
 * @member {String} description
 */
InstantWinAllOf.prototype['description'] = undefined;

/**
 * @member {String} termsAndConditions
 */
InstantWinAllOf.prototype['termsAndConditions'] = undefined;

/**
 * @member {Array.<String>} constraints
 */
InstantWinAllOf.prototype['constraints'] = undefined;

/**
 * integer
 * @member {Number} statusCode
 */
InstantWinAllOf.prototype['statusCode'] = undefined;

/**
 * integer
 * @member {Number} instantWinType
 */
InstantWinAllOf.prototype['instantWinType'] = undefined;

/**
 * integer
 * @member {Number} playedCount
 */
InstantWinAllOf.prototype['playedCount'] = undefined;

/**
 * if instant win is active
 * @member {Boolean} active
 */
InstantWinAllOf.prototype['active'] = undefined;

/**
 * Attachement id for the corresponding icon image.
 * @member {String} icon
 */
InstantWinAllOf.prototype['icon'] = undefined;

/**
 * Link to the banner
 * @member {String} banner
 */
InstantWinAllOf.prototype['banner'] = undefined;

/**
 * Link to the bannerLowResolution
 * @member {String} bannerLowResolution
 */
InstantWinAllOf.prototype['bannerLowResolution'] = undefined;

/**
 * Link to the bannerHighResolution
 * @member {String} bannerHighResolution
 */
InstantWinAllOf.prototype['bannerHighResolution'] = undefined;

/**
 * 
 * @member {Array.<module:model/InstantWinTile>} tiles
 */
InstantWinAllOf.prototype['tiles'] = undefined;

/**
 * The start date and time of a schedule. ISO8601 timestamp
 * @member {Date} startDate
 */
InstantWinAllOf.prototype['startDate'] = undefined;

/**
 * The end date and time of a schedule. ISO8601 timestamp
 * @member {Date} endDate
 */
InstantWinAllOf.prototype['endDate'] = undefined;

/**
 * @member {Number} version
 */
InstantWinAllOf.prototype['version'] = undefined;

/**
 * A link link to the cms entry for this objects style sheet
 * @member {String} style
 */
InstantWinAllOf.prototype['style'] = undefined;






export default InstantWinAllOf;

