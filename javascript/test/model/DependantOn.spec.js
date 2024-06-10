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
    instance = new @ZiqniTechAdminApiClient.DependantOn();
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

  describe('DependantOn', function() {
    it('should create an instance of DependantOn', function() {
      // uncomment below and update the code to test DependantOn
      //var instance = new @ZiqniTechAdminApiClient.DependantOn();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.DependantOn);
    });

    it('should have the property must (base name: "must")', function() {
      // uncomment below and update the code to test the property must
      //var instance = new @ZiqniTechAdminApiClient.DependantOn();
      //expect(instance).to.be();
    });

    it('should have the property mustNot (base name: "mustNot")', function() {
      // uncomment below and update the code to test the property mustNot
      //var instance = new @ZiqniTechAdminApiClient.DependantOn();
      //expect(instance).to.be();
    });

    it('should have the property should (base name: "should")', function() {
      // uncomment below and update the code to test the property should
      //var instance = new @ZiqniTechAdminApiClient.DependantOn();
      //expect(instance).to.be();
    });

    it('should have the property shouldMatchAtLeast (base name: "shouldMatchAtLeast")', function() {
      // uncomment below and update the code to test the property shouldMatchAtLeast
      //var instance = new @ZiqniTechAdminApiClient.DependantOn();
      //expect(instance).to.be();
    });

  });

}));
