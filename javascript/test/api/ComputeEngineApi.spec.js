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
    instance = new @ZiqniTechAdminApiClient.ComputeEngineApi();
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

  describe('ComputeEngineApi', function() {
    describe('createComputeEngines', function() {
      it('should call createComputeEngines successfully', function(done) {
        //uncomment below and update the code to test createComputeEngines
        //instance.createComputeEngines(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteComputeEnginesById', function() {
      it('should call deleteComputeEnginesById successfully', function(done) {
        //uncomment below and update the code to test deleteComputeEnginesById
        //instance.deleteComputeEnginesById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteComputeEnginesByQuery', function() {
      it('should call deleteComputeEnginesByQuery successfully', function(done) {
        //uncomment below and update the code to test deleteComputeEnginesByQuery
        //instance.deleteComputeEnginesByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getComputeEngines', function() {
      it('should call getComputeEngines successfully', function(done) {
        //uncomment below and update the code to test getComputeEngines
        //instance.getComputeEngines(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getComputeEnginesById', function() {
      it('should call getComputeEnginesById successfully', function(done) {
        //uncomment below and update the code to test getComputeEnginesById
        //instance.getComputeEnginesById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getComputeEnginesByQuery', function() {
      it('should call getComputeEnginesByQuery successfully', function(done) {
        //uncomment below and update the code to test getComputeEnginesByQuery
        //instance.getComputeEnginesByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateComputeEngines', function() {
      it('should call updateComputeEngines successfully', function(done) {
        //uncomment below and update the code to test updateComputeEngines
        //instance.updateComputeEngines(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));