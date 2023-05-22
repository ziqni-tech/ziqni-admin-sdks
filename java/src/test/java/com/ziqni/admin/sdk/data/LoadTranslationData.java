package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.TranslationsApiWs;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.model.CreateTranslationRequest;
import com.ziqni.admin.sdk.model.ModelApiResponse;
import com.ziqni.admin.sdk.model.TranslationEntry;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import org.junit.jupiter.api.Assertions;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadTranslationData implements CompleteableFutureTestWrapper {

    private TranslationsApiWs api;

    public LoadTranslationData() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getTranslationsApi();
    }

    public CreateTranslationRequest getCreateRequest(String languageId, String languageKey, String entityId, String entityType) {
        TranslationEntry translationEntry=new TranslationEntry();
        translationEntry.setFieldName("name");
        translationEntry.setText("text");

        return new CreateTranslationRequest()
                .languageId(languageId)
                .entityId(entityId)
                .entityType(entityType)
                .languageKey(languageKey)
                .translations(List.of(translationEntry))
                ;
    }

    public List<CreateTranslationRequest> getCreateRequestAsList(int numberOfItems,String languageId,String languageKey, String entityId, String entityType) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest(languageId,languageKey, entityId, entityType))
                .collect(Collectors.toList());
    }

    public List<CreateTranslationRequest> getCreateRequestAsList(CreateTranslationRequest request) {
        return List.of(request);
    }
    public String createTestData(String languageId,String languageKey, String entityId, String entityType) throws ApiException {
        final var request = getCreateRequest(languageId,languageKey,entityId,entityType);
        final var requestList = getCreateRequestAsList(request);
        final var createResponse = createTestData(requestList);
        assertNotNull(createResponse);
        assertNotNull(createResponse.getResults());
        assertNotNull(createResponse.getErrors());
        Assertions.assertEquals(1,createResponse.getResults().size());

        return createResponse.getResults().get(0).getId();
    }
    public ModelApiResponse createTestData(List<CreateTranslationRequest> request) throws ApiException {
        var response = api.createTranslations(request).join();

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(request.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }

    public ModelApiResponse createTestData(List<CreateTranslationRequest> request, Integer expected) throws ApiException {
        var response = $(api.createTranslations(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(expected, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        if(idsToDelete.size() > 0) {
            var response = $(api.deleteTranslations(idsToDelete));

            assertTrue(Objects.nonNull(response));
            assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some reward types");
        }

    }

}

