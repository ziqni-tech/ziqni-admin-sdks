/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.19
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
    instance = new @ZiqniTechAdminApiClient.ConnectionsApi();
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

  describe('ConnectionsApi', function() {
    describe('createConnections', function() {
      it('should call createConnections successfully', function(done) {
        //uncomment below and update the code to test createConnections
        //instance.createConnections(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteConnections', function() {
      it('should call deleteConnections successfully', function(done) {
        //uncomment below and update the code to test deleteConnections
        //instance.deleteConnections(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteConnectionsByQuery', function() {
      it('should call deleteConnectionsByQuery successfully', function(done) {
        //uncomment below and update the code to test deleteConnectionsByQuery
        //instance.deleteConnectionsByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('describeConnectionObject', function() {
      it('should call describeConnectionObject successfully', function(done) {
        //uncomment below and update the code to test describeConnectionObject
        //instance.describeConnectionObject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConnections', function() {
      it('should call getConnections successfully', function(done) {
        //uncomment below and update the code to test getConnections
        //instance.getConnections(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConnectionsByQuery', function() {
      it('should call getConnectionsByQuery successfully', function(done) {
        //uncomment below and update the code to test getConnectionsByQuery
        //instance.getConnectionsByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateConnections', function() {
      it('should call updateConnections successfully', function(done) {
        //uncomment below and update the code to test updateConnections
        //instance.updateConnections(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateConnectionsState', function() {
      it('should call updateConnectionsState successfully', function(done) {
        //uncomment below and update the code to test updateConnectionsState
        //instance.updateConnectionsState(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
