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
    instance = new @ZiqniTechAdminApiClient.MemberMessageAllOf();
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

  describe('MemberMessageAllOf', function() {
    it('should create an instance of MemberMessageAllOf', function() {
      // uncomment below and update the code to test MemberMessageAllOf
      //var instance = new @ZiqniTechAdminApiClient.MemberMessageAllOf();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.MemberMessageAllOf);
    });

    it('should have the property eventRefType (base name: "eventRefType")', function() {
      // uncomment below and update the code to test the property eventRefType
      //var instance = new @ZiqniTechAdminApiClient.MemberMessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property eventRefId (base name: "eventRefId")', function() {
      // uncomment below and update the code to test the property eventRefId
      //var instance = new @ZiqniTechAdminApiClient.MemberMessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property messageType (base name: "messageType")', function() {
      // uncomment below and update the code to test the property messageType
      //var instance = new @ZiqniTechAdminApiClient.MemberMessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new @ZiqniTechAdminApiClient.MemberMessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instance = new @ZiqniTechAdminApiClient.MemberMessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new @ZiqniTechAdminApiClient.MemberMessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property expiry (base name: "expiry")', function() {
      // uncomment below and update the code to test the property expiry
      //var instance = new @ZiqniTechAdminApiClient.MemberMessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new @ZiqniTechAdminApiClient.MemberMessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property memberIds (base name: "memberIds")', function() {
      // uncomment below and update the code to test the property memberIds
      //var instance = new @ZiqniTechAdminApiClient.MemberMessageAllOf();
      //expect(instance).to.be();
    });

  });

}));
