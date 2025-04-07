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
import CreateRewardRequest from './CreateRewardRequest';
import GridLocation from './GridLocation';

/**
 * The CreateInstantWinTile model module.
 * @module model/CreateInstantWinTile
 * @version 0.0.26
 */
class CreateInstantWinTile {
    /**
     * Constructs a new <code>CreateInstantWinTile</code>.
     * 
     * @alias module:model/CreateInstantWinTile
     * @param icon {String} The id to the image file
     * @param probability {Number} 
     */
    constructor(icon, probability) { 
        
        CreateInstantWinTile.initialize(this, icon, probability);
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
     * Constructs a <code>CreateInstantWinTile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateInstantWinTile} obj Optional instance to populate.
     * @return {module:model/CreateInstantWinTile} The populated <code>CreateInstantWinTile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateInstantWinTile();

            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('reward')) {
                obj['reward'] = CreateRewardRequest.constructFromObject(data['reward']);
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
            if (data.hasOwnProperty('contraints')) {
                obj['contraints'] = ApiClient.convertToType(data['contraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The id to the image file
 * @member {String} icon
 */
CreateInstantWinTile.prototype['icon'] = undefined;

/**
 * 
 * @member {String} text
 */
CreateInstantWinTile.prototype['text'] = undefined;

/**
 * @member {module:model/CreateRewardRequest} reward
 */
CreateInstantWinTile.prototype['reward'] = undefined;

/**
 * @member {module:model/GridLocation} location
 */
CreateInstantWinTile.prototype['location'] = undefined;

/**
 * 
 * @member {Number} probability
 */
CreateInstantWinTile.prototype['probability'] = undefined;

/**
 * 
 * @member {String} background
 */
CreateInstantWinTile.prototype['background'] = undefined;

/**
 * hasPrizes, glow
 * @member {Array.<String>} contraints
 */
CreateInstantWinTile.prototype['contraints'] = undefined;






export default CreateInstantWinTile;

