package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.CompetitionsApiWs;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.model.*;

import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import com.ziqni.admin.sdk.util.DateUtil;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class LoadCompetitionsData implements CompleteableFutureTestWrapper {

    private CompetitionsApiWs api;
    private LoadRewardTypesData loadRewardTypesData;
    private LoadRulesData loadRulesData;
    private LoadTagsData loadTagsData;
    private LoadUnitsOfMeasureData loadUnitsOfMeasureData;

    public LoadCompetitionsData() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getCompetitionsApi();
        this.loadRewardTypesData=new LoadRewardTypesData();
        this.loadRulesData = new LoadRulesData();
        this.loadTagsData = new LoadTagsData();
        this.loadUnitsOfMeasureData = new LoadUnitsOfMeasureData();
    }

    public CreateCompetitionRequest getCreateRequest(List<String> productIds) {

        CreateCompetitionRequest request = new CreateCompetitionRequest();
         try {
             final var tagReq = loadTagsData.getCreateRequest().entityTypes(List.of("Member"));
             final var tagResp = loadTagsData.createTestData(List.of(tagReq));
             var tagKey = tagResp.getResults().get(0).getExternalReference();

             try {
                 Thread.sleep(5000);
             }catch (InterruptedException ex){
                 ex.printStackTrace();
             }

             final var memberDependantOn = new DependantOn()
                     .must(List.of(tagKey));

             request.setEntrantMemberTagsFilter(memberDependantOn);
             request.setCompetitionType(CompetitionType.LEADERBOARD);
             request.constraints(List.of("optinRequiredForEntrants"));
             request.setDescription("Test Description");
             request.setEntrantMemberType(MemberType.INDIVIDUAL.getValue());
             request.setMaxNumberOfEntrants(1000);
             request.setMinNumberOfEntrants(1);
             request.setName("Test competition");
             request.setNumberOfGroupStages(0);
             request.setNumberOfRounds(1);
             Optional.ofNullable(productIds).ifPresent(
                     request::setProductIds
             );
//             request.ruleSets(List.of(new RuleSet().scope(RuleScope.COMPETITION)));
             request.setScheduledStartDate(DateUtil.now());
             request.setScheduledEndDate(DateUtil.nowPlusDays(1));
             request.setTermsAndConditions("test terms and conditions");
//            request.setTranslations(null);
             request.setMetadata(new LoadMetadata().getMetadataAsList());
             final var givenConstraints = new ArrayList<String>();

             final var unitOfMeasure = loadUnitsOfMeasureData.createTestData(loadUnitsOfMeasureData.getCreateRequestAsList(1)).getResults().get(0).getId();
             final var rewardType = loadRewardTypesData.createTestData(List.of(loadRewardTypesData.getCreateRequest().unitOfMeasure(unitOfMeasure)));
             final var rewardName = "Pfunguro";
             final var givenRewardRank = "1,2,3";
             final var givenRewardValue = new Random().nextDouble();

             final var createRewardRequest = new CreateRewardRequest()
                     .name(rewardName)
                     .rewardRank(givenRewardRank)
                     .rewardTypeId(rewardType.getResults().get(0).getId())
                     .rewardValue(givenRewardValue)
                     .addConstraints(givenConstraints)
                     .period(100)
                     .description("Test_description")
                     .delay(100);
             request.setRewards(List.of(createRewardRequest));

             RankingStrategy rankingStrategy = new RankingStrategy();
             rankingStrategy.setConstraints(List.of("test_constraints"));

             ScoringStrategy scoringStrategy = new ScoringStrategy();
             scoringStrategy.setLastUpdateTimeStamp(100L);
             scoringStrategy.setLimitUpdatesTo(400);
             scoringStrategy.setRecordTimeWhenSumReaches(300D);
             scoringStrategy.setSumBestXOf(100);

//             Strategy strategy = new Strategy();
//             strategy.setRankingStrategy(rankingStrategy);
//             strategy.setScoringStrategy(scoringStrategy);
//             strategy.setStrategyType(StrategyType.FIRSTTO);

             CreateContestRequest createContestRequest=new CreateContestRequest();
             createContestRequest.setName("Contest 1");
             createContestRequest.setDescription("For Competition");
             createContestRequest.setRoundType(RoundType.TIMEBOUND);
             createContestRequest.setRewards(List.of(createRewardRequest));
             createContestRequest.setMinNumberOfEntrants(1);
            // createContestRequest.setStrategies(strategy);
             createContestRequest.setScheduledStartDate(DateUtil.now());
             createContestRequest.setScheduledEndDate(DateUtil.nowPlusDays(1));
             request.setContests(createContestRequest);
             request.setRules(loadRulesData.getRules());
         }catch (ApiException ex)
         {

         }

        return request;
    }

    public CreateSimpleCompetitionRequest getCreateSimpleCompRequest(List<String> productIds) {

        CreateSimpleCompetitionRequest request = new CreateSimpleCompetitionRequest();
        try {
            final var tagReq = loadTagsData.getCreateRequest().entityTypes(List.of("Member"));
            final var tagResp = loadTagsData.createTestData(List.of(tagReq));
            var tagKey = tagResp.getResults().get(0).getExternalReference();

            try {
                Thread.sleep(5000);
            }catch (InterruptedException ex){
                ex.printStackTrace();
            }

            final var memberDependantOn = new DependantOn()
                    .must(List.of(tagKey));

            request.setEntrantMemberTagsFilter(memberDependantOn);
            request.setCompetitionType(CompetitionType.LEADERBOARD);
            request.addConstraints(List.of("optinRequiredForEntrants"));
            request.setDescription("Test Description");
            request.setEntrantMemberType(MemberType.INDIVIDUAL.getValue());
            request.setMaxNumberOfEntrants(1000);
            request.setMinNumberOfEntrants(1);
            request.setName("Test competition");
//            request.setNumberOfGroupStages(0);
//            request.setNumberOfRounds(1);
            Optional.ofNullable(productIds).ifPresent(
                    request::setProductIds
            );
//             request.ruleSets(List.of(new RuleSet().scope(RuleScope.COMPETITION)));
            request.setScheduledStartDate(DateUtil.now());
            request.setScheduledEndDate(DateUtil.nowPlusDays(1));
            request.setTermsAndConditions("test terms and conditions");
//            request.setTranslations(null);
            request.setMetadata(new LoadMetadata().getMetadataAsList());
            final var givenConstraints = new ArrayList<String>();

            final var unitOfMeasure = loadUnitsOfMeasureData.createTestData(loadUnitsOfMeasureData.getCreateRequestAsList(1)).getResults().get(0).getId();
            final var rewardType = loadRewardTypesData.createTestData(List.of(loadRewardTypesData.getCreateRequest().unitOfMeasure(unitOfMeasure)));
            final var rewardName = "Pfunguro";
            final var givenRewardRank = "1,2,3";
            final var givenRewardValue = new Random().nextDouble();

            final var createRewardRequest = new CreateRewardRequest()
                    .name(rewardName)
                    .rewardRank(givenRewardRank)
                    .rewardTypeId(rewardType.getResults().get(0).getId())
                    .rewardValue(givenRewardValue)
                    .addConstraints(givenConstraints)
                    .period(100)
                    .description("Test_description")
                    .delay(100);
            request.setRewards(List.of(createRewardRequest));
            request.setRules(loadRulesData.getRules());

            RankingStrategy rankingStrategy = new RankingStrategy();
            rankingStrategy.setConstraints(List.of("test_constraints"));

            ScoringStrategy scoringStrategy = new ScoringStrategy();
            scoringStrategy.setLastUpdateTimeStamp(100L);
            scoringStrategy.setLimitUpdatesTo(400);
            scoringStrategy.setRecordTimeWhenSumReaches(300D);
            scoringStrategy.setSumBestXOf(100);

//            Strategy strategy = new Strategy();
//            strategy.setRankingStrategy(rankingStrategy);
//            strategy.setScoringStrategy(scoringStrategy);
//            strategy.setStrategyType(StrategyType.FIRSTTO);

          //  request.setStrategies(strategy);
        }catch (ApiException ex)
        {

        }

        return request;
    }

    public ModelApiResponse createTestData(CreateCompetitionRequest request) throws ApiException {
        var response = api.createCompetitions(request).join();

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }

}

