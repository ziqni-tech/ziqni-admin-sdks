/**
 * ZIQNI Admin API
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
    instance = new @ZiqniTechAdminApiClient.Dashboard();
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

  describe('Dashboard', function() {
    it('should create an instance of Dashboard', function() {
      // uncomment below and update the code to test Dashboard
      //var instance = new @ZiqniTechAdminApiClient.Dashboard();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.Dashboard);
    });

    it('should have the property dataSets (base name: "dataSets")', function() {
      // uncomment below and update the code to test the property dataSets
      //var instance = new @ZiqniTechAdminApiClient.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instance = new @ZiqniTechAdminApiClient.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property modules (base name: "modules")', function() {
      // uncomment below and update the code to test the property modules
      //var instance = new @ZiqniTechAdminApiClient.Dashboard();
      //expect(instance).to.be();
    });

  });

}));