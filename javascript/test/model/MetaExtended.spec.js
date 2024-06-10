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
    instance = new @ZiqniTechAdminApiClient.MetaExtended();
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

  describe('MetaExtended', function() {
    it('should create an instance of MetaExtended', function() {
      // uncomment below and update the code to test MetaExtended
      //var instance = new @ZiqniTechAdminApiClient.MetaExtended();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.MetaExtended);
    });

    it('should have the property objectType (base name: "objectType")', function() {
      // uncomment below and update the code to test the property objectType
      //var instance = new @ZiqniTechAdminApiClient.MetaExtended();
      //expect(instance).to.be();
    });

    it('should have the property totalRecords (base name: "totalRecords")', function() {
      // uncomment below and update the code to test the property totalRecords
      //var instance = new @ZiqniTechAdminApiClient.MetaExtended();
      //expect(instance).to.be();
    });

    it('should have the property resultCount (base name: "resultCount")', function() {
      // uncomment below and update the code to test the property resultCount
      //var instance = new @ZiqniTechAdminApiClient.MetaExtended();
      //expect(instance).to.be();
    });

    it('should have the property errorCount (base name: "errorCount")', function() {
      // uncomment below and update the code to test the property errorCount
      //var instance = new @ZiqniTechAdminApiClient.MetaExtended();
      //expect(instance).to.be();
    });

    it('should have the property skip (base name: "skip")', function() {
      // uncomment below and update the code to test the property skip
      //var instance = new @ZiqniTechAdminApiClient.MetaExtended();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instance = new @ZiqniTechAdminApiClient.MetaExtended();
      //expect(instance).to.be();
    });

  });

}));
