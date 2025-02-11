/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.  Change log:  2024-02-27 Added rewards reduced to the LeaderboardEntry response
 *
 * The version of the OpenAPI document: 3.0.18
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
    instance = new @ZiqniTechAdminApiClient.ContestsApi();
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

  describe('ContestsApi', function() {
    describe('createContests', function() {
      it('should call createContests successfully', function(done) {
        //uncomment below and update the code to test createContests
        //instance.createContests(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContests', function() {
      it('should call getContests successfully', function(done) {
        //uncomment below and update the code to test getContests
        //instance.getContests(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContestsByQuery', function() {
      it('should call getContestsByQuery successfully', function(done) {
        //uncomment below and update the code to test getContestsByQuery
        //instance.getContestsByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContestsLeaderboardById', function() {
      it('should call getContestsLeaderboardById successfully', function(done) {
        //uncomment below and update the code to test getContestsLeaderboardById
        //instance.getContestsLeaderboardById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContestsToClone', function() {
      it('should call getContestsToClone successfully', function(done) {
        //uncomment below and update the code to test getContestsToClone
        //instance.getContestsToClone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateContest', function() {
      it('should call updateContest successfully', function(done) {
        //uncomment below and update the code to test updateContest
        //instance.updateContest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateContestsState', function() {
      it('should call updateContestsState successfully', function(done) {
        //uncomment below and update the code to test updateContestsState
        //instance.updateContestsState(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
