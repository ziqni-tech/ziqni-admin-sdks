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
    instance = new @ZiqniTechAdminApiClient.CreateFileObjectRequestAllOf();
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

  describe('CreateFileObjectRequestAllOf', function() {
    it('should create an instance of CreateFileObjectRequestAllOf', function() {
      // uncomment below and update the code to test CreateFileObjectRequestAllOf
      //var instance = new @ZiqniTechAdminApiClient.CreateFileObjectRequestAllOf();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.CreateFileObjectRequestAllOf);
    });

    it('should have the property repositoryId (base name: "repositoryId")', function() {
      // uncomment below and update the code to test the property repositoryId
      //var instance = new @ZiqniTechAdminApiClient.CreateFileObjectRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new @ZiqniTechAdminApiClient.CreateFileObjectRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property mimeType (base name: "mimeType")', function() {
      // uncomment below and update the code to test the property mimeType
      //var instance = new @ZiqniTechAdminApiClient.CreateFileObjectRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property parentFolderPath (base name: "parentFolderPath")', function() {
      // uncomment below and update the code to test the property parentFolderPath
      //var instance = new @ZiqniTechAdminApiClient.CreateFileObjectRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new @ZiqniTechAdminApiClient.CreateFileObjectRequestAllOf();
      //expect(instance).to.be();
    });

  });

}));
