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
    instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
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

  describe('CreateAchievementRequestAllOf', function() {
    it('should create an instance of CreateAchievementRequestAllOf', function() {
      // uncomment below and update the code to test CreateAchievementRequestAllOf
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.CreateAchievementRequestAllOf);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property termsAndConditions (base name: "termsAndConditions")', function() {
      // uncomment below and update the code to test the property termsAndConditions
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property banner (base name: "banner")', function() {
      // uncomment below and update the code to test the property banner
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property bannerLowResolution (base name: "bannerLowResolution")', function() {
      // uncomment below and update the code to test the property bannerLowResolution
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property bannerHighResolution (base name: "bannerHighResolution")', function() {
      // uncomment below and update the code to test the property bannerHighResolution
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rules (base name: "rules")', function() {
      // uncomment below and update the code to test the property rules
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scheduling (base name: "scheduling")', function() {
      // uncomment below and update the code to test the property scheduling
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property maxNumberOfIssues (base name: "maxNumberOfIssues")', function() {
      // uncomment below and update the code to test the property maxNumberOfIssues
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property translations (base name: "translations")', function() {
      // uncomment below and update the code to test the property translations
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewards (base name: "rewards")', function() {
      // uncomment below and update the code to test the property rewards
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property achievementDependencies (base name: "achievementDependencies")', function() {
      // uncomment below and update the code to test the property achievementDependencies
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property memberTagsFilter (base name: "memberTagsFilter")', function() {
      // uncomment below and update the code to test the property memberTagsFilter
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property productIds (base name: "productIds")', function() {
      // uncomment below and update the code to test the property productIds
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property productTagsFilter (base name: "productTagsFilter")', function() {
      // uncomment below and update the code to test the property productTagsFilter
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property strategies (base name: "strategies")', function() {
      // uncomment below and update the code to test the property strategies
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property addConstraints (base name: "addConstraints")', function() {
      // uncomment below and update the code to test the property addConstraints
      //var instance = new @ZiqniTechAdminApiClient.CreateAchievementRequestAllOf();
      //expect(instance).to.be();
    });

  });

}));
