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
    instance = new @ZiqniTechAdminApiClient.FactDefault();
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

  describe('FactDefault', function() {
    it('should create an instance of FactDefault', function() {
      // uncomment below and update the code to test FactDefault
      //var instance = new @ZiqniTechAdminApiClient.FactDefault();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.FactDefault);
    });

    it('should have the property operators (base name: "operators")', function() {
      // uncomment below and update the code to test the property operators
      //var instance = new @ZiqniTechAdminApiClient.FactDefault();
      //expect(instance).to.be();
    });

    it('should have the property constantType (base name: "constantType")', function() {
      // uncomment below and update the code to test the property constantType
      //var instance = new @ZiqniTechAdminApiClient.FactDefault();
      //expect(instance).to.be();
    });

    it('should have the property constantExample (base name: "constantExample")', function() {
      // uncomment below and update the code to test the property constantExample
      //var instance = new @ZiqniTechAdminApiClient.FactDefault();
      //expect(instance).to.be();
    });

    it('should have the property defaultVale (base name: "defaultVale")', function() {
      // uncomment below and update the code to test the property defaultVale
      //var instance = new @ZiqniTechAdminApiClient.FactDefault();
      //expect(instance).to.be();
    });

    it('should have the property macros (base name: "macros")', function() {
      // uncomment below and update the code to test the property macros
      //var instance = new @ZiqniTechAdminApiClient.FactDefault();
      //expect(instance).to.be();
    });

  });

}));
