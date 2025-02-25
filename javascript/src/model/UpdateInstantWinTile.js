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
import GridLocation from './GridLocation';
import UpdateRewardRequest from './UpdateRewardRequest';

/**
 * The UpdateInstantWinTile model module.
 * @module model/UpdateInstantWinTile
 * @version 0.0.26
 */
class UpdateInstantWinTile {
    /**
     * Constructs a new <code>UpdateInstantWinTile</code>.
     * 
     * @alias module:model/UpdateInstantWinTile
     * @param icon {String} The id to the image file
     * @param probability {Number} 
     */
    constructor(icon, probability) { 
        
        UpdateInstantWinTile.initialize(this, icon, probability);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, icon, probability) { 
        obj['icon'] = icon;
        obj['probability'] = probability;
    }

    /**
     * Constructs a <code>UpdateInstantWinTile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateInstantWinTile} obj Optional instance to populate.
     * @return {module:model/UpdateInstantWinTile} The populated <code>UpdateInstantWinTile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateInstantWinTile();

            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('contraints')) {
                obj['contraints'] = ApiClient.convertToType(data['contraints'], ['String']);
            }
            if (data.hasOwnProperty('reward')) {
                obj['reward'] = UpdateRewardRequest.constructFromObject(data['reward']);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = GridLocation.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('probability')) {
                obj['probability'] = ApiClient.convertToType(data['probability'], 'Number');
            }
            if (data.hasOwnProperty('background')) {
                obj['background'] = ApiClient.convertToType(data['background'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The id to the image file
 * @member {String} icon
 */
UpdateInstantWinTile.prototype['icon'] = undefined;

/**
 * 
 * @member {String} text
 */
UpdateInstantWinTile.prototype['text'] = undefined;

/**
 * hasPrizes, glow
 * @member {Array.<String>} contraints
 */
UpdateInstantWinTile.prototype['contraints'] = undefined;

/**
 * @member {module:model/UpdateRewardRequest} reward
 */
UpdateInstantWinTile.prototype['reward'] = undefined;

/**
 * @member {module:model/GridLocation} location
 */
UpdateInstantWinTile.prototype['location'] = undefined;

/**
 * 
 * @member {Number} probability
 */
UpdateInstantWinTile.prototype['probability'] = undefined;

/**
 * 
 * @member {String} background
 */
UpdateInstantWinTile.prototype['background'] = undefined;






export default UpdateInstantWinTile;

