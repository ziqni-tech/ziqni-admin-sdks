package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.RewardTypesApiWs;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadRewardTypesData implements CompleteableFutureTestWrapper {

    private RewardTypesApiWs api;

    public LoadRewardTypesData() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getRewardTypesApi();
    }

    public CreateRewardTypeRequest getCreateRequest() {
        String givenName = "Test_name-" + UUID.randomUUID().toString();
        String givenKey = "Test_key-" + UUID.randomUUID().toString();
        List<String> constraints = new ArrayList<>();
        constraints.add("system");

        return new CreateRewardTypeRequest()
                .name(givenName)
                .key(givenKey)
                .unitOfMeasure("1TGcUn4BguiNwDWXZKu1")
                .addConstraints(constraints)
                .metadata(new LoadMetadata().getMetadataAsList())

                ;
    }
    public CreateRewardTypeRequest getCreateRequestWithSchedule() {
        String givenName = "Test_name-" + UUID.randomUUID().toString();
        String givenKey = "Test_key-" + UUID.randomUUID().toString();
        var unitOfMeasure = "WmhI4o4B9NMw64nNXvxK";
        List<String> constraints = new ArrayList<>();
        constraints.add("system");
        AwardScheduling awardSchedulingIssued=new AwardScheduling();
        awardSchedulingIssued.setThenAwardActiveUntil("P1D");
        awardSchedulingIssued.setOnStatusChangeTo(AwardStateActions.ISSUED);
        AwardScheduling awardSchedulingClaimed=new AwardScheduling();
        awardSchedulingClaimed.setThenAwardActiveUntil("P3D");
        awardSchedulingClaimed.setOnStatusChangeTo(AwardStateActions.CLAIMED);
        AwardScheduling awardSchedulingCompleted=new AwardScheduling();
        awardSchedulingCompleted.setThenAwardActiveUntil("P3D");
        awardSchedulingCompleted.setOnStatusChangeTo(AwardStateActions.COMPLETED);


        return new CreateRewardTypeRequest()
                .name(givenName)
                .key(givenKey)
                .unitOfMeasure(unitOfMeasure)
                .addConstraints(constraints)
                .metadata(new LoadMetadata().getMetadataAsList())
                .scheduling(List.of(awardSchedulingIssued,awardSchedulingClaimed,awardSchedulingCompleted))
                ;
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

