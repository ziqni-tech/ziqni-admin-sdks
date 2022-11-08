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


import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.data.LoadConnectionsData;
import com.ziqni.admin.sdk.data.LoadCustomFieldsData;
import com.ziqni.admin.sdk.data.LoadTagsData;
import com.ziqni.admin.sdk.data.LoadTransformerData;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import org.apache.commons.collections.CollectionUtils;
import org.junit.jupiter.api.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;
import java.util.stream.Collectors;

import static com.ziqni.admin.sdk.data.LoadConnectionsData.*;
import static org.junit.jupiter.api.Assertions.*;


/**
 * API tests for ConsumersApi
 */

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ConnectionsApiTest implements tests.utils.CompleteableFutureTestWrapper{

    private static final Logger logger = LoggerFactory.getLogger(ConnectionsApiTest.class);

    private ConnectionsApiWs api;
    private LoadConnectionsData loadData;
    private LoadTransformerData loadTransformerData;
    private final LoadTagsData loadTagsData;
    private final LoadCustomFieldsData loadCustomFieldsData;

    private String tagKey;
    private String customFieldKey;

    private List<String> rabbitMqIdsToDelete = new ArrayList<>();
    private List<String> kafkaIdsToDelete = new ArrayList<>();
    private List<String> sqsIdsToDelete = new ArrayList<>();
    private List<String> transformerIdsToDelete = new ArrayList<>();
    List<String> tagIdsToDelete = new ArrayList<>();
    List<String> customFieldIdsToDelete = new ArrayList<>();

    private String transformerId;

    public ConnectionsApiTest() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory();
        this.api = ZiqniAdminApiFactory.getConnectionsApi();
        this.loadData = new LoadConnectionsData();
        this.loadTransformerData = new LoadTransformerData();
        this.loadCustomFieldsData = new LoadCustomFieldsData();
        this.loadTagsData = new LoadTagsData();
    }

    @BeforeAll
    public void setUp() throws ApiException, InterruptedException {
        this.transformerId = loadTransformerData.createTestData(loadTransformerData.getCreateRequestAsList(loadTransformerData.getCreateRequest())).getResults().get(0).getId();

        Thread.sleep(5000);
        transformerIdsToDelete.add(transformerId);
        tagKey = loadTagsData.getModel();
        customFieldKey = loadCustomFieldsData.getModel(customFieldIdsToDelete, AppliesTo.KAFKACONNECTION);

        tagIdsToDelete.add(tagKey);

    }

    @AfterAll
    public void cleanUp() {
        try {
            loadData.deleteRabbitMqTestData(rabbitMqIdsToDelete);
            loadData.deleteKafkaTestData(kafkaIdsToDelete);
            loadData.deleteSqsTestData(sqsIdsToDelete);
            loadTransformerData.deleteTestData(transformerIdsToDelete);
        } catch (ApiException e) {
            logger.error("error", e.getCause());
        }

    }

    @Test
    @Order(1)
    public void createAndUpdateRabbitMQConnectionsReturnOkTest() throws ApiException, InterruptedException {
        final var createRequest = loadData.getCreateRabbitMqRequestAsList(1, transformerId, tagKey);
        ModelApiResponse response = $(api.createConnections(createRequest));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");
        final var id = loadData.createRabbitMqTestData(createRequest).getResults().get(0).getId();

        Thread.sleep(5000);

        final var updateCustomFields = new HashMap<String, Object>();
        final var updatedQueueName = "updated my-rabbit-connection";
        final var updatedPort = 8090;
        final var updatedExchangeType = "updated_Test_Exchange_Type";
        final var updatedExchange = "updated_test_exchange";
        final var updatedRoutingKeys = List.of("0", "key_3", "5");
        final var updatedVirtualHost = "updated_test_host";
        final var updatedUri = List.of("http://rabbit.com.updated", "http://uri.2.updated");
        final var updatedXexpires = 1800000;

        updateCustomFields.put(QUEUE_NAME, updatedQueueName);
        updateCustomFields.put(PORT, updatedPort);
        updateCustomFields.put(EXCHANGE, updatedExchange);
        updateCustomFields.put(EXCHANGE_TYPE, updatedExchangeType);
        updateCustomFields.put(ROUTING_KEYS, updatedRoutingKeys);
        updateCustomFields.put(VIURTUAL_HOST, updatedVirtualHost);
        updateCustomFields.put(URI, updatedUri);
        updateCustomFields.put(X_EXPIRES, updatedXexpires);

        UpdateConnectionRequest given = new UpdateConnectionRequest()
                .id(id)
                .description("Updated rabbitqm description")
                .name("UPDATED_NAME")
                .constraints(Collections.emptyList())
                .customFields(Map.of(customFieldKey, "updated_name"));

        ModelApiResponse updresponse = $(api.updateConnections(List.of(given)));
        assertNotNull(updresponse);
        assertNotNull(updresponse.getResults());
        assertNotNull(updresponse.getErrors());
        assertEquals(1, updresponse.getResults().size(), "Should contain created entity");
        assertNotNull(updresponse.getResults().get(0).getId(), "Created entity should has id");

        Thread.sleep(5000);

        final var givenQuery = new QueryRequest()
                .addMustItem(new QueryMultiple()
                        .queryField("id")
                        .queryValues(List.of(updresponse
                                .getResults()
                                .get(0)
                                .getId())));

        var byQueryResponse = $(api.getConnectionsByQuery(givenQuery));

        assertNotNull(byQueryResponse);
        assertNotNull(byQueryResponse.getResults());
        assertNotNull(byQueryResponse.getErrors());
        assertEquals(1, byQueryResponse.getResults().size(), "Results should be empty");
        assertEquals(0, byQueryResponse.getErrors().size(), "Errors should contain entry");

        final var updatedConnectionCustomFields = byQueryResponse.getResults().get(0).getCustomFields();
        assertEquals(updatedConnectionCustomFields.get(QUEUE_NAME), updatedQueueName);
        assertEquals(updatedConnectionCustomFields.get(PORT), updatedPort);
        assertEquals(updatedConnectionCustomFields.get(EXCHANGE), updatedExchange);
        assertEquals(updatedConnectionCustomFields.get(EXCHANGE_TYPE), updatedExchangeType);
        assertEquals(updatedConnectionCustomFields.get(ROUTING_KEYS), updatedRoutingKeys);
        assertEquals(updatedConnectionCustomFields.get(VIURTUAL_HOST), updatedVirtualHost);
        assertEquals(updatedConnectionCustomFields.get(URI), updatedUri);
        assertEquals(updatedConnectionCustomFields.get(X_EXPIRES), updatedXexpires);

        rabbitMqIdsToDelete.add(id);

    }

    @Test
    @Order(1)
    public void deleteAndUpdateOldConnections() throws ApiException {

        QueryRequest getQuery = new QueryRequest()
                .addMustItem(new QueryMultiple().queryField("consumerType").queryValues(List.of("RabbitMqConnection")))

                ;

        var getResponse = $(api.getConnectionsByQuery(getQuery));
           if(!CollectionUtils.isEmpty(getResponse.getResults()))
           {
               final var rabbitIds = getResponse.getResults().stream().map(Connection::getId).collect(Collectors.toList());

             var updateConnectionRequestList= rabbitIds.stream().map(id->{
                  var updateConnectionRequest=new UpdateConnectionRequest();
                  return updateConnectionRequest.id(id).connectionType(ConnectionType.RABBITMQ);

              }).collect(Collectors.toList());

               var updateResponse = $(api.updateConnections(updateConnectionRequestList));
               assertNotNull(updateResponse);
               assertNotNull(updateResponse.getResults());
               assertNotNull(updateResponse.getErrors());
               assertEquals(rabbitIds.size(), updateResponse.getResults().size(), "Should contain updated entities");
           }

        QueryRequest givenQuery = new QueryRequest()
                .addMustItem(new QueryMultiple().queryField("consumerType").queryValues(List.of("SqsConnection")))
                .addMustItem(new QueryMultiple().queryField("consumerType").queryValues(List.of("KafkaConnection")))
                ;

        ModelApiResponse response = $(api.deleteConnectionsByQuery(givenQuery));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");



    }


}
