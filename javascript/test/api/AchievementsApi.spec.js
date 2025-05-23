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
    instance = new @ZiqniTechAdminApiClient.AchievementsApi();
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

  describe('AchievementsApi', function() {
    describe('createAchievements', function() {
      it('should call createAchievements successfully', function(done) {
        //uncomment below and update the code to test createAchievements
        //instance.createAchievements(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAchievements', function() {
      it('should call deleteAchievements successfully', function(done) {
        //uncomment below and update the code to test deleteAchievements
        //instance.deleteAchievements(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAchievementsByQuery', function() {
      it('should call deleteAchievementsByQuery successfully', function(done) {
        //uncomment below and update the code to test deleteAchievementsByQuery
        //instance.deleteAchievementsByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAchievementToClone', function() {
      it('should call getAchievementToClone successfully', function(done) {
        //uncomment below and update the code to test getAchievementToClone
        //instance.getAchievementToClone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAchievements', function() {
      it('should call getAchievements successfully', function(done) {
        //uncomment below and update the code to test getAchievements
        //instance.getAchievements(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAchievementsByQuery', function() {
      it('should call getAchievementsByQuery successfully', function(done) {
        //uncomment below and update the code to test getAchievementsByQuery
        //instance.getAchievementsByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAntecendentsForAchievement', function() {
      it('should call getAntecendentsForAchievement successfully', function(done) {
        //uncomment below and update the code to test getAntecendentsForAchievement
        //instance.getAntecendentsForAchievement(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIssuedAchievementsCountById', function() {
      it('should call getIssuedAchievementsCountById successfully', function(done) {
        //uncomment below and update the code to test getIssuedAchievementsCountById
        //instance.getIssuedAchievementsCountById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMembersAchievementsDetails', function() {
      it('should call getMembersAchievementsDetails successfully', function(done) {
        //uncomment below and update the code to test getMembersAchievementsDetails
        //instance.getMembersAchievementsDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAchievements', function() {
      it('should call updateAchievements successfully', function(done) {
        //uncomment below and update the code to test updateAchievements
        //instance.updateAchievements(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAchievementsState', function() {
      it('should call updateAchievementsState successfully', function(done) {
        //uncomment below and update the code to test updateAchievementsState
        //instance.updateAchievementsState(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInstantWinsStatus', function() {
      it('should call updateInstantWinsStatus successfully', function(done) {
        //uncomment below and update the code to test updateInstantWinsStatus
        //instance.updateInstantWinsStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
