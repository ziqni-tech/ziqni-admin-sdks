package com.ziqni.sdk.admin.data;

import com.ziqni.sdk.admin.ZiqniAdminApiFactory;
import com.ziqni.sdk.admin.ApiException;
import com.ziqni.sdk.admin.api.LanguagesApiWs;
import com.ziqni.sdk.admin.model.CreateLanguageRequest;
import com.ziqni.sdk.admin.model.ModelApiResponse;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadLanguagesData implements CompleteableFutureTestWrapper {

    private LanguagesApiWs api;

    public LoadLanguagesData() {
        this.api = ZiqniAdminApiFactory.getLanguagesApi();
    }

    public CreateLanguageRequest getCreateRequest(String key) {


        return new CreateLanguageRequest()
                .key(key)
                .metadata(new LoadMetadata().getMetadataAsList());
//                .customFields(List.of("custom_field_1", "custom_field_1"))
//                .tags(List.of("tag_1", "tag_2"));
    }

    public List<CreateLanguageRequest> getCreateRequestAsList(int numberOfItems,String key) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest(key))
                .collect(Collectors.toList());
    }

    public List<CreateLanguageRequest> getCreateRequestAsList(CreateLanguageRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateLanguageRequest> request) throws ApiException {
        var response = $(api.createLanguages(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(request.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        if(idsToDelete.size() > 0) {

            var response = $(api.deleteLanguages(idsToDelete));

            assertTrue(Objects.nonNull(response));
            assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some custom fields");
        }

    }

}

