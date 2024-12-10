package com.ziqni.admin.sdk;

import com.ziqni.admin.sdk.eventbus.ZiqniSimpleEventBus;
import com.ziqni.admin.sdk.streaming.client.StompOverWebSocket;

import java.net.URISyntaxException;

public class Main {

    public static void main(String[] args) throws URISyntaxException {
        String wsUri = "wss://api.ziqni.com/ws-stomp";
        StompOverWebSocket client = new StompOverWebSocket(wsUri, "x-api-key", "", new ZiqniSimpleEventBus());

        client.connect().thenAccept(session -> {
//            client.subscribe("/topic/test");
//            client.sendMessage("/app/test", "Hello, STOMP!");
        }).exceptionally(ex -> {
            System.err.println("Connection failed: " + ex.getMessage());
            return null;
        });

        while (true) {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

}
