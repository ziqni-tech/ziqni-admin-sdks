package com.ziqni.admin.sdk.streaming.stomp;

import java.util.HashMap;
import java.util.Map;

public class StompFrame {

    private final StompCommand command;
    private final StompHeaders headers;
    private final String body;

    public StompFrame(StompCommand command, Map<String, String> headers, String body) {
        this.command = command;
        this.headers = new StompHeaders(headers);
        this.body = body;
    }

    public StompCommand getCommand() {
        return command;
    }

    public StompHeaders getHeaders() {
        return headers;
    }

    public String getBody() {
        return body;
    }

    public String getDestination() {
        return headers.getDestination();
    }

    public static StompFrame parse(String frame) {
        String[] lines = frame.split("\n");
        if (lines.length == 0) {
            throw new IllegalArgumentException("Invalid STOMP frame: empty");
        }

        // First line is the command
        StompCommand command = StompCommand.fromString(lines[0].trim());

        // Parse headers
        Map<String, String> headers = new HashMap<>();
        int i = 1;
        while (i < lines.length && !lines[i].isEmpty()) {
            String line = lines[i];
            int colonIndex = line.indexOf(':');
            if (colonIndex == -1) {
                throw new IllegalArgumentException("Invalid STOMP header: " + line);
            }
            String key = line.substring(0, colonIndex).trim();
            String value = line.substring(colonIndex + 1).trim();
            headers.put(key, value);
            i++;
        }

        // Skip the empty line (delimiter between headers and body)
        i++;

        // Remaining content is the body
        StringBuilder bodyBuilder = new StringBuilder();
        while (i < lines.length) {
            bodyBuilder.append(lines[i]).append("\n");
            i++;
        }

        // Remove the trailing null character (STOMP frame terminator)
        String body = bodyBuilder.toString().replaceAll("\0", "").trim();

        return new StompFrame(command, headers, body);
    }
}
