package com.ziqni.admin.sdk.data;

//import com.ziqni.admin.sdk.api.UsersApiWs;
//import com.ziqni.admin.sdk.model.CreateUserRequest;

import tests.utils.CompleteableFutureTestWrapper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class LoadUsersData implements CompleteableFutureTestWrapper {

//    private UsersApiWs api;
//
//    public LoadUsersData() {
//        this.api = new UsersApi(ApiRestClientFactory.getApiClient());
//    }
//
//    public CreateUserRequest getCreateRequest() {
//
//
//        return new CreateUserRequest()
//                .firstName("Personal")
//                .lastName("test_collaborator")
//                .email("test_"+ new Random().nextInt() +"@gmail.com")
//                ;
//    }
//
//    public List<CreateUserRequest> getCreateRequestAsList(int numberOfItems) {
//        return IntStream.range(0, numberOfItems)
//                .mapToObj(i -> getCreateRequest())
//                .collect(Collectors.toList());
//    }
//
//    public List<CreateUserRequest> getCreateRequestAsList(CreateUserRequest request) {
//        return List.of(request);
//    }
//
//    public ModelApiResponse createTestData(CreateUserRequest request) throws ApiException {
//        var response = api.createUser(List.of(request));
//        assertNotNull(response);
//        assertNotNull(response.getResults());
//        assertNotNull(response.getErrors());
//        assertEquals(1, response.getResults().size(), "Should contain created entity");
//        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");
//
//        return response;
//    }


/*    public void deleteTestData(List<String> emailsToDelete) throws ApiException {

        final var modelApiResponse = api.deleteUserForSpace(emailsToDelete);

        assertTrue(Objects.nonNull(modelApiResponse));
       assertEquals(emailsToDelete.size(), modelApiResponse.getMeta().getResultCount(), "Failed to delete some collaborators");

    }*/

}

