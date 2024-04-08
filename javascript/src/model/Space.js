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
import ModelDefault from './ModelDefault';
import SpaceAllOf from './SpaceAllOf';

/**
 * The Space model module.
 * @module model/Space
 * @version 0.0.26
 */
class Space {
    /**
     * Constructs a new <code>Space</code>.
     * @alias module:model/Space
     * @implements module:model/ModelDefault
     * @implements module:model/SpaceAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param accountType {String} Type of account; personal or company or vendor
     */
    constructor(id, spaceName, created, accountType) { 
        ModelDefault.initialize(this, id, spaceName, created);SpaceAllOf.initialize(this, accountType);
        Space.initialize(this, id, spaceName, created, accountType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, accountType) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['accountType'] = accountType;
    }

    /**
     * Constructs a <code>Space</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Space} obj Optional instance to populate.
     * @return {module:model/Space} The populated <code>Space</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Space();
            ModelDefault.constructFromObject(data, obj);
            SpaceAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('accountType')) {
                obj['accountType'] = ApiClient.convertToType(data['accountType'], 'String');
            }
            if (data.hasOwnProperty('masterSpace')) {
                obj['masterSpace'] = ApiClient.convertToType(data['masterSpace'], 'String');
            }
            if (data.hasOwnProperty('baseCurrencyUOM')) {
                obj['baseCurrencyUOM'] = ApiClient.convertToType(data['baseCurrencyUOM'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
Space.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Space.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Space.prototype['created'] = undefined;

/**
 * Type of account; personal or company or vendor
 * @member {String} accountType
 */
Space.prototype['accountType'] = undefined;

/**
 * The master account for this account
 * @member {String} masterSpace
 */
Space.prototype['masterSpace'] = undefined;

/**
 * The base currency used by this accounts
 * @member {String} baseCurrencyUOM
 */
Space.prototype['baseCurrencyUOM'] = undefined;


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
// Implement SpaceAllOf interface:
/**
 * Type of account; personal or company or vendor
 * @member {String} accountType
 */
SpaceAllOf.prototype['accountType'] = undefined;
/**
 * The master account for this account
 * @member {String} masterSpace
 */
SpaceAllOf.prototype['masterSpace'] = undefined;
/**
 * The base currency used by this accounts
 * @member {String} baseCurrencyUOM
 */
SpaceAllOf.prototype['baseCurrencyUOM'] = undefined;




export default Space;

