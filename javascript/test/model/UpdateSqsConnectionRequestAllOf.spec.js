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
    instance = new @ZiqniTechAdminApiClient.UpdateSqsConnectionRequestAllOf();
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

  describe('UpdateSqsConnectionRequestAllOf', function() {
    it('should create an instance of UpdateSqsConnectionRequestAllOf', function() {
      // uncomment below and update the code to test UpdateSqsConnectionRequestAllOf
      //var instance = new @ZiqniTechAdminApiClient.UpdateSqsConnectionRequestAllOf();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.UpdateSqsConnectionRequestAllOf);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new @ZiqniTechAdminApiClient.UpdateSqsConnectionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new @ZiqniTechAdminApiClient.UpdateSqsConnectionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property uri (base name: "uri")', function() {
      // uncomment below and update the code to test the property uri
      //var instance = new @ZiqniTechAdminApiClient.UpdateSqsConnectionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property acessKey (base name: "acessKey")', function() {
      // uncomment below and update the code to test the property acessKey
      //var instance = new @ZiqniTechAdminApiClient.UpdateSqsConnectionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property secretKey (base name: "secretKey")', function() {
      // uncomment below and update the code to test the property secretKey
      //var instance = new @ZiqniTechAdminApiClient.UpdateSqsConnectionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property transformerId (base name: "transformerId")', function() {
      // uncomment below and update the code to test the property transformerId
      //var instance = new @ZiqniTechAdminApiClient.UpdateSqsConnectionRequestAllOf();
      //expect(instance).to.be();
    });

  });

}));
