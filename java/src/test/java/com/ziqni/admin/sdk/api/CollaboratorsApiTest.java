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

import com.ziqni.admin.sdk.data.LoadCollaboratorsData;
import com.ziqni.admin.sdk.data.LoadSpacesData;
import com.ziqni.admin.sdk.data.LoadUsersData;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.model.*;
import org.junit.jupiter.api.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


/**
 * API tests for CollaboratorsApi
 */
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class CollaboratorsApiTest implements tests.utils.CompleteableFutureTestWrapper{

    private static final Logger logger = LoggerFactory.getLogger(CollaboratorsApiTest.class);

    private final CollaboratorsApiWs api;
    private LoadCollaboratorsData loadCollaboratorsData;
    private LoadSpacesData loadSpacesData;
    private LoadUsersData loadUsersData;


    private final List<String> accountIdsToDelete = new ArrayList<>();
    private final List<String> userIdsToDelete = new ArrayList<>();
    private final List<String> emailsToDelete = new ArrayList<>();
    private final List<User> users = new ArrayList<>();
//    private CreateUserRequest userRequest;
//    private CreateUserRequest userRequest1;
//    private String email="test_-191375275@gmail.com";
    private  String email2="test_-1248724276@gmail.com";
    private String email3="test_1043672663@gmail.com";
//    private String email="test_625465856@gmail.com";
    private String email = "given@ziqni.com";

    public CollaboratorsApiTest() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getCollaboratorsApi();

        this.loadSpacesData = new LoadSpacesData();
        this.loadCollaboratorsData = new LoadCollaboratorsData();
        this.loadUsersData = new LoadUsersData();

    }

    @BeforeAll
    public void setUp() throws ApiException {
        //fixme - add user creation and account creation; currently being done via core api
       // userRequest = loadUsersData.getCreateRequest();
        //var userId = loadUsersData.createTestData(userRequest).getResults().get(0).getId();

        //userIdsToDelete.add(userId);

        //userRequest1 = loadUsersData.getCreateRequest();
        //var userId1 = loadUsersData.createTestData(userRequest1).getResults().get(0).getId();

        //userIdsToDelete.add(userId1);
    }

    @AfterAll
    public void cleanUp() throws ApiException {
      //  try {
      //      loadCollaboratorsData.deleteTestData(emailsToDelete);

      //  } catch (ApiException ex) {
        //    ex.printStackTrace();
      //  }
    }


    @Test
    @Order(1)
    public void createCollaboratorsReturnOkTest() throws ApiException {

        final var createRequest = loadCollaboratorsData.getCreateRequest().email(email);

        ModelApiResponse response = $(api.createCollaborators(List.of(createRequest)));
        logger.info(response.toString());
        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getExternalReference(), "Created entity should have ExternalReference");

        emailsToDelete.add(createRequest.getEmail());
    }

    @Test
    @Order(2)
    public void getCollaboratorsReturnOkTest() throws ApiException {
        final var createRequest = loadCollaboratorsData.getCreateRequest().email("zq-test-acc-1@ziqni.com");
        loadCollaboratorsData.createTestData(createRequest);
        Integer limit = 1;
        Integer skip = 0;
        CollaboratorResponse response = $(api.getCollaborators(List.of("zq-test-acc-1@ziqni.com"), limit, skip));
        logger.info(response.toString());
        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");

        assertEquals(response.getResults().size(), 1, "Result count should match limit");

        emailsToDelete.add(createRequest.getEmail());
    }

    @Test
    @Order(3)
    public void getCollaboratorsByIdReturnOkTest() throws ApiException {
        final var createRequest = loadCollaboratorsData.getCreateRequest().email(email);
        final var createResponse = loadCollaboratorsData.createTestData(createRequest);
        final var email = createResponse.getResults().get(0).getExternalReference();
        Integer limit = 1;
        Integer skip = 0;
        CollaboratorResponse response = $(api.getCollaborators(List.of(email), limit, skip));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");
        assertEquals(1, response.getResults().size(), "Should has single result");

        Collaborator collaborator = response.getResults().get(0);

        assertEquals(email, collaborator.getEmail(), "Found id should be equal to requested");

        emailsToDelete.add(createRequest.getEmail());
    }

    @Test
    @Order(4)
    @Disabled //fixme enable after validation is added in core
    public void createCollaboratorsWithDuplicatedEmailReturnErrorTest() throws ApiException, InterruptedException {
        final var createRequest = loadCollaboratorsData.getCreateRequest().email(email);
        final var createResponse = loadCollaboratorsData.createTestData(createRequest);
        final var id = createResponse.getResults().get(0).getId();

        Thread.sleep(5000);

        Integer limit = 1;
        Integer skip = 0;
        CollaboratorResponse collaboratorResponse = $(api.getCollaborators(List.of(email), limit, skip));
        final var request = loadCollaboratorsData.getCreateRequest().email(collaboratorResponse.getResults().get(0).getEmail());

        ModelApiResponse response = $(api.createCollaborators(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Should not contain created entity");
        assertEquals(1, response.getErrors().size(), "Should contain created error");

      //  emailsToDelete.add(createRequest.getEmail());

    }

    @Test
    @Order(5)
    @Disabled //fixme enable after validation is added in core
    public void createCollaboratorsWithEmailNotInUsersReturnErrorTest() throws ApiException {
        final var createRequest = loadCollaboratorsData.getCreateRequest().email("notExistingInUsersEmail@example.mock");

        ModelApiResponse response = $(api.createCollaborators(List.of(createRequest)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Should not contain created entity");
        assertEquals(1, response.getErrors().size(), "Should contain created error");
    }

    @Test
    @Order(6)
    public void updateCollaboratorsAddRolesTest() throws ApiException {
        final var createRequest = loadCollaboratorsData.getCreateRequest().email(email);
        final var createResponse = loadCollaboratorsData.createTestData(createRequest);
        final var email = createResponse.getResults().get(0).getExternalReference();

        final var roleToUpdate = "AdminSpaces";
        UpdateCollaboratorRequest updateCollaboratorRequest = new UpdateCollaboratorRequest()
                .email(email)
                .addAddRolesItem(roleToUpdate);
        ModelApiResponse updated = $(api.updateCollaborators(List.of(updateCollaboratorRequest)));

        assertNotNull(updated);
        assertNotNull(updated.getResults());
        assertNotNull(updated.getErrors());
        assertEquals(1, updated.getResults().size(), "Should contain updated entity");
        assertNotNull(updated.getResults().get(0).getExternalReference(), "Created entity should have email");

        String updatedId = updated.getResults().get(0).getId();
        Integer limit = 1;
        Integer skip = 0;
        CollaboratorResponse response = $(api.getCollaborators(List.of(email), limit, skip));

        assertNotNull(response);
        assertNotNull(response.getResults());

        final var roles = response.getResults().get(0).getRoles();
        assertTrue(roles.contains(roleToUpdate));
        assertNotNull(response.getErrors());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");
        assertEquals(1, response.getResults().size(), "Should has single result");

        Collaborator collaborator = response.getResults().get(0);

        assertEquals(email, collaborator.getEmail(), "Found email should be equal to requested");

        emailsToDelete.add(createRequest.getEmail());
    }

    @Test
    @Order(6)
    public void updateCollaboratorsRemoveRolesTest() throws ApiException {
        final var createRequest = loadCollaboratorsData.getCreateRequest().email(email);
        final var createResponse = loadCollaboratorsData.createTestData(createRequest);
        final var email = createResponse.getResults().get(0).getExternalReference();

        final var roleToUpdate = "AdminConsumer";
        UpdateCollaboratorRequest updateCollaboratorRequest = new UpdateCollaboratorRequest()
                .email(email)
                .addRemoveRolesItem(roleToUpdate);
        ModelApiResponse updated = $(api.updateCollaborators(List.of(updateCollaboratorRequest)));

        assertNotNull(updated);
        assertNotNull(updated.getResults());
        assertNotNull(updated.getErrors());
        assertEquals(1, updated.getResults().size(), "Should contain updated entity");
        assertNotNull(updated.getResults().get(0).getExternalReference(), "Created entity should have email");

        String updatedId = updated.getResults().get(0).getId();
        Integer limit = 1;
        Integer skip = 0;
        CollaboratorResponse response = $(api.getCollaborators(List.of(email), limit, skip));

        assertNotNull(response);
        assertNotNull(response.getResults());

        final var roles = response.getResults().get(0).getRoles();
        logger.info(""+roles.size());
        assertTrue(!roles.contains(roleToUpdate));
        assertNotNull(response.getErrors());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");
        assertEquals(1, response.getResults().size(), "Should has single result");

        Collaborator collaborator = response.getResults().get(0);

        assertEquals(email, collaborator.getEmail(), "Found email should be equal to requested");

        emailsToDelete.add(createRequest.getEmail());
    }

//    @Test
//    @Order(7)
//    public void deleteCollaboratorsByEmailTest() throws ApiException {
//        final var createRequest = loadCollaboratorsData.getCreateRequest().email(email);
//        final var createResponse = loadCollaboratorsData.createTestData(createRequest);
//        final var id = createResponse.getResults().get(0).getId();
//
//        ModelApiResponse response = api.deleteCollaborators(List.of(email));
//
//        assertNotNull(response);
//        assertNotNull(response.getResults());
//        assertNotNull(response.getErrors());
//        assertEquals(1, response.getResults().size(), "Results should contain entry");
//        assertEquals(0, response.getErrors().size(), "Errors should be empty");
//    }

    @Test
    @Disabled //fixme enable after validation is added in core
    public void createCollaboratorsWithEmptyEmailReturnErrorTest() throws ApiException {
        final var createRequest = loadCollaboratorsData.getCreateRequest().email("");

        ModelApiResponse response = $(api.createCollaborators(List.of(createRequest)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Should not contain created entity");
        assertEquals(1, response.getErrors().size(), "Should contain created error");
    }

    @Test
    @Disabled //fixme enable after validation is added in core
    public void createCollaboratorsWithEmailLongerThan100ReturnErrorTest() throws ApiException {
        final var createRequest = loadCollaboratorsData.getCreateRequest().email("x".repeat(101) + "example.com");

        ModelApiResponse response = $(api.createCollaborators(List.of(createRequest)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Should not contain created entity");
        assertEquals(1, response.getErrors().size(), "Should contain created error");
    }

    @Test
    @Disabled //fixme enable after validation is added in core
    public void createCollaboratorsWithemptyEmailReturnErrorTest() throws ApiException {
        final var createRequest = loadCollaboratorsData.getCreateRequest().email("");

        ModelApiResponse response = $(api.createCollaborators(List.of(createRequest)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Should not contain created entity");
        assertEquals(1, response.getErrors().size(), "Should contain created error");
    }

    @Test
    public void deleteCollaboratorsWithEmailReturnErrorTest() throws ApiException {
//        final var createRequest = loadCollaboratorsData.getCreateRequest().email("");

        ModelApiResponse response = $(api.deleteCollaborators(List.of("GivenTP")));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(0, response.getResults().size(), "Should not contain created entity");
        assertEquals(1, response.getErrors().size(), "Should contain created error");
    }
}
