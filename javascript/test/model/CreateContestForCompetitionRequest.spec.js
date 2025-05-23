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
    instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
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

  describe('CreateContestForCompetitionRequest', function() {
    it('should create an instance of CreateContestForCompetitionRequest', function() {
      // uncomment below and update the code to test CreateContestForCompetitionRequest
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.CreateContestForCompetitionRequest);
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property competitionId (base name: "competitionId")', function() {
      // uncomment below and update the code to test the property competitionId
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property row (base name: "row")', function() {
      // uncomment below and update the code to test the property row
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property round (base name: "round")', function() {
      // uncomment below and update the code to test the property round
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property groupStage (base name: "groupStage")', function() {
      // uncomment below and update the code to test the property groupStage
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property groupStageLabel (base name: "groupStageLabel")', function() {
      // uncomment below and update the code to test the property groupStageLabel
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property entrantsFromContest (base name: "entrantsFromContest")', function() {
      // uncomment below and update the code to test the property entrantsFromContest
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property termsAndConditions (base name: "termsAndConditions")', function() {
      // uncomment below and update the code to test the property termsAndConditions
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property roundType (base name: "roundType")', function() {
      // uncomment below and update the code to test the property roundType
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxNumberOfEntrants (base name: "maxNumberOfEntrants")', function() {
      // uncomment below and update the code to test the property maxNumberOfEntrants
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property minNumberOfEntrants (base name: "minNumberOfEntrants")', function() {
      // uncomment below and update the code to test the property minNumberOfEntrants
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property rules (base name: "rules")', function() {
      // uncomment below and update the code to test the property rules
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property scheduledStartDate (base name: "scheduledStartDate")', function() {
      // uncomment below and update the code to test the property scheduledStartDate
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property scheduledEndDate (base name: "scheduledEndDate")', function() {
      // uncomment below and update the code to test the property scheduledEndDate
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property strategies (base name: "strategies")', function() {
      // uncomment below and update the code to test the property strategies
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property translations (base name: "translations")', function() {
      // uncomment below and update the code to test the property translations
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property rewards (base name: "rewards")', function() {
      // uncomment below and update the code to test the property rewards
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property banner (base name: "banner")', function() {
      // uncomment below and update the code to test the property banner
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property bannerLowResolution (base name: "bannerLowResolution")', function() {
      // uncomment below and update the code to test the property bannerLowResolution
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property bannerHighResolution (base name: "bannerHighResolution")', function() {
      // uncomment below and update the code to test the property bannerHighResolution
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new @ZiqniTechAdminApiClient.CreateContestForCompetitionRequest();
      //expect(instance).to.be();
    });

  });

}));
