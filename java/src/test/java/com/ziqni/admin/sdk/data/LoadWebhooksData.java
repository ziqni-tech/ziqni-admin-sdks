package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.WebhooksApiWs;
import com.ziqni.admin.sdk.model.CreateWebhookRequest;

import com.ziqni.admin.sdk.model.ModelApiResponse;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadWebhooksData implements CompleteableFutureTestWrapper {
    private WebhooksApiWs api;

    public LoadWebhooksData() {
        this.api = ZiqniAdminApiFactory.getWebhooksApi();
    }

    public CreateWebhookRequest getCreateRequest(String transformerId) {
        String postToUrl = "http://www.example.com";
        List<String> triggers = List.of("ET-101", "ET-201");

        final Map<String,String> metadata =new HashMap<>();
        metadata.put("h1","v1");
        metadata.put("h2","v2");
        return new CreateWebhookRequest()
                .postToUrl(postToUrl)
                .name("Webhook Name")
                .triggers(triggers)
//                .transformerId(transformerId)
                .description("Test Description")
//                .headers( object and metadata)
                .metadata(new LoadMetadata().getMetadataAsList());
    }

    public List<CreateWebhookRequest> getCreateRequestAsList(int numberOfItems, String transformerId) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest(transformerId))
                .collect(Collectors.toList());
    }

    public List<CreateWebhookRequest> getCreateRequestAsList(CreateWebhookRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(CreateWebhookRequest request) throws ApiException {
        var response = $(api.createWebhooks(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        var response = $(api.deleteWebhooks(idsToDelete));

        assertTrue(Objects.nonNull(response));
        assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some custom fields");

    }

}

