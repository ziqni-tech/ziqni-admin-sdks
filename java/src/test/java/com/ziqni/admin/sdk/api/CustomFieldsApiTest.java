/*
 * Copyright (c) 2024. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */

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

import com.ziqni.admin.sdk.data.LoadCustomFieldsData;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.model.*;
import org.junit.jupiter.api.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;


/**
 * API tests for CustomFieldsApi
 */

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class CustomFieldsApiTest implements tests.utils.CompleteableFutureTestWrapper{

    private static final Logger logger = LoggerFactory.getLogger(CustomFieldsApiTest.class);

    private CustomFieldsApiWs api;
    private LoadCustomFieldsData loadData;

    List<String> idsToDelete = new ArrayList<>();

   public CustomFieldsApiTest() throws Exception {
       ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
       this.api = ApiClientFactoryUtil.factory.getCustomFieldsApi();

       this.loadData = new LoadCustomFieldsData();
   }

    @BeforeAll
    public void setUp() {
        //Nothing to initialise
    }

    @AfterAll
    public void cleanUp() {
        try{
            Thread.sleep(5000);
            loadData.deleteTestData(idsToDelete);
        }catch (ApiException | InterruptedException e){
            logger.error("error", e.getCause());
        }
    }

    @Test
    @Order(1)
    public void createCustomFieldsReturnOkTest() throws ApiException {

        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);

        ModelApiResponse response = $(api.createCustomFields(createRequestList));
        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        idsToDelete.add(response.getResults().get(0).getId());
    }

    @Test
    @Order(2)
    public void getCustomFieldsSingleIdReturnOkTest() throws ApiException, InterruptedException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);
        final ModelApiResponse createResponse = loadData.createTestData(createRequestList);
        final var id = createResponse.getResults().get(0).getId();
        List<String> ids = List.of(id);
        Integer limit = 1;
        Integer skip = 0;

        Thread.sleep(5000);

        CustomFieldResponse response = $(api.getCustomFields( ids, limit, skip));

        if(response.getResults().size() == 0) {
            Thread.sleep(5000);
            response = $(api.getCustomFields( ids, limit, skip));
        }

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");
        assertEquals(limit, response.getResults().size(), "Should has single result");

        CustomField item = response.getResults().get(0);

        assertEquals(id, item.getId(), "Found id should be equal to requested");

        idsToDelete.add(id);
    }

    @Test
    @Order(3)
    public void createCustomFieldWithDuplicatedKeyReturnErrorTest() throws ApiException, InterruptedException {

        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);
        final var createResponse = loadData.createTestData(createRequestList);

        Thread.sleep(5000);

        ModelApiResponse response = $(api.createCustomFields(createRequestList));
        Thread.sleep(5000);

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");

        idsToDelete.add(createResponse.getResults().get(0).getId());

    }

    @Test
    @Order(4)
    public void updateCustomFieldValidRequestReturnOkTest() throws ApiException, InterruptedException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);
        final var createResponse = loadData.createTestData(createRequestList);
        final var id = createResponse.getResults().get(0).getId();

        Thread.sleep(5000);

        //GIVEN
        String givenDescription = "Test_update_description";

        UpdateCustomFieldRequest given = new UpdateCustomFieldRequest()
                .id(id)
                .description(givenDescription)
//                .appliesTo(AppliesTo.EVENTS)
                .name("Updated name")
                .appliesTo(AppliesTo.ACHIEVEMENT)
                .fieldType(FieldType.Text);

        //WHEN
        ModelApiResponse response = $(api.updateCustomFields(List.of(given)));

        //THAN
        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain updated entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        String updatedId = response.getResults().get(0).getId();

        List<String> ids = List.of(updatedId);
        Integer limit = 1;
        Integer skip = 0;
        CustomFieldResponse rewardTypeResponse = $(api.getCustomFields( ids, limit, skip));

        assertNotNull(rewardTypeResponse);
        assertNotNull(rewardTypeResponse.getResults());
        assertEquals(1, rewardTypeResponse.getResults().size(), "Should contain entity");

        CustomField item = rewardTypeResponse.getResults().get(0);

        assertEquals(id, item.getId(), "Found id should be equal to requested");
        assertNotNull(item.getDescription(), "Found description should be not blank");
        assertEquals(givenDescription, item.getDescription(), "Description should be the same as provided");

        idsToDelete.add(id);
    }

    @Test
    @Order(5)
    public void updateCustomFieldWithoutIdReturnErrorTest() throws ApiException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);
        final var createResponse = loadData.createTestData(createRequestList);
        final var id = createResponse.getResults().get(0).getId();

        UpdateCustomFieldRequest given = new UpdateCustomFieldRequest();

        ModelApiResponse response = $(api.updateCustomFields(List.of(given)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");

        idsToDelete.add(id);
    }

    @Test
    @Order(6)
    @Disabled // enable after we implement partial updates
    public void updateCustomFieldWithoutNameReturnErrorTest() throws ApiException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);
        final var createResponse = loadData.createTestData(createRequestList);
        final var id = createResponse.getResults().get(0).getId();

        UpdateCustomFieldRequest given = new UpdateCustomFieldRequest()
                .id(id)
                .name(null);

        ModelApiResponse response = $(api.updateCustomFields(List.of(given)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");

        idsToDelete.add(id);
    }

    @Test
    @Order(7)
    public void updateCustomFieldWithIncorrectIdIdReturnErrorTest() throws ApiException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);
        final var createResponse = loadData.createTestData(createRequestList);
        final var id = createResponse.getResults().get(0).getId();

        UpdateCustomFieldRequest given = new UpdateCustomFieldRequest()
                .id("some_incorrect_id");

        ModelApiResponse response = $(api.updateCustomFields(List.of(given)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");

        idsToDelete.add(id);
    }

    @Test
    @Order(8)
    @Disabled // enable after we implement partial updates
    public void updateCustomFieldWithoutAppliesToReturnErrorTest() throws ApiException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);
        final var createResponse = loadData.createTestData(createRequestList);
        final var id = createResponse.getResults().get(0).getId();

        UpdateCustomFieldRequest given = new UpdateCustomFieldRequest()
                .id(id)
                .appliesTo(null);

        ModelApiResponse response = $(api.updateCustomFields(List.of(given)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");

        idsToDelete.add(id);
    }

    @Test
    @Order(9)
    @Disabled // enable after we implement partial updates
    public void updateCustomFieldWithoutFieldTypeReturnErrorTest() throws ApiException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);
        final var createResponse = loadData.createTestData(createRequestList);
        final var id = createResponse.getResults().get(0).getId();

        UpdateCustomFieldRequest given = new UpdateCustomFieldRequest()
                .id(id)
                .fieldType(null);

        ModelApiResponse response = $(api.updateCustomFields(List.of(given)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");

        idsToDelete.add(id);
    }

    @Test
    @Order(10)
    public void updateCustomFieldWithNameLongerThan100CharsReturnErrorTest() throws ApiException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);
        final var createResponse = loadData.createTestData(createRequestList);
        final var id = createResponse.getResults().get(0).getId();

        UpdateCustomFieldRequest given = new UpdateCustomFieldRequest()
                .id(id)
                .name("x".repeat(101));

        ModelApiResponse response = $(api.updateCustomFields(List.of(given)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");

        idsToDelete.add(id);
    }

    @Test
    @Order(11)
    public void updateCustomFieldWithDescriptionLongerThan1000CharsReturnErrorTest() throws ApiException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);
        final var createResponse = loadData.createTestData(createRequestList);
        final var id = createResponse.getResults().get(0).getId();

        UpdateCustomFieldRequest given = new UpdateCustomFieldRequest()
                .id(id)
                .description("x".repeat(1001));

        ModelApiResponse response = $(api.updateCustomFields(List.of(given)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");

        idsToDelete.add(id);
    }

    @Test
    @Order(12)
    public void getCustomFieldsByQueryWithSingleIdReturnOkTest() throws ApiException, InterruptedException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);
        final var createResponse = loadData.createTestData(createRequestList);
        final var id = createResponse.getResults().get(0).getId();

        Thread.sleep(1000);

        QueryRequest givenQuery = new QueryRequest()
                .addShouldItem(new QueryMultiple().queryField("id").queryValues(List.of(id)))
                .shouldMatch(1);

        CustomFieldResponse response = $(api.getCustomFieldsByQuery( givenQuery));

        if(response.getMeta().getResultCount() == 0) {
            Thread.sleep(5000);
            response = $(api.getCustomFieldsByQuery( givenQuery));
        }

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Results should contain entry");
        assertEquals(0, response.getErrors().size(), "Errors should be empty");

        idsToDelete.add(id);
    }

    @Test
    @Order(13)
    public void deleteCustomFieldSingleIdReturnOkTest() throws ApiException, InterruptedException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);
        final var createResponse = loadData.createTestData(createRequestList);
        final var id = createResponse.getResults().get(0).getId();

        Thread.sleep(5000);

        List<String> givenIds = List.of(id);

        ModelApiResponse response = $(api.deleteCustomFields( givenIds));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(givenIds.size(), response.getMeta().getResultCount(), "Results should contain entry");
        assertTrue(response.getErrors().isEmpty(), "Errors should be empty");
    }

    @Test
    public void deleteCustomFieldWithIncorrectIdReturnErrorTest() throws ApiException {

        List<String> givenIds = List.of("some_incorrect_id_for_delete");

        ModelApiResponse response = $(api.deleteCustomFields( givenIds));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createCustomFieldWithoutNameReturnErrorTest() throws ApiException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);
        createRequest.name(null);

        ModelApiResponse response = $(api.createCustomFields(createRequestList));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");

    }

    @Test
    public void createCustomFieldWithNameMoreThan100CharsReturnErrorTest() throws ApiException {

        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT)
                .name("1".repeat(101));
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);

        ModelApiResponse response = $(api.createCustomFields(createRequestList));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");

    }

    @Test
    public void createCustomFieldWithoutKeyReturnErrorTest() throws ApiException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT)
                .key(null);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);

        ModelApiResponse response = $(api.createCustomFields(createRequestList));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createCustomFieldWithKeyMoreThan100CharsReturnErrorTest() throws ApiException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT)
                .key("1".repeat(101));
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);

        ModelApiResponse response = $(api.createCustomFields(createRequestList));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createCustomFieldWithKeyNotAllowedCharsReturnErrorTest() throws ApiException {

        String givenKey = "Test#key-" + UUID.randomUUID().toString();

        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT)
                .key(givenKey);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);

        ModelApiResponse response = $(api.createCustomFields(createRequestList));
        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createCustomFieldWithDescriptionLengthMoreThan1000CharsReturnErrorTest() throws ApiException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT)
                .description("a".repeat(1001));
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);

        ModelApiResponse response = $(api.createCustomFields(createRequestList));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createCustomFieldWithoutFieldTypeReturnErrorTest() throws ApiException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT)
                .fieldType(null);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);

        ModelApiResponse response = $(api.createCustomFields(createRequestList));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void createCustomFieldWithoutAppliedToReturnErrorTest() throws ApiException {

        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT)
                .appliesTo(null);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);

        ModelApiResponse response = $(api.createCustomFields(createRequestList));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Results should be empty");
        assertEquals(1, response.getErrors().size(), "Errors should contain entry");
    }

    @Test
    public void getCustomFieldNoArgumentsReturnEmptyTest() throws ApiException {
        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);
        final var createResponse = loadData.createTestData(createRequestList);
        final var id = createResponse.getResults().get(0).getId();

        List<String> emptyId = Collections.emptyList();
        Integer limit = 0;
        Integer skip = 0;
        CustomFieldResponse response = $(api.getCustomFields( emptyId, limit, skip));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertTrue(response.getResults().isEmpty(), "Should have no result");
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");

        idsToDelete.add(id);
    }

    @Test
    public void getCustomFieldNoIdsWithLimitReturnOkTest() throws ApiException {
        final var createRequestList = loadData.getCreateRequestAsList(3, AppliesTo.EVENT);
        final var createResponse = loadData.createTestData(createRequestList);
        final var ids = createResponse.getResults().stream().map(Result::getId).collect(Collectors.toList());

        Integer limit = 3;
        Integer skip = 0;

        CustomFieldResponse response = $(api.getCustomFields( Collections.emptyList(), limit, skip));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");

        assertEquals(response.getResults().size(), 3, "Result count should match limit");

        idsToDelete.addAll(ids);
    }

    @Test
    public void getCustomFieldMultipleIdsReturnOkTest() throws ApiException {
        final var createRequestList = loadData.getCreateRequestAsList(3, AppliesTo.EVENT);
        final var createResponse = loadData.createTestData(createRequestList);
        final var ids = createResponse.getResults().stream().map(Result::getId).collect(Collectors.toList());

        Integer limit = ids.size();
        Integer skip = 0;
        CustomFieldResponse response = $(api.getCustomFields( ids, limit, skip));

        assertNotNull(response);
        assertNotNull(response.getErrors());
        assertNotNull(response.getResults());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");
        assertEquals(ids.size(), response.getResults().size(), "Should have single result");

        List<String> foundIds = response.getResults()
                .stream()
                .map(CustomField::getId)
                .collect(Collectors.toList());

        assertTrue(ids.containsAll(foundIds), "Found id should be equal to requested");

        idsToDelete.addAll(ids);
    }

    @Test
    public void getCustomFieldSingleBlankIdReturnOkTest() throws ApiException {
        final var createRequestList = loadData.getCreateRequestAsList(3, AppliesTo.EVENT);
        final var createResponse = loadData.createTestData(createRequestList);
        final var id = createResponse.getResults().get(0).getId();

        List<String> ids = List.of("");
        Integer limit = ids.size();
        Integer skip = 0;
        CustomFieldResponse response = $(api.getCustomFields( ids, limit, skip));

        assertNotNull(response);
        assertNotNull(response.getErrors());
        assertNotNull(response.getResults());
        assertEquals(limit, response.getResults().size(), "Should have single result");
        assertTrue(response.getErrors().isEmpty(), "Should have no any error");

        idsToDelete.add(id);
    }

    @Test
    public void getCustomFieldMultipleIdsOneMalformedReturnErrorTest() throws ApiException {

        Integer givenLimit = 3;

        final var createRequestList = loadData.getCreateRequestAsList(givenLimit, AppliesTo.EVENT);
        final var createResponse = loadData.createTestData(createRequestList);
        final var ids = createResponse.getResults().stream().map(Result::getId).collect(Collectors.toList());

        var incorrectId = ids.get(0).toUpperCase();

        ids.add(incorrectId);

        Integer limit = ids.size();
        Integer skip = 0;
        CustomFieldResponse response = $(api.getCustomFields( ids, limit, skip));

        assertNotNull(response);
        assertNotNull(response.getErrors());
        assertNotNull(response.getResults());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");
        assertEquals(ids.size() - 1, response.getResults().size(), "Should have requested valid results");

        List<String> foundIds = response.getResults().stream().map(CustomField::getId).collect(Collectors.toList());

        assertTrue(ids.containsAll(foundIds), "Found id should be equal to requested");

        ids.remove(incorrectId);
        idsToDelete.addAll(ids);
    }

    @Test
    public void getCustomFieldMultipleIdsOneBlankReturnErrorTest() throws ApiException {

        Integer givenLimit = 3;

        final var createRequestList = loadData.getCreateRequestAsList(givenLimit, AppliesTo.EVENT);
        final var createResponse = loadData.createTestData(createRequestList);
        final var ids = createResponse.getResults().stream().map(Result::getId).collect(Collectors.toList());

        var incorrectId = "";
        ids.add(incorrectId);

        Integer limit = ids.size();
        Integer skip = 0;
        CustomFieldResponse response = $(api.getCustomFields( ids, limit, skip));

        assertNotNull(response);
        assertNotNull(response.getErrors());
        assertNotNull(response.getResults());
        Assertions.assertFalse(response.getErrors().isEmpty(), "Should have no errors");
        assertEquals(1, response.getErrors().size(), "Should have single result");

        ids.remove(incorrectId);
        idsToDelete.addAll(ids);
    }

    @Test
    public void getCustomFieldIdWithWhitespaceReturnOkTest() throws ApiException {
        final var createRequestList = loadData.getCreateRequestAsList(1, AppliesTo.EVENT);
        final var createResponse = loadData.createTestData(createRequestList);
        final var givenIdsWithLeadingSpace = createResponse.getResults().stream().limit(1).map(Result::getId)
                .map(" "::concat).collect(Collectors.toList());

        Integer limit = givenIdsWithLeadingSpace.size();
        Integer skip = 0;
        CustomFieldResponse response = $(api.getCustomFields( givenIdsWithLeadingSpace, limit, skip));

        assertNotNull(response);
        assertNotNull(response.getErrors());
        assertNotNull(response.getResults());
        assertTrue(response.getErrors().isEmpty(), "Should have error");
        assertFalse(response.getResults().isEmpty(), "Should not return result");

        idsToDelete.addAll(createResponse.getResults().stream().map(Result::getId).collect(Collectors.toList()));
    }

    @Test
    public void getCustomFieldIdWithWhitespaceBetweenReturnErrorTest() throws ApiException {
        final var createRequestList = loadData.getCreateRequestAsList(1, AppliesTo.EVENT);
        final var createResponse = loadData.createTestData(createRequestList);

        List<String> givenIdsWithSpaceBetween = createResponse.getResults()
                .stream()
                .limit(1)
                .map(Result::getId)
                .map(id -> id.substring(0, id.length() / 2).concat(" ").concat(id.substring(id.length() / 2)))
                .collect(Collectors.toList());

        List<String> ids = List.copyOf(givenIdsWithSpaceBetween);
        Integer limit = ids.size();
        Integer skip = 0;
        CustomFieldResponse response = $(api.getCustomFields( ids, limit, skip));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        Assertions.assertFalse(response.getErrors().isEmpty(), "Should have error");
        assertEquals(givenIdsWithSpaceBetween.size(), response.getErrors().size(), "Should have single error");
        assertTrue(response.getResults().isEmpty(), "Should not return result");

        idsToDelete.addAll(createResponse
                .getResults()
                .stream()
                .map(Result::getId)
                .collect(Collectors.toList()));
    }

    @Test
    public void deleteCustomFieldsByQueryTest() throws ApiException, InterruptedException {

        final var createRequest = loadData.getCreateRequest(AppliesTo.EVENT);
        final var createRequestList = loadData.getCreateRequestAsList(createRequest);
        final var createResponse = loadData.createTestData(createRequestList);
        final var id = createResponse.getResults().get(0).getId();

        Thread.sleep(5000);

        QueryRequest body = new QueryRequest()
                .addShouldItem(new QueryMultiple()
                        .queryField("id")
                        .queryValues(List.of(id)))
                .shouldMatch(1);

        ModelApiResponse deleteResponse = $(api.deleteCustomFieldsByQuery( body));

        assertNotNull(deleteResponse);
        assertNotNull(deleteResponse.getResults());
        assertNotNull(deleteResponse.getErrors());
        assertEquals(1, deleteResponse.getMeta().getResultCount(), "Results should contain entry");
        assertEquals(0, deleteResponse.getErrors().size(), "Errors should be empty");
    }
}
