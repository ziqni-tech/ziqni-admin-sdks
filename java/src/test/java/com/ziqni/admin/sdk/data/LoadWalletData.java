package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.WalletTypesApiWs;
import com.ziqni.admin.sdk.api.WalletsApiWs;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.CreateWalletRequest;
import com.ziqni.admin.sdk.model.CreateWalletTypeRequest;
import com.ziqni.admin.sdk.model.ModelApiResponse;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadWalletData implements CompleteableFutureTestWrapper {

    private WalletsApiWs api;

    public LoadWalletData() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getWalletsApi();
    }

    public CreateWalletRequest getCreateRequest(String memberId,String walletTypeId) {





        return new CreateWalletRequest()

                .walletTypeId(walletTypeId)
                .memberId(memberId)
                .metadata(Map.of("Ziqni","Rules"));

    }

    public List<CreateWalletRequest> getCreateRequestAsList(int numberOfItems,String memberId,String walletTypeId) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest(memberId,walletTypeId))
                .collect(Collectors.toList());
    }

    public List<CreateWalletRequest> getCreateRequestAsList(CreateWalletRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateWalletRequest> request) throws ApiException {
        var response = $(api.createWallets(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(request.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        if(!idsToDelete.isEmpty()) {
            var response = $(api.deleteWallets(idsToDelete));

            assertTrue(Objects.nonNull(response));
            assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some unit of measure");
        }
    }

}

