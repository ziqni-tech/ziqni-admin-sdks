/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.18
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
    instance = new @ZiqniTechAdminApiClient.HostingOptions();
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

  describe('HostingOptions', function() {
    it('should create an instance of HostingOptions', function() {
      // uncomment below and update the code to test HostingOptions
      //var instance = new @ZiqniTechAdminApiClient.HostingOptions();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.HostingOptions);
    });

    it('should have the property indexFileName (base name: "indexFileName")', function() {
      // uncomment below and update the code to test the property indexFileName
      //var instance = new @ZiqniTechAdminApiClient.HostingOptions();
      //expect(instance).to.be();
    });

    it('should have the property errorFileName (base name: "errorFileName")', function() {
      // uncomment below and update the code to test the property errorFileName
      //var instance = new @ZiqniTechAdminApiClient.HostingOptions();
      //expect(instance).to.be();
    });

  });

}));
