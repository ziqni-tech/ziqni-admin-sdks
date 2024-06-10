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
    instance = new @ZiqniTechAdminApiClient.CompetitionReducedAllOf();
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

  describe('CompetitionReducedAllOf', function() {
    it('should create an instance of CompetitionReducedAllOf', function() {
      // uncomment below and update the code to test CompetitionReducedAllOf
      //var instance = new @ZiqniTechAdminApiClient.CompetitionReducedAllOf();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.CompetitionReducedAllOf);
    });

    it('should have the property competitionType (base name: "competitionType")', function() {
      // uncomment below and update the code to test the property competitionType
      //var instance = new @ZiqniTechAdminApiClient.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRounds (base name: "numberOfRounds")', function() {
      // uncomment below and update the code to test the property numberOfRounds
      //var instance = new @ZiqniTechAdminApiClient.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new @ZiqniTechAdminApiClient.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new @ZiqniTechAdminApiClient.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property statusCode (base name: "statusCode")', function() {
      // uncomment below and update the code to test the property statusCode
      //var instance = new @ZiqniTechAdminApiClient.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property dependantOn (base name: "dependantOn")', function() {
      // uncomment below and update the code to test the property dependantOn
      //var instance = new @ZiqniTechAdminApiClient.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property entrantMemberType (base name: "entrantMemberType")', function() {
      // uncomment below and update the code to test the property entrantMemberType
      //var instance = new @ZiqniTechAdminApiClient.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scheduledStartDate (base name: "scheduledStartDate")', function() {
      // uncomment below and update the code to test the property scheduledStartDate
      //var instance = new @ZiqniTechAdminApiClient.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scheduledEndDate (base name: "scheduledEndDate")', function() {
      // uncomment below and update the code to test the property scheduledEndDate
      //var instance = new @ZiqniTechAdminApiClient.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property actualStartDate (base name: "actualStartDate")', function() {
      // uncomment below and update the code to test the property actualStartDate
      //var instance = new @ZiqniTechAdminApiClient.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property actualEndDate (base name: "actualEndDate")', function() {
      // uncomment below and update the code to test the property actualEndDate
      //var instance = new @ZiqniTechAdminApiClient.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new @ZiqniTechAdminApiClient.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new @ZiqniTechAdminApiClient.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

  });

}));
