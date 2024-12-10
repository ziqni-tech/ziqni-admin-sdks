package com.ziqni.admin.sdk.streaming.client;

import java.io.Serializable;
import java.util.*;

public class StompHeaders implements Serializable {

    private static final long serialVersionUID = 7514642206528452544L;

    // Standard headers (as defined in the STOMP specification)
    public static final String CONTENT_TYPE = "content-type";
    public static final String CONTENT_LENGTH = "content-length";
    public static final String RECEIPT = "receipt";
    public static final String HOST = "host";
    public static final String ACCEPT_VERSION = "accept-version";
    public static final String LOGIN = "login";
    public static final String PASSCODE = "passcode";
    public static final String HEARTBEAT = "heart-beat";
    public static final String SESSION = "session";
    public static final String SERVER = "server";
    public static final String DESTINATION = "destination";
    public static final String ID = "id";
    public static final String ACK = "ack";
    public static final String SUBSCRIPTION = "subscription";
    public static final String MESSAGE_ID = "message-id";
    public static final String RECEIPT_ID = "receipt-id";

    private final Map<String, List<String>> headers = new LinkedHashMap<>();

    // Setters for standard headers

    public void setContentType(String contentType) {
        set(CONTENT_TYPE, contentType);
    }

    public String getContentType() {
        return getFirst(CONTENT_TYPE);
    }

    public void setContentLength(long contentLength) {
        set(CONTENT_LENGTH, String.valueOf(contentLength));
    }

    public long getContentLength() {
        String value = getFirst(CONTENT_LENGTH);
        return value != null ? Long.parseLong(value) : -1;
    }

    public void setReceipt(String receipt) {
        set(RECEIPT, receipt);
    }

    public String getReceipt() {
        return getFirst(RECEIPT);
    }

    public void setHost(String host) {
        set(HOST, host);
    }

    public String getHost() {
        return getFirst(HOST);
    }

    public void setAcceptVersion(String... versions) {
        if (versions != null && versions.length > 0) {
            set(ACCEPT_VERSION, String.join(",", versions));
        }
    }

    public String[] getAcceptVersion() {
        String value = getFirst(ACCEPT_VERSION);
        return value != null ? value.split(",") : new String[0];
    }

    public void setLogin(String login) {
        set(LOGIN, login);
    }

    public String getLogin() {
        return getFirst(LOGIN);
    }

    public void setPasscode(String passcode) {
        set(PASSCODE, passcode);
    }

    public String getPasscode() {
        return getFirst(PASSCODE);
    }

    public void setHeartbeat(long send, long receive) {
        set(HEARTBEAT, send + "," + receive);
    }

    public long[] getHeartbeat() {
        String value = getFirst(HEARTBEAT);
        if (value != null) {
            String[] parts = value.split(",");
            return new long[]{Long.parseLong(parts[0]), Long.parseLong(parts[1])};
        }
        return new long[]{0, 0};
    }

    public void setDestination(String destination) {
        set(DESTINATION, destination);
    }

    public String getDestination() {
        return getFirst(DESTINATION);
    }

    public void setId(String id) {
        set(ID, id);
    }

    public String getId() {
        return getFirst(ID);
    }

    // Map-like operations

    public void set(String headerName, String value) {
        headers.put(headerName, Collections.singletonList(value));
    }

    public String getFirst(String headerName) {
        List<String> values = headers.get(headerName);
        return (values != null && !values.isEmpty()) ? values.get(0) : null;
    }

    public void add(String headerName, String value) {
        headers.computeIfAbsent(headerName, k -> new ArrayList<>()).add(value);
    }

    public List<String> get(String headerName) {
        return headers.getOrDefault(headerName, Collections.emptyList());
    }

    public Set<String> keySet() {
        return headers.keySet();
    }

    public Map<String, List<String>> toMap() {
        return Collections.unmodifiableMap(headers);
    }

    @Override
    public String toString() {
        return headers.toString();
    }

    public static StompHeaders fromMap(Map<String, List<String>> source) {
        StompHeaders headers = new StompHeaders();
        source.forEach(headers.headers::put);
        return headers;
    }

    public void setMessageId(String nextSeq) {
        set(MESSAGE_ID, nextSeq);
    }

    public String getMessageId() {
        return getFirst(MESSAGE_ID);
    }

    public String getReceiptId(){
        return getFirst(RECEIPT_ID);
    }

    public void setReceiptId(String receiptId) {
        set(RECEIPT_ID, receiptId);
    }
}

