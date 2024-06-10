/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.15
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
    instance = new @ZiqniTechAdminApiClient.LanguagesApi();
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

  describe('LanguagesApi', function() {
    describe('createLanguages', function() {
      it('should call createLanguages successfully', function(done) {
        //uncomment below and update the code to test createLanguages
        //instance.createLanguages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLanguages', function() {
      it('should call deleteLanguages successfully', function(done) {
        //uncomment below and update the code to test deleteLanguages
        //instance.deleteLanguages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLanguagesByQuery', function() {
      it('should call deleteLanguagesByQuery successfully', function(done) {
        //uncomment below and update the code to test deleteLanguagesByQuery
        //instance.deleteLanguagesByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLanguages', function() {
      it('should call getLanguages successfully', function(done) {
        //uncomment below and update the code to test getLanguages
        //instance.getLanguages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLanguagesByQuery', function() {
      it('should call getLanguagesByQuery successfully', function(done) {
        //uncomment below and update the code to test getLanguagesByQuery
        //instance.getLanguagesByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getListOfAllLanguages', function() {
      it('should call getListOfAllLanguages successfully', function(done) {
        //uncomment below and update the code to test getListOfAllLanguages
        //instance.getListOfAllLanguages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateLanguages', function() {
      it('should call updateLanguages successfully', function(done) {
        //uncomment below and update the code to test updateLanguages
        //instance.updateLanguages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
