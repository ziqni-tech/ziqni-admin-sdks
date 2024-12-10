/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.streaming.handlers;

public class Message {

    private String from;
    private String content;

    public Message() {}

    public Message(String content) {
        this.content = content;
    }

    public Message(String from, String content) {
        this.from = from;
        this.content = content;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "Message: From: " + getFrom() + ", Content: " + getContent();
    }
}
