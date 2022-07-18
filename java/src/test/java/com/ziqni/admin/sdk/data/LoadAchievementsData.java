package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.AchievementsApiWs;
import com.ziqni.admin.sdk.model.*;
import tests.utils.CompleteableFutureTestWrapper;

import java.time.OffsetDateTime;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadAchievementsData implements CompleteableFutureTestWrapper {

    private AchievementsApiWs api;
    private LoadRulesData loadRulesData;

    public LoadAchievementsData() {
        this.api = this.api = ZiqniAdminApiFactory.getAchievementsApi();
        this.loadRulesData = new LoadRulesData();
    }

    public CreateAchievementRequest getCreateRequest(String rewardTypeId) {
        final var givenName = "Test_name-" + UUID.randomUUID().toString();
        final var givenIcon = "Test_icon-" + UUID.randomUUID().toString();

        final var scheduleConstraints = new ArrayList<String>();
        scheduleConstraints.add("onlyAggregateOnActiveDays");
        final var givenScheduling = new Scheduling()
                .scheduleType(ScheduleType.ONCE)
                .scheduleOccurrencesLimit(1)
                .startDate(OffsetDateTime.now())
                .endDate(OffsetDateTime.now().plusMonths(1))
                .constraints(scheduleConstraints);
        final var givenMembersGroup = new ArrayList<String>();
        final var archConstraints = new ArrayList<String>();
        archConstraints.add("initialState");

        final var rewardName = "Given Pfunguro";
        final var givenRewardRank = "1,2,3,4-10";
        final var givenRewardValue = new Random().nextDouble();

        final var rewardConstraints = new ArrayList<String>();
        archConstraints.add("memberAcknowledgmentRequired");;

        final var createRewardRequest = new CreateRewardRequest()
                .name(rewardName)
                .rewardRank(givenRewardRank)
                .rewardTypeId(rewardTypeId)
                .rewardValue(givenRewardValue)
                .addConstraints(archConstraints)
                .period(100)
                .description("Test_description")
                .delay(100)
                .addConstraints(rewardConstraints)
                ;


//        var dependantOn = new DependantOn();
//        dependantOn.setShould(List.of("qyxQrHsBJkJ44GoW8b-E"));
//        dependantOn.setShouldMatchAtLeast(1);
//
//        var dependency = new Dependancy();
//        dependency.setDependantOn(dependantOn);
//        dependency.setEntityType(EntityType.ACHIEVEMENT.getValue());


        return new CreateAchievementRequest()
                .constraints(archConstraints)
                .description("test description")

//                .icon(givenIcon)
                .name(givenName)
                .maxNumberOfIssues(3)
//                .ruleSets(givenRuleSet)
                .scheduling(givenScheduling)
                .termsAndConditions("test terms and conditions")
                .rewards(List.of(createRewardRequest))
                .metadata(new LoadMetadata().getMetadataAsList())
                .rules(loadRulesData.getRules());
//                .dependantOn(dependency);
//                .memberGroups(givenMembersGroup)
    }

    public CreateAchievementRequest getCreateRequestWithRewards(List<CreateRewardRequest> rewards, String rewardTypeId) {
        return getCreateRequest(rewardTypeId)
                .rewards(rewards);
    }

    public List<CreateAchievementRequest> getCreateRequestAsList(int numberOfItems, String rewardTypeId) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest(rewardTypeId))
                .collect(Collectors.toList());
    }

    public List<CreateAchievementRequest> getCreateRequestAsList(CreateAchievementRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateAchievementRequest> request) throws ApiException {
        var response = api.createAchievements(request).join();

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
//        assertEquals(request.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        if(idsToDelete.size() > 0 ) { var response = $(api.deleteAchievements(idsToDelete));

            assertTrue(Objects.nonNull(response));
            assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete achievement");
        }

    }

}

