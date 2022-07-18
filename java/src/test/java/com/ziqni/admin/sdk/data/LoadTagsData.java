package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.model.CreateTagRequest;
import com.ziqni.admin.sdk.model.QueryMultiple;
import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.TagsApiWs;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.model.ModelApiResponse;
import com.ziqni.admin.sdk.model.QueryRequest;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadTagsData implements CompleteableFutureTestWrapper {

    private TagsApiWs api;

    public LoadTagsData() {
        this.api = ZiqniAdminApiFactory.getTagsApi();
    }

    public CreateTagRequest getCreateRequest() {
        final String givenName = "Test_name-" + UUID.randomUUID().toString();
        final String givenKey = "Test_key-" + UUID.randomUUID().toString();
        final String description = "Test Description";
        final String entityType = "FileObject";

        return new CreateTagRequest()
                .name(givenName)
                .key(givenKey)
                .description(description)
                .entityTypes(List.of(entityType))
                .metadata(Map.of("MetaKey", "MetaValue"));
    }

    public List<CreateTagRequest> getCreateRequestAsList(int numberOfItems) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest())
                .collect(Collectors.toList());
    }

    public List<CreateTagRequest> getCreateRequestAsList(CreateTagRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateTagRequest> request) throws ApiException {
        var response = api.createTags(request).join();

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(request.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }

    public  String getModel() throws ApiException {

        var createRequest = getCreateRequest();
        var createRequestList = getCreateRequestAsList(createRequest);
        var createResponse=createTestData(createRequestList);
        return createResponse.getResults().get(0).getExternalReference();
    }


    public void deleteTestData(List<String> keysToDelete) throws ApiException {
        if(keysToDelete.size() > 0 ) {


            final var givenQuery = new QueryRequest()
                    .addMustItem(new QueryMultiple().queryField("key").queryValues(keysToDelete));
            var response = $(api.deleteTagsByQuery(givenQuery));

            assertTrue(Objects.nonNull(response));
            assertEquals(keysToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some tags");
        }
    }

}

