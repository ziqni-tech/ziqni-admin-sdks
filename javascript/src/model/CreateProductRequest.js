/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.5
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ActionTypeAdjustmentFactor from './ActionTypeAdjustmentFactor';
import CreateOptParamModels from './CreateOptParamModels';
import CreateProductRequestAllOf from './CreateProductRequestAllOf';
import Translation from './Translation';

/**
 * The CreateProductRequest model module.
 * @module model/CreateProductRequest
 * @version 0.0.26
 */
class CreateProductRequest {
    /**
     * Constructs a new <code>CreateProductRequest</code>.
     * This is a request for Product creation
     * @alias module:model/CreateProductRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateProductRequestAllOf
     * @param name {String} The name of the product
     * @param adjustmentFactor {Number} The multiplier to apply to source values received for this product events
     * @param productRefId {String} The reference to this product in your system. The reference identifier can not be changed after the product has been created
     */
    constructor(name, adjustmentFactor, productRefId) { 
        CreateOptParamModels.initialize(this);CreateProductRequestAllOf.initialize(this, name, adjustmentFactor, productRefId);
        CreateProductRequest.initialize(this, name, adjustmentFactor, productRefId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, adjustmentFactor, productRefId) { 
        obj['name'] = name;
        obj['adjustmentFactor'] = adjustmentFactor;
        obj['productRefId'] = productRefId;
    }

    /**
     * Constructs a <code>CreateProductRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateProductRequest} obj Optional instance to populate.
     * @return {module:model/CreateProductRequest} The populated <code>CreateProductRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateProductRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateProductRequestAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('adjustmentFactor')) {
                obj['adjustmentFactor'] = ApiClient.convertToType(data['adjustmentFactor'], 'Number');
            }
            if (data.hasOwnProperty('productRefId')) {
                obj['productRefId'] = ApiClient.convertToType(data['productRefId'], 'String');
            }
            if (data.hasOwnProperty('productType')) {
                obj['productType'] = ApiClient.convertToType(data['productType'], 'String');
            }
            if (data.hasOwnProperty('actionTypeAdjustmentFactors')) {
                obj['actionTypeAdjustmentFactors'] = ApiClient.convertToType(data['actionTypeAdjustmentFactors'], [ActionTypeAdjustmentFactor]);
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
        }
        return obj;
    }


}

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateProductRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateProductRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateProductRequest.prototype['metadata'] = undefined;

/**
 * The name of the product
 * @member {String} name
 */
CreateProductRequest.prototype['name'] = undefined;

/**
 * The description of the product for your reference
 * @member {String} description
 */
CreateProductRequest.prototype['description'] = undefined;

/**
 * The multiplier to apply to source values received for this product events
 * @member {Number} adjustmentFactor
 */
CreateProductRequest.prototype['adjustmentFactor'] = undefined;

/**
 * The reference to this product in your system. The reference identifier can not be changed after the product has been created
 * @member {String} productRefId
 */
CreateProductRequest.prototype['productRefId'] = undefined;

/**
 * The type to this product in your system.
 * @member {String} productType
 */
CreateProductRequest.prototype['productType'] = undefined;

/**
 * @member {Array.<module:model/ActionTypeAdjustmentFactor>} actionTypeAdjustmentFactors
 */
CreateProductRequest.prototype['actionTypeAdjustmentFactors'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateProductRequest.prototype['translations'] = undefined;


// Implement CreateOptParamModels interface:
/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
CreateOptParamModels.prototype['metadata'] = undefined;
// Implement CreateProductRequestAllOf interface:
/**
 * The name of the product
 * @member {String} name
 */
CreateProductRequestAllOf.prototype['name'] = undefined;
/**
 * The description of the product for your reference
 * @member {String} description
 */
CreateProductRequestAllOf.prototype['description'] = undefined;
/**
 * The multiplier to apply to source values received for this product events
 * @member {Number} adjustmentFactor
 */
CreateProductRequestAllOf.prototype['adjustmentFactor'] = undefined;
/**
 * The reference to this product in your system. The reference identifier can not be changed after the product has been created
 * @member {String} productRefId
 */
CreateProductRequestAllOf.prototype['productRefId'] = undefined;
/**
 * The type to this product in your system.
 * @member {String} productType
 */
CreateProductRequestAllOf.prototype['productType'] = undefined;
/**
 * @member {Array.<module:model/ActionTypeAdjustmentFactor>} actionTypeAdjustmentFactors
 */
CreateProductRequestAllOf.prototype['actionTypeAdjustmentFactors'] = undefined;
/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateProductRequestAllOf.prototype['translations'] = undefined;




export default CreateProductRequest;

