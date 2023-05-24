/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.2
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
    instance = new @ZiqniTechAdminApiClient.AchievementAllOf();
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

  describe('AchievementAllOf', function() {
    it('should create an instance of AchievementAllOf', function() {
      // uncomment below and update the code to test AchievementAllOf
      //var instance = new @ZiqniTechAdminApiClient.AchievementAllOf();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.AchievementAllOf);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new @ZiqniTechAdminApiClient.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new @ZiqniTechAdminApiClient.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property termsAndConditions (base name: "termsAndConditions")', function() {
      // uncomment below and update the code to test the property termsAndConditions
      //var instance = new @ZiqniTechAdminApiClient.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instance = new @ZiqniTechAdminApiClient.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scheduling (base name: "scheduling")', function() {
      // uncomment below and update the code to test the property scheduling
      //var instance = new @ZiqniTechAdminApiClient.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property maxNumberOfIssues (base name: "maxNumberOfIssues")', function() {
      // uncomment below and update the code to test the property maxNumberOfIssues
      //var instance = new @ZiqniTechAdminApiClient.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new @ZiqniTechAdminApiClient.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property statusCode (base name: "statusCode")', function() {
      // uncomment below and update the code to test the property statusCode
      //var instance = new @ZiqniTechAdminApiClient.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new @ZiqniTechAdminApiClient.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property achievementDependencies (base name: "achievementDependencies")', function() {
      // uncomment below and update the code to test the property achievementDependencies
      //var instance = new @ZiqniTechAdminApiClient.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property memberTagsFilter (base name: "memberTagsFilter")', function() {
      // uncomment below and update the code to test the property memberTagsFilter
      //var instance = new @ZiqniTechAdminApiClient.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property productTagsFilter (base name: "productTagsFilter")', function() {
      // uncomment below and update the code to test the property productTagsFilter
      //var instance = new @ZiqniTechAdminApiClient.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property strategies (base name: "strategies")', function() {
      // uncomment below and update the code to test the property strategies
      //var instance = new @ZiqniTechAdminApiClient.AchievementAllOf();
      //expect(instance).to.be();
    });

  });

}));
