package com.ziqni.admin.sdk.api;

import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import org.junit.jupiter.api.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.junit.jupiter.api.Assertions.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class LeaderboardApiTest implements tests.utils.CompleteableFutureTestWrapper{

    private static final Logger logger = LoggerFactory.getLogger(LanguagesApiTest.class);
    private final LeaderboardApiWs api;

    public LeaderboardApiTest() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory();
        this.api = ZiqniAdminApiFactory.getLeaderboardApi();

    }

    @Test
    @Order(2)
    public void getLeaderboardByIdReturnOkTest() throws ApiException {
        final var competitionId = "ln8yUoQBSPM0WYwFnk04";
        final var limit = 50;
        final var skip = 0;
        final var response = $(api.getLeaderboardById(competitionId, limit, skip));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");
        assertEquals(limit, response.getResults().size(), "Should has single result");
        assertTrue(response.getResults().size() > 0);
    }
}
