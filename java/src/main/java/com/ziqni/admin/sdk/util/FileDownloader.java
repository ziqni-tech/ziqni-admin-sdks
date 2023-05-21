package com.ziqni.admin.sdk.util;

import com.ziqni.admin.sdk.configuration.AdminApiClientConfiguration;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

import org.apache.commons.io.FileUtils;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

public class FileDownloader {

    public File downloadByUri(AdminApiClientConfiguration configuration, String uri, String directory, String saveAs) {

        var file = new File(directory+saveAs);
        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet(uri);


        try {
            httpGet.addHeader("User-Agent", "ZIQNI/3.0");
            httpGet.addHeader("Authorization", "Bearer " + configuration.getAccessTokenString());

            CloseableHttpResponse httpResponse = httpClient.execute(httpGet);
            HttpEntity entity = httpResponse.getEntity();

            if (entity != null) {
                FileUtils.copyInputStreamToFile(entity.getContent(), file);
            }

        } catch (Exception e) {
            file = null;
        }

        httpGet.releaseConnection();
        return file;
    }
}
