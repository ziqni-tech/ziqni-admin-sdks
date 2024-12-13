package com.ziqni.admin.sdk.streaming.stomp;

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
    ERROR,
    NOT_A_VALID_STOMP_COMMAND; // This is a special command used to indicate that the command is not a valid STOMP command

    public static StompCommand fromString(String command) {
        try {
            return StompCommand.valueOf(command.trim().toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Unknown STOMP command: " + command);
        }
    }
}
