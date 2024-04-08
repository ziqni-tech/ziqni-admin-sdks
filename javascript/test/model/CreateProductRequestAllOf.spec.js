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
    instance = new @ZiqniTechAdminApiClient.CreateProductRequestAllOf();
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

  describe('CreateProductRequestAllOf', function() {
    it('should create an instance of CreateProductRequestAllOf', function() {
      // uncomment below and update the code to test CreateProductRequestAllOf
      //var instance = new @ZiqniTechAdminApiClient.CreateProductRequestAllOf();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.CreateProductRequestAllOf);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new @ZiqniTechAdminApiClient.CreateProductRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new @ZiqniTechAdminApiClient.CreateProductRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property adjustmentFactor (base name: "adjustmentFactor")', function() {
      // uncomment below and update the code to test the property adjustmentFactor
      //var instance = new @ZiqniTechAdminApiClient.CreateProductRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instance = new @ZiqniTechAdminApiClient.CreateProductRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property productRefId (base name: "productRefId")', function() {
      // uncomment below and update the code to test the property productRefId
      //var instance = new @ZiqniTechAdminApiClient.CreateProductRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property productType (base name: "productType")', function() {
      // uncomment below and update the code to test the property productType
      //var instance = new @ZiqniTechAdminApiClient.CreateProductRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property actionTypeAdjustmentFactors (base name: "actionTypeAdjustmentFactors")', function() {
      // uncomment below and update the code to test the property actionTypeAdjustmentFactors
      //var instance = new @ZiqniTechAdminApiClient.CreateProductRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property translations (base name: "translations")', function() {
      // uncomment below and update the code to test the property translations
      //var instance = new @ZiqniTechAdminApiClient.CreateProductRequestAllOf();
      //expect(instance).to.be();
    });

  });

}));
