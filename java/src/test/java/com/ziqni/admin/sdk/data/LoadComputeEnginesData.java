package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.ComputeEngineApiWs;
import com.ziqni.admin.sdk.model.CreateActionTypeRequest;
import com.ziqni.admin.sdk.model.CreateComputeEngineRequest;
import com.ziqni.admin.sdk.model.ModelApiResponse;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadComputeEnginesData implements CompleteableFutureTestWrapper {

    private ComputeEngineApiWs api;

    public LoadComputeEnginesData() {
        this.api = ZiqniAdminApiFactory.getComputeEngineApi();
    }


    public CreateComputeEngineRequest getCreateRequest() {

        String givenName = "Test_name-" + UUID.randomUUID();
        String givenKey = "Test_key-" + UUID.randomUUID();

        final var constraints = new ArrayList<String>();
        //constraints.add("system");

        return new CreateComputeEngineRequest()
                .name(givenName)
                .description(givenKey)
                .constraints(constraints)
                .customFields(null)
                .lastKnownStatusCode(100)
                .metadata(new LoadMetadata().getMetadataAsList())
                .statistics(null)
                .tags(null)
                .uptime(100L);

    }

    public List<CreateComputeEngineRequest> getCreateRequestAsList(int numberOfItems) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest())
                .collect(Collectors.toList());
    }

    public List<CreateActionTypeRequest> getCreateRequestAsList(CreateActionTypeRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(CreateComputeEngineRequest request) throws ApiException {
        var response = $(api.createComputeEngines(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(String id) throws ApiException {
        var response = $(api.deleteComputeEnginesById(id));

        assertTrue(Objects.nonNull(response));
        assertEquals(1, response.getMeta().getResultCount(), "Failed to delete sacion type");

    }

}

