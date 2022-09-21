package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.ActionTypesApiWs;
import com.ziqni.admin.sdk.model.CreateActionTypeRequest;
import com.ziqni.admin.sdk.model.ModelApiResponse;
import com.ziqni.admin.sdk.model.UnitOfMeasureType;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class LoadActionTypesData implements CompleteableFutureTestWrapper {

    private ActionTypesApiWs api;

    public LoadActionTypesData() {
        this.api = ZiqniAdminApiFactory.getActionTypesApi();
    }


    public CreateActionTypeRequest getCreateRequest() {

        String givenName = "Test_name-" + UUID.randomUUID();
        String givenKey = "Test_key-" + UUID.randomUUID();

        final var constraints = new ArrayList<String>();
        //constraints.add("system");

        return new CreateActionTypeRequest()
                .name(givenName)
                .key(givenKey)
                .unitOfMeasure("win")
                .addConstraints(constraints)
                .metadata(new LoadMetadata().getMetadataAsList())
                ;
    }

    public List<CreateActionTypeRequest> getCreateRequestAsList(int numberOfItems) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest())
                .collect(Collectors.toList());
    }

    public List<CreateActionTypeRequest> getCreateRequestAsList(CreateActionTypeRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateActionTypeRequest> requestList) throws ApiException {
        var response = $(api.createActionTypes(requestList));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(requestList.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        var response = $(api.deleteActionTypes(idsToDelete));

        assertTrue(Objects.nonNull(response));
        assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete sacion type");

    }

}

