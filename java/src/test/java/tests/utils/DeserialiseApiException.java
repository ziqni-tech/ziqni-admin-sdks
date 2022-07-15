package tests.utils;//package tests.utils;
//
//import com.ziqni.sdk.admin.ApiException;
//import com.ziqni.sdk.admin.model.Error;
//
//import java.util.List;
//import java.util.Objects;
//
//public class DeserialiseApiException {
//
//    private ApiException apiException;
//    private Error errorResponse;
//    private Integer errorCode;
//
//    public DeserialiseApiException(ApiException apiException) throws ApiException {
//
//
//        if (Objects.nonNull(apiException.getResponseBody())) {
//            try {
//                this.apiException = apiException;
//
//                apiException.getResponseBody()
//
//                this.errorResponse = com.ziqni.sdk.admin.Configuration.getDefaultApiClient().getObjectMapper().readValue(apiException.getResponseBody(), Error.class);
//            } catch (Exception e) {
//                e.printStackTrace();
//                throw apiException;
//            }
//        }else {
//           this.errorCode = apiException.getCode();
//        }
//    }
//
//    public ApiException getApiException() {
//        return this.apiException;
//    }
//
//    public Error getErrorResponse() {
//        return this.errorResponse;
//    }
//
//    public Integer getErrorCode(){
//        return this.errorCode;
//    }
//}
