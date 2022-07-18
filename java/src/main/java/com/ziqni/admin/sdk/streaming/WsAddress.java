/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.streaming;

import com.ziqni.admin.sdk.configuration.AdminApiClientConfig;

public class WsAddress {

    final String address;

    public WsAddress(){
        StringBuilder sb = new StringBuilder();
        sb.append(AdminApiClientConfig.getAdminClientServerScheme());
        sb.append("://");
        sb.append(AdminApiClientConfig.getAdminClientServerHost());
        if(AdminApiClientConfig.getAdminClientServerPort() != null && !(AdminApiClientConfig.getAdminClientServerPort() == 80 || AdminApiClientConfig.getAdminClientServerPort() == 443))
            sb.append(":").append(AdminApiClientConfig.getAdminClientServerPort());
        sb.append("/ws");

        this.address = sb.toString();
    }

    public String getAddress() {
        return address;
    }
}
