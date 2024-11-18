/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.17
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
    instance = new @ZiqniTechAdminApiClient.ApiKeysApi();
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

  describe('ApiKeysApi', function() {
    describe('createApiKeys', function() {
      it('should call createApiKeys successfully', function(done) {
        //uncomment below and update the code to test createApiKeys
        //instance.createApiKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteApiKeys', function() {
      it('should call deleteApiKeys successfully', function(done) {
        //uncomment below and update the code to test deleteApiKeys
        //instance.deleteApiKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteApiKeysById', function() {
      it('should call deleteApiKeysById successfully', function(done) {
        //uncomment below and update the code to test deleteApiKeysById
        //instance.deleteApiKeysById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteApiKeysByQuery', function() {
      it('should call deleteApiKeysByQuery successfully', function(done) {
        //uncomment below and update the code to test deleteApiKeysByQuery
        //instance.deleteApiKeysByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApiKeys', function() {
      it('should call getApiKeys successfully', function(done) {
        //uncomment below and update the code to test getApiKeys
        //instance.getApiKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApiKeysById', function() {
      it('should call getApiKeysById successfully', function(done) {
        //uncomment below and update the code to test getApiKeysById
        //instance.getApiKeysById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApiKeysByQuery', function() {
      it('should call getApiKeysByQuery successfully', function(done) {
        //uncomment below and update the code to test getApiKeysByQuery
        //instance.getApiKeysByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateApiKeys', function() {
      it('should call updateApiKeys successfully', function(done) {
        //uncomment below and update the code to test updateApiKeys
        //instance.updateApiKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
