/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.14
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
    instance = new @ZiqniTechAdminApiClient.Space();
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

  describe('Space', function() {
    it('should create an instance of Space', function() {
      // uncomment below and update the code to test Space
      //var instance = new @ZiqniTechAdminApiClient.Space();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.Space);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new @ZiqniTechAdminApiClient.Space();
      //expect(instance).to.be();
    });

    it('should have the property spaceName (base name: "spaceName")', function() {
      // uncomment below and update the code to test the property spaceName
      //var instance = new @ZiqniTechAdminApiClient.Space();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new @ZiqniTechAdminApiClient.Space();
      //expect(instance).to.be();
    });

    it('should have the property accountType (base name: "accountType")', function() {
      // uncomment below and update the code to test the property accountType
      //var instance = new @ZiqniTechAdminApiClient.Space();
      //expect(instance).to.be();
    });

    it('should have the property masterSpace (base name: "masterSpace")', function() {
      // uncomment below and update the code to test the property masterSpace
      //var instance = new @ZiqniTechAdminApiClient.Space();
      //expect(instance).to.be();
    });

    it('should have the property baseCurrencyUOM (base name: "baseCurrencyUOM")', function() {
      // uncomment below and update the code to test the property baseCurrencyUOM
      //var instance = new @ZiqniTechAdminApiClient.Space();
      //expect(instance).to.be();
    });

  });

}));
