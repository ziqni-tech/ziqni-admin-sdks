/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.7
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.@ZiqniTechAdminApiClient);
  }
}(this, function(expect, @ZiqniTechAdminApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @ZiqniTechAdminApiClient.ChangePasswordRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ChangePasswordRequest', function() {
    it('should create an instance of ChangePasswordRequest', function() {
      // uncomment below and update the code to test ChangePasswordRequest
      //var instance = new @ZiqniTechAdminApiClient.ChangePasswordRequest();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.ChangePasswordRequest);
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new @ZiqniTechAdminApiClient.ChangePasswordRequest();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new @ZiqniTechAdminApiClient.ChangePasswordRequest();
      //expect(instance).to.be();
    });

    it('should have the property newPassword (base name: "newPassword")', function() {
      // uncomment below and update the code to test the property newPassword
      //var instance = new @ZiqniTechAdminApiClient.ChangePasswordRequest();
      //expect(instance).to.be();
    });

    it('should have the property confirmPassword (base name: "confirmPassword")', function() {
      // uncomment below and update the code to test the property confirmPassword
      //var instance = new @ZiqniTechAdminApiClient.ChangePasswordRequest();
      //expect(instance).to.be();
    });

    it('should have the property twoFactorAccessCode (base name: "twoFactorAccessCode")', function() {
      // uncomment below and update the code to test the property twoFactorAccessCode
      //var instance = new @ZiqniTechAdminApiClient.ChangePasswordRequest();
      //expect(instance).to.be();
    });

  });

}));
