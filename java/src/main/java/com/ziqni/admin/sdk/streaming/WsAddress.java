/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.streaming;

import com.ziqni.admin.sdk.configuration.AdminApiClientConfiguration;
import com.ziqni.admin.sdk.util.Common;

import java.util.Random;

public class WsAddress {

    Random random = new Random();

    final String address;

    public WsAddress(AdminApiClientConfiguration configuration){
        StringBuilder sb = new StringBuilder();
        sb.append(configuration.getAdminClientServerScheme());
        sb.append("://");
        sb.append(configuration.getAdminClientServerHost());
        if(configuration.getAdminClientServerPort() != null && !(configuration.getAdminClientServerPort() == 80 || configuration.getAdminClientServerPort() == 443))
            sb.append(":").append(configuration.getAdminClientServerPort());
//        sb.append("/ws/"+random.nextInt(200,10_000)+"/"+ Common.getNextId() +"/websocket");
        sb.append("/ws/websocket");

        this.address = sb.toString();
    }

    public WsAddress(String address){
        if(address.startsWith("ws://") || address.startsWith("wss://"))
            throw new RuntimeException( "The websocket address must start with 'ws://' or 'wss://', Invalid address [ " + address + " ]");
        this.address = address;
    }

    public String getAddress() {
        return address;
    }
}
