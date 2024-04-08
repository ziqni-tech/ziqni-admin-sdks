/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.13
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ActionTypeAdjustmentFactor from './ActionTypeAdjustmentFactor';

/**
 * The UpdateProductRequestAllOf model module.
 * @module model/UpdateProductRequestAllOf
 * @version 0.0.26
 */
class UpdateProductRequestAllOf {
    /**
     * Constructs a new <code>UpdateProductRequestAllOf</code>.
     * @alias module:model/UpdateProductRequestAllOf
     */
    constructor() { 
        
        UpdateProductRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateProductRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateProductRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateProductRequestAllOf} The populated <code>UpdateProductRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateProductRequestAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
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
 * The name of the product
 * @member {String} name
 */
UpdateProductRequestAllOf.prototype['name'] = undefined;

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
 * The multiplier to apply to source values received for this product events
 * @member {Number} adjustmentFactor
 */
UpdateProductRequestAllOf.prototype['adjustmentFactor'] = undefined;

/**
 * @member {Array.<module:model/ActionTypeAdjustmentFactor>} actionTypeAdjustmentFactors
 */
UpdateProductRequestAllOf.prototype['actionTypeAdjustmentFactors'] = undefined;






export default UpdateProductRequestAllOf;

