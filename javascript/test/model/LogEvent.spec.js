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
    instance = new @ZiqniTechAdminApiClient.LogEvent();
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

  describe('LogEvent', function() {
    it('should create an instance of LogEvent', function() {
      // uncomment below and update the code to test LogEvent
      //var instance = new @ZiqniTechAdminApiClient.LogEvent();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.LogEvent);
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instance = new @ZiqniTechAdminApiClient.LogEvent();
      //expect(instance).to.be();
    });

    it('should have the property logLevel (base name: "logLevel")', function() {
      // uncomment below and update the code to test the property logLevel
      //var instance = new @ZiqniTechAdminApiClient.LogEvent();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new @ZiqniTechAdminApiClient.LogEvent();
      //expect(instance).to.be();
    });

    it('should have the property hostName (base name: "hostName")', function() {
      // uncomment below and update the code to test the property hostName
      //var instance = new @ZiqniTechAdminApiClient.LogEvent();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new @ZiqniTechAdminApiClient.LogEvent();
      //expect(instance).to.be();
    });

    it('should have the property serverType (base name: "serverType")', function() {
      // uncomment below and update the code to test the property serverType
      //var instance = new @ZiqniTechAdminApiClient.LogEvent();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new @ZiqniTechAdminApiClient.LogEvent();
      //expect(instance).to.be();
    });

    it('should have the property stackTrace (base name: "stackTrace")', function() {
      // uncomment below and update the code to test the property stackTrace
      //var instance = new @ZiqniTechAdminApiClient.LogEvent();
      //expect(instance).to.be();
    });

    it('should have the property privateIpAddress (base name: "privateIpAddress")', function() {
      // uncomment below and update the code to test the property privateIpAddress
      //var instance = new @ZiqniTechAdminApiClient.LogEvent();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new @ZiqniTechAdminApiClient.LogEvent();
      //expect(instance).to.be();
    });

    it('should have the property entityId (base name: "entityId")', function() {
      // uncomment below and update the code to test the property entityId
      //var instance = new @ZiqniTechAdminApiClient.LogEvent();
      //expect(instance).to.be();
    });

    it('should have the property entityType (base name: "entityType")', function() {
      // uncomment below and update the code to test the property entityType
      //var instance = new @ZiqniTechAdminApiClient.LogEvent();
      //expect(instance).to.be();
    });

  });

}));