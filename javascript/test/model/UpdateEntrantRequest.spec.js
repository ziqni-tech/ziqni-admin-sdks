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
    instance = new @ZiqniTechAdminApiClient.UpdateEntrantRequest();
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

  describe('UpdateEntrantRequest', function() {
    it('should create an instance of UpdateEntrantRequest', function() {
      // uncomment below and update the code to test UpdateEntrantRequest
      //var instance = new @ZiqniTechAdminApiClient.UpdateEntrantRequest();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.UpdateEntrantRequest);
    });

    it('should have the property memberId (base name: "memberId")', function() {
      // uncomment below and update the code to test the property memberId
      //var instance = new @ZiqniTechAdminApiClient.UpdateEntrantRequest();
      //expect(instance).to.be();
    });

    it('should have the property entityId (base name: "entityId")', function() {
      // uncomment below and update the code to test the property entityId
      //var instance = new @ZiqniTechAdminApiClient.UpdateEntrantRequest();
      //expect(instance).to.be();
    });

    it('should have the property entrantStatus (base name: "entrantStatus")', function() {
      // uncomment below and update the code to test the property entrantStatus
      //var instance = new @ZiqniTechAdminApiClient.UpdateEntrantRequest();
      //expect(instance).to.be();
    });

    it('should have the property entrantAction (base name: "entrantAction")', function() {
      // uncomment below and update the code to test the property entrantAction
      //var instance = new @ZiqniTechAdminApiClient.UpdateEntrantRequest();
      //expect(instance).to.be();
    });

  });

}));
