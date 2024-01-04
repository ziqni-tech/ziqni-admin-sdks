/*
 * ZIQNI Admin API
 *
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.9
 * Contact: support@ziqni.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using Ziqni.Client;
using Ziqni.Api;
using Ziqni.Model;

namespace Ziqni.Test
{
    /// <summary>
    ///  Class for testing ActionTypesApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class ActionTypesApiTests
    {
        private ActionTypesApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new ActionTypesApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of ActionTypesApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' ActionTypesApi
            //Assert.IsInstanceOf(typeof(ActionTypesApi), instance);
        }

        
        /// <summary>
        /// Test CreateActionTypes
        /// </summary>
        [Test]
        public void CreateActionTypesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<CreateActionTypeRequest> body = null;
            //var response = instance.CreateActionTypes(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test DeleteActionTypes
        /// </summary>
        [Test]
        public void DeleteActionTypesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //var response = instance.DeleteActionTypes(id);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test DeleteActionTypesByQuery
        /// </summary>
        [Test]
        public void DeleteActionTypesByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.DeleteActionTypesByQuery(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test GetActionTypes
        /// </summary>
        [Test]
        public void GetActionTypesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //int? limit = null;
            //int? skip = null;
            //var response = instance.GetActionTypes(id, limit, skip);
            //Assert.IsInstanceOf(typeof(ActionTypeResponse), response, "response is ActionTypeResponse");
        }
        
        /// <summary>
        /// Test GetActionTypesByQuery
        /// </summary>
        [Test]
        public void GetActionTypesByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.GetActionTypesByQuery(body);
            //Assert.IsInstanceOf(typeof(ActionTypeResponse), response, "response is ActionTypeResponse");
        }
        
        /// <summary>
        /// Test UpdateActionTypes
        /// </summary>
        [Test]
        public void UpdateActionTypesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<UpdateActionTypeRequest> body = null;
            //var response = instance.UpdateActionTypes(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
    }

}