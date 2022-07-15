/**
 * Ziqni Admin Api
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
    instance = new @ZiqniTechAdminApiClient.FileRepositoriesApi();
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

  describe('FileRepositoriesApi', function() {
    describe('createFileRepositories', function() {
      it('should call createFileRepositories successfully', function(done) {
        //uncomment below and update the code to test createFileRepositories
        //instance.createFileRepositories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFileRepositories', function() {
      it('should call deleteFileRepositories successfully', function(done) {
        //uncomment below and update the code to test deleteFileRepositories
        //instance.deleteFileRepositories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFileRepositoriesByQuery', function() {
      it('should call deleteFileRepositoriesByQuery successfully', function(done) {
        //uncomment below and update the code to test deleteFileRepositoriesByQuery
        //instance.deleteFileRepositoriesByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFileRepositories', function() {
      it('should call getFileRepositories successfully', function(done) {
        //uncomment below and update the code to test getFileRepositories
        //instance.getFileRepositories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFileRepositoriesByQuery', function() {
      it('should call getFileRepositoriesByQuery successfully', function(done) {
        //uncomment below and update the code to test getFileRepositoriesByQuery
        //instance.getFileRepositoriesByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFileRepositories', function() {
      it('should call updateFileRepositories successfully', function(done) {
        //uncomment below and update the code to test updateFileRepositories
        //instance.updateFileRepositories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
