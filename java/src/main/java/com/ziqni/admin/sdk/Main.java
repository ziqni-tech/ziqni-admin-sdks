package com.ziqni.admin.sdk;

import com.ziqni.admin.sdk.streaming.WsClient;
import com.ziqni.admin.sdk.streaming.WsClient2;
import com.ziqni.admin.sdk.streaming.client.NativeStompSessionHandler;
import org.springframework.messaging.simp.stomp.*;

import java.lang.reflect.Type;

public class Main {

    public static void main(String[] args) {
        String wsUri = "wss://api.ziqni.com/ws-stomp";
        StompSessionHandler handler = new NativeStompSessionHandler() {
            @Override
            public void handleFrame(StompHeaders headers, Object payload) {
                System.out.println("Received: " + payload);
            }
        };

        WsClient2 client = new WsClient2(wsUri, handler);

        client.connect().thenAccept(session -> {
            client.subscribe("/topic/example", new StompSessionHandler() {
                @Override
                public void afterConnected(StompSession session, StompHeaders connectedHeaders) {
                    System.out.println("Connected");
                }

                @Override
                public void handleException(StompSession session, StompCommand command, StompHeaders headers, byte[] payload, Throwable exception) {
                    System.out.println("Exception");
                }

                @Override
                public void handleTransportError(StompSession session, Throwable exception) {
                    System.out.println("Transport error");
                }

                @Override
                public Type getPayloadType(StompHeaders headers) {
                    return null;
                }

                @Override
                public void handleFrame(StompHeaders headers, Object payload) {
                    System.out.println("Received: " + payload);
                }
            });
            client.sendMessage("/app/message", "Hello, STOMP!");
        }).exceptionally(ex -> {
            System.err.println("Failed to connect: " + ex.getMessage());
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
