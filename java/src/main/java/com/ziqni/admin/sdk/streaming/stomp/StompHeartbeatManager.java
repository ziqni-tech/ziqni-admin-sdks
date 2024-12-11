package com.ziqni.admin.sdk.streaming.stomp;

import com.ziqni.admin.sdk.context.WSClientDisconnected;
import com.ziqni.admin.sdk.eventbus.ZiqniSimpleEventBus;

import java.net.http.WebSocket;
import java.util.Timer;
import java.util.TimerTask;

public class StompHeartbeatManager {

    private final WebSocket webSocket;
    private final ZiqniSimpleEventBus eventBus;
    private final long clientHeartbeatInterval;
    private long serverHeartbeatInterval;
    private long lastServerHeartbeatTime;
    private Timer heartbeatTimer;

    public StompHeartbeatManager(WebSocket webSocket, ZiqniSimpleEventBus eventBus, long clientHeartbeatInterval) {
        this.webSocket = webSocket;
        this.eventBus = eventBus;
        this.clientHeartbeatInterval = clientHeartbeatInterval;
        this.serverHeartbeatInterval = 0; // Will be set after receiving CONNECTED frame
        this.lastServerHeartbeatTime = System.currentTimeMillis();
    }

    public void start() {
        heartbeatTimer = new Timer(true);

        // Client-to-server heartbeats
        heartbeatTimer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                if (webSocket != null) {
                    webSocket.sendText("\n", true);
                    System.out.println("Heartbeat sent to server.");
                }
            }
        }, clientHeartbeatInterval, clientHeartbeatInterval);

        // Server-to-client heartbeat monitoring
        heartbeatTimer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                long now = System.currentTimeMillis();
                if (serverHeartbeatInterval > 0 && (now - lastServerHeartbeatTime) > serverHeartbeatInterval * 2) {
                    System.err.println("Server heartbeat missed! Connection might be lost.");
                    eventBus.post(new WSClientDisconnected()); // Notify listeners about the lost connection
                }
            }
        }, serverHeartbeatInterval, serverHeartbeatInterval);
    }

    public void stop() {
        if (heartbeatTimer != null) {
            heartbeatTimer.cancel();
            System.out.println("Heartbeat stopped.");
        }
    }

    public void updateLastServerHeartbeatTime() {
        lastServerHeartbeatTime = System.currentTimeMillis();
        System.out.println("Heartbeat received from server.");
    }

    public void setServerHeartbeatInterval(long interval) {
        this.serverHeartbeatInterval = interval;
        System.out.println("Server heartbeat interval set to: " + serverHeartbeatInterval + " ms");
    }
}
