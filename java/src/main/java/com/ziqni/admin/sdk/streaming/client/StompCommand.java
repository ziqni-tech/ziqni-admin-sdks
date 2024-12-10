package com.ziqni.admin.sdk.streaming.client;

public enum StompCommand {
    CONNECT,
    CONNECTED,
    SEND,
    SUBSCRIBE,
    UNSUBSCRIBE,
    ACK,
    NACK,
    BEGIN,
    COMMIT,
    ABORT,
    DISCONNECT,
    MESSAGE,
    RECEIPT,
    ERROR;

    public static StompCommand fromString(String command) {
        try {
            return StompCommand.valueOf(command.trim().toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Unknown STOMP command: " + command);
        }
    }
}
