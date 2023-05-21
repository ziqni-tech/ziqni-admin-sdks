/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.2
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
    instance = new @ZiqniTechAdminApiClient.Result();
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

  describe('Result', function() {
    it('should create an instance of Result', function() {
      // uncomment below and update the code to test Result
      //var instance = new @ZiqniTechAdminApiClient.Result();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.Result);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new @ZiqniTechAdminApiClient.Result();
      //expect(instance).to.be();
    });

    it('should have the property externalReference (base name: "externalReference")', function() {
      // uncomment below and update the code to test the property externalReference
      //var instance = new @ZiqniTechAdminApiClient.Result();
      //expect(instance).to.be();
    });

    it('should have the property result (base name: "result")', function() {
      // uncomment below and update the code to test the property result
      //var instance = new @ZiqniTechAdminApiClient.Result();
      //expect(instance).to.be();
    });

    it('should have the property relations (base name: "relations")', function() {
      // uncomment below and update the code to test the property relations
      //var instance = new @ZiqniTechAdminApiClient.Result();
      //expect(instance).to.be();
    });

  });

}));
