package com.ziqni.admin.sdk.api;

import com.ziqni.admin.sdk.data.LoadComputeEnginesData;
import com.ziqni.admin.sdk.model.QueryMultiple;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.model.QueryRequest;
import com.ziqni.admin.sdk.model.UpdateComputeEngineRequest;
import org.junit.jupiter.api.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ComputeEnginesTest implements tests.utils.CompleteableFutureTestWrapper{

    private static final Logger logger = LoggerFactory.getLogger(ComputeEnginesTest.class);
    private final ComputeEngineApiWs api;
    private final LoadComputeEnginesData loadComputeEnginesData;
    List<String> computeEngineIdsToDelete = new ArrayList<>();

    public ComputeEnginesTest() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory();
        this.api = ZiqniAdminApiFactory.getComputeEngineApi();
        this.loadComputeEnginesData = new LoadComputeEnginesData();
    }

    @BeforeAll
    void setUp() {

    }

    @AfterAll
    void cleanUp() {

            computeEngineIdsToDelete.forEach(x -> {
                try{
                loadComputeEnginesData.deleteTestData(x);
            } catch (ApiException e) {
                logger.error("error", e.getCause());
            }});

    }

    @Test
    void createComputeEnginesReturnOkTest() throws ApiException {
        var request = loadComputeEnginesData.getCreateRequest();

        var response = $(api.createComputeEngines(request));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        computeEngineIdsToDelete.add(response.getResults().get(0).getId());
    }

    @Test
    void updateComputeEnginesReturnOkTest() throws ApiException {
        var request = loadComputeEnginesData
                .createTestData(loadComputeEnginesData.getCreateRequest());
        var id = request.getResults().get(0).getId();


        var updateRequest = new UpdateComputeEngineRequest();
        updateRequest.setId(id);
        updateRequest.setDescription("Updated Description");

        var response = $(api.updateComputeEngines(updateRequest));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        computeEngineIdsToDelete.add(id);
    }

    @Test
    void getComputeEnginesReturnOkTest() throws ApiException {
        var request = loadComputeEnginesData
                .createTestData(loadComputeEnginesData.getCreateRequest());
        var id = request.getResults().get(0).getId();

        var response = $(api.getComputeEngines(List.of(id), 1, 0));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        computeEngineIdsToDelete.add(id);
    }

    @Test
    void getComputeEnginesByIdReturnOkTest() throws ApiException {
        var request = loadComputeEnginesData
                .createTestData(loadComputeEnginesData.getCreateRequest());
        var id = request.getResults().get(0).getId();

        var response = $(api.getComputeEnginesById(id));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        computeEngineIdsToDelete.add(id);
    }

    @Test
    void getComputeEnginesByQueryReturnOkTest() throws ApiException {
        var request = loadComputeEnginesData
                .createTestData(loadComputeEnginesData.getCreateRequest());
        var id = request.getResults().get(0).getId();

        var queryMultiple = new QueryMultiple().queryField("id").queryValues(List.of(id));
        var queryRequest = new QueryRequest();
        queryRequest.addMustItem(queryMultiple);

        var response = $(api.getComputeEnginesByQuery(queryRequest));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        computeEngineIdsToDelete.add(id);
    }

    @Test
    void deleteComputeEnginesByIdReturnOkTest() throws ApiException, InterruptedException {
        var request = loadComputeEnginesData
                .createTestData(loadComputeEnginesData.getCreateRequest());
        var id = request.getResults().get(0).getId();

        Thread.sleep(5000);

        var response = $(api.deleteComputeEnginesById(id));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getMeta().getResultCount(), "Should delete 1 entity");

    }

    @Test
    void deleteComputeEnginesByQueryReturnOkTest() throws ApiException, InterruptedException {
        var request = loadComputeEnginesData
                .createTestData(loadComputeEnginesData.getCreateRequest());
        var id = request.getResults().get(0).getId();

        Thread.sleep(5000);

        var queryMultiple = new QueryMultiple().queryField("id").queryValues(List.of(id));
        var queryRequest = new QueryRequest();
        queryRequest.addMustItem(queryMultiple);

        var response = $(api.deleteComputeEnginesByQuery(queryRequest));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(1, response.getMeta().getResultCount(), "Should delete 1 entity");

    }



}
