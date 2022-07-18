package com.ziqni.admin.sdk.data;

import tests.utils.CompleteableFutureTestWrapper;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class LoadMetadata implements CompleteableFutureTestWrapper {

    public Map<String, String> getMetadata() {
        final var body = new HashMap<String,String>();
        body.put(UUID.randomUUID().toString(),UUID.randomUUID().toString());
        return body;
    }

    public static Map<String, String> addRandomMetadataEntry(Map<String, String> in) {
        in.put(UUID.randomUUID().toString(),UUID.randomUUID().toString());
        return in;
    }

    public Map<String,String> getMetadataAsList() {
        return getMetadata();
    }

    public Map<String, String> getEmptyMetadata() {
        return new HashMap<>();
    }

    public Map<String,String> getEmptyMetadataAsList() {
        return new HashMap<>();
    }

}

