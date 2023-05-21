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
    instance = new @ZiqniTechAdminApiClient.EventAllOf();
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

  describe('EventAllOf', function() {
    it('should create an instance of EventAllOf', function() {
      // uncomment below and update the code to test EventAllOf
      //var instance = new @ZiqniTechAdminApiClient.EventAllOf();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.EventAllOf);
    });

    it('should have the property memberId (base name: "memberId")', function() {
      // uncomment below and update the code to test the property memberId
      //var instance = new @ZiqniTechAdminApiClient.EventAllOf();
      //expect(instance).to.be();
    });

    it('should have the property memberRefId (base name: "memberRefId")', function() {
      // uncomment below and update the code to test the property memberRefId
      //var instance = new @ZiqniTechAdminApiClient.EventAllOf();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instance = new @ZiqniTechAdminApiClient.EventAllOf();
      //expect(instance).to.be();
    });

    it('should have the property batchId (base name: "batchId")', function() {
      // uncomment below and update the code to test the property batchId
      //var instance = new @ZiqniTechAdminApiClient.EventAllOf();
      //expect(instance).to.be();
    });

    it('should have the property entityId (base name: "entityId")', function() {
      // uncomment below and update the code to test the property entityId
      //var instance = new @ZiqniTechAdminApiClient.EventAllOf();
      //expect(instance).to.be();
    });

    it('should have the property eventRefId (base name: "eventRefId")', function() {
      // uncomment below and update the code to test the property eventRefId
      //var instance = new @ZiqniTechAdminApiClient.EventAllOf();
      //expect(instance).to.be();
    });

    it('should have the property entityRefId (base name: "entityRefId")', function() {
      // uncomment below and update the code to test the property entityRefId
      //var instance = new @ZiqniTechAdminApiClient.EventAllOf();
      //expect(instance).to.be();
    });

    it('should have the property sourceValue (base name: "sourceValue")', function() {
      // uncomment below and update the code to test the property sourceValue
      //var instance = new @ZiqniTechAdminApiClient.EventAllOf();
      //expect(instance).to.be();
    });

    it('should have the property points (base name: "points")', function() {
      // uncomment below and update the code to test the property points
      //var instance = new @ZiqniTechAdminApiClient.EventAllOf();
      //expect(instance).to.be();
    });

    it('should have the property transactionTimestamp (base name: "transactionTimestamp")', function() {
      // uncomment below and update the code to test the property transactionTimestamp
      //var instance = new @ZiqniTechAdminApiClient.EventAllOf();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new @ZiqniTechAdminApiClient.EventAllOf();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instance = new @ZiqniTechAdminApiClient.EventAllOf();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new @ZiqniTechAdminApiClient.EventAllOf();
      //expect(instance).to.be();
    });

    it('should have the property relatesTo (base name: "relatesTo")', function() {
      // uncomment below and update the code to test the property relatesTo
      //var instance = new @ZiqniTechAdminApiClient.EventAllOf();
      //expect(instance).to.be();
    });

    it('should have the property relatesToExternal (base name: "relatesToExternal")', function() {
      // uncomment below and update the code to test the property relatesToExternal
      //var instance = new @ZiqniTechAdminApiClient.EventAllOf();
      //expect(instance).to.be();
    });

  });

}));
