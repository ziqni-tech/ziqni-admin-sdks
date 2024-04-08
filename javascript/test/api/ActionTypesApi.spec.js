/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.13
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
    instance = new @ZiqniTechAdminApiClient.ActionTypesApi();
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

  describe('ActionTypesApi', function() {
    describe('createActionTypes', function() {
      it('should call createActionTypes successfully', function(done) {
        //uncomment below and update the code to test createActionTypes
        //instance.createActionTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteActionTypes', function() {
      it('should call deleteActionTypes successfully', function(done) {
        //uncomment below and update the code to test deleteActionTypes
        //instance.deleteActionTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteActionTypesByQuery', function() {
      it('should call deleteActionTypesByQuery successfully', function(done) {
        //uncomment below and update the code to test deleteActionTypesByQuery
        //instance.deleteActionTypesByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getActionTypes', function() {
      it('should call getActionTypes successfully', function(done) {
        //uncomment below and update the code to test getActionTypes
        //instance.getActionTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getActionTypesByQuery', function() {
      it('should call getActionTypesByQuery successfully', function(done) {
        //uncomment below and update the code to test getActionTypesByQuery
        //instance.getActionTypesByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateActionTypes', function() {
      it('should call updateActionTypes successfully', function(done) {
        //uncomment below and update the code to test updateActionTypes
        //instance.updateActionTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
