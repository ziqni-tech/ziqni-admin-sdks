/**
 * Ziqni Admin Api
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
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
    instance = new @ZiqniTechAdminApiClient.CreateSpaceRequest();
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

  describe('CreateSpaceRequest', function() {
    it('should create an instance of CreateSpaceRequest', function() {
      // uncomment below and update the code to test CreateSpaceRequest
      //var instance = new @ZiqniTechAdminApiClient.CreateSpaceRequest();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.CreateSpaceRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new @ZiqniTechAdminApiClient.CreateSpaceRequest();
      //expect(instance).to.be();
    });

    it('should have the property accountType (base name: "accountType")', function() {
      // uncomment below and update the code to test the property accountType
      //var instance = new @ZiqniTechAdminApiClient.CreateSpaceRequest();
      //expect(instance).to.be();
    });

    it('should have the property masterSpace (base name: "masterSpace")', function() {
      // uncomment below and update the code to test the property masterSpace
      //var instance = new @ZiqniTechAdminApiClient.CreateSpaceRequest();
      //expect(instance).to.be();
    });

    it('should have the property unitsOfMeasure (base name: "unitsOfMeasure")', function() {
      // uncomment below and update the code to test the property unitsOfMeasure
      //var instance = new @ZiqniTechAdminApiClient.CreateSpaceRequest();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new @ZiqniTechAdminApiClient.CreateSpaceRequest();
      //expect(instance).to.be();
    });

  });

}));
