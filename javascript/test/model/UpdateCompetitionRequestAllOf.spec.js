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
    instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
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

  describe('UpdateCompetitionRequestAllOf', function() {
    it('should create an instance of UpdateCompetitionRequestAllOf', function() {
      // uncomment below and update the code to test UpdateCompetitionRequestAllOf
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf);
    });

    it('should have the property competitionType (base name: "competitionType")', function() {
      // uncomment below and update the code to test the property competitionType
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRounds (base name: "numberOfRounds")', function() {
      // uncomment below and update the code to test the property numberOfRounds
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property numberOfGroupStages (base name: "numberOfGroupStages")', function() {
      // uncomment below and update the code to test the property numberOfGroupStages
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property termsAndConditions (base name: "termsAndConditions")', function() {
      // uncomment below and update the code to test the property termsAndConditions
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property entrantMemberType (base name: "entrantMemberType")', function() {
      // uncomment below and update the code to test the property entrantMemberType
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property maxNumberOfEntrants (base name: "maxNumberOfEntrants")', function() {
      // uncomment below and update the code to test the property maxNumberOfEntrants
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property minNumberOfEntrants (base name: "minNumberOfEntrants")', function() {
      // uncomment below and update the code to test the property minNumberOfEntrants
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scheduledStartDate (base name: "scheduledStartDate")', function() {
      // uncomment below and update the code to test the property scheduledStartDate
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scheduledEndDate (base name: "scheduledEndDate")', function() {
      // uncomment below and update the code to test the property scheduledEndDate
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property addConstraints (base name: "addConstraints")', function() {
      // uncomment below and update the code to test the property addConstraints
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property removeConstraints (base name: "removeConstraints")', function() {
      // uncomment below and update the code to test the property removeConstraints
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property productIds (base name: "productIds")', function() {
      // uncomment below and update the code to test the property productIds
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property createContests (base name: "createContests")', function() {
      // uncomment below and update the code to test the property createContests
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property updateContests (base name: "updateContests")', function() {
      // uncomment below and update the code to test the property updateContests
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property entrantMemberTagsFilter (base name: "entrantMemberTagsFilter")', function() {
      // uncomment below and update the code to test the property entrantMemberTagsFilter
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property productTagsFilter (base name: "productTagsFilter")', function() {
      // uncomment below and update the code to test the property productTagsFilter
      //var instance = new @ZiqniTechAdminApiClient.UpdateCompetitionRequestAllOf();
      //expect(instance).to.be();
    });

  });

}));
