package com.ziqni.admin.sdk.api;

import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.data.LoadInstantWinsData;
import com.ziqni.admin.sdk.data.LoadRewardsData;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import org.junit.jupiter.api.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class InstantWinsApiTest implements tests.utils.CompleteableFutureTestWrapper {
    private static final Logger logger = LoggerFactory.getLogger(TransformersApiTest.class);

    private final InstantWinsApiWs api;

    private final LoadInstantWinsData loadTestData;
    private final LoadRewardsData loadRewardsData;

    private String rewardId;

    private List<String> idsToDelete = new ArrayList<>();

    public InstantWinsApiTest() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getInstantWinsApi();
        this.loadTestData = new LoadInstantWinsData();
        this.loadRewardsData = new LoadRewardsData();
    }

    //    @BeforeAll
    public void setUp() throws ApiException {
        //nothing to initialise here
        rewardId = loadRewardsData
                .createTestData(loadRewardsData.getCreateRequestAsList(1,"","",""))
                .getResults()
                .get(0)
                .getId();
    }

    //    @AfterAll
    public void cleanUp() throws ApiException, InterruptedException {
        try {
            Thread.sleep(5000);
            loadTestData.deleteTestData(idsToDelete);
        } catch (ApiException e) {
            logger.error("error", e.getCause());
        }
    }

    @Test
    @Order(1)
    public void createInstantWinOkTest() throws ApiException {

        var request = loadTestData.getCreateRequest(rewardId);
        var response = $(api.createInstantWins(loadTestData.getCreateRequestAsList(request)));
        var id = response.getResults().get(0).getId();

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());

        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        idsToDelete.add(id);
    }

    @Test
    @Order(2)
    public void getSingleInstantWinOkTest() throws ApiException {
        var request = loadTestData.getCreateRequest(rewardId);
        var requestList = loadTestData.getCreateRequestAsList(request);
        var createResponse = loadTestData.createTestData(requestList);
        var id = createResponse.getResults().get(0).getId();

        final var response = $(api.getInstantWins( List.of(id) , 1, 0));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");
        assertEquals(1, response.getResults().size(), "Should has single result");

        final var instantWin = response.getResults().get(0);
        assertEquals(id, instantWin.getId(), "Found id should be equal to requested");
//        assertEquals(request.getName(), transformer.getName(), "Found name should be equal to created previously");
//        assertEquals(request.getSource(), transformer.getSource(), "Found source should be equal to created previously");
//        assertEquals(request.getSourceLanguage(), transformer.getSourceLanguage(), "Found sourceLanguage should be equal to created previously");
//
//        idsToDelete.add(id);

    }

    @Test
    @Order(2)
    public void getSingleInstantWinByQueryOkTest() throws ApiException, InterruptedException {
        var request = loadTestData.getCreateRequest(rewardId);
        var createResponse = loadTestData.createTestData(loadTestData.getCreateRequestAsList(request));

        var id = createResponse.getResults().get(0).getId();

        Thread.sleep(5000);

        QueryRequest given = new QueryRequest()
                .addShouldItem(new QueryMultiple().queryField("name").queryValues(List.of(request.getName())))
                .shouldMatch(1);

        final var response = $(api.getInstantWinsByQuery( given));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");
        assertFalse(response.getResults().isEmpty(), "Should has single result");

        final var instantWin = response.getResults().get(0);
        assertEquals(id, instantWin.getId(), "Found id should be equal to requested");
        Assertions.assertEquals(request.getName(), instantWin.getName(), "Found name should be equal to created previously");
//        Assertions.assertEquals(request.instantWin(), instantWin.getSource(), "Found source should be equal to created previously");
//        Assertions.assertEquals(request.getSourceLanguage(), instantWin.getSourceLanguage(), "Found sourceLanguage should be equal to created previously");

        idsToDelete.add(id);
    }

    @Test
    @Order(3)
    public void updateInstantWinsTestOk() throws ApiException {
        var request = loadTestData.getCreateRequest(rewardId);
        var createResponse = loadTestData.createTestData(loadTestData.getCreateRequestAsList(request));

        var id = createResponse.getResults().get(0).getId();

        String givenUpdateName = "Test_update_name";

        final var body = new UpdateInstantWinRequest()
                .id(id)
                .name(givenUpdateName);

        ModelApiResponse response = $(api.updateInstantWins(List.of(body)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain updated entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        String updatedId = response.getResults().get(0).getId();


        List<String> ids = List.of(updatedId);
        Integer limit = 1;
        Integer skip = 0;
        final var updated = $(api.getInstantWins( ids, limit, skip));

        assertNotNull(updated);
        assertNotNull(updated.getResults());
        assertNotNull(updated.getErrors());
        assertTrue(updated.getErrors().isEmpty(), "Should have no errors");
        assertEquals(limit, updated.getResults().size(), "Should has single result");

        final var instantWin = updated.getResults().get(0);
        assertEquals(updatedId, instantWin.getId(), "Found id should be equal to requested");
        assertEquals(givenUpdateName, instantWin.getName(), "Found name should be equal to provided for update");
//        Assertions.assertEquals(request.getSource(), transformer.getSource(), "Found source should be equal to provided for update");
//        Assertions.assertEquals(request.getSourceLanguage(), transformer.getSourceLanguage(), "Found sourceLanguage should be equal to created previously");

        idsToDelete.add(id);
    }

    @Test
    @Order(5)
    public void updateInstantWinsWithoutNameReturnOkTest() throws ApiException {
        var request = loadTestData.getCreateRequest(rewardId);
        var createResponse = loadTestData.createTestData(loadTestData.getCreateRequestAsList(request));

        var id = createResponse.getResults().get(0).getId();

        final var given = new UpdateInstantWinRequest()
                .id(id)
                .name(null);

        ModelApiResponse response = $(api.updateInstantWins(List.of(given)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Results should be empty");
        assertEquals(0, response.getErrors().size(), "Errors should contain entry");

        idsToDelete.add(id);
    }

    @Test
    @Order(6)
    public void updateInstantWinWithoutIdReturnErrorTest() throws ApiException {
        final var given = new UpdateInstantWinRequest()
                .id(null);

        ModelApiResponse response = $(api.updateInstantWins(List.of(given)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    @Order(9)
    public void updateInstantWinsWithNameLongerThan100ReturnErrorTest() throws ApiException {
        var request = loadTestData.getCreateRequest(rewardId);
        var createResponse = loadTestData.createTestData(loadTestData.getCreateRequestAsList(request));
        var id = createResponse.getResults().get(0).getId();

        final var given = new UpdateInstantWinRequest()
                .id(id)
                .name("x".repeat(501));

        ModelApiResponse response = $(api.updateInstantWins(List.of(given)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");

        idsToDelete.add(id);
    }

    @Test
    @Order(10)
    public void deleteInstantWinOkTest() throws ApiException, InterruptedException {
        var request = loadTestData.getCreateRequest(rewardId);
        var createResponse = loadTestData.createTestData(loadTestData.getCreateRequestAsList(request));
        var id = createResponse.getResults().get(0).getId();

        Thread.sleep(5000);

        ModelApiResponse response = $(api.deleteInstantWins(List.of(id)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getMeta().getResultCount(), "Results should contain entry");
        assertEquals(0, response.getErrors().size(), "Errors should be empty");
    }

    @Test
    public void deleteInstantWinWithIncorrectIdReturnErrorTest() throws ApiException {
        List<String> id = List.of("Some_incorect_id");
        ModelApiResponse response = $(api.deleteInstantWins( id));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createInstantWinWithoutNameReturnErrorTest() throws ApiException {
        var request = loadTestData.getCreateRequest(rewardId)
                .name(null);

        ModelApiResponse response = $(api.createInstantWins(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createInstantWinWithoutTypeReturnErrorTest() throws ApiException {
        var request = loadTestData.getCreateRequest(rewardId)
                .instantWinType(null);

        ModelApiResponse response = $(api.createInstantWins(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void getInstantWinsMultipleIdsReturnOkTest() throws ApiException {

        var numberOfItems = 2;
        var createResponse = loadTestData.createTestData(loadTestData.getCreateRequestAsList(numberOfItems, rewardId));

        List<String> givenIds = createResponse.getResults().stream().map(Result::getId).collect(Collectors.toList());

        final var response = $(api.getInstantWins( givenIds, numberOfItems, 0));

        assertNotNull(response);
        assertNotNull(response.getErrors());
        assertNotNull(response.getResults());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");
        assertEquals(givenIds.size(), response.getResults().size(), "Should have single result");

        List<String> foundIds = response.getResults()
                .stream()
                .map(InstantWin::getId)
                .collect(Collectors.toList());

        assertTrue(foundIds.containsAll(givenIds), "Found id should be equal to requested");

        idsToDelete.addAll(givenIds);
    }

    @Test
    public void getInstantWinsBlankIdReturnOkTest() throws ApiException {
        var request = loadTestData.getCreateRequest(rewardId);
        var requestList = loadTestData.getCreateRequestAsList(request);
        var createResponse = loadTestData.createTestData(requestList);
        var id = createResponse.getResults().get(0).getId();

        final var response = $(api.getInstantWins(List.of(""), 1, 0));

        assertNotNull(response);
        assertNotNull(response.getErrors());
        assertNotNull(response.getResults());
        assertTrue(response.getErrors().isEmpty(), "Should have an error");
        assertTrue(!response.getResults().isEmpty(), "Should have some result");

        idsToDelete.add(id);

    }

    @Test
    public void getInstantWinsMultipleIdsOneMalformedReturnErrorTest() throws ApiException {
        var numberOfItems = 2;
        var createResponse = loadTestData.createTestData(loadTestData.getCreateRequestAsList(numberOfItems, rewardId));

        List<String> givenIds = createResponse.getResults().stream().map(Result::getId).collect(Collectors.toList());

        var incorrectId = givenIds.get(0).toUpperCase();
        givenIds.add(incorrectId);

        final var response = $(api.getInstantWins( givenIds, givenIds.size(), 0));

        assertNotNull(response);
        assertNotNull(response.getErrors());
        assertNotNull(response.getResults());
        assertEquals(0, response.getErrors().size(), "Should have single error");
        assertEquals(numberOfItems, response.getResults().size(), "Should have requested valid results");

        List<String> foundIds = response.getResults()
                .stream()
                .map(InstantWin::getId)
                .collect(Collectors.toList());

        assertTrue(givenIds.containsAll(foundIds), "Found id should be equal to requested");

        givenIds.remove(incorrectId);

        idsToDelete.addAll(givenIds);
    }

    @Test
    @Disabled //Enable it after partial responses are implemented on core
    public void getInstantWinsMultipleIdsOneBlankReturnErrorTest() throws ApiException {
        var numberOfItems = 2;
        var createResponse = loadTestData.createTestData(loadTestData.getCreateRequestAsList(numberOfItems, rewardId));

        List<String> givenIds = createResponse.getResults().stream().map(Result::getId).collect(Collectors.toList());

        var incorrectId = "";
        givenIds.add(incorrectId);

        final var response = $(api.getInstantWins( givenIds, givenIds.size(), 0));

        assertNotNull(response);
        assertNotNull(response.getErrors());
        assertNotNull(response.getResults());
        assertTrue(response.getErrors().isEmpty(), "Should have errors");
        assertEquals(numberOfItems, response.getResults().size(), "Should have requested valid results");

        List<String> foundIds = response.getResults()
                .stream()
                .map(InstantWin::getId)
                .collect(Collectors.toList());

        assertTrue(givenIds.containsAll(foundIds), "Found id should be equal to requested");

        givenIds.remove(incorrectId);

        idsToDelete.addAll(givenIds);

    }

    @Test
    public void getInstantWinsIdWithWhitespaceBetweenReturnErrorTest() throws ApiException {
        var request = loadTestData.getCreateRequest(rewardId);
        var response = $(api.createInstantWins(loadTestData.getCreateRequestAsList(request)));
        var id = response.getResults().get(0).getId();

        var incorrectId = id.substring(0, id.length() / 2).concat(" ").concat(id.substring(id.length() / 2));

        final var getResponse = $(api.getInstantWins( List.of(incorrectId), 1, 0));

        assertNotNull(getResponse);
        assertNotNull(getResponse.getResults());
        assertNotNull(getResponse.getErrors());
        Assertions.assertFalse(getResponse.getErrors().isEmpty(), "Should have error");
        assertTrue(getResponse.getResults().isEmpty(), "Should not return result");

        idsToDelete.add(id);
    }

    @Test
    public void deleteInstantWinByQueryOkTest() throws ApiException, InterruptedException {
        final var given = new CreateInstantWinRequest()
                .name("test_name_" + UUID.randomUUID().toString());
        ModelApiResponse createdGiven = $(api.createInstantWins(List.of(given)));
        assertNotNull(createdGiven);
        assertNotNull(createdGiven.getResults());
        assertEquals(1, createdGiven.getResults().size(), "Should contain created entity");
        String givenId = createdGiven.getResults().get(0).getId();
        assertNotNull(createdGiven.getResults().get(0).getId(), "Created entity should has id");

        Thread.sleep(5000);

        QueryRequest givenQuery = new QueryRequest()
                .addShouldItem(new QueryMultiple().queryField("id").queryValues(List.of(givenId)))
                .shouldMatch(1);
        ModelApiResponse response = $(api.deleteInstantWinsByQuery( givenQuery));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getMeta().getResultCount(), "Results should contain entry");
        assertEquals(0, response.getErrors().size(), "Errors should be empty");
    }
}
