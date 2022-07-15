/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.sdk.admin.util;

public abstract class Common {

    private final static TimeBasedUUIDGenerator timeBasedUUIDGenerator = new TimeBasedUUIDGenerator();

    public static String getNextId(){
        return timeBasedUUIDGenerator.getBase64UUID();
    }
}
