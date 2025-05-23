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
    instance = new @ZiqniTechAdminApiClient.SpaceAllOf();
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

  describe('SpaceAllOf', function() {
    it('should create an instance of SpaceAllOf', function() {
      // uncomment below and update the code to test SpaceAllOf
      //var instance = new @ZiqniTechAdminApiClient.SpaceAllOf();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.SpaceAllOf);
    });

    it('should have the property accountType (base name: "accountType")', function() {
      // uncomment below and update the code to test the property accountType
      //var instance = new @ZiqniTechAdminApiClient.SpaceAllOf();
      //expect(instance).to.be();
    });

    it('should have the property masterSpace (base name: "masterSpace")', function() {
      // uncomment below and update the code to test the property masterSpace
      //var instance = new @ZiqniTechAdminApiClient.SpaceAllOf();
      //expect(instance).to.be();
    });

    it('should have the property baseCurrencyUOM (base name: "baseCurrencyUOM")', function() {
      // uncomment below and update the code to test the property baseCurrencyUOM
      //var instance = new @ZiqniTechAdminApiClient.SpaceAllOf();
      //expect(instance).to.be();
    });

  });

}));
