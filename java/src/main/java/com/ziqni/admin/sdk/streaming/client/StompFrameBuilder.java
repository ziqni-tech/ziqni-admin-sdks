package com.ziqni.admin.sdk.streaming.client;

public class StompFrameBuilder {

    public static String buildConnectFrame(String host) {
        return "CONNECT\naccept-version:1.2\nhost:" + host + "\n\n\0";
    }

    public static String buildSubscribeFrame(String destination, String id) {
        return "SUBSCRIBE\ndestination:" + destination + "\nid:" + id + "\n\n\0";
    }

    public static String buildSendFrame(String destination, String message) {
        return "SEND\ndestination:" + destination + "\n\n" + message + "\0";
    }
}
