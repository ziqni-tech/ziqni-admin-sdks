/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.15
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The MemberTokenRequest model module.
 * @module model/MemberTokenRequest
 * @version 0.0.26
 */
class MemberTokenRequest {
    /**
     * Constructs a new <code>MemberTokenRequest</code>.
     * 
     * @alias module:model/MemberTokenRequest
     * @param apiKey {String} The API key to use to generate this token.
     * @param member {String} The identifier used to find the member information. if this value is set to \"__PUBLIC__\" and isReferenceId is set to \"FALSE\" then a genral use, non-member specific token will be issued
     * @param resource {String} This will be ziqni-gapi or similar
     */
    constructor(apiKey, member, resource) { 
        
        MemberTokenRequest.initialize(this, apiKey, member, resource);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiKey, member, resource) { 
        obj['apiKey'] = apiKey;
        obj['member'] = member;
        obj['resource'] = resource;
    }

    /**
     * Constructs a <code>MemberTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemberTokenRequest} obj Optional instance to populate.
     * @return {module:model/MemberTokenRequest} The populated <code>MemberTokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MemberTokenRequest();

            if (data.hasOwnProperty('apiKey')) {
                obj['apiKey'] = ApiClient.convertToType(data['apiKey'], 'String');
            }
            if (data.hasOwnProperty('isReferenceId')) {
                obj['isReferenceId'] = ApiClient.convertToType(data['isReferenceId'], 'Boolean');
            }
            if (data.hasOwnProperty('origins')) {
                obj['origins'] = ApiClient.convertToType(data['origins'], ['String']);
            }
            if (data.hasOwnProperty('member')) {
                obj['member'] = ApiClient.convertToType(data['member'], 'String');
            }
            if (data.hasOwnProperty('expires')) {
                obj['expires'] = ApiClient.convertToType(data['expires'], 'Number');
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
            }
            if (data.hasOwnProperty('disabledServices')) {
                obj['disabledServices'] = ApiClient.convertToType(data['disabledServices'], ['String']);
            }
            if (data.hasOwnProperty('languageKey')) {
                obj['languageKey'] = ApiClient.convertToType(data['languageKey'], 'String');
            }
            if (data.hasOwnProperty('currencyKey')) {
                obj['currencyKey'] = ApiClient.convertToType(data['currencyKey'], 'String');
            }
            if (data.hasOwnProperty('timeZoneOffset')) {
                obj['timeZoneOffset'] = ApiClient.convertToType(data['timeZoneOffset'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The API key to use to generate this token.
 * @member {String} apiKey
 */
MemberTokenRequest.prototype['apiKey'] = undefined;

/**
 * Default is FALSE, if set to TRUE then the meberId will be assumed to be client provided reference id, if set to false then the memberId will be assumed to be a ZIQNI generated identifier.
 * @member {Boolean} isReferenceId
 */
MemberTokenRequest.prototype['isReferenceId'] = undefined;

/**
 * Allowed origins for the generated token. Leave empty to permit all origins, Alternative provide up to 3 allowed origin URIs like https://my-space.api.ziqni.app 
 * @member {Array.<String>} origins
 */
MemberTokenRequest.prototype['origins'] = undefined;

/**
 * The identifier used to find the member information. if this value is set to \"__PUBLIC__\" and isReferenceId is set to \"FALSE\" then a genral use, non-member specific token will be issued
 * @member {String} member
 */
MemberTokenRequest.prototype['member'] = undefined;

/**
 * The number of minutes this token will be valid for. If left blank the token will only be valid for 30 minutes
 * @member {Number} expires
 */
MemberTokenRequest.prototype['expires'] = undefined;

/**
 * This will be ziqni-gapi or similar
 * @member {String} resource
 */
MemberTokenRequest.prototype['resource'] = undefined;

/**
 * A list of services to be disabled for this web token 
 * @member {Array.<String>} disabledServices
 */
MemberTokenRequest.prototype['disabledServices'] = undefined;

/**
 * The language code to use if none is provided in the member api requests 
 * @member {String} languageKey
 */
MemberTokenRequest.prototype['languageKey'] = undefined;

/**
 * The language key to use if none is provided in the member api requests
 * @member {String} currencyKey
 */
MemberTokenRequest.prototype['currencyKey'] = undefined;

/**
 * The time zone to use when returning date and time values
 * @member {Number} timeZoneOffset
 */
MemberTokenRequest.prototype['timeZoneOffset'] = undefined;






export default MemberTokenRequest;

