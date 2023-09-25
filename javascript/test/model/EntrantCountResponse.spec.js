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
    instance = new @ZiqniTechAdminApiClient.EntrantCountResponse();
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

  describe('EntrantCountResponse', function() {
    it('should create an instance of EntrantCountResponse', function() {
      // uncomment below and update the code to test EntrantCountResponse
      //var instance = new @ZiqniTechAdminApiClient.EntrantCountResponse();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.EntrantCountResponse);
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instance = new @ZiqniTechAdminApiClient.EntrantCountResponse();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRecords (base name: "numberOfRecords")', function() {
      // uncomment below and update the code to test the property numberOfRecords
      //var instance = new @ZiqniTechAdminApiClient.EntrantCountResponse();
      //expect(instance).to.be();
    });

    it('should have the property downloadUrl (base name: "downloadUrl")', function() {
      // uncomment below and update the code to test the property downloadUrl
      //var instance = new @ZiqniTechAdminApiClient.EntrantCountResponse();
      //expect(instance).to.be();
    });

  });

}));
