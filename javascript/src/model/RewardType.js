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
import AwardAction from './AwardAction';
import AwardScheduling from './AwardScheduling';
import ModelDefault from './ModelDefault';
import OptParamModels from './OptParamModels';
import RewardTypeAllOf from './RewardTypeAllOf';

/**
 * The RewardType model module.
 * @module model/RewardType
 * @version 0.0.26
 */
class RewardType {
    /**
     * Constructs a new <code>RewardType</code>.
     * This is the Reward Type model
     * @alias module:model/RewardType
     * @implements module:model/ModelDefault
     * @implements module:model/OptParamModels
     * @implements module:model/RewardTypeAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} The name of the Reward type
     * @param key {String} A unique key that represents the reward type
     * @param constraints {Array.<String>} Additional constraints, if the value is present it means the
     * @param unitOfMeasure {String} The unit of measure to use when performing dynamic calculations like currency
     */
    constructor(id, spaceName, created, name, key, constraints, unitOfMeasure) { 
        ModelDefault.initialize(this, id, spaceName, created);OptParamModels.initialize(this);RewardTypeAllOf.initialize(this, name, key, constraints, unitOfMeasure);
        RewardType.initialize(this, id, spaceName, created, name, key, constraints, unitOfMeasure);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, name, key, constraints, unitOfMeasure) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['name'] = name;
        obj['key'] = key;
        obj['constraints'] = constraints;
        obj['unitOfMeasure'] = unitOfMeasure;
    }

    /**
     * Constructs a <code>RewardType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RewardType} obj Optional instance to populate.
     * @return {module:model/RewardType} The populated <code>RewardType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RewardType();
            ModelDefault.constructFromObject(data, obj);
            OptParamModels.constructFromObject(data, obj);
            RewardTypeAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('awardActions')) {
                obj['awardActions'] = ApiClient.convertToType(data['awardActions'], [AwardAction]);
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('unitOfMeasure')) {
                obj['unitOfMeasure'] = ApiClient.convertToType(data['unitOfMeasure'], 'String');
            }
            if (data.hasOwnProperty('scheduling')) {
                obj['scheduling'] = ApiClient.convertToType(data['scheduling'], [AwardScheduling]);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
RewardType.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
RewardType.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
RewardType.prototype['created'] = undefined;

/**
 * @member {Object.<String, Object>} customFields
 */
RewardType.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
RewardType.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
RewardType.prototype['metadata'] = undefined;

/**
 * The name of the Reward type
 * @member {String} name
 */
RewardType.prototype['name'] = undefined;

/**
 * The description of a reward type
 * @member {String} description
 */
RewardType.prototype['description'] = undefined;

/**
 * When the state changes the action is performed
 * @member {Array.<module:model/AwardAction>} awardActions
 */
RewardType.prototype['awardActions'] = undefined;

/**
 * A unique key that represents the reward type
 * @member {String} key
 */
RewardType.prototype['key'] = undefined;

/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
RewardType.prototype['constraints'] = undefined;

/**
 * The unit of measure to use when performing dynamic calculations like currency
 * @member {String} unitOfMeasure
 */
RewardType.prototype['unitOfMeasure'] = undefined;

/**
 * Set the default time based constraints using either an exact point in time or duration to manage the life cycle of the award
 * @member {Array.<module:model/AwardScheduling>} scheduling
 */
RewardType.prototype['scheduling'] = undefined;


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
// Implement RewardTypeAllOf interface:
/**
 * The name of the Reward type
 * @member {String} name
 */
RewardTypeAllOf.prototype['name'] = undefined;
/**
 * The description of a reward type
 * @member {String} description
 */
RewardTypeAllOf.prototype['description'] = undefined;
/**
 * When the state changes the action is performed
 * @member {Array.<module:model/AwardAction>} awardActions
 */
RewardTypeAllOf.prototype['awardActions'] = undefined;
/**
 * A unique key that represents the reward type
 * @member {String} key
 */
RewardTypeAllOf.prototype['key'] = undefined;
/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
RewardTypeAllOf.prototype['constraints'] = undefined;
/**
 * The unit of measure to use when performing dynamic calculations like currency
 * @member {String} unitOfMeasure
 */
RewardTypeAllOf.prototype['unitOfMeasure'] = undefined;
/**
 * Set the default time based constraints using either an exact point in time or duration to manage the life cycle of the award
 * @member {Array.<module:model/AwardScheduling>} scheduling
 */
RewardTypeAllOf.prototype['scheduling'] = undefined;




export default RewardType;

