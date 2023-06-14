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

/**
 * The RangeQuery model module.
 * @module model/RangeQuery
 * @version 0.0.26
 */
class RangeQuery {
    /**
     * Constructs a new <code>RangeQuery</code>.
     * 
     * @alias module:model/RangeQuery
     * @param queryField {String} The key of the parameter that is being searched   
     */
    constructor(queryField) { 
        
        RangeQuery.initialize(this, queryField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, queryField) { 
        obj['queryField'] = queryField;
    }

    /**
     * Constructs a <code>RangeQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RangeQuery} obj Optional instance to populate.
     * @return {module:model/RangeQuery} The populated <code>RangeQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RangeQuery();

            if (data.hasOwnProperty('queryField')) {
                obj['queryField'] = ApiClient.convertToType(data['queryField'], 'String');
            }
            if (data.hasOwnProperty('gt')) {
                obj['gt'] = ApiClient.convertToType(data['gt'], 'String');
            }
            if (data.hasOwnProperty('lt')) {
                obj['lt'] = ApiClient.convertToType(data['lt'], 'String');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The key of the parameter that is being searched   
 * @member {String} queryField
 */
RangeQuery.prototype['queryField'] = undefined;

/**
 * Greater than value
 * @member {String} gt
 */
RangeQuery.prototype['gt'] = undefined;

/**
 * Less than value
 * @member {String} lt
 */
RangeQuery.prototype['lt'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
RangeQuery.prototype['constraints'] = undefined;






export default RangeQuery;

