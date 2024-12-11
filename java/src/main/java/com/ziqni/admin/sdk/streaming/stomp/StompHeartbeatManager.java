package com.ziqni.admin.sdk.streaming.stomp;

import com.ziqni.admin.sdk.context.WSClientDisconnected;
import com.ziqni.admin.sdk.context.WSClientHeartBeatMissed;
import com.ziqni.admin.sdk.context.WSClientTransportError;
import com.ziqni.admin.sdk.eventbus.ZiqniSimpleEventBus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.http.WebSocket;
import java.util.Timer;
import java.util.TimerTask;

public class StompHeartbeatManager {

    private static final Logger logger = LoggerFactory.getLogger(StompHeartbeatManager.class);

    private final WebSocket webSocket;
    private final ZiqniSimpleEventBus eventBus;
    private final long clientHeartbeatInterval; // Interval in milliseconds for client-to-server heartbeat
    private long serverHeartbeatInterval; // Server-provided interval for heartbeats
    private long lastServerHeartbeatTime;
    private Timer heartbeatTimer;

    public StompHeartbeatManager(WebSocket webSocket, ZiqniSimpleEventBus eventBus, long clientHeartbeatInterval) {
        this.webSocket = webSocket;
        this.eventBus = eventBus;
        this.clientHeartbeatInterval = clientHeartbeatInterval;
        this.serverHeartbeatInterval = 0; // Set after receiving the CONNECTED frame
        this.lastServerHeartbeatTime = System.currentTimeMillis();
    }

    public void start(long serverHeartbeatInterval) {
        this.serverHeartbeatInterval = serverHeartbeatInterval;

        if (this.heartbeatTimer != null) {
            this.heartbeatTimer.cancel();
        }

        this.heartbeatTimer = new Timer(true);

        // Adjust client-to-server interval to avoid unnecessary disconnections
        long adjustedClientInterval = Math.max(clientHeartbeatInterval, serverHeartbeatInterval / 2);

        // Client-to-server heartbeats
        this.heartbeatTimer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                try {
                    if (webSocket != null && !webSocket.isOutputClosed()) {
                        webSocket.sendText("\n", true);
                        logger.debug("Heartbeat sent to server.");
                    } else {
                        logger.warn("WebSocket is not open. Stopping heartbeat.");
                        stop();
                    }
                } catch (Exception e) {
                    logger.error("Failed to send heartbeat to server: {}", e.getMessage(), e);
                    stop();
                }
            }
        }, adjustedClientInterval, adjustedClientInterval);

        // Server-to-client heartbeat monitoring
        this.heartbeatTimer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                long now = System.currentTimeMillis();
                if (serverHeartbeatInterval > 0 && (now - lastServerHeartbeatTime) > serverHeartbeatInterval * 1.5) {
                    logger.error("Server heartbeat missed! Connection might be lost.");
                    eventBus.post(new WSClientHeartBeatMissed());
                    stop();
                }
            }
        }, serverHeartbeatInterval, serverHeartbeatInterval);
    }

    public void stop() {
        if (heartbeatTimer != null) {
            heartbeatTimer.cancel();
            heartbeatTimer = null;
            logger.debug("Heartbeat stopped.");
        }
    }

    public void updateLastServerHeartbeatTime() {
        long now = System.currentTimeMillis();
        lastServerHeartbeatTime = now;
        logger.debug("Server heartbeat time updated at: {}", now);
    }

    public void setServerHeartbeatInterval(long interval) {
        this.serverHeartbeatInterval = interval;
        logger.debug("Server heartbeat interval set to: {} ms", serverHeartbeatInterval);
    }

    public void restart(long newServerHeartbeatInterval) {
        logger.info("Restarting heartbeat manager with new server interval: {} ms", newServerHeartbeatInterval);
        stop();
        start(newServerHeartbeatInterval);
    }
}
