package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.model.MemberTokenRequest;
import tests.utils.CompleteableFutureTestWrapper;

public class LoadMemberTokenData implements CompleteableFutureTestWrapper {

    public MemberTokenRequest getMemberTokenRequest(String member, String apiKey, String resource, boolean isReferenceId, int expires) {
        return new MemberTokenRequest()
                .member(member)
                .apiKey(apiKey)
                .resource(resource)
                .isReferenceId(isReferenceId)
                .expires(expires);

    }


}

