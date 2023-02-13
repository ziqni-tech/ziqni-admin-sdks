/*
 * ZIQNI Admin API
 *
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
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

using Org.OpenAPITools.Client;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Model;

namespace Org.OpenAPITools.Test
{
    /// <summary>
    ///  Class for testing CustomFieldsApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class CustomFieldsApiTests
    {
        private CustomFieldsApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new CustomFieldsApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of CustomFieldsApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' CustomFieldsApi
            //Assert.IsInstanceOf(typeof(CustomFieldsApi), instance);
        }

        
        /// <summary>
        /// Test CreateCustomFields
        /// </summary>
        [Test]
        public void CreateCustomFieldsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<CreateCustomFieldRequest> body = null;
            //var response = instance.CreateCustomFields(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test DeleteCustomFields
        /// </summary>
        [Test]
        public void DeleteCustomFieldsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //var response = instance.DeleteCustomFields(id);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test DeleteCustomFieldsByQuery
        /// </summary>
        [Test]
        public void DeleteCustomFieldsByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.DeleteCustomFieldsByQuery(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test GetCustomFields
        /// </summary>
        [Test]
        public void GetCustomFieldsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //int? limit = null;
            //int? skip = null;
            //var response = instance.GetCustomFields(id, limit, skip);
            //Assert.IsInstanceOf(typeof(CustomFieldResponse), response, "response is CustomFieldResponse");
        }
        
        /// <summary>
        /// Test GetCustomFieldsByQuery
        /// </summary>
        [Test]
        public void GetCustomFieldsByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.GetCustomFieldsByQuery(body);
            //Assert.IsInstanceOf(typeof(CustomFieldResponse), response, "response is CustomFieldResponse");
        }
        
        /// <summary>
        /// Test UpdateCustomFields
        /// </summary>
        [Test]
        public void UpdateCustomFieldsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<UpdateCustomFieldRequest> body = null;
            //var response = instance.UpdateCustomFields(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
    }

}
