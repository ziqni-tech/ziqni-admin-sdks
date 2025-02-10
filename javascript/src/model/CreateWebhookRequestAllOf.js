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

/**
 * The CreateWebhookRequestAllOf model module.
 * @module model/CreateWebhookRequestAllOf
 * @version 0.0.26
 */
class CreateWebhookRequestAllOf {
    /**
     * Constructs a new <code>CreateWebhookRequestAllOf</code>.
     * @alias module:model/CreateWebhookRequestAllOf
     * @param postToUrl {String} A URL to post the webhook to
     * @param triggers {Array.<String>} A list of event triggers
     * @param name {String} The name of a Webhook
     */
    constructor(postToUrl, triggers, name) { 
        
        CreateWebhookRequestAllOf.initialize(this, postToUrl, triggers, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, postToUrl, triggers, name) { 
        obj['postToUrl'] = postToUrl;
        obj['triggers'] = triggers;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateWebhookRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWebhookRequestAllOf} obj Optional instance to populate.
     * @return {module:model/CreateWebhookRequestAllOf} The populated <code>CreateWebhookRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateWebhookRequestAllOf();

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
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A URL to post the webhook to
 * @member {String} postToUrl
 */
CreateWebhookRequestAllOf.prototype['postToUrl'] = undefined;

/**
 * A list of event triggers
 * @member {Array.<String>} triggers
 */
CreateWebhookRequestAllOf.prototype['triggers'] = undefined;

/**
 * The description of a Webhook
 * @member {String} description
 */
CreateWebhookRequestAllOf.prototype['description'] = undefined;

/**
 * The name of a Webhook
 * @member {String} name
 */
CreateWebhookRequestAllOf.prototype['name'] = undefined;

/**
 * The headers to add to the request
 * @member {Object.<String, String>} headers
 */
CreateWebhookRequestAllOf.prototype['headers'] = undefined;

/**
 * Basic auth username
 * @member {String} username
 */
CreateWebhookRequestAllOf.prototype['username'] = undefined;

/**
 * Basic auth password
 * @member {String} password
 */
CreateWebhookRequestAllOf.prototype['password'] = undefined;






export default CreateWebhookRequestAllOf;

