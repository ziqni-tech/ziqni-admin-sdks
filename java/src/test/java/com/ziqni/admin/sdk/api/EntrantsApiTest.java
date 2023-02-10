package com.ziqni.admin.sdk.api;

import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.data.LoadCustomFieldsData;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestMethodOrder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class EntrantsApiTest implements tests.utils.CompleteableFutureTestWrapper{

    private static final Logger logger = LoggerFactory.getLogger(EntrantsApiTest.class);

    private EntrantsApiWs api;
    private LoadCustomFieldsData loadData;

    List<String> idsToDelete = new ArrayList<>();

    public EntrantsApiTest() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getEntrantsApi();

        this.loadData = new LoadCustomFieldsData();
    }
}
