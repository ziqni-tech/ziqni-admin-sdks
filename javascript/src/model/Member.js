/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.13
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import MemberAllOf from './MemberAllOf';
import MemberType from './MemberType';
import ModelDefault from './ModelDefault';
import OptParamModels from './OptParamModels';

/**
 * The Member model module.
 * @module model/Member
 * @version 0.0.26
 */
class Member {
    /**
     * Constructs a new <code>Member</code>.
     * This is the Member model
     * @alias module:model/Member
     * @implements module:model/ModelDefault
     * @implements module:model/OptParamModels
     * @implements module:model/MemberAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} The name of the member that is used on leader boards and public displays
     * @param memberRefId {String} The reference to this member in your system
     * @param memberType {module:model/MemberType} 
     */
    constructor(id, spaceName, created, name, memberRefId, memberType) { 
        ModelDefault.initialize(this, id, spaceName, created);OptParamModels.initialize(this);MemberAllOf.initialize(this, name, memberRefId, memberType);
        Member.initialize(this, id, spaceName, created, name, memberRefId, memberType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, name, memberRefId, memberType) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['name'] = name;
        obj['memberRefId'] = memberRefId;
        obj['memberType'] = memberType;
    }

    /**
     * Constructs a <code>Member</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Member} obj Optional instance to populate.
     * @return {module:model/Member} The populated <code>Member</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Member();
            ModelDefault.constructFromObject(data, obj);
            OptParamModels.constructFromObject(data, obj);
            MemberAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('memberRefId')) {
                obj['memberRefId'] = ApiClient.convertToType(data['memberRefId'], 'String');
            }
            if (data.hasOwnProperty('memberType')) {
                obj['memberType'] = MemberType.constructFromObject(data['memberType']);
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('teamMembers')) {
                obj['teamMembers'] = ApiClient.convertToType(data['teamMembers'], ['String']);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('timeZoneOffset')) {
                obj['timeZoneOffset'] = ApiClient.convertToType(data['timeZoneOffset'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
Member.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Member.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Member.prototype['created'] = undefined;

/**
 * @member {Object.<String, Object>} customFields
 */
Member.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
Member.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
Member.prototype['metadata'] = undefined;

/**
 * The name of the member that is used on leader boards and public displays
 * @member {String} name
 */
Member.prototype['name'] = undefined;

/**
 * The reference to this member in your system
 * @member {String} memberRefId
 */
Member.prototype['memberRefId'] = undefined;

/**
 * @member {module:model/MemberType} memberType
 */
Member.prototype['memberType'] = undefined;

/**
 * An Icon id that has been pre uploaded to the system to display for Member
 * @member {String} icon
 */
Member.prototype['icon'] = undefined;

/**
 * A social group like Guilds
 * @member {Array.<String>} teamMembers
 */
Member.prototype['teamMembers'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
Member.prototype['constraints'] = undefined;

/**
 * The timezone offset from UTC to use for this member
 * @member {String} timeZoneOffset
 */
Member.prototype['timeZoneOffset'] = undefined;


// Implement ModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
ModelDefault.prototype['id'] = undefined;
/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ModelDefault.prototype['spaceName'] = undefined;
/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ModelDefault.prototype['created'] = undefined;
// Implement OptParamModels interface:
/**
 * @member {Object.<String, Object>} customFields
 */
OptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
OptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
OptParamModels.prototype['metadata'] = undefined;
// Implement MemberAllOf interface:
/**
 * The name of the member that is used on leader boards and public displays
 * @member {String} name
 */
MemberAllOf.prototype['name'] = undefined;
/**
 * The reference to this member in your system
 * @member {String} memberRefId
 */
MemberAllOf.prototype['memberRefId'] = undefined;
/**
 * @member {module:model/MemberType} memberType
 */
MemberAllOf.prototype['memberType'] = undefined;
/**
 * An Icon id that has been pre uploaded to the system to display for Member
 * @member {String} icon
 */
MemberAllOf.prototype['icon'] = undefined;
/**
 * A social group like Guilds
 * @member {Array.<String>} teamMembers
 */
MemberAllOf.prototype['teamMembers'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
MemberAllOf.prototype['constraints'] = undefined;
/**
 * The timezone offset from UTC to use for this member
 * @member {String} timeZoneOffset
 */
MemberAllOf.prototype['timeZoneOffset'] = undefined;




export default Member;

