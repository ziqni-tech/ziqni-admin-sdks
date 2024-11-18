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
    instance = new @ZiqniTechAdminApiClient.ContestReducedAllOf();
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

  describe('ContestReducedAllOf', function() {
    it('should create an instance of ContestReducedAllOf', function() {
      // uncomment below and update the code to test ContestReducedAllOf
      //var instance = new @ZiqniTechAdminApiClient.ContestReducedAllOf();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.ContestReducedAllOf);
    });

    it('should have the property competitionId (base name: "competitionId")', function() {
      // uncomment below and update the code to test the property competitionId
      //var instance = new @ZiqniTechAdminApiClient.ContestReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property row (base name: "row")', function() {
      // uncomment below and update the code to test the property row
      //var instance = new @ZiqniTechAdminApiClient.ContestReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new @ZiqniTechAdminApiClient.ContestReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property round (base name: "round")', function() {
      // uncomment below and update the code to test the property round
      //var instance = new @ZiqniTechAdminApiClient.ContestReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property groupStage (base name: "groupStage")', function() {
      // uncomment below and update the code to test the property groupStage
      //var instance = new @ZiqniTechAdminApiClient.ContestReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property entrantsFromContest (base name: "entrantsFromContest")', function() {
      // uncomment below and update the code to test the property entrantsFromContest
      //var instance = new @ZiqniTechAdminApiClient.ContestReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new @ZiqniTechAdminApiClient.ContestReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property statusCode (base name: "statusCode")', function() {
      // uncomment below and update the code to test the property statusCode
      //var instance = new @ZiqniTechAdminApiClient.ContestReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scheduledStartDate (base name: "scheduledStartDate")', function() {
      // uncomment below and update the code to test the property scheduledStartDate
      //var instance = new @ZiqniTechAdminApiClient.ContestReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scheduledEndDate (base name: "scheduledEndDate")', function() {
      // uncomment below and update the code to test the property scheduledEndDate
      //var instance = new @ZiqniTechAdminApiClient.ContestReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property actualStartDate (base name: "actualStartDate")', function() {
      // uncomment below and update the code to test the property actualStartDate
      //var instance = new @ZiqniTechAdminApiClient.ContestReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property actualEndDate (base name: "actualEndDate")', function() {
      // uncomment below and update the code to test the property actualEndDate
      //var instance = new @ZiqniTechAdminApiClient.ContestReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new @ZiqniTechAdminApiClient.ContestReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewards (base name: "rewards")', function() {
      // uncomment below and update the code to test the property rewards
      //var instance = new @ZiqniTechAdminApiClient.ContestReducedAllOf();
      //expect(instance).to.be();
    });

  });

}));
