package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.FileObjectsApiWs;

import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.CreateFileObjectRequest;
import com.ziqni.admin.sdk.model.ModelApiResponse;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import tests.utils.CompleteableFutureTestWrapper;


import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadFileObjectsData implements CompleteableFutureTestWrapper {

    private FileObjectsApiWs api;

    public LoadFileObjectsData() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getFileObjectsApi();
    }

    public CreateFileObjectRequest getCreateRequest(String repositoryId) {

        String givenName = "Test_name-" + UUID.randomUUID().toString();
        String givenMimeType = "image/jpeg";
        String givenParentFolderPath = "/files";

        return new CreateFileObjectRequest()
                .repositoryId(repositoryId)
                .name(givenName)
                .metadata(new LoadMetadata().getMetadataAsList())
                .mimeType(givenMimeType)
                .parentFolderPath(givenParentFolderPath)
                .tags(List.of("test_tag_1", "test_tag_2"))
                .customFields(Map.of("custom_name","Empty_folder"));
    }

    public List<CreateFileObjectRequest> getCreateRequestAsList(int numberOfItems, String repositoryId) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest(repositoryId))
                .collect(Collectors.toList());
    }

    public List<CreateFileObjectRequest> getCreateRequestAsList(CreateFileObjectRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateFileObjectRequest> request) throws ApiException {
        var response = api.createFileObjects(request.get(0)).join();

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(request.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        if(!idsToDelete.isEmpty()) {
            var response = $(api.deleteFileObjects(idsToDelete, true));

            assertTrue(Objects.nonNull(response));
            assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some unit of measure");
        }
    }

}

