/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.17
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
    instance = new @ZiqniTechAdminApiClient.UpdateMemberRequestAllOf();
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

  describe('UpdateMemberRequestAllOf', function() {
    it('should create an instance of UpdateMemberRequestAllOf', function() {
      // uncomment below and update the code to test UpdateMemberRequestAllOf
      //var instance = new @ZiqniTechAdminApiClient.UpdateMemberRequestAllOf();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.UpdateMemberRequestAllOf);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new @ZiqniTechAdminApiClient.UpdateMemberRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property memberType (base name: "memberType")', function() {
      // uncomment below and update the code to test the property memberType
      //var instance = new @ZiqniTechAdminApiClient.UpdateMemberRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property teamMembers (base name: "teamMembers")', function() {
      // uncomment below and update the code to test the property teamMembers
      //var instance = new @ZiqniTechAdminApiClient.UpdateMemberRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instance = new @ZiqniTechAdminApiClient.UpdateMemberRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property addConstraints (base name: "addConstraints")', function() {
      // uncomment below and update the code to test the property addConstraints
      //var instance = new @ZiqniTechAdminApiClient.UpdateMemberRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property removeConstraints (base name: "removeConstraints")', function() {
      // uncomment below and update the code to test the property removeConstraints
      //var instance = new @ZiqniTechAdminApiClient.UpdateMemberRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property timeZoneOffset (base name: "timeZoneOffset")', function() {
      // uncomment below and update the code to test the property timeZoneOffset
      //var instance = new @ZiqniTechAdminApiClient.UpdateMemberRequestAllOf();
      //expect(instance).to.be();
    });

  });

}));
