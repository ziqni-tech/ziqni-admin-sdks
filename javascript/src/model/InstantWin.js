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
import InstantWinAllOf from './InstantWinAllOf';
import InstantWinTile from './InstantWinTile';
import ModelDefault from './ModelDefault';
import OptParamModels from './OptParamModels';

/**
 * The InstantWin model module.
 * @module model/InstantWin
 * @version 0.0.26
 */
class InstantWin {
    /**
     * Constructs a new <code>InstantWin</code>.
     * 
     * @alias module:model/InstantWin
     * @implements module:model/InstantWinAllOf
     * @implements module:model/OptParamModels
     * @implements module:model/ModelDefault
     * @param instantWinType {Number} integer
     * @param tiles {Array.<module:model/InstantWinTile>} 
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     */
    constructor(instantWinType, tiles, id, spaceName, created) { 
        InstantWinAllOf.initialize(this, instantWinType, tiles);OptParamModels.initialize(this);ModelDefault.initialize(this, id, spaceName, created);
        InstantWin.initialize(this, instantWinType, tiles, id, spaceName, created);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, instantWinType, tiles, id, spaceName, created) { 
        obj['instantWinType'] = instantWinType;
        obj['tiles'] = tiles;
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
    }

    /**
     * Constructs a <code>InstantWin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstantWin} obj Optional instance to populate.
     * @return {module:model/InstantWin} The populated <code>InstantWin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstantWin();
            InstantWinAllOf.constructFromObject(data, obj);
            OptParamModels.constructFromObject(data, obj);
            ModelDefault.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
InstantWin.prototype['name'] = undefined;

/**
 * @member {String} description
 */
InstantWin.prototype['description'] = undefined;

/**
 * @member {String} termsAndConditions
 */
InstantWin.prototype['termsAndConditions'] = undefined;

/**
 * @member {Array.<String>} constraints
 */
InstantWin.prototype['constraints'] = undefined;

/**
 * integer
 * @member {Number} statusCode
 */
InstantWin.prototype['statusCode'] = undefined;

/**
 * integer
 * @member {Number} instantWinType
 */
InstantWin.prototype['instantWinType'] = undefined;

/**
 * integer
 * @member {Number} playedCount
 */
InstantWin.prototype['playedCount'] = undefined;

/**
 * if instant win is active
 * @member {Boolean} active
 */
InstantWin.prototype['active'] = undefined;

/**
 * Attachement id for the corresponding icon image.
 * @member {String} icon
 */
InstantWin.prototype['icon'] = undefined;

/**
 * Link to the banner
 * @member {String} banner
 */
InstantWin.prototype['banner'] = undefined;

/**
 * Link to the bannerLowResolution
 * @member {String} bannerLowResolution
 */
InstantWin.prototype['bannerLowResolution'] = undefined;

/**
 * Link to the bannerHighResolution
 * @member {String} bannerHighResolution
 */
InstantWin.prototype['bannerHighResolution'] = undefined;

/**
 * 
 * @member {Array.<module:model/InstantWinTile>} tiles
 */
InstantWin.prototype['tiles'] = undefined;

/**
 * The start date and time of a schedule. ISO8601 timestamp
 * @member {Date} startDate
 */
InstantWin.prototype['startDate'] = undefined;

/**
 * The end date and time of a schedule. ISO8601 timestamp
 * @member {Date} endDate
 */
InstantWin.prototype['endDate'] = undefined;

/**
 * @member {Number} version
 */
InstantWin.prototype['version'] = undefined;

/**
 * A link link to the cms entry for this objects style sheet
 * @member {String} style
 */
InstantWin.prototype['style'] = undefined;

/**
 * @member {Object.<String, Object>} customFields
 */
InstantWin.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
InstantWin.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
InstantWin.prototype['metadata'] = undefined;

/**
 * A unique system generated identifier
 * @member {String} id
 */
InstantWin.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
InstantWin.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
InstantWin.prototype['created'] = undefined;


// Implement InstantWinAllOf interface:
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
// Implement OptParamModels interface:
/**
 * @member {Object.<String, Object>} customFields
 */
OptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
OptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
OptParamModels.prototype['metadata'] = undefined;
// Implement ModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
ModelDefault.prototype['id'] = undefined;
/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ModelDefault.prototype['spaceName'] = undefined;
/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ModelDefault.prototype['created'] = undefined;




export default InstantWin;

