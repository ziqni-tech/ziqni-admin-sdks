package com.ziqni.admin.sdk.util;

import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.TagsApiWs;
import com.ziqni.admin.sdk.api.TransformersApiWs;
import com.ziqni.admin.sdk.api.UserApiWs;
import com.ziqni.admin.sdk.model.*;
import tests.utils.CompleteableFutureTestWrapper;

import java.lang.reflect.UndeclaredThrowableException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class DatasourceHelper implements CompleteableFutureTestWrapper {


    private static final TransformersApiWs transformersApi = ZiqniAdminApiFactory.getTransformersApi();
    private static final UserApiWs usersApi = ZiqniAdminApiFactory.getUserApi();
    private static final TagsApiWs tagsApi = ZiqniAdminApiFactory.getTagsApi();

    public final ConcurrentMap<String, String> idsToDelete = new ConcurrentHashMap<>();
//    public final List<String> customFieldsIds = new ArrayList<>();
    public final List<String> tagsIds = new ArrayList<>();
    public final List<String> transformersIds = new ArrayList<>();
    public User user;

    public void setup() {
        try {
//            initCustomFields();
            initTags();
            initTestTransformers();
//            initTestUser(); //not implemented api
        } catch (Exception e) {
            cleanup();
            throw new RuntimeException(e.getMessage(), e);
        }
    }

//    private void initCustomFields() throws ApiException {
//
//
//        this.customFieldsIds.addAll(customFields.getResults().stream().map(Result::getId).collect(Collectors.toList()));
//    }

    private void initTags() throws ApiException {
        tagsIds.add("test_tag1");
        tagsIds.add("test_tag2");
    }

    private void initTestTransformers() throws ApiException {
        List<CreateTransformerRequest> requests = IntStream.range(0, 3)
                .mapToObj(i -> new CreateTransformerRequest()
                        .name("test_name_" + UUID.randomUUID().toString())
                        .source("{}")
                        .sourceLanguage(SourceLanguage.SCALA))
                .collect(Collectors.toList());


        requests.forEach(r -> { try {
                ModelApiResponse resp = $(transformersApi.createTransformers(List.of(r)));
                transformersIds.add(resp.getResults().get(0).getId());
            } catch (ApiException e) {
                throw new UndeclaredThrowableException(e);
            }
        });


    }

//    public void initTestUser() throws ApiException {
//        CreateUserRequest body = new CreateUserRequest();
//        body.setEmail(UUID.randomUUID() + "@example.mock");
//        body.setFirstName("John");
//        body.setLastName("Dou");
////        body.setPassword("passwordHash");
//        ModelApiResponse created = usersApi.(List.of(body));
//        UserResponse response = usersApi.getUserForSpace(created.getResults().get(0).getId(), false);
//        user = response.getResults().get(0);
//    }

    /**
     * Getting HTTP 501
     * Uncomment when tags implemented on server
     *
     * @return
     * @throws ApiException
     */
    public List<String> findExistingTagsForTest() throws ApiException {
//        TagResponse existing = tagsApi.getTags(Collections.emptyList(), 3, 0);
//        assertNotNull(existing);
//        assertNotNull(existing.getResults());
//        assertFalse(existing.getResults().isEmpty(), "Test database should contain data");
//
//        return existing.getResults()
//                .stream()
//                .map(Tag::getId)
//                .collect(Collectors.toList());
        return tagsIds;
    }

    public List<String> findExistingCustomFieldsForTest() throws ApiException {
//        CustomFieldResponse existing = customFieldsApi.getCustomFields(customFieldsIds, customFieldsIds.size(), 0);
//        assertNotNull(existing);
//        assertNotNull(existing.getResults());
//        assertFalse(existing.getResults().isEmpty(), "Test database should contain data");
//
//        return existing.getResults()
//                .stream()
//                .map(CustomField::getId)
//                .collect(Collectors.toList());

       return Collections.emptyList();
    }

    public List<String> findExistingTransformersForTest() throws ApiException {
        TransformerResponse existing = $(transformersApi.getTransformers(transformersIds, transformersIds.size(), 0));
        assertNotNull(existing);
        assertNotNull(existing.getResults());
        assertFalse(existing.getResults().isEmpty(), "Test database should contain data");

        return existing.getResults()
                .stream()
                .map(Transformer::getId)
                .collect(Collectors.toList());
    }

    public void cleanup() {
        try {
//            if (!customFieldsIds.isEmpty())
//                customFieldsApi.deleteCustomFields(customFieldsIds);

            if (!transformersIds.isEmpty())
                transformersApi.deleteTransformers(transformersIds);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

//    //todo move to cleanup when Users api implemented
//    public void cleanupUserTemp() throws ApiException {
//        usersApi.deleteUserForSpace(user.getEmail());
//    }

    public void addIdToDelete(ModelApiResponse response) {
        if (response.getResults() != null) {
            response.getResults()
                    .forEach(res -> idsToDelete.put(res.getId(), ""));
        }
    }

    //todo fill it
    public String repositoryId() {
        return "some_repository_id";
    }
}
