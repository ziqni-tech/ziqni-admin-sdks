/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.13
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
    instance = new @ZiqniTechAdminApiClient.RuleOperandLookupRequest();
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

  describe('RuleOperandLookupRequest', function() {
    it('should create an instance of RuleOperandLookupRequest', function() {
      // uncomment below and update the code to test RuleOperandLookupRequest
      //var instance = new @ZiqniTechAdminApiClient.RuleOperandLookupRequest();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.RuleOperandLookupRequest);
    });

    it('should have the property context (base name: "context")', function() {
      // uncomment below and update the code to test the property context
      //var instance = new @ZiqniTechAdminApiClient.RuleOperandLookupRequest();
      //expect(instance).to.be();
    });

    it('should have the property searchText (base name: "searchText")', function() {
      // uncomment below and update the code to test the property searchText
      //var instance = new @ZiqniTechAdminApiClient.RuleOperandLookupRequest();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new @ZiqniTechAdminApiClient.RuleOperandLookupRequest();
      //expect(instance).to.be();
    });

    it('should have the property skip (base name: "skip")', function() {
      // uncomment below and update the code to test the property skip
      //var instance = new @ZiqniTechAdminApiClient.RuleOperandLookupRequest();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instance = new @ZiqniTechAdminApiClient.RuleOperandLookupRequest();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new @ZiqniTechAdminApiClient.RuleOperandLookupRequest();
      //expect(instance).to.be();
    });

    it('should have the property operand (base name: "operand")', function() {
      // uncomment below and update the code to test the property operand
      //var instance = new @ZiqniTechAdminApiClient.RuleOperandLookupRequest();
      //expect(instance).to.be();
    });

    it('should have the property sortBy (base name: "sortBy")', function() {
      // uncomment below and update the code to test the property sortBy
      //var instance = new @ZiqniTechAdminApiClient.RuleOperandLookupRequest();
      //expect(instance).to.be();
    });

  });

}));
