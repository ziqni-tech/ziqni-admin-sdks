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


package com.ziqni.sdk.admin.api;

import com.ziqni.sdk.admin.ZiqniAdminApiFactory;
import com.ziqni.sdk.admin.ApiException;
import com.ziqni.sdk.admin.data.LoadActionTypesData;
import com.ziqni.sdk.admin.data.LoadEventsData;
import com.ziqni.sdk.admin.data.LoadMembersData;
import com.ziqni.sdk.admin.data.LoadProductsData;
import com.ziqni.sdk.admin.model.*;
import com.ziqni.sdk.admin.data.LoadActionTypesData;
import com.ziqni.sdk.admin.data.LoadEventsData;
import com.ziqni.sdk.admin.data.LoadMembersData;
import com.ziqni.sdk.admin.data.LoadProductsData;
import com.ziqni.sdk.admin.model.*;
import com.ziqni.sdk.admin.util.ApiClientFactoryUtil;
import org.junit.jupiter.api.*;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static com.ziqni.sdk.admin.util.ApiClientFactoryUtil.initApiClientFactory;
import static org.junit.jupiter.api.Assertions.*;


/**
 * API tests for EventsApi
 */
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class EventsApiTest implements tests.utils.CompleteableFutureTestWrapper{

    private final EventsApiWs api;

    private LoadMembersData loadMembersData;
    private LoadProductsData loadProductsData;
    private LoadActionTypesData loadActionTypesData;
    private LoadEventsData loadTestData;

    private List<String> membersToDelete = new ArrayList<>();
    private List<String> productsToDelete = new ArrayList<>();
    private List<String> actionTypesToDelete = new ArrayList<>();

    private String memberRefId;
    private String entityRefId;
    private String action;

    public EventsApiTest() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory();
        this.api = ZiqniAdminApiFactory.getEventsApi();
        this.loadTestData = new LoadEventsData();
        this.loadMembersData = new LoadMembersData();
        this.loadProductsData = new LoadProductsData();
        this.loadActionTypesData = new LoadActionTypesData();
    }

    @BeforeAll
    public void setUp() {
        try {
            // Members set up
            var memberRequest = loadMembersData.getCreateRequest();
            var memberResponse = loadMembersData.createTestData(loadMembersData.getCreateRequestAsList(memberRequest));
            var memberInfo = memberResponse.getResults().get(0);
            memberRefId = memberInfo.getExternalReference();

            // Products set up
            var productRequest = loadProductsData.getCreateRequest(null);
            var productResponse = loadProductsData.createTestData(loadProductsData.getCreateRequestAsList(productRequest));
            var productInfo = productResponse.getResults().get(0);
            entityRefId = productInfo.getExternalReference();

            // Actions
            var actionTypesRequest = loadActionTypesData.getCreateRequest();
            var actionTypesResponse = loadActionTypesData.createTestData(loadActionTypesData.getCreateRequestAsList(actionTypesRequest));
            var actionTypesInfo = actionTypesResponse.getResults().get(0);
            action = actionTypesInfo.getExternalReference();

            // Clean up
            membersToDelete.add(memberInfo.getId());
            productsToDelete.add(productInfo.getId());
            actionTypesToDelete.add(actionTypesInfo.getId());

        } catch (ApiException e) {
            e.printStackTrace();
        }
    }

    // There is no Delete method exposed to achievements, competitions, contests and events.
    // Mark the states of these resources as cancelled and clean them up later on.

    @AfterAll
    public void cleanUp() {
        try {
            Thread.sleep(5000);

            loadMembersData.deleteTestData(membersToDelete);
            loadProductsData.deleteTestData(productsToDelete);
            loadActionTypesData.deleteTestData(actionTypesToDelete);
        } catch (ApiException | InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Test
    @Order(1)
    public void createEventReturnOkTest() throws ApiException {

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId);
        request.setMemberRefId("1sbi99kcd0oehbgokupsxnom");
        request.setAction("1win_multiplier12nom");

        request.setSourceValue(4.0);
        request.setBatchId(null);
        request.setEntityRefId("1123mov2312nom");
        request.setCustomFields(Map.of("11223344nom","12222222222222222"));


        var response = $(api.createEvents(loadTestData.getCreateRequestAsList(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");
    }

    @Test
    @Order(20)
    public void getEventSingleIdReturnOkTest() throws ApiException, InterruptedException {

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId);
        var requestList = loadTestData.getCreateRequestAsList(request);
        var createResponse = loadTestData.createTestData(requestList);
        var id = createResponse.getResults().get(0).getId();

        Thread.sleep(5000);

        EventResponse response = $(api.getEvents(List.of(id), 1, 0));

        if(response.getResults().isEmpty()) {
            Thread.sleep(5000);
            response = $(api.getEvents(List.of(id), 1, 0));
        }

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");
        assertEquals(1, response.getResults().size(), "Should has single result");

        Event item = response.getResults().get(0);

        assertEquals(id, item.getId(), "Found id should be equal to requested");
        assertEquals(action, item.getAction(), "Found action should be -" + action);
        assertEquals(request.getSourceValue(), item.getSourceValue(), "Found sourceValue should be -" + request.getSourceValue());
        assertNotNull(item.getTransactionTimestamp(), "Found transactionTimestamp should not be null");
        assertNotNull(item.getBatchId(), "Found batchId should not be null");
        assertNotNull(item.getMetadata(), "Found metadata should not be null");
        assertNull(item.getCustomFields(), "Found customFields should  be null");
        assertNull(item.getTags(), "Found tags should not be null");
    }

    @Test
    public void createEventWithoutMemberRefIdReturnErrorTest() throws ApiException {

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId)
                .memberRefId(null);

        ModelApiResponse response = $(api.createEvents(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createEventWithMemberRefIdLengthMoreThan200ReturnErrorTest() throws ApiException {

        String givenMemberRefId = "a".repeat(600);

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId)
                .memberRefId(givenMemberRefId);

        ModelApiResponse response = $(api.createEvents(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createEventWithMemberRefIdNotAllowedCharsReturnErrorTest() throws ApiException {

        String givenMemberRefId = "#%^&" + UUID.randomUUID().toString();

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId)
                .memberRefId(givenMemberRefId);

        ModelApiResponse response = $(api.createEvents(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createEventWithoutActionReturnErrorTest() throws ApiException {

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId)
                .action(null);

        ModelApiResponse response = $(api.createEvents(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createEventWithActionLengthMoreThan100ReturnErrorTest() throws ApiException {

        String givenAction = "a".repeat(70) + UUID.randomUUID().toString();

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId)
                .action(givenAction);

        ModelApiResponse response = $(api.createEvents(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createEventWithActionContainsWhitespaceReturnErrorTest() throws ApiException {

        String givenAction = "a d " + UUID.randomUUID().toString();

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId)
                .action(givenAction);

        ModelApiResponse response = $(api.createEvents(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createEventWithoutEntityRefIdReturnErrorTest() throws ApiException {

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId)
                .entityRefId(null);

        ModelApiResponse response = $(api.createEvents(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createEventWithEventRefIdLengthMoreThan200ReturnErrorTest() throws ApiException {

        String givenEntityRefId = "a".repeat(200) + UUID.randomUUID().toString();

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId)
                .entityRefId(givenEntityRefId);

        ModelApiResponse response = $(api.createEvents(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createEventWithEntityRefIdNotAllowedCharsReturnErrorTest() throws ApiException {

        String givenEntityRefId = "#%^&" + UUID.randomUUID().toString();

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId)
                .entityRefId(givenEntityRefId);

        ModelApiResponse response = $(api.createEvents(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createEventWithoutSourceValueReturnErrorTest() throws ApiException {

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId)
                .sourceValue(null);

        ModelApiResponse response = $(api.createEvents(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createEventWithoutTransactionTimestampReturnErrorTest() throws ApiException {

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId)
                .transactionTimestamp(null);

        ModelApiResponse response = $(api.createEvents(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createEventWithBatchIdWithWhitespacesReturnErrorTest() throws ApiException {

        String givenBatchId = "df dg dg";

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId)
                .batchId(givenBatchId);

        ModelApiResponse response = $(api.createEvents(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }
    @Test
    @Disabled
    public void createEventWithBlankTagsReturnErrorTest() throws ApiException {

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId)
                .tags(List.of(""));

        ModelApiResponse response = $(api.createEvents(List.of(request)));

        assertNotNull(response);
        
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    @Disabled //FixMe - enable after metadata has been implemented
    public void createEventWithWhitespacesInTagsReturnErrorTest() throws ApiException {

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId)
                .tags(List.of("some tag"));

        ModelApiResponse response = $(api.createEvents(List.of(request)));

        assertNotNull(response);
        
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    @Disabled //FixMe - enable after metadata has been implemented
    public void createEventWithTagsLimitMoreThan500ReturnErrorTest() throws ApiException {

        List<String> tags = IntStream.range(0, 501)
                .mapToObj(i -> UUID.randomUUID().toString())
                .collect(Collectors.toList());

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId)
                .tags(tags);

        ModelApiResponse response = $(api.createEvents(List.of(request)));

        assertNotNull(response);
        
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    @Order(20)
    public void getEventNoArgumentsReturnEmptyTest() throws ApiException {
        List<String> id = Collections.emptyList();
        Integer limit = 0;
        Integer skip = 0;

        EventResponse response = $(api.getEvents(id, limit, skip));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertTrue(response.getResults().isEmpty(), "Should have no result");
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");
    }

    @Test
    @Order(20)
    public void getEventNoIdsWithLimitReturnOkTest() throws ApiException {
        List<String> id = Collections.emptyList();
        Integer limit = 1;
        Integer skip = 0;

        EventResponse response = $(api.getEvents(id, limit, skip));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");

        assertEquals(response.getResults().size(), limit, "Result count should match limit");
    }

    @Test
    @Order(20)
    public void getEventMultipleIdsReturnOkTest() throws ApiException {

        EventResponse given = $(api.getEvents(Collections.emptyList(), 2, 0));
        assertNotNull(given);
        assertNotNull(given.getResults());
        Assertions.assertFalse(given.getResults().isEmpty(), "Test database should contain test data");
        assertEquals(2, given.getResults().size());

        List<String> givenIds = given.getResults()
                .stream()
                .map(Event::getId)
                .collect(Collectors.toList());

        List<String> ids = List.copyOf(givenIds);
        Integer limit = ids.size();
        Integer skip = 0;
        EventResponse response = $(api.getEvents(ids, limit, skip));

        assertNotNull(response);
        assertNotNull(response.getErrors());
        assertNotNull(response.getResults());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");
        assertEquals(givenIds.size(), response.getResults().size(), "Should have single result");

        List<String> foundIds = response.getResults()
                .stream()
                .map(Event::getId)
                .collect(Collectors.toList());

        assertTrue(foundIds.containsAll(givenIds), "Found id should be equal to requested");
    }

    @Test
    public void getEventMultipleIdsOneMalformedReturnErrorTest() throws ApiException {

        Integer givenLimit = 2;

        EventResponse given = $(api.getEvents(Collections.emptyList(), givenLimit, 0));
        assertNotNull(given);
        assertNotNull(given.getResults());
        Assertions.assertFalse(given.getResults().isEmpty(), "Test database should contain test data");
        assertEquals(givenLimit, given.getResults().size());

        List<String> givenIds = given.getResults()
                .stream()
                .limit(givenLimit - 1)
                .map(Event::getId)
                .collect(Collectors.toList());

        var incorrectId = givenIds.get(0).toUpperCase();

        givenIds.add(incorrectId);

        List<String> ids = List.copyOf(givenIds);
        Integer limit = ids.size();
        Integer skip = 0;
        EventResponse response = $(api.getEvents(ids, limit, skip));

        assertNotNull(response);
        assertNotNull(response.getErrors());
        assertNotNull(response.getResults());
        assertTrue(response.getErrors().isEmpty(), "Should have errors");
        assertEquals(givenIds.size() - 1, response.getResults().size(), "Should have requested valid results");

        List<String> foundIds = response.getResults()
                .stream()
                .map(Event::getId)
                .collect(Collectors.toList());

        assertTrue(givenIds.containsAll(foundIds), "Found id should be equal to requested");
    }

    @Test
    public void getEventMultipleIdsOneBlankReturnErrorTest() throws ApiException {

        Integer givenLimit = 2;

        EventResponse given = $(api.getEvents(Collections.emptyList(), givenLimit, 0));
        assertNotNull(given);
        assertNotNull(given.getResults());
        Assertions.assertFalse(given.getResults().isEmpty(), "Test database should contain test data");
        assertEquals(givenLimit, given.getResults().size());

        List<String> givenIds = given.getResults()
                .stream()
                .limit(givenLimit - 1)
                .map(Event::getId)
                .collect(Collectors.toList());

        givenIds.add("");

        List<String> ids = List.copyOf(givenIds);
        Integer limit = ids.size();
        Integer skip = 0;
        EventResponse response = $(api.getEvents(ids, limit, skip));

        assertNotNull(response);
        assertNotNull(response.getErrors());
        assertNotNull(response.getResults());
        assertFalse(response.getErrors().isEmpty(), "Should have no errors");
        assertEquals(1, response.getErrors().size(), "Should have single result");
    }

    @Test
    public void getEventWithIdWhitespaceBetweenReturnErrorTest() throws ApiException {

        EventResponse given = $(api.getEvents(Collections.emptyList(), 1, 0));
        assertNotNull(given, "Test database should contain test data");
        assertNotNull(given.getResults());
        Assertions.assertFalse(given.getResults().isEmpty(), "Test database should contain test data");

        List<String> givenIdsWithSpaceBetween = given.getResults()
                .stream()
                .limit(1)
                .map(Event::getId)
                .map(id -> id.substring(0, id.length() / 2).concat(" ").concat(id.substring(id.length() / 2)))
                .collect(Collectors.toList());

        List<String> ids = List.copyOf(givenIdsWithSpaceBetween);
        Integer limit = ids.size();
        Integer skip = 0;
        EventResponse response = $(api.getEvents(ids, limit, skip));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        Assertions.assertFalse(response.getErrors().isEmpty(), "Should have error");
        assertEquals(givenIdsWithSpaceBetween.size(), response.getErrors().size(), "Should have single error");
        assertTrue(response.getResults().isEmpty(), "Should not return result");
    }

    @Test
    public void getEventByQueryWithSingleIdReturnOkTest() throws ApiException, InterruptedException {

        var request = loadTestData.getCreateRequest(action, memberRefId, entityRefId);
        var requestList = loadTestData.getCreateRequestAsList(request);
        var createResponse = loadTestData.createTestData(requestList);
        var id = createResponse.getResults().get(0).getId();

        Thread.sleep(5000);

        QueryRequest givenQuery = new QueryRequest()
                .addShouldItem(new QueryMultiple().queryField("id").queryValues(List.of(id)))
                .shouldMatch(1);

        EventResponse response = $(api.getEventsByQuery( givenQuery));

        if(response.getResults().isEmpty()) {
            Thread.sleep(5000);
            response = $(api.getEventsByQuery( givenQuery));
        }

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Results should contain entry");
        assertEquals(0, response.getErrors().size(), "Errors should be empty");
    }
}
