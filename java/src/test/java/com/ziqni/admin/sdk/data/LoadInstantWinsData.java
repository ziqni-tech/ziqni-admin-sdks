package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.InstantWinsApiWs;
import com.ziqni.admin.sdk.api.ProductsApiWs;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.ActionTypeAdjustmentFactor;
import com.ziqni.admin.sdk.model.CreateInstantWinRequest;
import com.ziqni.admin.sdk.model.CreateProductRequest;
import com.ziqni.admin.sdk.model.ModelApiResponse;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadInstantWinsData implements CompleteableFutureTestWrapper {

    private final InstantWinsApiWs api;

    public LoadInstantWinsData() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getInstantWinsApi();
    }

    public CreateInstantWinRequest getCreateRequest(String rewardId) {
        String name = "Test_name-" + UUID.randomUUID();
        String description = "Test description";

        final var c = new CreateInstantWinRequest()
                .name(name)
                .description(description)
                .instantWinType(1)
                .termsAndConditions("Test terms and conditions")
                .statusCode(15)
                .tiles(List.of())
                .metadata(new LoadMetadata().getMetadataAsList())
                .tags(List.of())
                .translations(List.of());

//        Optional.ofNullable(rewardId).ifPresent( a ->
//                c.(new ArrayList<>(Arrays.asList(
//                        new ActionTypeAdjustmentFactor()
//                                .actionTypeId(a)
//                                .adjustmentFactor(new Random().nextDouble())
//                )))
//        );

        return c;

    }

    public List<CreateInstantWinRequest> getCreateRequestAsList(int numberOfItems, String rewardId) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest(rewardId))
                .collect(Collectors.toList());
    }

    public List<CreateInstantWinRequest> getCreateRequestAsList(CreateInstantWinRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateInstantWinRequest> requestList) throws ApiException {
        var response = api.createInstantWins(requestList).join();

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(requestList.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        if(idsToDelete.size() > 0) {
            var response = $(api.deleteInstantWins(idsToDelete));

            assertTrue(Objects.nonNull(response));
            assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some instant wins");
        }
    }

}

