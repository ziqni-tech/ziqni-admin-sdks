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
import CreateOptParamModels from './CreateOptParamModels';
import CreateWebhookRequestAllOf from './CreateWebhookRequestAllOf';

/**
 * The CreateWebhookRequest model module.
 * @module model/CreateWebhookRequest
 * @version 0.0.26
 */
class CreateWebhookRequest {
    /**
     * Constructs a new <code>CreateWebhookRequest</code>.
     * @alias module:model/CreateWebhookRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateWebhookRequestAllOf
     * @param postToUrl {String} A URL to post the webhook to
     * @param triggers {Array.<String>} A list of event triggers
     * @param name {String} The name of a Webhook
     */
    constructor(postToUrl, triggers, name) { 
        CreateOptParamModels.initialize(this);CreateWebhookRequestAllOf.initialize(this, postToUrl, triggers, name);
        CreateWebhookRequest.initialize(this, postToUrl, triggers, name);
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
     * Constructs a <code>CreateWebhookRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWebhookRequest} obj Optional instance to populate.
     * @return {module:model/CreateWebhookRequest} The populated <code>CreateWebhookRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateWebhookRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateWebhookRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
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
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateWebhookRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateWebhookRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateWebhookRequest.prototype['metadata'] = undefined;

/**
 * A URL to post the webhook to
 * @member {String} postToUrl
 */
CreateWebhookRequest.prototype['postToUrl'] = undefined;

/**
 * A list of event triggers
 * @member {Array.<String>} triggers
 */
CreateWebhookRequest.prototype['triggers'] = undefined;

/**
 * The description of a Webhook
 * @member {String} description
 */
CreateWebhookRequest.prototype['description'] = undefined;

/**
 * The name of a Webhook
 * @member {String} name
 */
CreateWebhookRequest.prototype['name'] = undefined;

/**
 * The headers to add to the request
 * @member {Object.<String, String>} headers
 */
CreateWebhookRequest.prototype['headers'] = undefined;

/**
 * Basic auth username
 * @member {String} username
 */
CreateWebhookRequest.prototype['username'] = undefined;

/**
 * Basic auth password
 * @member {String} password
 */
CreateWebhookRequest.prototype['password'] = undefined;


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
// Implement CreateWebhookRequestAllOf interface:
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




export default CreateWebhookRequest;

