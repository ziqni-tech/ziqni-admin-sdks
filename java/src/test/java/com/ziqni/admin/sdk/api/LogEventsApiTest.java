package com.ziqni.admin.sdk.api;

import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.model.QueryMultipleFields;
import com.ziqni.admin.sdk.model.QueryRequest;
import com.ziqni.admin.sdk.model.QuerySortBy;
import com.ziqni.admin.sdk.model.SortOrder;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class LogEventsApiTest  implements tests.utils.CompleteableFutureTestWrapper {

    private final LogEventsApiWs api;

    public LogEventsApiTest() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getLogEventsApi();
    }


    @Test
    @Order(20)
    public void getLogEventsByQueryReturnOkTest() throws ApiException {
        var query = new QueryRequest();
        query.addMultiFieldsItem(new QueryMultipleFields().addQueryFieldsItem("entityType").queryValue("Webhook"))
                .addSortByItem(new QuerySortBy().queryField("_score").order(SortOrder.DESC))
                .limit(3000)
                .skip(0);

        var response = $(api.getLogEventsByQuery(query));

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertTrue(response.getErrors().isEmpty(), "Should have no errors");
        assertEquals(1, response.getResults().size(), "Should has single result");
    }
}
