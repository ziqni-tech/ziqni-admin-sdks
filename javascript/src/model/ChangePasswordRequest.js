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

/**
 * The ChangePasswordRequest model module.
 * @module model/ChangePasswordRequest
 * @version 0.0.26
 */
class ChangePasswordRequest {
    /**
     * Constructs a new <code>ChangePasswordRequest</code>.
     * @alias module:model/ChangePasswordRequest
     * @param email {String} The account username
     * @param password {String} Current password
     * @param newPassword {String} New password
     * @param confirmPassword {String} Confirm password
     */
    constructor(email, password, newPassword, confirmPassword) { 
        
        ChangePasswordRequest.initialize(this, email, password, newPassword, confirmPassword);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, password, newPassword, confirmPassword) { 
        obj['email'] = email;
        obj['password'] = password;
        obj['newPassword'] = newPassword;
        obj['confirmPassword'] = confirmPassword;
    }

    /**
     * Constructs a <code>ChangePasswordRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangePasswordRequest} obj Optional instance to populate.
     * @return {module:model/ChangePasswordRequest} The populated <code>ChangePasswordRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangePasswordRequest();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('newPassword')) {
                obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
            }
            if (data.hasOwnProperty('confirmPassword')) {
                obj['confirmPassword'] = ApiClient.convertToType(data['confirmPassword'], 'String');
            }
            if (data.hasOwnProperty('twoFactorAccessCode')) {
                obj['twoFactorAccessCode'] = ApiClient.convertToType(data['twoFactorAccessCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The account username
 * @member {String} email
 */
ChangePasswordRequest.prototype['email'] = undefined;

/**
 * Current password
 * @member {String} password
 */
ChangePasswordRequest.prototype['password'] = undefined;

/**
 * New password
 * @member {String} newPassword
 */
ChangePasswordRequest.prototype['newPassword'] = undefined;

/**
 * Confirm password
 * @member {String} confirmPassword
 */
ChangePasswordRequest.prototype['confirmPassword'] = undefined;

/**
 * Two factor access code if 2FA enabled
 * @member {String} twoFactorAccessCode
 */
ChangePasswordRequest.prototype['twoFactorAccessCode'] = undefined;






export default ChangePasswordRequest;

