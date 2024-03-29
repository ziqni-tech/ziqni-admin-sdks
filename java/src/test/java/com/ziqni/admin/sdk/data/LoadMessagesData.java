package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.AccountMessagesApiWs;
import com.ziqni.admin.sdk.api.MemberMessagesApiWs;
import com.ziqni.admin.sdk.api.NotificationsApiWs;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadMessagesData implements CompleteableFutureTestWrapper {

    private MemberMessagesApiWs api;
    private NotificationsApiWs notificationsApiWs;
    private AccountMessagesApiWs accountMessagesApiWs;

    public LoadMessagesData() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getMemberMessagesApi();
        this.notificationsApiWs = ApiClientFactoryUtil.factory.getNotificationsApi();
        this.accountMessagesApiWs = ApiClientFactoryUtil.factory.getAccountMessagesApi();
    }

    public CreateMemberMessageRequest getCreateMemberMessageRequest() {
        List<String> constraints = new ArrayList<>();

        return new CreateMemberMessageRequest()
                .body("Test_body")
                .eventRefType(EventRefType.ACHIEVEMENT)
                .messageType(MessageType.ACHIEVEMENT)
                .status(MessageStatus.ACTIONED)
                .subject("Test_subject")
//                .translatableFields()
//                .tags(request.getTags())
//                .metadata(request.getMetadata())
//                .prize(new Award())
//                .scheduling(request.getS)
//                .spaceName(request.getSp)
                .customFields(new HashMap<>())
//                .eventReferenceId(request.getEventRefId())
//                .constraints(request.getCon)
//                .created(request.getC)
//                .dependantOn()
//                .id()
                .translations(new ArrayList<>());
    }

    public CreateNotificationRequest getCreateNotificationMessageRequest() {
        return new CreateNotificationRequest()
                .body("Test_body")
//                .eventRefType(EventRefType.ACHIEVEMENTTYPE)
                .messageType(MessageType.ACHIEVEMENT)
                .status(MessageStatus.ACTIONED)
                .subject("Test_subject")
//                .translatableFields()
//                .tags(request.getTags())
//                .metadata(request.getMetadata())
//                .prize(new Award())
//                .scheduling(request.getS)
//                .spaceName(request.getSp)
                .customFields(new HashMap<>())
//                .eventReferenceId(request.getEventRefId())
//                .constraints(request.getCon)
//                .created(request.getC)
//                .dependantOn()
//                .id()
                .translations(new ArrayList<>());

    }

    public List<CreateMemberMessageRequest> getCreateMemberMessageRequestAsList(int numberOfItems) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateMemberMessageRequest())
                .collect(Collectors.toList());
    }

    public List<CreateNotificationRequest> getCreateNotificationRequestAsList(int numberOfItems) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateNotificationMessageRequest())
                .collect(Collectors.toList());
    }

    public List<CreateMemberMessageRequest> getCreateMemberMessageRequestAsList(CreateMemberMessageRequest request) {
        return List.of(request);
    }

    public List<CreateNotificationRequest> getCreateNotificationRequestAsList(CreateNotificationRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createMemberMessageTestData(CreateMemberMessageRequest request) throws ApiException {
        var response = api.createMemberMessages(List.of(request)).join();

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }

    public ModelApiResponse createNotificationMessageTestData(CreateNotificationRequest request) throws ApiException {
        var response = $(notificationsApiWs.createNotifications(List.of(request)));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;

    }

    public void deleteMemberMessageTestData(List<String> idsToDelete) throws ApiException {
        var response = api.deleteMemberMessages(idsToDelete).join();

        assertTrue(Objects.nonNull(response));
        assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some member Message");

    }

    public void deleteNotificationMessageTestData(List<String> idsToDelete) throws ApiException {
        var response = $(notificationsApiWs.deleteNotifications(idsToDelete));

        assertTrue(Objects.nonNull(response));
        assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some kafka custom fields");

    }

    public void deleteAccountMessageTestData(List<String> idsToDelete) throws ApiException {
        var response = $(accountMessagesApiWs.deleteAccountMessages(idsToDelete));

        assertTrue(Objects.nonNull(response));
        assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some kafka custom fields");

    }

}

