package com.ziqni.admin.sdk.streaming.client;

import com.ziqni.admin.sdk.eventbus.ZiqniSimpleEventBus;
import com.ziqni.admin.sdk.streaming.EventHandler;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.WebSocket;
import java.util.concurrent.CompletableFuture;

public class StompOverWebSocket {

    private final String wsUri;
    private final String username;
    private final String passcode;
    private final ZiqniSimpleEventBus eventBus;
    private final StompWebSocketListener stompWebSocketListener;

    private WebSocket webSocket;
    private StompHeartbeatManager stompHeartbeatManager;

    public StompOverWebSocket(String wsUri, String username, String passcode, ZiqniSimpleEventBus eventBus) {
        this.wsUri = wsUri;
        this.username = username;
        this.passcode = passcode;
        this.eventBus = eventBus;
        this.stompWebSocketListener = new StompWebSocketListener(() -> stompHeartbeatManager);
    }

    public CompletableFuture<Void> connect() {
        HttpClient client = HttpClient.newHttpClient();
        return client.newWebSocketBuilder()
                .buildAsync(URI.create(wsUri), stompWebSocketListener)
                .thenAccept(ws -> {
                    this.webSocket = ws;
                    this.stompHeartbeatManager = new StompHeartbeatManager(webSocket, eventBus, 10000); // Client interval: 10 seconds
                    sendConnectFrame();
                });
    }

    private void sendConnectFrame() {
        StompHeaders connectHeaders = new StompHeaders();
        connectHeaders.setLogin(username);
        connectHeaders.setPasscode(passcode);
        connectHeaders.setAcceptVersion("1.2");
        connectHeaders.setHeartbeat(10000, 0);

        StringBuilder connectFrame = new StringBuilder("CONNECT\n");
        connectHeaders.toMap().forEach((key, value) -> connectFrame.append(key).append(":").append(String.join(",", value)).append("\n"));
        connectFrame.append("\n\0");

        webSocket.sendText(connectFrame.toString(), true);
        System.out.println("CONNECT frame sent.");
    }

    public void subscribe(String destination) {
        StompHeaders subscribeHeaders = new StompHeaders();
        subscribeHeaders.setDestination(destination);
        subscribeHeaders.setId("sub-0");

        StringBuilder subscribeFrame = new StringBuilder("SUBSCRIBE\n");
        subscribeHeaders.toMap().forEach((key, value) -> subscribeFrame.append(key).append(":").append(String.join(",", value)).append("\n"));
        subscribeFrame.append("\n\0");

        webSocket.sendText(subscribeFrame.toString(), true);
        System.out.println("SUBSCRIBE frame sent to: " + destination);
    }

    public void sendMessage(String destination, String payload) {
        StompHeaders sendHeaders = new StompHeaders();
        sendHeaders.setDestination(destination);

        StringBuilder sendFrame = new StringBuilder("SEND\n");
        sendHeaders.toMap().forEach((key, value) -> sendFrame.append(key).append(":").append(String.join(",", value)).append("\n"));
        sendFrame.append("\n").append(payload).append("\0");

        webSocket.sendText(sendFrame.toString(), true);
        System.out.println("Message sent to " + destination);
    }

    public void disconnect() {
        if (stompHeartbeatManager != null) {
            stompHeartbeatManager.stop();
        }
        String disconnectFrame = "DISCONNECT\n\n\0";
        webSocket.sendText(disconnectFrame, true);
        System.out.println("DISCONNECT frame sent.");
    }


    public void subscribe(EventHandler<?> handler) {
        stompWebSocketListener.subscribe(handler);
        subscribe(handler.getTopic());
    }


    public boolean isConnected() {
        return false;
    }


    public boolean isNotConnected() {
        return false;
    }

    public boolean isConnecting() {
        return false;
    }

    public boolean isDisconnecting() {
        return false;
    }

    public boolean isFailure() {
        return false;
    }

    public void shutdown() {
        webSocket.sendClose(WebSocket.NORMAL_CLOSURE, "Client shutdown");
    }

    public <TIN> Runnable prepareMessageToSend(StompHeaders stompHeaders, TIN tPayload) {
        return null;
    }
}
