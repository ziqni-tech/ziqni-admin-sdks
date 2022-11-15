/*
 * Ziqni Application Services
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.ziqni.admin.sdk.api;

import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.model.AwardResponse;
import org.junit.jupiter.api.*;


import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertTrue;


/**
 * API tests for AwardsApi
 */

public class AwardsApiTest implements tests.utils.CompleteableFutureTestWrapper{

    private final AwardsApiWs api ;

    public AwardsApiTest() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getAwardsApi();
    }

    @Test
    public void getAwardsNoArgumentsReturnEmptyTest() throws ApiException {
        List<String> id = Collections.emptyList();
        Integer limit = 0;
        Integer skip = 0;

        AwardResponse response = $(api.getAwards(id, limit, skip));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertTrue(response.getResults().isEmpty(), "Should have no result");
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");
    }

    @Test
    public void getAwardsNoIdsWithLimitReturnOkTest() throws ApiException {
        List<String> id = Collections.emptyList();
        Integer limit = 3;
        Integer skip = 0;

        AwardResponse response = $(api.getAwards(id, limit, skip));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");

        if(response.getResults().size() == limit)
        assertEquals(response.getResults().size(), limit, "Result count should match limit");

        assertEquals(response.getErrors().size(), 0, "Number of errors should be zero");

    }

    @Test
    @Disabled //fixme use id from existing award in core to run this test
    public void getAwards() throws ApiException {
        //Create an Award on core and get the id which you will put here
        final String awardId = "E-cL1HoB1TE-AUdQSLeA";

        final AwardResponse response = $(api.getAwards(List.of(awardId), 1, 0));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");
        assertTrue(response.getResults().size()>0,"Result size should be greater than zero");

    }

}
