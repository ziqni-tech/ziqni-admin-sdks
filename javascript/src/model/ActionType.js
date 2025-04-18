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
import ActionTypeAllOf from './ActionTypeAllOf';
import ModelDefault from './ModelDefault';
import OptParamModels from './OptParamModels';

/**
 * The ActionType model module.
 * @module model/ActionType
 * @version 0.0.26
 */
class ActionType {
    /**
     * Constructs a new <code>ActionType</code>.
     * @alias module:model/ActionType
     * @implements module:model/ModelDefault
     * @implements module:model/OptParamModels
     * @implements module:model/ActionTypeAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} The name of the Action Helper
     * @param key {String} A unique key that represents an action helper
     * @param constraints {Array.<String>} Additional constraints
     * @param unitOfMeasure {String} unit of measure id
     */
    constructor(id, spaceName, created, name, key, constraints, unitOfMeasure) { 
        ModelDefault.initialize(this, id, spaceName, created);OptParamModels.initialize(this);ActionTypeAllOf.initialize(this, name, key, constraints, unitOfMeasure);
        ActionType.initialize(this, id, spaceName, created, name, key, constraints, unitOfMeasure);
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
     * Constructs a <code>ActionType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionType} obj Optional instance to populate.
     * @return {module:model/ActionType} The populated <code>ActionType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionType();
            ModelDefault.constructFromObject(data, obj);
            OptParamModels.constructFromObject(data, obj);
            ActionTypeAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('unitOfMeasure')) {
                obj['unitOfMeasure'] = ApiClient.convertToType(data['unitOfMeasure'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
ActionType.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ActionType.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ActionType.prototype['created'] = undefined;

/**
 * @member {Object.<String, Object>} customFields
 */
ActionType.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
ActionType.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
ActionType.prototype['metadata'] = undefined;

/**
 * The name of the Action Helper
 * @member {String} name
 */
ActionType.prototype['name'] = undefined;

/**
 * A unique key that represents an action helper
 * @member {String} key
 */
ActionType.prototype['key'] = undefined;

/**
 * The description of the rule action helper for your reference
 * @member {String} description
 */
ActionType.prototype['description'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
ActionType.prototype['constraints'] = undefined;

/**
 * unit of measure id
 * @member {String} unitOfMeasure
 */
ActionType.prototype['unitOfMeasure'] = undefined;


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
// Implement ActionTypeAllOf interface:
/**
 * The name of the Action Helper
 * @member {String} name
 */
ActionTypeAllOf.prototype['name'] = undefined;
/**
 * A unique key that represents an action helper
 * @member {String} key
 */
ActionTypeAllOf.prototype['key'] = undefined;
/**
 * The description of the rule action helper for your reference
 * @member {String} description
 */
ActionTypeAllOf.prototype['description'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
ActionTypeAllOf.prototype['constraints'] = undefined;
/**
 * unit of measure id
 * @member {String} unitOfMeasure
 */
ActionTypeAllOf.prototype['unitOfMeasure'] = undefined;




export default ActionType;

