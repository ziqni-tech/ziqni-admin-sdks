/*
 * Ziqni Application Services
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

package com.ziqni.admin.sdk.api;

import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.ziqni.admin.sdk.data.LoadApiKeysData;
import com.ziqni.admin.sdk.data.LoadMemberTokenData;
import com.ziqni.admin.sdk.data.LoadMembersData;
import com.ziqni.admin.sdk.util.ApiClientFactoryUtil;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.ApiException;
import org.junit.jupiter.api.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

/**
 * API tests for MembersApi
 */
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class MemberTokenApiTest implements tests.utils.CompleteableFutureTestWrapper{

    private static final Logger logger = LoggerFactory.getLogger(CompetitionsApiTest.class);
    public final static String AAPI_RESOURCE_NAME = "ziqni-aapi";
    private static final String PUBLIC = "PUBLIC";
    private final MemberTokenApiWs api;
    private final LoadMemberTokenData loadTestData;
    private final LoadMembersData loadMembersData;
    private final LoadApiKeysData loadApiKeysData;

    private String memberId;
    private String memberRefId;
    private String apiKey;

    private final List<String> memberIdsToDelete = new ArrayList<>();
    private final List<String> apiKeyIdsToDelete = new ArrayList<>();


    public MemberTokenApiTest() throws Exception {
        ApiClientFactoryUtil.initApiClientFactory(AdminApiClientConfigBuilder.build());
        this.api = ApiClientFactoryUtil.factory.getMemberTokenApi();
        this.loadTestData = new LoadMemberTokenData();
        this.loadMembersData = new LoadMembersData();
        this.loadApiKeysData = new LoadApiKeysData();

    }


    @BeforeAll
    public void setUp() {
        try {
            final var member = loadMembersData
                    .createTestData(List.of(loadMembersData.getCreateRequest()))
                    .getResults()
                    .get(0);
            memberId = member.getId();
            memberRefId = member.getExternalReference();
            memberIdsToDelete.add(memberId);

            final var apiKeyResp = loadApiKeysData
                    .createTestData(loadApiKeysData.getCreateRequest())
                    .getResults()
                    .get(0);
            apiKey = apiKeyResp.getExternalReference();
            apiKeyIdsToDelete.add(apiKeyResp.getId());

            Thread.sleep(5000);
        } catch (ApiException | InterruptedException e){
            logger.error("error", e.getCause());
        }
    }

    @AfterAll
    public void cleanUp() {
        try {
            Thread.sleep(5000);
            loadMembersData.deleteTestData(memberIdsToDelete);
            loadApiKeysData.deleteTestData(apiKeyIdsToDelete);
        }catch (ApiException | InterruptedException e){
            logger.error("error", e.getCause());
        }
    }

    @Test
    @Order(1)
    public void getPublicSessionTokenTest() throws ApiException {
        final var request = loadTestData.getMemberTokenRequest(PUBLIC, apiKey, AAPI_RESOURCE_NAME, false,60);

        var response = $(api.createMemberToken(request));

        assertNotNull(response);
        assertNotNull(response.getData());

        DecodedJWT jwt = JWT.decode(response.getData().getJwtToken());
        assertNotNull(jwt);
        assertEquals(PUBLIC,jwt.getClaims().get("member_reference_id").asString());
    }

    @Test
    @Order(2)
    public void getMemberSessionByMemberRefIdTokenTest() throws ApiException {
        final var request = loadTestData.getMemberTokenRequest(memberRefId, apiKey, AAPI_RESOURCE_NAME, true,60);

        var response = $(api.createMemberToken(request));

        assertNotNull(response);
        assertNotNull(response.getData());

        DecodedJWT jwt = JWT.decode(response.getData().getJwtToken());
        assertNotNull(jwt);
        assertEquals(memberRefId,jwt.getClaims().get("member_reference_id").asString());
    }

    @Test
    @Order(2)
    public void getMemberSessionByMemberIdTokenTest() throws ApiException {
        final var request = loadTestData.getMemberTokenRequest(memberId, apiKey, AAPI_RESOURCE_NAME, false,60);

        var response = $(api.createMemberToken(request));

        assertNotNull(response);
        assertNotNull(response.getData());

        DecodedJWT jwt = JWT.decode(response.getData().getJwtToken());
        assertNotNull(jwt);
        assertEquals(memberId,jwt.getClaims().get("member_id").asString());
    }


}
