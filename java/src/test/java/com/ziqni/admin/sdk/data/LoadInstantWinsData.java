package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.InstantWinsApiWs;
import com.ziqni.admin.sdk.api.MembersApiWs;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import tests.utils.CompleteableFutureTestWrapper;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadInstantWinsData implements CompleteableFutureTestWrapper {

    private InstantWinsApiWs api;

    public LoadInstantWinsData() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getInstantWinsApi();
    }

    public CreateInstantWinRequest getCreateRequest() {


        CreateInstantWinRequest request = new CreateInstantWinRequest();

        CreateInstantWinTile instantWinTile = new CreateInstantWinTile();
        instantWinTile.setIcon("Test icon");
        instantWinTile.setText("Test text");
        instantWinTile.setLocation(new GridLocation().row(0).col(1));
        instantWinTile.setProbability(1D);
        instantWinTile.addContraintsItem("hasRewards");
        request.setName("Test name");
        request.setDescription("Test description");

        request.setInstantWinType(1);
        request.setStatusCode(15);
        request.setTermsAndConditions("Test terms and conditions");
        request.setTiles(List.of(instantWinTile));

        request.addConstraintsItem("hasRewards");
        request.setStartDate(OffsetDateTime.now().plusDays(5));
        request.setEndDate(OffsetDateTime.now().plusDays(12));



        return request;
    }

    public List<CreateInstantWinRequest> getCreateRequestAsList(int numberOfItems) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest())
                .collect(Collectors.toList());
    }

    public List<CreateInstantWinRequest> getCreateRequestAsList(CreateInstantWinRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateInstantWinRequest> requestList) throws ApiException {
        var response = $(api.createInstantWins(requestList));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(requestList.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        if(idsToDelete.size() > 0 ) {

            var response = $(api.deleteInstantWins(idsToDelete));

            assertTrue(Objects.nonNull(response));
            assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some custom fields");
        }
    }

}

