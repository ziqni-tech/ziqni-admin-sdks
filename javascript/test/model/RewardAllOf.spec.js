/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.6
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
    instance = new @ZiqniTechAdminApiClient.RewardAllOf();
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

  describe('RewardAllOf', function() {
    it('should create an instance of RewardAllOf', function() {
      // uncomment below and update the code to test RewardAllOf
      //var instance = new @ZiqniTechAdminApiClient.RewardAllOf();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.RewardAllOf);
    });

    it('should have the property entityType (base name: "entityType")', function() {
      // uncomment below and update the code to test the property entityType
      //var instance = new @ZiqniTechAdminApiClient.RewardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property entityId (base name: "entityId")', function() {
      // uncomment below and update the code to test the property entityId
      //var instance = new @ZiqniTechAdminApiClient.RewardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new @ZiqniTechAdminApiClient.RewardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new @ZiqniTechAdminApiClient.RewardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewardRank (base name: "rewardRank")', function() {
      // uncomment below and update the code to test the property rewardRank
      //var instance = new @ZiqniTechAdminApiClient.RewardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewardValue (base name: "rewardValue")', function() {
      // uncomment below and update the code to test the property rewardValue
      //var instance = new @ZiqniTechAdminApiClient.RewardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewardType (base name: "rewardType")', function() {
      // uncomment below and update the code to test the property rewardType
      //var instance = new @ZiqniTechAdminApiClient.RewardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instance = new @ZiqniTechAdminApiClient.RewardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property issueLimit (base name: "issueLimit")', function() {
      // uncomment below and update the code to test the property issueLimit
      //var instance = new @ZiqniTechAdminApiClient.RewardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property delay (base name: "delay")', function() {
      // uncomment below and update the code to test the property delay
      //var instance = new @ZiqniTechAdminApiClient.RewardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property pointInTime (base name: "pointInTime")', function() {
      // uncomment below and update the code to test the property pointInTime
      //var instance = new @ZiqniTechAdminApiClient.RewardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property period (base name: "period")', function() {
      // uncomment below and update the code to test the property period
      //var instance = new @ZiqniTechAdminApiClient.RewardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new @ZiqniTechAdminApiClient.RewardAllOf();
      //expect(instance).to.be();
    });

  });

}));
