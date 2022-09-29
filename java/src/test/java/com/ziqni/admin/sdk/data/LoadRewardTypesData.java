package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.RewardTypesApiWs;
import com.ziqni.admin.sdk.model.CreateRewardTypeRequest;
import com.ziqni.admin.sdk.model.ModelApiResponse;
import com.ziqni.admin.sdk.model.UnitOfMeasureType;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadRewardTypesData implements CompleteableFutureTestWrapper {

    private RewardTypesApiWs api;

    public LoadRewardTypesData() {
        this.api = ZiqniAdminApiFactory.getRewardTypesApi();
    }

    public CreateRewardTypeRequest getCreateRequest() {
        String givenName = "Test_name-" + UUID.randomUUID().toString();
        String givenKey = "Test_key-" + UUID.randomUUID().toString();
        UnitOfMeasureType unitOfMeasureType = UnitOfMeasureType.OTHER;
        List<String> constraints = new ArrayList<>();
        constraints.add("system");

        return new CreateRewardTypeRequest()
                .name(givenName)
                .key(givenKey)
                .unitOfMeasure(unitOfMeasure)
                .addConstraints(constraints)
                .metadata(new LoadMetadata().getMetadataAsList());
    }

    public List<CreateRewardTypeRequest> getCreateRequestAsList(int numberOfItems) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest())
                .collect(Collectors.toList());
    }

    public List<CreateRewardTypeRequest> getCreateRequestAsList(CreateRewardTypeRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateRewardTypeRequest> request) throws ApiException {
        var response = api.createRewardTypes(request).join();

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(request.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        if(idsToDelete.size() > 0) {
            var response = $(api.deleteRewardTypes(idsToDelete));

            assertTrue(Objects.nonNull(response));
            assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some reward types");
        }
    }

}

