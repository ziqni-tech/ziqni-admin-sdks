/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Macro from './Macro';

/**
 * The FactDefault model module.
 * @module model/FactDefault
 * @version 0.0.26
 */
class FactDefault {
    /**
     * Constructs a new <code>FactDefault</code>.
     * @alias module:model/FactDefault
     * @param operators {Array.<String>} The operators supported by the fact
     * @param constantType {String} The data type of the constant
     * @param constantExample {String} Example of the constant
     */
    constructor(operators, constantType, constantExample) { 
        
        FactDefault.initialize(this, operators, constantType, constantExample);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, operators, constantType, constantExample) { 
        obj['operators'] = operators;
        obj['constantType'] = constantType;
        obj['constantExample'] = constantExample;
    }

    /**
     * Constructs a <code>FactDefault</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FactDefault} obj Optional instance to populate.
     * @return {module:model/FactDefault} The populated <code>FactDefault</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FactDefault();

            if (data.hasOwnProperty('operators')) {
                obj['operators'] = ApiClient.convertToType(data['operators'], ['String']);
            }
            if (data.hasOwnProperty('constantType')) {
                obj['constantType'] = ApiClient.convertToType(data['constantType'], 'String');
            }
            if (data.hasOwnProperty('constantExample')) {
                obj['constantExample'] = ApiClient.convertToType(data['constantExample'], 'String');
            }
            if (data.hasOwnProperty('defaultVale')) {
                obj['defaultVale'] = ApiClient.convertToType(data['defaultVale'], 'String');
            }
            if (data.hasOwnProperty('macros')) {
                obj['macros'] = ApiClient.convertToType(data['macros'], [Macro]);
            }
        }
        return obj;
    }


}

/**
 * The operators supported by the fact
 * @member {Array.<String>} operators
 */
FactDefault.prototype['operators'] = undefined;

/**
 * The data type of the constant
 * @member {String} constantType
 */
FactDefault.prototype['constantType'] = undefined;

/**
 * Example of the constant
 * @member {String} constantExample
 */
FactDefault.prototype['constantExample'] = undefined;

/**
 * The default value of the constant for the fact
 * @member {String} defaultVale
 */
FactDefault.prototype['defaultVale'] = undefined;

/**
 * @member {Array.<module:model/Macro>} macros
 */
FactDefault.prototype['macros'] = undefined;






export default FactDefault;
