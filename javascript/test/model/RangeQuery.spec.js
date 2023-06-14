/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.5
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
    instance = new @ZiqniTechAdminApiClient.RangeQuery();
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

  describe('RangeQuery', function() {
    it('should create an instance of RangeQuery', function() {
      // uncomment below and update the code to test RangeQuery
      //var instance = new @ZiqniTechAdminApiClient.RangeQuery();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.RangeQuery);
    });

    it('should have the property queryField (base name: "queryField")', function() {
      // uncomment below and update the code to test the property queryField
      //var instance = new @ZiqniTechAdminApiClient.RangeQuery();
      //expect(instance).to.be();
    });

    it('should have the property gt (base name: "gt")', function() {
      // uncomment below and update the code to test the property gt
      //var instance = new @ZiqniTechAdminApiClient.RangeQuery();
      //expect(instance).to.be();
    });

    it('should have the property lt (base name: "lt")', function() {
      // uncomment below and update the code to test the property lt
      //var instance = new @ZiqniTechAdminApiClient.RangeQuery();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new @ZiqniTechAdminApiClient.RangeQuery();
      //expect(instance).to.be();
    });

  });

}));
