package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.model.CreateUnitOfMeasureRequest;
import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.UnitsOfMeasureApiWs;
import com.ziqni.admin.sdk.model.ModelApiResponse;
import com.ziqni.admin.sdk.model.UnitOfMeasureType;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadUnitsOfMeasureData implements CompleteableFutureTestWrapper {

    private UnitsOfMeasureApiWs api;

    public LoadUnitsOfMeasureData() {
        this.api = ZiqniAdminApiFactory.getUnitsOfMeasureApi();
    }

    public CreateUnitOfMeasureRequest getCreateRequest() {

        final String givenName = "Test_name-" + UUID.randomUUID();
        final String givenKey = "Test_key-" + UUID.randomUUID();
        final Double givenMultiplier = new Random().nextDouble();

        return new CreateUnitOfMeasureRequest()
                .name(givenName)
                .metadata(Map.of("Competition","Labs"))
                .key(givenKey)
                .description("Test description")
                .unitOfMeasureType(UnitOfMeasureType.OTHER)
                .multiplier(givenMultiplier);
    }

    public List<CreateUnitOfMeasureRequest> getCreateRequestAsList(int numberOfItems) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest())
                .collect(Collectors.toList());
    }

    public List<CreateUnitOfMeasureRequest> getCreateRequestAsList(CreateUnitOfMeasureRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateUnitOfMeasureRequest> request) throws ApiException {
        var response = $(api.createUnitsOfMeasure(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(request.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        if(!idsToDelete.isEmpty()) {
            var response = $(api.deleteUnitsOfMeasure(idsToDelete));

            assertTrue(Objects.nonNull(response));
            assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some unit of measure");
        }
    }

}

