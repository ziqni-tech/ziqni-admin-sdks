package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.UnitsOfMeasureApiWs;
import com.ziqni.admin.sdk.api.WalletTypesApiWs;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.CreateUnitOfMeasureRequest;
import com.ziqni.admin.sdk.model.CreateWalletTypeRequest;
import com.ziqni.admin.sdk.model.ModelApiResponse;
import com.ziqni.admin.sdk.model.UnitOfMeasureType;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadWalletTypeData implements CompleteableFutureTestWrapper {

    private WalletTypesApiWs api;

    public LoadWalletTypeData() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getWalletTypesApi();
    }

    public CreateWalletTypeRequest getCreateRequest(String uom) {

        final String givenName = "Test_name-" + UUID.randomUUID();

        final Double givenMultiplier = new Random().nextDouble();

        return new CreateWalletTypeRequest()
                .name("Name_ Test" )
                .metadata(Map.of("Ziqni","Rules"))
                .unitOfMeasure(uom)
                .description("Wallet type description"+uom)
                ;

    }

    public List<CreateWalletTypeRequest> getCreateRequestAsList(int numberOfItems,String uom) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest(uom))
                .collect(Collectors.toList());
    }

    public List<CreateWalletTypeRequest> getCreateRequestAsList(CreateWalletTypeRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateWalletTypeRequest> request) throws ApiException {
        var response = $(api.createWalletTypes(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(request.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        if(!idsToDelete.isEmpty()) {
            var response = $(api.deleteWalletTypes(idsToDelete));

            assertTrue(Objects.nonNull(response));
            assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some unit of measure");
        }
    }

}

