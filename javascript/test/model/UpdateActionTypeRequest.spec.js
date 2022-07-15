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
    instance = new @ZiqniTechAdminApiClient.UpdateActionTypeRequest();
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

  describe('UpdateActionTypeRequest', function() {
    it('should create an instance of UpdateActionTypeRequest', function() {
      // uncomment below and update the code to test UpdateActionTypeRequest
      //var instance = new @ZiqniTechAdminApiClient.UpdateActionTypeRequest();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.UpdateActionTypeRequest);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new @ZiqniTechAdminApiClient.UpdateActionTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instance = new @ZiqniTechAdminApiClient.UpdateActionTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new @ZiqniTechAdminApiClient.UpdateActionTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new @ZiqniTechAdminApiClient.UpdateActionTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new @ZiqniTechAdminApiClient.UpdateActionTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new @ZiqniTechAdminApiClient.UpdateActionTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property unitOfMeasureType (base name: "unitOfMeasureType")', function() {
      // uncomment below and update the code to test the property unitOfMeasureType
      //var instance = new @ZiqniTechAdminApiClient.UpdateActionTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property addConstraints (base name: "addConstraints")', function() {
      // uncomment below and update the code to test the property addConstraints
      //var instance = new @ZiqniTechAdminApiClient.UpdateActionTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property removeConstraints (base name: "removeConstraints")', function() {
      // uncomment below and update the code to test the property removeConstraints
      //var instance = new @ZiqniTechAdminApiClient.UpdateActionTypeRequest();
      //expect(instance).to.be();
    });

  });

}));
