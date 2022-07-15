package com.ziqni.sdk.admin.data;

import com.ziqni.sdk.admin.ZiqniAdminApiFactory;
import com.ziqni.sdk.admin.ApiException;
import com.ziqni.sdk.admin.api.ConsumersApiWs;
import com.ziqni.sdk.admin.model.CreateKafkaConnectionRequest;
import com.ziqni.sdk.admin.model.CreateRabbitMqConnectionRequest;
import com.ziqni.sdk.admin.model.CreateSqsConnectionRequest;
import com.ziqni.sdk.admin.model.ModelApiResponse;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadConnectionsData implements CompleteableFutureTestWrapper {

    private ConsumersApiWs api;

    public LoadConnectionsData() {
        this.api = ZiqniAdminApiFactory.getConsumersApi();
    }

    public CreateRabbitMqConnectionRequest getCreateRabbitMQRequest(String transformerId) {
        List<String> constraints = new ArrayList<>();

        return new CreateRabbitMqConnectionRequest()
                .name("my-rabbit-connection")
                .uri("broker-service.competitionlabs.com")
                .description("Test Description")
                .port(30007)
                .virtualHost("/")
                .addConstraints(List.of("ssl", "durable", "exclusive", "autoDelete"))
                .exchange("sabai99_prd_events")
                .queueName("sabai99_events-test-events-stream")
                .routingKey("BET_LOG_KA")
                .userName("complabs_stg_client")
                .password("bKv=73j>TW86")
                .transformerId(transformerId);
    }

    public CreateKafkaConnectionRequest getCreateKafkaRequest(String transformerId) {
        return new CreateKafkaConnectionRequest()
                .name("Kafka_1")
                .topic("Test_Topic")
                .groupId("Test_Group_Id")
                .description("My example kafka connection")
                .brokers("Example broker")
                .transformerId(transformerId)
                .metadata(new LoadMetadata().getMetadataAsList())
                ;

    }

    public CreateSqsConnectionRequest getCreateSqsRequest(String transformerId) {
        return new CreateSqsConnectionRequest()
                .name("SQS_1")
                .acessKey("Test_Access_key")
                .secretKey("Test_Secret_key")
                .description("My example sqs connection")
                .uri("https://www.ziqni.com")
                .transformerId(transformerId)
                .metadata(new LoadMetadata().getMetadataAsList())
                ;

    }

    public List<CreateRabbitMqConnectionRequest> getCreateRabbitMqRequestAsList(int numberOfItems, String transformerId) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRabbitMQRequest(transformerId))
                .collect(Collectors.toList());
    }

    public List<CreateKafkaConnectionRequest> getCreateKafkaRequestAsList(int numberOfItems, String transformerId) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateKafkaRequest(transformerId))
                .collect(Collectors.toList());
    }

    public List<CreateSqsConnectionRequest> getCreateSqsRequestAsList(int numberOfItems, String transformerId) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateSqsRequest(transformerId))
                .collect(Collectors.toList());
    }

    public List<CreateRabbitMqConnectionRequest> getCreateRabbitMqRequestAsList(CreateRabbitMqConnectionRequest request) {
        return List.of(request);
    }

    public List<CreateRabbitMqConnectionRequest> getCreateKafkaRequestAsList(CreateRabbitMqConnectionRequest request) {
        return List.of(request);
    }

    public List<CreateSqsConnectionRequest> getCreateSqsRequestAsList(CreateSqsConnectionRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createRabbitMqTestData(CreateRabbitMqConnectionRequest request) throws ApiException {
        var response = $(api.createRabbitMQConnections(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }

    public ModelApiResponse createKafkaTestData(CreateKafkaConnectionRequest request) throws ApiException {
        var response = $(api.createKafkaConnections(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }

    public ModelApiResponse createSqsTestData(CreateSqsConnectionRequest request) throws ApiException {
        var response = $(api.createSqsConnections(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }

    public void deleteRabbitMqTestData(List<String> idsToDelete) throws ApiException {
        var response = $(api.deleteRabbitMQConnections(idsToDelete));

        assertTrue(Objects.nonNull(response));
        assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some rabbitMq custom fields");

    }

    public void deleteKafkaTestData(List<String> idsToDelete) throws ApiException {
        var response = $(api.deleteKafkaConnections(idsToDelete));

        assertTrue(Objects.nonNull(response));
        assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some kafka custom fields");

    }

    public void deleteSqsTestData(List<String> idsToDelete) throws ApiException {
        var response = $(api.deleteSqsConnections(idsToDelete));

        assertTrue(Objects.nonNull(response));
        assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some sqs custom fields");

    }

}

