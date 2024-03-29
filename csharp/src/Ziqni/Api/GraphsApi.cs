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
    public interface IGraphsApi : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Get achievements by member reference id
        /// </summary>
        /// <remarks>
        /// Returns a list of graphs based on the entity type.
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="entityGraphRequest"></param>
        /// <returns>EntityGraphResponse</returns>
        EntityGraphResponse GetGraph (EntityGraphRequest entityGraphRequest);

        /// <summary>
        /// Get achievements by member reference id
        /// </summary>
        /// <remarks>
        /// Returns a list of graphs based on the entity type.
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="entityGraphRequest"></param>
        /// <returns>ApiResponse of EntityGraphResponse</returns>
        ApiResponse<EntityGraphResponse> GetGraphWithHttpInfo (EntityGraphRequest entityGraphRequest);
        #endregion Synchronous Operations
        #region Asynchronous Operations
        /// <summary>
        /// Get achievements by member reference id
        /// </summary>
        /// <remarks>
        /// Returns a list of graphs based on the entity type.
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="entityGraphRequest"></param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of EntityGraphResponse</returns>
        System.Threading.Tasks.Task<EntityGraphResponse> GetGraphAsync (EntityGraphRequest entityGraphRequest, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Get achievements by member reference id
        /// </summary>
        /// <remarks>
        /// Returns a list of graphs based on the entity type.
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="entityGraphRequest"></param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse (EntityGraphResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<EntityGraphResponse>> GetGraphWithHttpInfoAsync (EntityGraphRequest entityGraphRequest, CancellationToken cancellationToken = default(CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class GraphsApi : IGraphsApi
    {
        private Ziqni.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="GraphsApi"/> class.
        /// </summary>
        /// <returns></returns>
        public GraphsApi(String basePath)
        {
            this.Configuration = new Ziqni.Client.Configuration { BasePath = basePath };

            ExceptionFactory = Ziqni.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="GraphsApi"/> class
        /// </summary>
        /// <returns></returns>
        public GraphsApi()
        {
            this.Configuration = Ziqni.Client.Configuration.Default;

            ExceptionFactory = Ziqni.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="GraphsApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public GraphsApi(Ziqni.Client.Configuration configuration = null)
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
        /// Get achievements by member reference id Returns a list of graphs based on the entity type.
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="entityGraphRequest"></param>
        /// <returns>EntityGraphResponse</returns>
        public EntityGraphResponse GetGraph (EntityGraphRequest entityGraphRequest)
        {
             ApiResponse<EntityGraphResponse> localVarResponse = GetGraphWithHttpInfo(entityGraphRequest);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Get achievements by member reference id Returns a list of graphs based on the entity type.
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="entityGraphRequest"></param>
        /// <returns>ApiResponse of EntityGraphResponse</returns>
        public ApiResponse<EntityGraphResponse> GetGraphWithHttpInfo (EntityGraphRequest entityGraphRequest)
        {
            // verify the required parameter 'entityGraphRequest' is set
            if (entityGraphRequest == null)
                throw new ApiException(400, "Missing required parameter 'entityGraphRequest' when calling GraphsApi->GetGraph");

            var localVarPath = "/graphs";
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

            if (entityGraphRequest != null && entityGraphRequest.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(entityGraphRequest); // http body (model) parameter
            }
            else
            {
                localVarPostBody = entityGraphRequest; // byte array
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
                Exception exception = ExceptionFactory("GetGraph", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<EntityGraphResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (EntityGraphResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(EntityGraphResponse)));
        }

        /// <summary>
        /// Get achievements by member reference id Returns a list of graphs based on the entity type.
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="entityGraphRequest"></param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of EntityGraphResponse</returns>
        public async System.Threading.Tasks.Task<EntityGraphResponse> GetGraphAsync (EntityGraphRequest entityGraphRequest, CancellationToken cancellationToken = default(CancellationToken))
        {
             ApiResponse<EntityGraphResponse> localVarResponse = await GetGraphWithHttpInfoAsync(entityGraphRequest, cancellationToken);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Get achievements by member reference id Returns a list of graphs based on the entity type.
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="entityGraphRequest"></param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse (EntityGraphResponse)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<EntityGraphResponse>> GetGraphWithHttpInfoAsync (EntityGraphRequest entityGraphRequest, CancellationToken cancellationToken = default(CancellationToken))
        {
            // verify the required parameter 'entityGraphRequest' is set
            if (entityGraphRequest == null)
                throw new ApiException(400, "Missing required parameter 'entityGraphRequest' when calling GraphsApi->GetGraph");

            var localVarPath = "/graphs";
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

            if (entityGraphRequest != null && entityGraphRequest.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(entityGraphRequest); // http body (model) parameter
            }
            else
            {
                localVarPostBody = entityGraphRequest; // byte array
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
                Exception exception = ExceptionFactory("GetGraph", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<EntityGraphResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (EntityGraphResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(EntityGraphResponse)));
        }

    }
}
