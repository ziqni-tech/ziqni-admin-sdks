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
    instance = new @ZiqniTechAdminApiClient.EntrantExport();
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

  describe('EntrantExport', function() {
    it('should create an instance of EntrantExport', function() {
      // uncomment below and update the code to test EntrantExport
      //var instance = new @ZiqniTechAdminApiClient.EntrantExport();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.EntrantExport);
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new @ZiqniTechAdminApiClient.EntrantExport();
      //expect(instance).to.be();
    });

    it('should have the property memberId (base name: "memberId")', function() {
      // uncomment below and update the code to test the property memberId
      //var instance = new @ZiqniTechAdminApiClient.EntrantExport();
      //expect(instance).to.be();
    });

    it('should have the property memberRefId (base name: "memberRefId")', function() {
      // uncomment below and update the code to test the property memberRefId
      //var instance = new @ZiqniTechAdminApiClient.EntrantExport();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new @ZiqniTechAdminApiClient.EntrantExport();
      //expect(instance).to.be();
    });

    it('should have the property points (base name: "points")', function() {
      // uncomment below and update the code to test the property points
      //var instance = new @ZiqniTechAdminApiClient.EntrantExport();
      //expect(instance).to.be();
    });

    it('should have the property rank (base name: "rank")', function() {
      // uncomment below and update the code to test the property rank
      //var instance = new @ZiqniTechAdminApiClient.EntrantExport();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instance = new @ZiqniTechAdminApiClient.EntrantExport();
      //expect(instance).to.be();
    });

    it('should have the property awards (base name: "awards")', function() {
      // uncomment below and update the code to test the property awards
      //var instance = new @ZiqniTechAdminApiClient.EntrantExport();
      //expect(instance).to.be();
    });

    it('should have the property rewards (base name: "rewards")', function() {
      // uncomment below and update the code to test the property rewards
      //var instance = new @ZiqniTechAdminApiClient.EntrantExport();
      //expect(instance).to.be();
    });

  });

}));
