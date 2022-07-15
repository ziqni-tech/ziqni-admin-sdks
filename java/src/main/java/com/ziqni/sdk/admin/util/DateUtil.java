/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.sdk.admin.util;

import java.time.OffsetDateTime;

public abstract class DateUtil {

    public static OffsetDateTime now(){
        return OffsetDateTime.now();
    }

    public static OffsetDateTime nowPlusDays(int days){
        return DateUtil.now().plusDays(days);
    }

    public static OffsetDateTime plusMinutes(OffsetDateTime date, int minutes){
        return date.plusMinutes(minutes);
    }
    public static OffsetDateTime plusDays(OffsetDateTime date, int days){
        return date.plusDays(days);
    }
}

