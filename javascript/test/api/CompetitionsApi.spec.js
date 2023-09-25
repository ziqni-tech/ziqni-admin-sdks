/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.9
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
    instance = new @ZiqniTechAdminApiClient.CompetitionsApi();
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

  describe('CompetitionsApi', function() {
    describe('createCompetitions', function() {
      it('should call createCompetitions successfully', function(done) {
        //uncomment below and update the code to test createCompetitions
        //instance.createCompetitions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSimpleCompetitions', function() {
      it('should call createSimpleCompetitions successfully', function(done) {
        //uncomment below and update the code to test createSimpleCompetitions
        //instance.createSimpleCompetitions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompetitions', function() {
      it('should call getCompetitions successfully', function(done) {
        //uncomment below and update the code to test getCompetitions
        //instance.getCompetitions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompetitionsByQuery', function() {
      it('should call getCompetitionsByQuery successfully', function(done) {
        //uncomment below and update the code to test getCompetitionsByQuery
        //instance.getCompetitionsByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompetitionsToClone', function() {
      it('should call getCompetitionsToClone successfully', function(done) {
        //uncomment below and update the code to test getCompetitionsToClone
        //instance.getCompetitionsToClone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLeaderboardByCompetitionId', function() {
      it('should call getLeaderboardByCompetitionId successfully', function(done) {
        //uncomment below and update the code to test getLeaderboardByCompetitionId
        //instance.getLeaderboardByCompetitionId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCompetitions', function() {
      it('should call updateCompetitions successfully', function(done) {
        //uncomment below and update the code to test updateCompetitions
        //instance.updateCompetitions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCompetitionsState', function() {
      it('should call updateCompetitionsState successfully', function(done) {
        //uncomment below and update the code to test updateCompetitionsState
        //instance.updateCompetitionsState(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
