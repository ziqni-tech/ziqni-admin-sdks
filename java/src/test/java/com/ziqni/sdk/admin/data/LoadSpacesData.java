package com.ziqni.sdk.admin.data;

import com.ziqni.sdk.admin.ZiqniAdminApiFactory;
import com.ziqni.sdk.admin.ApiException;
import com.ziqni.sdk.admin.api.SpacesApiWs;
import com.ziqni.sdk.admin.model.CreateSpaceRequest;
import com.ziqni.sdk.admin.model.ModelApiResponse;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.List;
import java.util.Objects;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadSpacesData implements CompleteableFutureTestWrapper {

    private SpacesApiWs api;

    public LoadSpacesData() {
        this.api = ZiqniAdminApiFactory.getSpacesApi();
    }

    public CreateSpaceRequest getCreateRequest() {

        return new CreateSpaceRequest()
                .accountType("Personal")
                .name("test_collaborator");
    }

    public List<CreateSpaceRequest> getCreateRequestAsList(int numberOfItems) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest())
                .collect(Collectors.toList());
    }

    public List<CreateSpaceRequest> getCreateRequestAsList(CreateSpaceRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(CreateSpaceRequest request) throws ApiException {
        var response = $(api.createSpace(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }

    public String getSpaceName(String name) throws ApiException {
        CreateSpaceRequest space = new CreateSpaceRequest();
        space.setAccountType("Trial");
        space.setName(name + new Random().nextInt(10000));
        api.createSpace(List.of(space)).join();
        return space.getName();
    }

    public void deleteTestData(List<String> spacesToDelete) throws ApiException {

        spacesToDelete.forEach(space->{

            final ModelApiResponse modelApiResponse;
            try {
                modelApiResponse = $(api.deleteSpaces(space));
                assertTrue(Objects.nonNull(modelApiResponse));
                assertEquals(1, modelApiResponse.getMeta().getResultCount(), "Failed to delete space");
            } catch (ApiException e) {
                e.printStackTrace();
            }


        });


    }

}
