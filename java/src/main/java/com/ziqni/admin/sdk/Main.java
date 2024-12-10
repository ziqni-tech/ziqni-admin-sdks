package com.ziqni.admin.sdk;

import com.ziqni.admin.sdk.eventbus.ZiqniSimpleEventBus;
import com.ziqni.admin.sdk.streaming.client.StompOverWebSocket;

import java.net.URISyntaxException;

public class Main {

    public static void main(String[] args) throws URISyntaxException {
        String wsUri = "wss://api.ziqni.com/ws-stomp";
        StompOverWebSocket client = new StompOverWebSocket(wsUri, "x-api-key", "eyJhbGciOiJIUzUxMiJ9.eyJhcGlfa2V5X2lkIjoidFhiRXFwTUJqU3laUktXbmtUcXIiLCJtZW1iZXJfcmVmZXJlbmNlX2lkIjoiWEFQSSIsImFjY291bnRfaWQiOiJGN204ZEh3QnN3LU9IM01Fb1cyMyIsInNwYWNlX25hbWUiOiJmaXJzdC1zcGFjZSIsIm5hbWUiOiJYQVBJIiwibWVtYmVyX3R5cGUiOiJYQVBJIiwibWVtYmVyX2lkIjoiZDEyZDJjYjUtZGM4Ni00MzEwLTk1NzctOGNhYjQ2N2ZkNmYyIiwicmVzb3VyY2VfYWNjZXNzIjp7InppcW5pLWFhcGkiOnsicm9sZXMiOlsiU3VwZXJBZG1pbiJdfX0sInR5cCI6IngtYXBpLWtleSIsInN1YiI6ImQxMmQyY2I1LWRjODYtNDMxMC05NTc3LThjYWI0NjdmZDZmMiIsImp0aSI6IjhjYTcwZGM1LTg5YjctNDQ0Zi1iMTU3LTVmZjRmYTJlNzcxZSIsImlhdCI6MTczMzczNjgyOSwiZXhwIjoxNzY1MjcyODI5LCJhenAiOiJmaXJzdC1zcGFjZS56aXFuaS5hcHAifQ.qbXH2x1hOUmcmwLttca7DPsnMq-JJ9kdTvEn4ymzaMZ_VLYbfW1qT7HsXEv6A2KJFfR5fDYbnGAHNRIHuQ8DeA", new ZiqniSimpleEventBus());

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
