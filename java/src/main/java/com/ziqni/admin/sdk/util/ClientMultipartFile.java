/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

public interface ClientMultipartFile<T> {

    static final Logger logger = LoggerFactory.getLogger(ClientMultipartFile.class);

    //FIXME: verify that this is the type we used to denote a directory/folder
    String MIME_TYPE_DIRECTORY = "inode/directory";

    String getName();

    String getOriginalFilename();

    String getContentType();

    boolean isEmpty();

    long getSize();

    byte[] getBytes() throws IOException;

    InputStream getInputStream() throws IOException;

    T getResource();

    void transferTo(File var1) throws IOException, IllegalStateException;

    void transferTo(Path dest) throws IOException, IllegalStateException;

    default File convertMultiPartFileToFile() {
        final File file = new File(getOriginalFilename());
        try (final FileOutputStream outputStream = new FileOutputStream(file)) {
            outputStream.write(getBytes());
        } catch (final IOException ex) {
            logger.error("Error converting the multi-part file to file= ", ex);
        }
        return file;
    }

    default Map<String, String> metadataAsMap(){
        var map = new HashMap<String, String>();
        map.put("name", getName());
        map.put("originalFilename", getOriginalFilename());
        return map;
    }

    default boolean isDirectory(){
        return getContentType() != null && getContentType().equalsIgnoreCase(MIME_TYPE_DIRECTORY);
    }
}
