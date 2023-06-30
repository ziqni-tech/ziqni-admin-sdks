/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.6
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AppliesTo from './AppliesTo';
import CustomField from './CustomField';
import ObjectConstraint from './ObjectConstraint';

/**
 * The ObjectParameters model module.
 * @module model/ObjectParameters
 * @version 0.0.26
 */
class ObjectParameters {
    /**
     * Constructs a new <code>ObjectParameters</code>.
     * 
     * @alias module:model/ObjectParameters
     * @param customFields {Array.<module:model/CustomField>} Custom fields for this object
     * @param objectType {module:model/AppliesTo} 
     * @param userConstraints {Array.<module:model/ObjectConstraint>} Valid contraints for this object type that the user can set and unset
     * @param systemConstraints {Array.<module:model/ObjectConstraint>} System contraints that the user connot modify
     */
    constructor(customFields, objectType, userConstraints, systemConstraints) { 
        
        ObjectParameters.initialize(this, customFields, objectType, userConstraints, systemConstraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, customFields, objectType, userConstraints, systemConstraints) { 
        obj['customFields'] = customFields;
        obj['objectType'] = objectType;
        obj['userConstraints'] = userConstraints;
        obj['systemConstraints'] = systemConstraints;
    }

    /**
     * Constructs a <code>ObjectParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ObjectParameters} obj Optional instance to populate.
     * @return {module:model/ObjectParameters} The populated <code>ObjectParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ObjectParameters();

            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], [CustomField]);
            }
            if (data.hasOwnProperty('objectType')) {
                obj['objectType'] = AppliesTo.constructFromObject(data['objectType']);
            }
            if (data.hasOwnProperty('objectSubType')) {
                obj['objectSubType'] = ApiClient.convertToType(data['objectSubType'], 'String');
            }
            if (data.hasOwnProperty('userConstraints')) {
                obj['userConstraints'] = ApiClient.convertToType(data['userConstraints'], [ObjectConstraint]);
            }
            if (data.hasOwnProperty('systemConstraints')) {
                obj['systemConstraints'] = ApiClient.convertToType(data['systemConstraints'], [ObjectConstraint]);
            }
        }
        return obj;
    }


}

/**
 * Custom fields for this object
 * @member {Array.<module:model/CustomField>} customFields
 */
ObjectParameters.prototype['customFields'] = undefined;

/**
 * @member {module:model/AppliesTo} objectType
 */
ObjectParameters.prototype['objectType'] = undefined;

/**
 * The sub type of the object
 * @member {String} objectSubType
 */
ObjectParameters.prototype['objectSubType'] = undefined;

/**
 * Valid contraints for this object type that the user can set and unset
 * @member {Array.<module:model/ObjectConstraint>} userConstraints
 */
ObjectParameters.prototype['userConstraints'] = undefined;

/**
 * System contraints that the user connot modify
 * @member {Array.<module:model/ObjectConstraint>} systemConstraints
 */
ObjectParameters.prototype['systemConstraints'] = undefined;






export default ObjectParameters;

