package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.ContestsApiWs;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.model.*;

import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import com.ziqni.admin.sdk.util.DateUtil;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class LoadContestsData implements CompleteableFutureTestWrapper {

    private ContestsApiWs api;
    private LoadRewardTypesData loadRewardTypesData;
    private LoadUnitsOfMeasureData loadUnitsOfMeasureData;
    private LoadRulesData loadRulesData;

    public String subRuleConstant = "Constant";
    public String subRuleFact = "Fact";
    public String subRuleOperator = "Operator";

    public LoadContestsData() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getContestsApi();
        this.loadRewardTypesData=new LoadRewardTypesData();
        this.loadRulesData = new LoadRulesData();
        this.loadUnitsOfMeasureData = new LoadUnitsOfMeasureData();

    }

    public CreateContestForCompetitionRequest getCreateRequest(String competitionId)  {
        final var request = new CreateContestForCompetitionRequest();
        try {
            RankingStrategy rankingStrategy = new RankingStrategy();
            rankingStrategy.setConstraints(List.of("test_constraints"));

            ScoringStrategy scoringStrategy = new ScoringStrategy();
            scoringStrategy.setLastUpdateTimeStamp(100L);
            scoringStrategy.setLimitUpdatesTo(400);
            scoringStrategy.setRecordTimeWhenSumReaches(300D);
            scoringStrategy.setSumBestXOf(100);

            TournamentStrategies strategy = new TournamentStrategies();
            strategy.setRankingStrategy(rankingStrategy);
            strategy.setScoringStrategy(scoringStrategy);
            strategy.setStrategyType(StrategyType.FIRSTTO);

//            SubRule subRule = new SubRule();
//            subRule.setConstant(subRuleConstant);
//            subRule.setFact(subRuleFact);
//            subRule.setOperator(subRuleOperator);
//
//            RuleSubCondition ruleSubCondition = new RuleSubCondition();
//            ruleSubCondition.setConstraints(List.of("Constraints"));
//            ruleSubCondition.setMatchCondition(MatchCondition.ANY);
//            ruleSubCondition.setSubRules(List.of(subRule));

//            Rule rule = new Rule();
//            rule.setConstant("Test Constant");
//            rule.setFact("Fact");
//            rule.setOperator("Operator");
//            rule.setSubConditions(List.of(ruleSubCondition));

//            Condition condition = new Condition();
//            condition.setRules(List.of(rule));

//            List<RuleSet> ruleSets = new ArrayList<>();
//            RuleSet ruleSet = new RuleSet();
//            ruleSet.setAction("Test Action");
//            ruleSet.setConditions(List.of(condition));
//            ruleSet.setAction("Test_action");
//            ruleSet.setScope(RuleScope.ACHIEVEMENT);
//            ruleSet.setOnMatchConstant("Test_on_match_constant");
//            ruleSet.setOnMatchThen("Test_on_match_then");
//            ruleSet.setPriority(1);
//            ruleSets.add(ruleSet);

            request.setName("Test Group Stage Label");
            request.setMetadata(new LoadMetadata().getMetadataAsList());
            request.setTermsAndConditions("Test Terms and Conditions");
            request.setDescription("Test Description");
            request.setMaxNumberOfEntrants(100);
            request.setMinNumberOfEntrants(20);
            request.setRound(2);
            request.setRoundType(RoundType.TIMEBOUND);
            request.setScheduledStartDate(DateUtil.now());
            request.setScheduledEndDate(DateUtil.nowPlusDays(1));
            request.setCompetitionId(competitionId);
            request.setStrategies(strategy);
//            request.setRuleSets(ruleSets);

            final var givenConstraints = new ArrayList<String>();
            final var unitOfMeasure = loadUnitsOfMeasureData.createTestData(loadUnitsOfMeasureData.getCreateRequestAsList(1));
            final var rewardType = loadRewardTypesData.createTestData(List.of(loadRewardTypesData.getCreateRequest().unitOfMeasure(unitOfMeasure.getResults().get(0).getId())));
            final var rewardName = "Given Pfunguro";
            final var givenRewardRank = "1,2,3,4-10";
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


        }catch (ApiException ex)
        {

        }
        return request;
    }

    public List<CreateContestForCompetitionRequest> getCreateRequestAsList(int numberOfItems, String competitionId) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest(competitionId))
                .collect(Collectors.toList());
    }

    public List<CreateAchievementRequest> getCreateRequestAsList(CreateAchievementRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(CreateContestForCompetitionRequest request) throws ApiException {
        var response = $(api.createContests(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
//        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }

    public ModelApiResponse createTestData(List<CreateContestForCompetitionRequest> request) throws ApiException {

        final var createResponse = new ModelApiResponse();

        request.forEach(req -> {
            try {
                var response = $(api.createContests(req));

                createResponse.setResults(response.getResults());
                createResponse.setErrors(response.getErrors());
                createResponse.setMeta(response.getMeta());

                assertNotNull(response);
                assertNotNull(response.getResults());
                assertNotNull(response.getErrors());
                assertEquals(1, response.getResults().size(), "Should contain created entity");
                assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

            }catch (ApiException ex){
                ex.printStackTrace();
            }
        });

        return createResponse;
    }

}

