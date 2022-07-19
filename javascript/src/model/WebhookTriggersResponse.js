/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Error from './Error';
import MetaExtended from './MetaExtended';
import Triggers from './Triggers';

/**
 * The WebhookTriggersResponse model module.
 * @module model/WebhookTriggersResponse
 * @version 0.0.26
 */
class WebhookTriggersResponse {
    /**
     * Constructs a new <code>WebhookTriggersResponse</code>.
     * @alias module:model/WebhookTriggersResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        WebhookTriggersResponse.initialize(this, meta);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, meta) { 
        obj['meta'] = meta;
    }

    /**
     * Constructs a <code>WebhookTriggersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookTriggersResponse} obj Optional instance to populate.
     * @return {module:model/WebhookTriggersResponse} The populated <code>WebhookTriggersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookTriggersResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Triggers]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MetaExtended} meta
 */
WebhookTriggersResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Triggers>} results
 */
WebhookTriggersResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
WebhookTriggersResponse.prototype['errors'] = undefined;






export default WebhookTriggersResponse;

