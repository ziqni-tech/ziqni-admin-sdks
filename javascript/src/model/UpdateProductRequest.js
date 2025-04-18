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
import ActionTypeAdjustmentFactor from './ActionTypeAdjustmentFactor';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';
import UpdateProductRequestAllOf from './UpdateProductRequestAllOf';

/**
 * The UpdateProductRequest model module.
 * @module model/UpdateProductRequest
 * @version 0.0.26
 */
class UpdateProductRequest {
    /**
     * Constructs a new <code>UpdateProductRequest</code>.
     * This is a request for Product update
     * @alias module:model/UpdateProductRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateProductRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateProductRequestAllOf.initialize(this);
        UpdateProductRequest.initialize(this, id);
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
     * Constructs a <code>UpdateProductRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateProductRequest} obj Optional instance to populate.
     * @return {module:model/UpdateProductRequest} The populated <code>UpdateProductRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateProductRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateOptParamModels.constructFromObject(data, obj);
            UpdateProductRequestAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('productType')) {
                obj['productType'] = ApiClient.convertToType(data['productType'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
            if (data.hasOwnProperty('adjustmentFactor')) {
                obj['adjustmentFactor'] = ApiClient.convertToType(data['adjustmentFactor'], 'Number');
            }
            if (data.hasOwnProperty('actionTypeAdjustmentFactors')) {
                obj['actionTypeAdjustmentFactors'] = ApiClient.convertToType(data['actionTypeAdjustmentFactors'], [ActionTypeAdjustmentFactor]);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateProductRequest.prototype['id'] = undefined;

/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateProductRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateProductRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
UpdateProductRequest.prototype['metadata'] = undefined;

/**
 * The name of the product
 * @member {String} name
 */
UpdateProductRequest.prototype['name'] = undefined;

/**
 * Product type
 * @member {String} productType
 */
UpdateProductRequest.prototype['productType'] = undefined;

/**
 * The description of the product for your reference
 * @member {String} description
 */
UpdateProductRequest.prototype['description'] = undefined;

/**
 * An Icon id that has been pre uploaded to the system to display for Product
 * @member {String} icon
 */
UpdateProductRequest.prototype['icon'] = undefined;

/**
 * Link to the banner
 * @member {String} banner
 */
UpdateProductRequest.prototype['banner'] = undefined;

/**
 * Link to the bannerLowResolution
 * @member {String} bannerLowResolution
 */
UpdateProductRequest.prototype['bannerLowResolution'] = undefined;

/**
 * Link to the bannerHighResolution
 * @member {String} bannerHighResolution
 */
UpdateProductRequest.prototype['bannerHighResolution'] = undefined;

/**
 * The multiplier to apply to source values received for this product events
 * @member {Number} adjustmentFactor
 */
UpdateProductRequest.prototype['adjustmentFactor'] = undefined;

/**
 * @member {Array.<module:model/ActionTypeAdjustmentFactor>} actionTypeAdjustmentFactors
 */
UpdateProductRequest.prototype['actionTypeAdjustmentFactors'] = undefined;


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
// Implement UpdateProductRequestAllOf interface:
/**
 * The name of the product
 * @member {String} name
 */
UpdateProductRequestAllOf.prototype['name'] = undefined;
/**
 * Product type
 * @member {String} productType
 */
UpdateProductRequestAllOf.prototype['productType'] = undefined;
/**
 * The description of the product for your reference
 * @member {String} description
 */
UpdateProductRequestAllOf.prototype['description'] = undefined;
/**
 * An Icon id that has been pre uploaded to the system to display for Product
 * @member {String} icon
 */
UpdateProductRequestAllOf.prototype['icon'] = undefined;
/**
 * Link to the banner
 * @member {String} banner
 */
UpdateProductRequestAllOf.prototype['banner'] = undefined;
/**
 * Link to the bannerLowResolution
 * @member {String} bannerLowResolution
 */
UpdateProductRequestAllOf.prototype['bannerLowResolution'] = undefined;
/**
 * Link to the bannerHighResolution
 * @member {String} bannerHighResolution
 */
UpdateProductRequestAllOf.prototype['bannerHighResolution'] = undefined;
/**
 * The multiplier to apply to source values received for this product events
 * @member {Number} adjustmentFactor
 */
UpdateProductRequestAllOf.prototype['adjustmentFactor'] = undefined;
/**
 * @member {Array.<module:model/ActionTypeAdjustmentFactor>} actionTypeAdjustmentFactors
 */
UpdateProductRequestAllOf.prototype['actionTypeAdjustmentFactors'] = undefined;




export default UpdateProductRequest;

