package com.ziqni.sdk.admin.data;

import com.ziqni.sdk.admin.ZiqniAdminApiFactory;
import com.ziqni.sdk.admin.ApiException;
import com.ziqni.sdk.admin.api.ProductsApiWs;
import com.ziqni.sdk.admin.model.ActionTypeAdjustmentFactor;
import com.ziqni.sdk.admin.model.CreateProductRequest;
import com.ziqni.sdk.admin.model.ModelApiResponse;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadProductsData implements CompleteableFutureTestWrapper {

    private ProductsApiWs api;

    public LoadProductsData() {
        this.api = ZiqniAdminApiFactory.getProductsApi();
    }

    public CreateProductRequest getCreateRequest(String actionTypeId) {
        String name = "Test_name-" + UUID.randomUUID();
        String refId = "Test_key-" + UUID.randomUUID();
        String description = "Test description";
        Double adjustmentFactor = new Random().nextDouble();

        final var c = new CreateProductRequest()
                .name(name)
                .productRefId(refId)
                .description(description)
                .adjustmentFactor(adjustmentFactor)
                .metadata(new LoadMetadata().getMetadataAsList());

        Optional.ofNullable(actionTypeId).ifPresent( a ->
                c.actionTypeAdjustmentFactors(new ArrayList<>(Arrays.asList(
                        new ActionTypeAdjustmentFactor()
                                .actionTypeId(a)
                                .adjustmentFactor(new Random().nextDouble())
                )))
        );

        return c;

    }

    public List<CreateProductRequest> getCreateRequestAsList(int numberOfItems, String actionTypeId) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest(actionTypeId))
                .collect(Collectors.toList());
    }

    public List<CreateProductRequest> getCreateRequestAsList(CreateProductRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateProductRequest> requestList) throws ApiException {
        var response = api.createProducts(requestList).join();

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(requestList.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        if(idsToDelete.size() > 0) {
            var response = $(api.deleteProducts(idsToDelete));

            assertTrue(Objects.nonNull(response));
            assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some products");
        }
    }

}

