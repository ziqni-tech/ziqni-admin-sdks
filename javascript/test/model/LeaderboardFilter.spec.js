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
    instance = new @ZiqniTechAdminApiClient.LeaderboardFilter();
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

  describe('LeaderboardFilter', function() {
    it('should create an instance of LeaderboardFilter', function() {
      // uncomment below and update the code to test LeaderboardFilter
      //var instance = new @ZiqniTechAdminApiClient.LeaderboardFilter();
      //expect(instance).to.be.a(@ZiqniTechAdminApiClient.LeaderboardFilter);
    });

    it('should have the property topRanksToInclude (base name: "topRanksToInclude")', function() {
      // uncomment below and update the code to test the property topRanksToInclude
      //var instance = new @ZiqniTechAdminApiClient.LeaderboardFilter();
      //expect(instance).to.be();
    });

    it('should have the property ranksAboveToInclude (base name: "ranksAboveToInclude")', function() {
      // uncomment below and update the code to test the property ranksAboveToInclude
      //var instance = new @ZiqniTechAdminApiClient.LeaderboardFilter();
      //expect(instance).to.be();
    });

    it('should have the property ranksBelowToInclude (base name: "ranksBelowToInclude")', function() {
      // uncomment below and update the code to test the property ranksBelowToInclude
      //var instance = new @ZiqniTechAdminApiClient.LeaderboardFilter();
      //expect(instance).to.be();
    });

  });

}));
