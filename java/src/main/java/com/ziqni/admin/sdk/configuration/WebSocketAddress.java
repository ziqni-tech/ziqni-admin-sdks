/*
 * Copyright (c) 2024. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */

package com.ziqni.admin.sdk.configuration;

public class WebSocketAddress {

    final String address;

    public WebSocketAddress(AdminApiClientConfiguration configuration){
        StringBuilder sb = new StringBuilder();
        sb.append(configuration.getAdminClientServerScheme());
        sb.append("://");
        sb.append(configuration.getAdminClientServerHost());
        if(configuration.getAdminClientServerPort() != null && !(configuration.getAdminClientServerPort() == 80 || configuration.getAdminClientServerPort() == 443))
            sb.append(":").append(configuration.getAdminClientServerPort());

        sb.append("/ws-stomp");

        this.address = sb.toString();
    }

    public WebSocketAddress(String address){
        if(address.startsWith("ws://") || address.startsWith("wss://"))
            throw new RuntimeException( "The websocket address must start with 'ws://' or 'wss://', Invalid address [ " + address + " ]");
        this.address = address;
    }

    public String getAddress() {
        return address;
    }
}
