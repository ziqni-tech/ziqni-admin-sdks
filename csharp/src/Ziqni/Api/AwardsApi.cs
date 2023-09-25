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
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading;
using RestSharp;
using Ziqni.Client;
using Ziqni.Model;

namespace Ziqni.Api
{
    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IAwardsApi : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Claim Awards that need to be actioned at
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Claim Awards</param>
        /// <returns>ApiResponse</returns>
        ApiResponse ClaimAwards (List<ClaimAwardRequest> body);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Claim Awards that need to be actioned at
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Claim Awards</param>
        /// <returns>ApiResponse of ApiResponse</returns>
        ApiResponse<ApiResponse> ClaimAwardsWithHttpInfo (List<ClaimAwardRequest> body);
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Returns a list of Awards.
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">The unique identifiers of the resources (optional)</param>
        /// <param name="limit">Limit the returned total records found (optional)</param>
        /// <param name="skip">Skip the returned records found and return the next batch of records (optional)</param>
        /// <returns>AwardResponse</returns>
        AwardResponse GetAwards (List<string> id = default(List<string>), int? limit = default(int?), int? skip = default(int?));

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Returns a list of Awards.
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">The unique identifiers of the resources (optional)</param>
        /// <param name="limit">Limit the returned total records found (optional)</param>
        /// <param name="skip">Skip the returned records found and return the next batch of records (optional)</param>
        /// <returns>ApiResponse of AwardResponse</returns>
        ApiResponse<AwardResponse> GetAwardsWithHttpInfo (List<string> id = default(List<string>), int? limit = default(int?), int? skip = default(int?));
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method (optional)</param>
        /// <returns>AwardResponse</returns>
        AwardResponse GetAwardsByQuery (QueryRequest body = default(QueryRequest));

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method (optional)</param>
        /// <returns>ApiResponse of AwardResponse</returns>
        ApiResponse<AwardResponse> GetAwardsByQueryWithHttpInfo (QueryRequest body = default(QueryRequest));
        #endregion Synchronous Operations
        #region Asynchronous Operations
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Claim Awards that need to be actioned at
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Claim Awards</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse</returns>
        System.Threading.Tasks.Task<ApiResponse> ClaimAwardsAsync (List<ClaimAwardRequest> body, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Claim Awards that need to be actioned at
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Claim Awards</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse (ApiResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<ApiResponse>> ClaimAwardsWithHttpInfoAsync (List<ClaimAwardRequest> body, CancellationToken cancellationToken = default(CancellationToken));
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Returns a list of Awards.
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">The unique identifiers of the resources (optional)</param>
        /// <param name="limit">Limit the returned total records found (optional)</param>
        /// <param name="skip">Skip the returned records found and return the next batch of records (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of AwardResponse</returns>
        System.Threading.Tasks.Task<AwardResponse> GetAwardsAsync (List<string> id = default(List<string>), int? limit = default(int?), int? skip = default(int?), CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Returns a list of Awards.
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">The unique identifiers of the resources (optional)</param>
        /// <param name="limit">Limit the returned total records found (optional)</param>
        /// <param name="skip">Skip the returned records found and return the next batch of records (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse (AwardResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<AwardResponse>> GetAwardsWithHttpInfoAsync (List<string> id = default(List<string>), int? limit = default(int?), int? skip = default(int?), CancellationToken cancellationToken = default(CancellationToken));
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of AwardResponse</returns>
        System.Threading.Tasks.Task<AwardResponse> GetAwardsByQueryAsync (QueryRequest body = default(QueryRequest), CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse (AwardResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<AwardResponse>> GetAwardsByQueryWithHttpInfoAsync (QueryRequest body = default(QueryRequest), CancellationToken cancellationToken = default(CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class AwardsApi : IAwardsApi
    {
        private Ziqni.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="AwardsApi"/> class.
        /// </summary>
        /// <returns></returns>
        public AwardsApi(String basePath)
        {
            this.Configuration = new Ziqni.Client.Configuration { BasePath = basePath };

            ExceptionFactory = Ziqni.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="AwardsApi"/> class
        /// </summary>
        /// <returns></returns>
        public AwardsApi()
        {
            this.Configuration = Ziqni.Client.Configuration.Default;

            ExceptionFactory = Ziqni.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="AwardsApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public AwardsApi(Ziqni.Client.Configuration configuration = null)
        {
            if (configuration == null) // use the default one in Configuration
                this.Configuration = Ziqni.Client.Configuration.Default;
            else
                this.Configuration = configuration;

            ExceptionFactory = Ziqni.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public String GetBasePath()
        {
            return this.Configuration.ApiClient.RestClient.BaseUrl.ToString();
        }

        /// <summary>
        /// Sets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        [Obsolete("SetBasePath is deprecated, please do 'Configuration.ApiClient = new ApiClient(\"http://new-path\")' instead.")]
        public void SetBasePath(String basePath)
        {
            // do nothing
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public Ziqni.Client.Configuration Configuration {get; set;}

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public Ziqni.Client.ExceptionFactory ExceptionFactory
        {
            get
            {
                if (_exceptionFactory != null && _exceptionFactory.GetInvocationList().Length > 1)
                {
                    throw new InvalidOperationException("Multicast delegate for ExceptionFactory is unsupported.");
                }
                return _exceptionFactory;
            }
            set { _exceptionFactory = value; }
        }

        /// <summary>
        /// Gets the default header.
        /// </summary>
        /// <returns>Dictionary of HTTP header</returns>
        [Obsolete("DefaultHeader is deprecated, please use Configuration.DefaultHeader instead.")]
        public IDictionary<String, String> DefaultHeader()
        {
            return new ReadOnlyDictionary<string, string>(this.Configuration.DefaultHeader);
        }

        /// <summary>
        /// Add default header.
        /// </summary>
        /// <param name="key">Header field name.</param>
        /// <param name="value">Header field value.</param>
        /// <returns></returns>
        [Obsolete("AddDefaultHeader is deprecated, please use Configuration.AddDefaultHeader instead.")]
        public void AddDefaultHeader(string key, string value)
        {
            this.Configuration.AddDefaultHeader(key, value);
        }

        /// <summary>
        ///  Claim Awards that need to be actioned at
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Claim Awards</param>
        /// <returns>ApiResponse</returns>
        public ApiResponse ClaimAwards (List<ClaimAwardRequest> body)
        {
             ApiResponse<ApiResponse> localVarResponse = ClaimAwardsWithHttpInfo(body);
             return localVarResponse.Data;
        }

        /// <summary>
        ///  Claim Awards that need to be actioned at
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Claim Awards</param>
        /// <returns>ApiResponse of ApiResponse</returns>
        public ApiResponse<ApiResponse> ClaimAwardsWithHttpInfo (List<ClaimAwardRequest> body)
        {
            // verify the required parameter 'body' is set
            if (body == null)
                throw new ApiException(400, "Missing required parameter 'body' when calling AwardsApi->ClaimAwards");

            var localVarPath = "/awards/claim";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (body != null && body.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(body); // http body (model) parameter
            }
            else
            {
                localVarPostBody = body; // byte array
            }

            // authentication (OAuth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.PUT, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("ClaimAwards", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<ApiResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (ApiResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(ApiResponse)));
        }

        /// <summary>
        ///  Claim Awards that need to be actioned at
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Claim Awards</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse</returns>
        public async System.Threading.Tasks.Task<ApiResponse> ClaimAwardsAsync (List<ClaimAwardRequest> body, CancellationToken cancellationToken = default(CancellationToken))
        {
             ApiResponse<ApiResponse> localVarResponse = await ClaimAwardsWithHttpInfoAsync(body, cancellationToken);
             return localVarResponse.Data;

        }

        /// <summary>
        ///  Claim Awards that need to be actioned at
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Claim Awards</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse (ApiResponse)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<ApiResponse>> ClaimAwardsWithHttpInfoAsync (List<ClaimAwardRequest> body, CancellationToken cancellationToken = default(CancellationToken))
        {
            // verify the required parameter 'body' is set
            if (body == null)
                throw new ApiException(400, "Missing required parameter 'body' when calling AwardsApi->ClaimAwards");

            var localVarPath = "/awards/claim";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (body != null && body.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(body); // http body (model) parameter
            }
            else
            {
                localVarPostBody = body; // byte array
            }

            // authentication (OAuth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.PUT, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType, cancellationToken);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("ClaimAwards", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<ApiResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (ApiResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(ApiResponse)));
        }

        /// <summary>
        ///  Returns a list of Awards.
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">The unique identifiers of the resources (optional)</param>
        /// <param name="limit">Limit the returned total records found (optional)</param>
        /// <param name="skip">Skip the returned records found and return the next batch of records (optional)</param>
        /// <returns>AwardResponse</returns>
        public AwardResponse GetAwards (List<string> id = default(List<string>), int? limit = default(int?), int? skip = default(int?))
        {
             ApiResponse<AwardResponse> localVarResponse = GetAwardsWithHttpInfo(id, limit, skip);
             return localVarResponse.Data;
        }

        /// <summary>
        ///  Returns a list of Awards.
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">The unique identifiers of the resources (optional)</param>
        /// <param name="limit">Limit the returned total records found (optional)</param>
        /// <param name="skip">Skip the returned records found and return the next batch of records (optional)</param>
        /// <returns>ApiResponse of AwardResponse</returns>
        public ApiResponse<AwardResponse> GetAwardsWithHttpInfo (List<string> id = default(List<string>), int? limit = default(int?), int? skip = default(int?))
        {

            var localVarPath = "/awards";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (id != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("multi", "id", id)); // query parameter
            if (limit != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("", "_limit", limit)); // query parameter
            if (skip != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("", "_skip", skip)); // query parameter

            // authentication (OAuth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("GetAwards", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<AwardResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (AwardResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(AwardResponse)));
        }

        /// <summary>
        ///  Returns a list of Awards.
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">The unique identifiers of the resources (optional)</param>
        /// <param name="limit">Limit the returned total records found (optional)</param>
        /// <param name="skip">Skip the returned records found and return the next batch of records (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of AwardResponse</returns>
        public async System.Threading.Tasks.Task<AwardResponse> GetAwardsAsync (List<string> id = default(List<string>), int? limit = default(int?), int? skip = default(int?), CancellationToken cancellationToken = default(CancellationToken))
        {
             ApiResponse<AwardResponse> localVarResponse = await GetAwardsWithHttpInfoAsync(id, limit, skip, cancellationToken);
             return localVarResponse.Data;

        }

        /// <summary>
        ///  Returns a list of Awards.
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">The unique identifiers of the resources (optional)</param>
        /// <param name="limit">Limit the returned total records found (optional)</param>
        /// <param name="skip">Skip the returned records found and return the next batch of records (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse (AwardResponse)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<AwardResponse>> GetAwardsWithHttpInfoAsync (List<string> id = default(List<string>), int? limit = default(int?), int? skip = default(int?), CancellationToken cancellationToken = default(CancellationToken))
        {

            var localVarPath = "/awards";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (id != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("multi", "id", id)); // query parameter
            if (limit != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("", "_limit", limit)); // query parameter
            if (skip != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("", "_skip", skip)); // query parameter

            // authentication (OAuth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType, cancellationToken);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("GetAwards", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<AwardResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (AwardResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(AwardResponse)));
        }

        /// <summary>
        ///  Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method (optional)</param>
        /// <returns>AwardResponse</returns>
        public AwardResponse GetAwardsByQuery (QueryRequest body = default(QueryRequest))
        {
             ApiResponse<AwardResponse> localVarResponse = GetAwardsByQueryWithHttpInfo(body);
             return localVarResponse.Data;
        }

        /// <summary>
        ///  Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method (optional)</param>
        /// <returns>ApiResponse of AwardResponse</returns>
        public ApiResponse<AwardResponse> GetAwardsByQueryWithHttpInfo (QueryRequest body = default(QueryRequest))
        {

            var localVarPath = "/awards/query";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (body != null && body.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(body); // http body (model) parameter
            }
            else
            {
                localVarPostBody = body; // byte array
            }

            // authentication (OAuth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("GetAwardsByQuery", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<AwardResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (AwardResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(AwardResponse)));
        }

        /// <summary>
        ///  Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of AwardResponse</returns>
        public async System.Threading.Tasks.Task<AwardResponse> GetAwardsByQueryAsync (QueryRequest body = default(QueryRequest), CancellationToken cancellationToken = default(CancellationToken))
        {
             ApiResponse<AwardResponse> localVarResponse = await GetAwardsByQueryWithHttpInfoAsync(body, cancellationToken);
             return localVarResponse.Data;

        }

        /// <summary>
        ///  Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse (AwardResponse)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<AwardResponse>> GetAwardsByQueryWithHttpInfoAsync (QueryRequest body = default(QueryRequest), CancellationToken cancellationToken = default(CancellationToken))
        {

            var localVarPath = "/awards/query";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (body != null && body.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(body); // http body (model) parameter
            }
            else
            {
                localVarPostBody = body; // byte array
            }

            // authentication (OAuth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType, cancellationToken);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("GetAwardsByQuery", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<AwardResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (AwardResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(AwardResponse)));
        }

    }
}
