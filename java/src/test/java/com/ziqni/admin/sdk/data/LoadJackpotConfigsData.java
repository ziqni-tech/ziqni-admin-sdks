package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.InstantWinsApiWs;
import com.ziqni.admin.sdk.api.JackpotConfigsApiWs;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import tests.utils.CompleteableFutureTestWrapper;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadJackpotConfigsData implements CompleteableFutureTestWrapper {

    private JackpotConfigsApiWs api;

    public LoadJackpotConfigsData() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getJackpotConfigsApi();
    }

    public CreateJackpotConfigRequest getCreateRequest() {


        return new CreateJackpotConfigRequest()
                .startDate(OffsetDateTime.parse("2025-01-01T00:00:00Z"))
                .endDate(OffsetDateTime.parse("2025-12-31T23:59:59Z"))
                .operatorSplitPercentage(30.0)
                .memberSplitPercentage(70.0)
                .mustDropAfterHours(48L)
                .jackpotThreshold(10000L)
                .payouts(10L)
                .dropAmount(new BigDecimal("25").setScale(2, RoundingMode.HALF_UP))
                .seedAmount(new BigDecimal("5"))
                .dropProbability(0.002)
                .logScalingFactor(1000.0)
                .name("Name")
                .description("Desc")
                .type(JackpotConfigType.SINGLE)
                .eventActions(new DependantOn().addMustItem("action")) // assuming DependantOn has this builder-style method
                .customFields(Map.of("gameType", "slots", "region", "EU"))
                .tags(List.of("VIP", "HolidayPromo"))
                .metadata(Map.of("createdBy", "admin", "environment", "production"));


    }

    public List<CreateJackpotConfigRequest> getCreateRequestAsList(int numberOfItems) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest())
                .collect(Collectors.toList());
    }

    public List<CreateJackpotConfigRequest> getCreateRequestAsList(CreateJackpotConfigRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateJackpotConfigRequest> requestList) throws ApiException {
        var response = $(api.createJackpotConfigs(requestList));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(requestList.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        if(idsToDelete.size() > 0 ) {

            var response = $(api.deleteJackpotConfigs(idsToDelete));

            assertTrue(Objects.nonNull(response));
            assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some custom fields");
        }
    }

}

