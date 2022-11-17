package com.ziqni.admin.sdk.streaming;

import com.ziqni.admin.sdk.ZiqniAdminSDKEventBus;
import com.ziqni.admin.sdk.context.WSClientConnected;
import com.ziqni.admin.sdk.context.WsClientTransportError;
import org.eclipse.jetty.websocket.client.WebSocketClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.simp.stomp.StompSessionHandlerAdapter;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;
import org.springframework.web.socket.messaging.WebSocketStompClient;

import java.lang.reflect.Type;
import java.util.*;

public class WsStompSessionHandler extends StompSessionHandlerAdapter {

    private static final Logger logger = LoggerFactory.getLogger(WsStompSessionHandler.class);

    private final Map<String, List<EventHandler<?>>> topicHandlers;
    private final ZiqniAdminSDKEventBus eventBus;

    public WsStompSessionHandler(ZiqniAdminSDKEventBus eventBus) {
        this(eventBus, new LinkedHashMap<>());
    }

    public WsStompSessionHandler(ZiqniAdminSDKEventBus eventBus, Map<String, List<EventHandler<?>>> topicHandlers) {
        this.topicHandlers = topicHandlers;
        this.eventBus = eventBus;
    }

    public void subscribe(StompSession session, EventHandler<?> handler) {
        topicHandlers.computeIfAbsent(handler.getTopic(), k -> Collections.synchronizedList(new ArrayList<>()));
        topicHandlers.get(handler.getTopic()).add(handler);
        if (session != null && session.isConnected()) {
            logger.info("Subscribing to " + handler.getTopic());
            handler.setStompSubscription(session.subscribe(handler.getTopic(), handler));
        }
    }

    public void reconnectAllTopics(StompSession session){
        this.topicHandlers.forEach((topic, eventHandlers) ->
                eventHandlers.forEach(handler -> {
                        if (handler.isActive()) {
                            logger.warn("Resubscribing to " + topic);
                            handler.setStompSubscription(session.subscribe(topic, handler));
                        }
                })
        );
    }

    @Override
    public Type getPayloadType(StompHeaders headers) {
        return String.class;
    }

    /**
     * This implementation is empty.
     */
    @Override
    public void handleFrame(StompHeaders headers, Object payload) {
        String resp = (String) payload;
        logger.info("Received responses from websocket server: "+ resp);
    }

    @Override
    public void afterConnected(StompSession session, StompHeaders connectedHeaders) {
        //subscribeTopic("/user/queue/response", session);

        logger.info("CONNECTED");
        for(Map.Entry<String, List<String>> entry: connectedHeaders.entrySet()) {
            logger.info(entry.getKey()+": "+entry.getValue());
        }

        eventBus.managementEventBus.post(new WSClientConnected(session, connectedHeaders));
    }

    @Override
    public void handleException(StompSession session, StompCommand command, StompHeaders headers, byte[] payload, Throwable exception) {
        logger.debug("Stomp client connection exception. [{}] ", exception.getMessage());
    }

    @Override
    public void handleTransportError(StompSession session, Throwable exception) {
        logger.debug("Stomp client connection transport error. [{}] ", exception.getMessage());
        eventBus.managementEventBus.post(new WsClientTransportError(session,exception));
    }
}