package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.ProductsApiWs;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.ActionTypeAdjustmentFactor;
import com.ziqni.admin.sdk.model.CreateProductRequest;
import com.ziqni.admin.sdk.model.ModelApiResponse;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadInstantWinsData implements CompleteableFutureTestWrapper {

    private ProductsApiWs api;

    public LoadInstantWinsData() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getProductsApi();
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

