package com.ziqni.admin.sdk.api;

import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import org.junit.jupiter.api.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class EntrantsApiTest implements tests.utils.CompleteableFutureTestWrapper{

    private static final Logger logger = LoggerFactory.getLogger(EntrantsApiTest.class);

    private final EntrantsApiWs api;

    List<String> idsToDelete = new ArrayList<>();

    public EntrantsApiTest() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getEntrantsApi();

    }

    @Test
    @Order(1)
    public void getEntrantsByQueryReturnOkTest() throws ApiException {
        final var id = "-KYmYYABNTgz_ngm18r2";
        var givenQuery = new QueryRequest()
                .addMustItem(new QueryMultiple()
                        .queryField("participationId")
                        .queryValues(List.of(id))
                )
                .skip(0)
                .limit(20);

        var response = $(api.getEntrantsByQuery( givenQuery));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Results should contain entry");
        assertEquals(0, response.getErrors().size(), "Errors should be empty");

        idsToDelete.add(id);
    }

    @Test
    @Order(2)
    public void updateEntrantsReturnOkTest() throws ApiException {
        final var updateEntrantRequest = new UpdateEntrantRequest()
                .entrantAction(EntrantAction.DROPSCORE)
                .entrantStatus(EntrantStatus.INJURED)
                .memberId("")
                .entityId("");

        var response = $(api.updateEntrants(List.of(updateEntrantRequest)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Results should contain entry");
        assertEquals(0, response.getErrors().size(), "Errors should be empty");

        idsToDelete.add(response.getResults().get(0).getId());
    }
}
