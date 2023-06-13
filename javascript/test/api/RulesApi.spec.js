/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.5
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
    instance = new @ZiqniTechAdminApiClient.RulesApi();
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

  describe('RulesApi', function() {
    describe('deleteRulesByQuery', function() {
      it('should call deleteRulesByQuery successfully', function(done) {
        //uncomment below and update the code to test deleteRulesByQuery
        //instance.deleteRulesByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRuleSchemas', function() {
      it('should call getRuleSchemas successfully', function(done) {
        //uncomment below and update the code to test getRuleSchemas
        //instance.getRuleSchemas(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRules', function() {
      it('should call getRules successfully', function(done) {
        //uncomment below and update the code to test getRules
        //instance.getRules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRulesByQuery', function() {
      it('should call getRulesByQuery successfully', function(done) {
        //uncomment below and update the code to test getRulesByQuery
        //instance.getRulesByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lookupOperandsRules', function() {
      it('should call lookupOperandsRules successfully', function(done) {
        //uncomment below and update the code to test lookupOperandsRules
        //instance.lookupOperandsRules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRules', function() {
      it('should call updateRules successfully', function(done) {
        //uncomment below and update the code to test updateRules
        //instance.updateRules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateRules', function() {
      it('should call validateRules successfully', function(done) {
        //uncomment below and update the code to test validateRules
        //instance.validateRules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
