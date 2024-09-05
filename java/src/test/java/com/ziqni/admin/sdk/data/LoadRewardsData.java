package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.RewardsApiWs;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadRewardsData implements CompleteableFutureTestWrapper {

    private RewardsApiWs api;

    public LoadRewardsData() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getRewardsApi();
    }

    public CreateEntityRewardRequest getCreateRequest(String rewardTypeId, String entityId, String entityType) {
        final var givenName = "Test_name-" + UUID.randomUUID().toString();
        final var givenRewardRank = "1,2,3,4-10";
        final var givenRewardValue = new Random().nextDouble();
        final var constraints = new ArrayList<String>();
        constraints.add("memberAcknowledgmentRequired");
        AwardScheduling awardScheduling=new AwardScheduling();
        awardScheduling.setThenAwardActiveFrom("2024-06-07T08:00:00");
        awardScheduling.setThenAwardActiveUntil("2024-06-08T08:00:00");
        awardScheduling.setOnStatusChangeTo(AwardStateActions.CLAIMED);
        return new CreateEntityRewardRequest()
                .name(givenName)
                .rewardRank(givenRewardRank)
                .rewardTypeId(rewardTypeId)
                .rewardValue(givenRewardValue)
                .constraints(constraints)
                .period(100)
                .entityType(RewardEntityType.fromValue(entityType))
                .icon("")
                .entityId(entityId)
                .description("Test_description")
                .metadata(new LoadMetadata().getMetadataAsList())
                .delay(100)
                .scheduling(List.of(awardScheduling))
                ;
    }

    public List<CreateEntityRewardRequest> getCreateRequestAsList(int numberOfItems, String rewardTypeId, String entityId, String entityType) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest(rewardTypeId, entityId, entityType))
                .collect(Collectors.toList());
    }

    public List<CreateEntityRewardRequest> getCreateRequestAsList(CreateEntityRewardRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateEntityRewardRequest> request) throws ApiException {
        var response = $(api.createRewards(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(request.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }

    public ModelApiResponse createTestData(List<CreateEntityRewardRequest> request, Integer expected) throws ApiException {
        var response = $(api.createRewards(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(expected, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        if(idsToDelete.size() > 0) {
            var response = $(api.deleteRewards(idsToDelete));

            assertTrue(Objects.nonNull(response));
            assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some reward types");
        }

    }

}

