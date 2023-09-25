/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.9
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
    instance = new @ZiqniTechAdminApiClient.RuleRoutine();
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

  describe('RuleRoutine', function() {
    it('should create an instance of RuleRoutine', function() {
      // uncomment below and update the code to test RuleRoutine
      //var instance = new @ZiqniTechAdminApiClient.RuleRoutine();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.RuleRoutine);
    });

    it('should have the property routine (base name: "routine")', function() {
      // uncomment below and update the code to test the property routine
      //var instance = new @ZiqniTechAdminApiClient.RuleRoutine();
      //expect(instance).to.be();
    });

    it('should have the property _arguments (base name: "arguments")', function() {
      // uncomment below and update the code to test the property _arguments
      //var instance = new @ZiqniTechAdminApiClient.RuleRoutine();
      //expect(instance).to.be();
    });

    it('should have the property lineNumber (base name: "lineNumber")', function() {
      // uncomment below and update the code to test the property lineNumber
      //var instance = new @ZiqniTechAdminApiClient.RuleRoutine();
      //expect(instance).to.be();
    });

  });

}));
