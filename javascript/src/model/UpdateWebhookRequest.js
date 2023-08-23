/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.7
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';
import UpdateWebhookRequestAllOf from './UpdateWebhookRequestAllOf';

/**
 * The UpdateWebhookRequest model module.
 * @module model/UpdateWebhookRequest
 * @version 0.0.26
 */
class UpdateWebhookRequest {
    /**
     * Constructs a new <code>UpdateWebhookRequest</code>.
     * @alias module:model/UpdateWebhookRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateWebhookRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateWebhookRequestAllOf.initialize(this);
        UpdateWebhookRequest.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>UpdateWebhookRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateWebhookRequest} obj Optional instance to populate.
     * @return {module:model/UpdateWebhookRequest} The populated <code>UpdateWebhookRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateWebhookRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateOptParamModels.constructFromObject(data, obj);
            UpdateWebhookRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
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
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateWebhookRequest.prototype['id'] = undefined;

/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateWebhookRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateWebhookRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
UpdateWebhookRequest.prototype['metadata'] = undefined;

/**
 * A URL to post the webhook to
 * @member {String} postToUrl
 */
UpdateWebhookRequest.prototype['postToUrl'] = undefined;

/**
 * A list of event triggers
 * @member {Array.<String>} triggers
 */
UpdateWebhookRequest.prototype['triggers'] = undefined;

/**
 * The description of a Webhook
 * @member {String} description
 */
UpdateWebhookRequest.prototype['description'] = undefined;

/**
 * The name of a Webhook
 * @member {String} name
 */
UpdateWebhookRequest.prototype['name'] = undefined;

/**
 * @member {Object.<String, String>} headers
 */
UpdateWebhookRequest.prototype['headers'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateOptParamModels interface:
/**
 * A list of id's used to add cutom fields
 * @member {Object.<String, Object>} customFields
 */
UpdateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
UpdateOptParamModels.prototype['metadata'] = undefined;
// Implement UpdateWebhookRequestAllOf interface:
/**
 * A URL to post the webhook to
 * @member {String} postToUrl
 */
UpdateWebhookRequestAllOf.prototype['postToUrl'] = undefined;
/**
 * A list of event triggers
 * @member {Array.<String>} triggers
 */
UpdateWebhookRequestAllOf.prototype['triggers'] = undefined;
/**
 * The description of a Webhook
 * @member {String} description
 */
UpdateWebhookRequestAllOf.prototype['description'] = undefined;
/**
 * The name of a Webhook
 * @member {String} name
 */
UpdateWebhookRequestAllOf.prototype['name'] = undefined;
/**
 * @member {Object.<String, String>} headers
 */
UpdateWebhookRequestAllOf.prototype['headers'] = undefined;




export default UpdateWebhookRequest;

