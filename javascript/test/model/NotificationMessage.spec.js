/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.5
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
    instance = new @ZiqniTechAdminApiClient.NotificationMessage();
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

  describe('NotificationMessage', function() {
    it('should create an instance of NotificationMessage', function() {
      // uncomment below and update the code to test NotificationMessage
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.NotificationMessage);
    });

    it('should have the property entityId (base name: "entityId")', function() {
      // uncomment below and update the code to test the property entityId
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property entityType (base name: "entityType")', function() {
      // uncomment below and update the code to test the property entityType
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property changedAt (base name: "changedAt")', function() {
      // uncomment below and update the code to test the property changedAt
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property changedBy (base name: "changedBy")', function() {
      // uncomment below and update the code to test the property changedBy
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property typeOffChange (base name: "typeOffChange")', function() {
      // uncomment below and update the code to test the property typeOffChange
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property sequenceNumber (base name: "sequenceNumber")', function() {
      // uncomment below and update the code to test the property sequenceNumber
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property entityRefId (base name: "entityRefId")', function() {
      // uncomment below and update the code to test the property entityRefId
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property entityParentId (base name: "entityParentId")', function() {
      // uncomment below and update the code to test the property entityParentId
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property previousState (base name: "previousState")', function() {
      // uncomment below and update the code to test the property previousState
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property currentState (base name: "currentState")', function() {
      // uncomment below and update the code to test the property currentState
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionId (base name: "subscriptionId")', function() {
      // uncomment below and update the code to test the property subscriptionId
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property topic (base name: "topic")', function() {
      // uncomment below and update the code to test the property topic
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property meta (base name: "meta")', function() {
      // uncomment below and update the code to test the property meta
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instance = new @ZiqniTechAdminApiClient.NotificationMessage();
      //expect(instance).to.be();
    });

  });

}));
