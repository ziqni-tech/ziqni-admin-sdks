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
import UpdateInstantWinRequestAllOf from './UpdateInstantWinRequestAllOf';
import UpdateInstantWinTile from './UpdateInstantWinTile';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';

/**
 * The UpdateInstantWinRequest model module.
 * @module model/UpdateInstantWinRequest
 * @version 0.0.26
 */
class UpdateInstantWinRequest {
    /**
     * Constructs a new <code>UpdateInstantWinRequest</code>.
     * This is a request for Instant win update
     * @alias module:model/UpdateInstantWinRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateInstantWinRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateInstantWinRequestAllOf.initialize(this);
        UpdateInstantWinRequest.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>UpdateInstantWinRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateInstantWinRequest} obj Optional instance to populate.
     * @return {module:model/UpdateInstantWinRequest} The populated <code>UpdateInstantWinRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateInstantWinRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateOptParamModels.constructFromObject(data, obj);
            UpdateInstantWinRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
 * A unique system generated identifier
 * @member {String} id
 */
UpdateInstantWinRequest.prototype['id'] = undefined;

/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateInstantWinRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateInstantWinRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
UpdateInstantWinRequest.prototype['metadata'] = undefined;

/**
 * @member {String} name
 */
UpdateInstantWinRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
UpdateInstantWinRequest.prototype['description'] = undefined;

/**
 * @member {String} termsAndConditions
 */
UpdateInstantWinRequest.prototype['termsAndConditions'] = undefined;

/**
 * @member {Array.<String>} constraints
 */
UpdateInstantWinRequest.prototype['constraints'] = undefined;

/**
 * integer
 * @member {Number} statusCode
 */
UpdateInstantWinRequest.prototype['statusCode'] = undefined;

/**
 * integer
 * @member {Number} instantWinType
 */
UpdateInstantWinRequest.prototype['instantWinType'] = undefined;

/**
 * Attachement id for the corresponding icon image.
 * @member {String} icon
 */
UpdateInstantWinRequest.prototype['icon'] = undefined;

/**
 * Link to the banner
 * @member {String} banner
 */
UpdateInstantWinRequest.prototype['banner'] = undefined;

/**
 * Link to the bannerLowResolution
 * @member {String} bannerLowResolution
 */
UpdateInstantWinRequest.prototype['bannerLowResolution'] = undefined;

/**
 * Link to the bannerHighResolution
 * @member {String} bannerHighResolution
 */
UpdateInstantWinRequest.prototype['bannerHighResolution'] = undefined;

/**
 * 
 * @member {Array.<module:model/UpdateInstantWinTile>} tiles
 */
UpdateInstantWinRequest.prototype['tiles'] = undefined;

/**
 * A link link to the cms entry for this objects style sheet
 * @member {String} style
 */
UpdateInstantWinRequest.prototype['style'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateOptParamModels interface:
/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
UpdateOptParamModels.prototype['metadata'] = undefined;
// Implement UpdateInstantWinRequestAllOf interface:
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




export default UpdateInstantWinRequest;

