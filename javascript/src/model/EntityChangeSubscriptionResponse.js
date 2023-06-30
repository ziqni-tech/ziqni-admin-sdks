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
import EntityChangeSubscription from './EntityChangeSubscription';
import Error from './Error';
import MetaBasic from './MetaBasic';

/**
 * The EntityChangeSubscriptionResponse model module.
 * @module model/EntityChangeSubscriptionResponse
 * @version 0.0.26
 */
class EntityChangeSubscriptionResponse {
    /**
     * Constructs a new <code>EntityChangeSubscriptionResponse</code>.
     * 
     * @alias module:model/EntityChangeSubscriptionResponse
     */
    constructor() { 
        
        EntityChangeSubscriptionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntityChangeSubscriptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityChangeSubscriptionResponse} obj Optional instance to populate.
     * @return {module:model/EntityChangeSubscriptionResponse} The populated <code>EntityChangeSubscriptionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntityChangeSubscriptionResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaBasic.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [EntityChangeSubscription]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MetaBasic} meta
 */
EntityChangeSubscriptionResponse.prototype['meta'] = undefined;

/**
 * 
 * @member {Array.<module:model/EntityChangeSubscription>} data
 */
EntityChangeSubscriptionResponse.prototype['data'] = undefined;

/**
 * 
 * @member {Array.<module:model/Error>} errors
 */
EntityChangeSubscriptionResponse.prototype['errors'] = undefined;






export default EntityChangeSubscriptionResponse;

