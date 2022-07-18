package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.MembersApiWs;
import com.ziqni.admin.sdk.model.CreateMemberRequest;
import com.ziqni.admin.sdk.model.MemberType;
import com.ziqni.admin.sdk.model.ModelApiResponse;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadMembersData implements CompleteableFutureTestWrapper {

    private MembersApiWs api;

    public LoadMembersData() {
        this.api = ZiqniAdminApiFactory.getMembersApi();
    }

    public CreateMemberRequest getCreateRequest() {
        String name = "Test_name-" + UUID.randomUUID();
        String refId = "Test_key-" + UUID.randomUUID();
        MemberType memberType = MemberType.INDIVIDUAL;

        return new CreateMemberRequest()
                .memberRefId(refId)
                .memberType(memberType)
                .name(name)
                .metadata(new LoadMetadata().getMetadataAsList());
//                .tags(new ArrayList<>(Collections.singletonList("test-group"))); //FixMe - should be replace with actual tag ids when we write tests
    }

    public List<CreateMemberRequest> getCreateRequestAsList(int numberOfItems) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest())
                .collect(Collectors.toList());
    }

    public List<CreateMemberRequest> getCreateRequestAsList(CreateMemberRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateMemberRequest> requestList) throws ApiException {
        var response = $(api.createMembers(requestList));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(requestList.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        if(idsToDelete.size() > 0 ) {

            var response = $(api.deleteMembers(idsToDelete));

            assertTrue(Objects.nonNull(response));
            assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some custom fields");
        }
    }

}

