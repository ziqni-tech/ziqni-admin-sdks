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
    ///  Class for testing ProductsApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class ProductsApiTests
    {
        private ProductsApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new ProductsApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of ProductsApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' ProductsApi
            //Assert.IsInstanceOf(typeof(ProductsApi), instance);
        }

        
        /// <summary>
        /// Test CreateProducts
        /// </summary>
        [Test]
        public void CreateProductsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<CreateProductRequest> body = null;
            //var response = instance.CreateProducts(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test DeleteProducts
        /// </summary>
        [Test]
        public void DeleteProductsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //var response = instance.DeleteProducts(id);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test DeleteProductsByQuery
        /// </summary>
        [Test]
        public void DeleteProductsByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.DeleteProductsByQuery(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test GetProducts
        /// </summary>
        [Test]
        public void GetProductsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //int? limit = null;
            //int? skip = null;
            //var response = instance.GetProducts(id, limit, skip);
            //Assert.IsInstanceOf(typeof(ProductResponse), response, "response is ProductResponse");
        }
        
        /// <summary>
        /// Test GetProductsByQuery
        /// </summary>
        [Test]
        public void GetProductsByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.GetProductsByQuery(body);
            //Assert.IsInstanceOf(typeof(ProductResponse), response, "response is ProductResponse");
        }
        
        /// <summary>
        /// Test GetProductsByRefId
        /// </summary>
        [Test]
        public void GetProductsByRefIdTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> refIds = null;
            //int? limit = null;
            //int? skip = null;
            //var response = instance.GetProductsByRefId(refIds, limit, skip);
            //Assert.IsInstanceOf(typeof(ProductResponse), response, "response is ProductResponse");
        }
        
        /// <summary>
        /// Test UpdateProducts
        /// </summary>
        [Test]
        public void UpdateProductsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<UpdateProductRequest> body = null;
            //var response = instance.UpdateProducts(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
    }

}
