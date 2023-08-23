/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.7
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
    instance = new @ZiqniTechAdminApiClient.QueryRequest();
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

  describe('QueryRequest', function() {
    it('should create an instance of QueryRequest', function() {
      // uncomment below and update the code to test QueryRequest
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.QueryRequest);
    });

    it('should have the property must (base name: "must")', function() {
      // uncomment below and update the code to test the property must
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

    it('should have the property mustNot (base name: "mustNot")', function() {
      // uncomment below and update the code to test the property mustNot
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

    it('should have the property should (base name: "should")', function() {
      // uncomment below and update the code to test the property should
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

    it('should have the property gte (base name: "gte")', function() {
      // uncomment below and update the code to test the property gte
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

    it('should have the property gt (base name: "gt")', function() {
      // uncomment below and update the code to test the property gt
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

    it('should have the property lte (base name: "lte")', function() {
      // uncomment below and update the code to test the property lte
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

    it('should have the property lt (base name: "lt")', function() {
      // uncomment below and update the code to test the property lt
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

    it('should have the property range (base name: "range")', function() {
      // uncomment below and update the code to test the property range
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

    it('should have the property sortBy (base name: "sortBy")', function() {
      // uncomment below and update the code to test the property sortBy
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

    it('should have the property multiFields (base name: "multiFields")', function() {
      // uncomment below and update the code to test the property multiFields
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

    it('should have the property includeFields (base name: "includeFields")', function() {
      // uncomment below and update the code to test the property includeFields
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

    it('should have the property hasValue (base name: "hasValue")', function() {
      // uncomment below and update the code to test the property hasValue
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

    it('should have the property hasNoValue (base name: "hasNoValue")', function() {
      // uncomment below and update the code to test the property hasNoValue
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

    it('should have the property shouldMatch (base name: "shouldMatch")', function() {
      // uncomment below and update the code to test the property shouldMatch
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

    it('should have the property skip (base name: "skip")', function() {
      // uncomment below and update the code to test the property skip
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new @ZiqniTechAdminApiClient.QueryRequest();
      //expect(instance).to.be();
    });

  });

}));
