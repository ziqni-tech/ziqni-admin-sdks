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

/**
 * The AwardAction model module.
 * @module model/AwardAction
 * @version 0.0.26
 */
class AwardAction {
    /**
     * Constructs a new <code>AwardAction</code>.
     * An action to perform
     * @alias module:model/AwardAction
     */
    constructor() { 
        
        AwardAction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AwardAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AwardAction} obj Optional instance to populate.
     * @return {module:model/AwardAction} The populated <code>AwardAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AwardAction();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('onStatusChangeTo')) {
                obj['onStatusChangeTo'] = ApiClient.convertToType(data['onStatusChangeTo'], 'Number');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Like: Transaction, or Notify
 * @member {String} action
 */
AwardAction.prototype['action'] = undefined;

/**
 * The identifier of the entity that will be acted on
 * @member {String} entityId
 */
AwardAction.prototype['entityId'] = undefined;

/**
 * As required. Like once
 * @member {Array.<String>} constraints
 */
AwardAction.prototype['constraints'] = undefined;

/**
 * Issued, Completed, etc
 * @member {Number} onStatusChangeTo
 */
AwardAction.prototype['onStatusChangeTo'] = undefined;

/**
 * InstantWin, WalletType
 * @member {String} entityType
 */
AwardAction.prototype['entityType'] = undefined;






export default AwardAction;

