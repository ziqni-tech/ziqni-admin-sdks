/*
 * Copyright (c) 2024. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */

package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.CustomFieldsApiWs;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.CreateCustomFieldRequest;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.model.AppliesTo;
import com.ziqni.admin.sdk.model.FieldType;
import com.ziqni.admin.sdk.model.ModelApiResponse;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class LoadCustomFieldsData implements CompleteableFutureTestWrapper {

    private CustomFieldsApiWs api;

    public LoadCustomFieldsData() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getCustomFieldsApi();
    }


    public CreateCustomFieldRequest getCreateRequest(AppliesTo appliesTo) {
        return new CreateCustomFieldRequest()
                .name("test_cf_" + UUID.randomUUID())
                .key("test_cf_term" + UUID.randomUUID())
                .description("test description")
                .appliesTo(appliesTo)
                .fieldType(FieldType.Text);
    }

    public List<CreateCustomFieldRequest> getCreateRequestAsList(int numberOfItems, AppliesTo appliesTo) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest(appliesTo))
                .collect(Collectors.toList());
    }

    public List<CreateCustomFieldRequest> getCreateRequestAsList(CreateCustomFieldRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateCustomFieldRequest> requestList) throws ApiException {
        var response = $(api.createCustomFields(requestList));

        assertTrue(Objects.nonNull(response));
        assertTrue(Objects.nonNull(response.getResults()));
        assertTrue(response.getResults().size() > 0);
        assertEquals(0, response.getErrors().size());

        return response;
    }

    public  String getModel(List<String> idsToDelete, AppliesTo appliesTo) throws ApiException {

        var createRequest = getCreateRequest(appliesTo);
        var createRequestList = getCreateRequestAsList(createRequest);
        var createResponse=createTestData(createRequestList);
        final var result = createResponse.getResults().get(0);
        idsToDelete.add(result.getId());
        return result.getExternalReference();
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        if(idsToDelete.size() > 0) {
            var response = $(api.deleteCustomFields(idsToDelete));
            assertTrue(Objects.nonNull(response));
            assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some custom fields");
        }

    }

}

