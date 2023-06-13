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
import CreateMemberRequestAllOf from './CreateMemberRequestAllOf';
import CreateOptParamModels from './CreateOptParamModels';
import MemberType from './MemberType';

/**
 * The CreateMemberRequest model module.
 * @module model/CreateMemberRequest
 * @version 0.0.26
 */
class CreateMemberRequest {
    /**
     * Constructs a new <code>CreateMemberRequest</code>.
     * This is a request for Member creation
     * @alias module:model/CreateMemberRequest
     * @implements module:model/CreateMemberRequestAllOf
     * @implements module:model/CreateOptParamModels
     * @param name {String} The name of the member that is used on leader boards and public displays
     * @param memberRefId {String} The reference to this member in your system
     * @param memberType {module:model/MemberType} 
     */
    constructor(name, memberRefId, memberType) { 
        CreateMemberRequestAllOf.initialize(this, name, memberRefId, memberType);CreateOptParamModels.initialize(this);
        CreateMemberRequest.initialize(this, name, memberRefId, memberType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, memberRefId, memberType) { 
        obj['name'] = name;
        obj['memberRefId'] = memberRefId;
        obj['memberType'] = memberType;
    }

    /**
     * Constructs a <code>CreateMemberRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateMemberRequest} obj Optional instance to populate.
     * @return {module:model/CreateMemberRequest} The populated <code>CreateMemberRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateMemberRequest();
            CreateMemberRequestAllOf.constructFromObject(data, obj);
            CreateOptParamModels.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('memberRefId')) {
                obj['memberRefId'] = ApiClient.convertToType(data['memberRefId'], 'String');
            }
            if (data.hasOwnProperty('memberType')) {
                obj['memberType'] = MemberType.constructFromObject(data['memberType']);
            }
            if (data.hasOwnProperty('teamMembers')) {
                obj['teamMembers'] = ApiClient.convertToType(data['teamMembers'], ['String']);
            }
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
            if (data.hasOwnProperty('timeZoneOffset')) {
                obj['timeZoneOffset'] = ApiClient.convertToType(data['timeZoneOffset'], 'String');
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
        }
        return obj;
    }


}

/**
 * The name of the member that is used on leader boards and public displays
 * @member {String} name
 */
CreateMemberRequest.prototype['name'] = undefined;

/**
 * The reference to this member in your system
 * @member {String} memberRefId
 */
CreateMemberRequest.prototype['memberRefId'] = undefined;

/**
 * @member {module:model/MemberType} memberType
 */
CreateMemberRequest.prototype['memberType'] = undefined;

/**
 * A social group like Guilds
 * @member {Array.<String>} teamMembers
 */
CreateMemberRequest.prototype['teamMembers'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
CreateMemberRequest.prototype['addConstraints'] = undefined;

/**
 * To what time zone teh emmber belongs to
 * @member {String} timeZoneOffset
 */
CreateMemberRequest.prototype['timeZoneOffset'] = undefined;

/**
 * A list of custom field entries
 * @member {Object.<String, Object>} customFields
 */
CreateMemberRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateMemberRequest.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateMemberRequest.prototype['metadata'] = undefined;


// Implement CreateMemberRequestAllOf interface:
/**
 * The name of the member that is used on leader boards and public displays
 * @member {String} name
 */
CreateMemberRequestAllOf.prototype['name'] = undefined;
/**
 * The reference to this member in your system
 * @member {String} memberRefId
 */
CreateMemberRequestAllOf.prototype['memberRefId'] = undefined;
/**
 * @member {module:model/MemberType} memberType
 */
CreateMemberRequestAllOf.prototype['memberType'] = undefined;
/**
 * A social group like Guilds
 * @member {Array.<String>} teamMembers
 */
CreateMemberRequestAllOf.prototype['teamMembers'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} addConstraints
 */
CreateMemberRequestAllOf.prototype['addConstraints'] = undefined;
/**
 * To what time zone teh emmber belongs to
 * @member {String} timeZoneOffset
 */
CreateMemberRequestAllOf.prototype['timeZoneOffset'] = undefined;
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




export default CreateMemberRequest;

