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
 * The Macro model module.
 * @module model/Macro
 * @version 0.0.26
 */
class Macro {
    /**
     * Constructs a new <code>Macro</code>.
     * @alias module:model/Macro
     * @param name {String} The name of the macro
     * @param macroValue {String} The macro value to be used
     */
    constructor(name, macroValue) { 
        
        Macro.initialize(this, name, macroValue);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, macroValue) { 
        obj['name'] = name;
        obj['macroValue'] = macroValue;
    }

    /**
     * Constructs a <code>Macro</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Macro} obj Optional instance to populate.
     * @return {module:model/Macro} The populated <code>Macro</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Macro();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('macroValue')) {
                obj['macroValue'] = ApiClient.convertToType(data['macroValue'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the macro
 * @member {String} name
 */
Macro.prototype['name'] = undefined;

/**
 * The macro value to be used
 * @member {String} macroValue
 */
Macro.prototype['macroValue'] = undefined;






export default Macro;

