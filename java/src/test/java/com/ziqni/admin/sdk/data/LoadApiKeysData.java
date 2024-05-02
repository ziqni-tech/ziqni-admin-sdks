package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.ApiKeysApiWs;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.CreateApiKeyRequest;
import com.ziqni.admin.sdk.model.ModelApiResponse;
import com.ziqni.admin.sdk.model.Role;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import tests.utils.CompleteableFutureTestWrapper;

import java.lang.reflect.UndeclaredThrowableException;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadApiKeysData implements CompleteableFutureTestWrapper {

    private ApiKeysApiWs api;

    private Role role = Role.ADMINISTRATOR;
    private List<String> constraints = List.of("active", "default");

    public LoadApiKeysData() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getApiKeysApi();
    }

    public CreateApiKeyRequest getCreateRequest() {
        return new CreateApiKeyRequest()
                .description("Test description")
                .role(role)
                .whiteListIPs(List.of("127.0.0.1"   ))
                .addConstraints(constraints)
                .metadata(new LoadMetadata().getMetadataAsList())
                ;
    }

    public List<CreateApiKeyRequest> getCreateRequestAsList(int numberOfItems) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest())
                .collect(Collectors.toList());
    }

    public List<CreateApiKeyRequest> getCreateRequestAsList(CreateApiKeyRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(CreateApiKeyRequest request) throws ApiException {
        var response = $(api.createApiKeys(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        var responseList = idsToDelete.stream().map(x -> {
            try {
                return api.deleteApiKeysById(x).join();
            } catch (Exception e){
                throw new UndeclaredThrowableException(e);
            }}).collect(Collectors.toList());

        assertEquals(idsToDelete.size(), responseList.size(), "Failed to delete some custom fields");

    }

}

