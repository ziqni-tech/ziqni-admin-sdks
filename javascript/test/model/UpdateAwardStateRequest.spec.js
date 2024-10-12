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
    instance = new @ZiqniTechAdminApiClient.UpdateAwardStateRequest();
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

  describe('UpdateAwardStateRequest', function() {
    it('should create an instance of UpdateAwardStateRequest', function() {
      // uncomment below and update the code to test UpdateAwardStateRequest
      //var instance = new @ZiqniTechAdminApiClient.UpdateAwardStateRequest();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.UpdateAwardStateRequest);
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new @ZiqniTechAdminApiClient.UpdateAwardStateRequest();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instance = new @ZiqniTechAdminApiClient.UpdateAwardStateRequest();
      //expect(instance).to.be();
    });

    it('should have the property transactionReferenceId (base name: "transactionReferenceId")', function() {
      // uncomment below and update the code to test the property transactionReferenceId
      //var instance = new @ZiqniTechAdminApiClient.UpdateAwardStateRequest();
      //expect(instance).to.be();
    });

    it('should have the property reasonForChange (base name: "reasonForChange")', function() {
      // uncomment below and update the code to test the property reasonForChange
      //var instance = new @ZiqniTechAdminApiClient.UpdateAwardStateRequest();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new @ZiqniTechAdminApiClient.UpdateAwardStateRequest();
      //expect(instance).to.be();
    });

  });

}));