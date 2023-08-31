/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.9
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import MemberType from './MemberType';

/**
 * The CreateMemberRequestAllOf model module.
 * @module model/CreateMemberRequestAllOf
 * @version 0.0.26
 */
class CreateMemberRequestAllOf {
    /**
     * Constructs a new <code>CreateMemberRequestAllOf</code>.
     * @alias module:model/CreateMemberRequestAllOf
     * @param name {String} The name of the member that is used on leader boards and public displays
     * @param memberRefId {String} The reference to this member in your system
     * @param memberType {module:model/MemberType} 
     */
    constructor(name, memberRefId, memberType) { 
        
        CreateMemberRequestAllOf.initialize(this, name, memberRefId, memberType);
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
     * Constructs a <code>CreateMemberRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateMemberRequestAllOf} obj Optional instance to populate.
     * @return {module:model/CreateMemberRequestAllOf} The populated <code>CreateMemberRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateMemberRequestAllOf();

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
            if (data.hasOwnProperty('addConstraints')) {
                obj['addConstraints'] = ApiClient.convertToType(data['addConstraints'], ['String']);
            }
            if (data.hasOwnProperty('timeZoneOffset')) {
                obj['timeZoneOffset'] = ApiClient.convertToType(data['timeZoneOffset'], 'String');
            }
        }
        return obj;
    }


}

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
 * An Icon id that has been pre uploaded to the system to display for Member
 * @member {String} icon
 */
CreateMemberRequestAllOf.prototype['icon'] = undefined;

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






export default CreateMemberRequestAllOf;

