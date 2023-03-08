package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.ConnectionsApiWs;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.ConnectionType;
import com.ziqni.admin.sdk.model.CreateConnectionRequest;
import com.ziqni.admin.sdk.model.ModelApiResponse;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.HashMap;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadConnectionsData implements CompleteableFutureTestWrapper {

    public static String QUEUE_NAME = "queueName";
    public static String PORT = "port";
    public static String EXCHANGE = "exchange";
    public static String EXCHANGE_TYPE = "exchangeType";
    public static String ROUTING_KEYS = "routingKeys";
    public static String VIURTUAL_HOST = "virtualHost";
    public static String URI = "uri";
    public static String X_EXPIRES = "x-expires";
    private ConnectionsApiWs api;

    public LoadConnectionsData() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getConnectionsApi();
    }

    public CreateConnectionRequest getCreateRabbitMQRequest(String transformerId, String tagKey) {
        final var customFields = new HashMap<String, Object>();
        customFields.put(QUEUE_NAME,"my-rabbit-connection");
        customFields.put(PORT, 8080);
        customFields.put(EXCHANGE,"test_exchange");
        customFields.put(EXCHANGE_TYPE, "Test_Exchange");
        customFields.put(ROUTING_KEYS, List.of("1234543", "key_2"));
        customFields.put(VIURTUAL_HOST, "test_host");
        customFields.put(URI, List.of("http://rabbit.com", "http://uri.2"));
        customFields.put(X_EXPIRES, null);

        return new CreateConnectionRequest()
                .name("my-rabbit-connection")
                .description("Test Description")
                .connectionType(ConnectionType.RABBITMQ)
                .secret("my_secret_password")
                .user("test_user")
                .transformerId(transformerId)
                .tags(List.of(tagKey))
                .constraints(List.of(
                        "ssl",
                        "durable",
                        "exclusive",
                        "autoDelete"))
                .customFields(customFields);

    }

//    public CreateKafkaConnectionRequest getCreateKafkaRequest(String transformerId) {
//        return new CreateKafkaConnectionRequest()
//                .name("Kafka_1")
//                .topic("Test_Topic")
//                .groupId("Test_Group_Id")
//                .description("My example kafka connection")
//                .brokers("Example broker")
//                .transformerId(transformerId)
//                .metadata(new LoadMetadata().getMetadataAsList())
//                ;
//
//    }
//
//    public CreateSqsConnectionRequest getCreateSqsRequest(String transformerId) {
//        return new CreateSqsConnectionRequest()
//                .name("SQS_1")
//                .acessKey("Test_Access_key")
//                .secretKey("Test_Secret_key")
//                .description("My example sqs connection")
//                .uri("https://www.ziqni.com")
//                .transformerId(transformerId)
//                .metadata(new LoadMetadata().getMetadataAsList())
//                ;
//
//    }

    public List<CreateConnectionRequest> getCreateRabbitMqRequestAsList(int numberOfItems, String transformerId, String tagKey) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRabbitMQRequest(transformerId, tagKey))
                .collect(Collectors.toList());
    }

//    public List<CreateKafkaConnectionRequest> getCreateKafkaRequestAsList(int numberOfItems, String transformerId) {
//        return IntStream.range(0, numberOfItems)
//                .mapToObj(i -> getCreateKafkaRequest(transformerId))
//                .collect(Collectors.toList());
//    }
//
//    public List<CreateSqsConnectionRequest> getCreateSqsRequestAsList(int numberOfItems, String transformerId) {
//        return IntStream.range(0, numberOfItems)
//                .mapToObj(i -> getCreateSqsRequest(transformerId))
//                .collect(Collectors.toList());
//    }

//    public List<CreateRabbitMqConnectionRequest> getCreateRabbitMqRequestAsList(CreateRabbitMqConnectionRequest request) {
//        return List.of(request);
//    }
//
//    public List<CreateRabbitMqConnectionRequest> getCreateKafkaRequestAsList(CreateRabbitMqConnectionRequest request) {
//        return List.of(request);
//    }
//
//    public List<CreateSqsConnectionRequest> getCreateSqsRequestAsList(CreateSqsConnectionRequest request) {
//        return List.of(request);
//    }

    public ModelApiResponse createRabbitMqTestData(List<CreateConnectionRequest> request) throws ApiException {
        var response = $(api.createConnections(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }

    public ModelApiResponse createKafkaTestData(List<CreateConnectionRequest> request) throws ApiException {
        var response = $(api.createConnections(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }

    public ModelApiResponse createSqsTestData(List<CreateConnectionRequest> request) throws ApiException {
        var response = $(api.createConnections(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }

    public void deleteRabbitMqTestData(List<String> idsToDelete) throws ApiException {
        var response = $(api.deleteConnections(idsToDelete));

        assertTrue(Objects.nonNull(response));
        assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some rabbitMq custom fields");

    }

    public void deleteKafkaTestData(List<String> idsToDelete) throws ApiException {
        var response = $(api.deleteConnections(idsToDelete));

        assertTrue(Objects.nonNull(response));
        assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some kafka custom fields");

    }

    public void deleteSqsTestData(List<String> idsToDelete) throws ApiException {
        var response = $(api.deleteConnections(idsToDelete));

        assertTrue(Objects.nonNull(response));
        assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some sqs custom fields");

    }

}

