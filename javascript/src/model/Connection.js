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
import ConnectionAllOf from './ConnectionAllOf';
import ConnectionType from './ConnectionType';
import ModelDefault from './ModelDefault';
import OptParamModels from './OptParamModels';

/**
 * The Connection model module.
 * @module model/Connection
 * @version 0.0.26
 */
class Connection {
    /**
     * Constructs a new <code>Connection</code>.
     * @alias module:model/Connection
     * @implements module:model/ModelDefault
     * @implements module:model/OptParamModels
     * @implements module:model/ConnectionAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} The name of the consumer
     * @param lastKnownStatus {String} Last known status of the connection
     * @param lastKnownStatusCode {Number} Status code correspoding to the last known status
     * @param constraints {Array.<String>} Additional constraints
     * @param transformerId {String} The transformer to use, if empty the default system transformer will be used
     * @param secret {String} Consumer secret used for authentication
     * @param user {String} Consumer username for authentication
     */
    constructor(id, spaceName, created, name, lastKnownStatus, lastKnownStatusCode, constraints, transformerId, secret, user) { 
        ModelDefault.initialize(this, id, spaceName, created);OptParamModels.initialize(this);ConnectionAllOf.initialize(this, name, lastKnownStatus, lastKnownStatusCode, constraints, transformerId, secret, user);
        Connection.initialize(this, id, spaceName, created, name, lastKnownStatus, lastKnownStatusCode, constraints, transformerId, secret, user);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, name, lastKnownStatus, lastKnownStatusCode, constraints, transformerId, secret, user) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['name'] = name;
        obj['lastKnownStatus'] = lastKnownStatus;
        obj['lastKnownStatusCode'] = lastKnownStatusCode;
        obj['constraints'] = constraints;
        obj['transformerId'] = transformerId;
        obj['secret'] = secret;
        obj['user'] = user;
    }

    /**
     * Constructs a <code>Connection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Connection} obj Optional instance to populate.
     * @return {module:model/Connection} The populated <code>Connection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Connection();
            ModelDefault.constructFromObject(data, obj);
            OptParamModels.constructFromObject(data, obj);
            ConnectionAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('lastKnownStatus')) {
                obj['lastKnownStatus'] = ApiClient.convertToType(data['lastKnownStatus'], 'String');
            }
            if (data.hasOwnProperty('lastKnownStatusCode')) {
                obj['lastKnownStatusCode'] = ApiClient.convertToType(data['lastKnownStatusCode'], 'Number');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('transformerId')) {
                obj['transformerId'] = ApiClient.convertToType(data['transformerId'], 'String');
            }
            if (data.hasOwnProperty('connectionType')) {
                obj['connectionType'] = ConnectionType.constructFromObject(data['connectionType']);
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
Connection.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Connection.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Connection.prototype['created'] = undefined;

/**
 * @member {Object.<String, Object>} customFields
 */
Connection.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
Connection.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
Connection.prototype['metadata'] = undefined;

/**
 * The name of the consumer
 * @member {String} name
 */
Connection.prototype['name'] = undefined;

/**
 * The description of the consumer
 * @member {String} description
 */
Connection.prototype['description'] = undefined;

/**
 * Last known status of the connection
 * @member {String} lastKnownStatus
 */
Connection.prototype['lastKnownStatus'] = undefined;

/**
 * Status code correspoding to the last known status
 * @member {Number} lastKnownStatusCode
 */
Connection.prototype['lastKnownStatusCode'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
Connection.prototype['constraints'] = undefined;

/**
 * The transformer to use, if empty the default system transformer will be used
 * @member {String} transformerId
 */
Connection.prototype['transformerId'] = undefined;

/**
 * @member {module:model/ConnectionType} connectionType
 */
Connection.prototype['connectionType'] = undefined;

/**
 * Consumer secret used for authentication
 * @member {String} secret
 */
Connection.prototype['secret'] = undefined;

/**
 * Consumer username for authentication
 * @member {String} user
 */
Connection.prototype['user'] = undefined;


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
// Implement ConnectionAllOf interface:
/**
 * The name of the consumer
 * @member {String} name
 */
ConnectionAllOf.prototype['name'] = undefined;
/**
 * The description of the consumer
 * @member {String} description
 */
ConnectionAllOf.prototype['description'] = undefined;
/**
 * Last known status of the connection
 * @member {String} lastKnownStatus
 */
ConnectionAllOf.prototype['lastKnownStatus'] = undefined;
/**
 * Status code correspoding to the last known status
 * @member {Number} lastKnownStatusCode
 */
ConnectionAllOf.prototype['lastKnownStatusCode'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
ConnectionAllOf.prototype['constraints'] = undefined;
/**
 * The transformer to use, if empty the default system transformer will be used
 * @member {String} transformerId
 */
ConnectionAllOf.prototype['transformerId'] = undefined;
/**
 * @member {module:model/ConnectionType} connectionType
 */
ConnectionAllOf.prototype['connectionType'] = undefined;
/**
 * Consumer secret used for authentication
 * @member {String} secret
 */
ConnectionAllOf.prototype['secret'] = undefined;
/**
 * Consumer username for authentication
 * @member {String} user
 */
ConnectionAllOf.prototype['user'] = undefined;




export default Connection;

