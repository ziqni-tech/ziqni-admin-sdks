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
import ConnectionState from './ConnectionState';

/**
 * The WebhookAllOf model module.
 * @module model/WebhookAllOf
 * @version 0.0.26
 */
class WebhookAllOf {
    /**
     * Constructs a new <code>WebhookAllOf</code>.
     * @alias module:model/WebhookAllOf
     * @param postToUrl {String} A URL to post the webhook to
     * @param triggers {Array.<String>} A list of event triggers
     * @param name {String} The name of a Webhook
     * @param status {module:model/ConnectionState} 
     */
    constructor(postToUrl, triggers, name, status) { 
        
        WebhookAllOf.initialize(this, postToUrl, triggers, name, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, postToUrl, triggers, name, status) { 
        obj['postToUrl'] = postToUrl;
        obj['triggers'] = triggers;
        obj['name'] = name;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>WebhookAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookAllOf} obj Optional instance to populate.
     * @return {module:model/WebhookAllOf} The populated <code>WebhookAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookAllOf();

            if (data.hasOwnProperty('postToUrl')) {
                obj['postToUrl'] = ApiClient.convertToType(data['postToUrl'], 'String');
            }
            if (data.hasOwnProperty('triggers')) {
                obj['triggers'] = ApiClient.convertToType(data['triggers'], ['String']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], {'String': 'String'});
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ConnectionState.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * A URL to post the webhook to
 * @member {String} postToUrl
 */
WebhookAllOf.prototype['postToUrl'] = undefined;

/**
 * A list of event triggers
 * @member {Array.<String>} triggers
 */
WebhookAllOf.prototype['triggers'] = undefined;

/**
 * The description of a Webhook
 * @member {String} description
 */
WebhookAllOf.prototype['description'] = undefined;

/**
 * The name of a Webhook
 * @member {String} name
 */
WebhookAllOf.prototype['name'] = undefined;

/**
 * @member {Object.<String, String>} headers
 */
WebhookAllOf.prototype['headers'] = undefined;

/**
 * @member {module:model/ConnectionState} status
 */
WebhookAllOf.prototype['status'] = undefined;






export default WebhookAllOf;

