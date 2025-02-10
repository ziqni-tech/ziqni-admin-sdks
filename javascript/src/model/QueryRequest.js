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
import QueryMultiple from './QueryMultiple';
import QueryMultipleFields from './QueryMultipleFields';
import QuerySingle from './QuerySingle';
import QuerySortBy from './QuerySortBy';
import RangeQuery from './RangeQuery';

/**
 * The QueryRequest model module.
 * @module model/QueryRequest
 * @version 0.0.26
 */
class QueryRequest {
    /**
     * Constructs a new <code>QueryRequest</code>.
     * 
     * @alias module:model/QueryRequest
     */
    constructor() { 
        
        QueryRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QueryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryRequest} obj Optional instance to populate.
     * @return {module:model/QueryRequest} The populated <code>QueryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueryRequest();

            if (data.hasOwnProperty('must')) {
                obj['must'] = ApiClient.convertToType(data['must'], [QueryMultiple]);
            }
            if (data.hasOwnProperty('mustNot')) {
                obj['mustNot'] = ApiClient.convertToType(data['mustNot'], [QueryMultiple]);
            }
            if (data.hasOwnProperty('should')) {
                obj['should'] = ApiClient.convertToType(data['should'], [QueryMultiple]);
            }
            if (data.hasOwnProperty('gte')) {
                obj['gte'] = ApiClient.convertToType(data['gte'], [QuerySingle]);
            }
            if (data.hasOwnProperty('gt')) {
                obj['gt'] = ApiClient.convertToType(data['gt'], [QuerySingle]);
            }
            if (data.hasOwnProperty('lte')) {
                obj['lte'] = ApiClient.convertToType(data['lte'], [QuerySingle]);
            }
            if (data.hasOwnProperty('lt')) {
                obj['lt'] = ApiClient.convertToType(data['lt'], [QuerySingle]);
            }
            if (data.hasOwnProperty('range')) {
                obj['range'] = ApiClient.convertToType(data['range'], [RangeQuery]);
            }
            if (data.hasOwnProperty('sortBy')) {
                obj['sortBy'] = ApiClient.convertToType(data['sortBy'], [QuerySortBy]);
            }
            if (data.hasOwnProperty('multiFields')) {
                obj['multiFields'] = ApiClient.convertToType(data['multiFields'], [QueryMultipleFields]);
            }
            if (data.hasOwnProperty('includeFields')) {
                obj['includeFields'] = ApiClient.convertToType(data['includeFields'], ['String']);
            }
            if (data.hasOwnProperty('hasValue')) {
                obj['hasValue'] = ApiClient.convertToType(data['hasValue'], ['String']);
            }
            if (data.hasOwnProperty('hasNoValue')) {
                obj['hasNoValue'] = ApiClient.convertToType(data['hasNoValue'], ['String']);
            }
            if (data.hasOwnProperty('shouldMatch')) {
                obj['shouldMatch'] = ApiClient.convertToType(data['shouldMatch'], 'Number');
            }
            if (data.hasOwnProperty('skip')) {
                obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {Array.<module:model/QueryMultiple>} must
 */
QueryRequest.prototype['must'] = undefined;

/**
 * 
 * @member {Array.<module:model/QueryMultiple>} mustNot
 */
QueryRequest.prototype['mustNot'] = undefined;

/**
 * 
 * @member {Array.<module:model/QueryMultiple>} should
 */
QueryRequest.prototype['should'] = undefined;

/**
 * 
 * @member {Array.<module:model/QuerySingle>} gte
 */
QueryRequest.prototype['gte'] = undefined;

/**
 * 
 * @member {Array.<module:model/QuerySingle>} gt
 */
QueryRequest.prototype['gt'] = undefined;

/**
 * 
 * @member {Array.<module:model/QuerySingle>} lte
 */
QueryRequest.prototype['lte'] = undefined;

/**
 * 
 * @member {Array.<module:model/QuerySingle>} lt
 */
QueryRequest.prototype['lt'] = undefined;

/**
 * 
 * @member {Array.<module:model/RangeQuery>} range
 */
QueryRequest.prototype['range'] = undefined;

/**
 * 
 * @member {Array.<module:model/QuerySortBy>} sortBy
 */
QueryRequest.prototype['sortBy'] = undefined;

/**
 * 
 * @member {Array.<module:model/QueryMultipleFields>} multiFields
 */
QueryRequest.prototype['multiFields'] = undefined;

/**
 * 
 * @member {Array.<String>} includeFields
 */
QueryRequest.prototype['includeFields'] = undefined;

/**
 * 
 * @member {Array.<String>} hasValue
 */
QueryRequest.prototype['hasValue'] = undefined;

/**
 * 
 * @member {Array.<String>} hasNoValue
 */
QueryRequest.prototype['hasNoValue'] = undefined;

/**
 * 
 * @member {Number} shouldMatch
 */
QueryRequest.prototype['shouldMatch'] = undefined;

/**
 * 
 * @member {Number} skip
 */
QueryRequest.prototype['skip'] = undefined;

/**
 * 
 * @member {Number} limit
 */
QueryRequest.prototype['limit'] = undefined;

/**
 * 
 * @member {Array.<String>} constraints
 */
QueryRequest.prototype['constraints'] = undefined;






export default QueryRequest;

