/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.util;

import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.ssm.SsmClient;
import software.amazon.awssdk.services.ssm.model.GetParametersByPathRequest;
import software.amazon.awssdk.services.ssm.model.GetParametersByPathResponse;
import software.amazon.awssdk.services.ssm.model.Parameter;
import org.apache.commons.configuration2.Configuration;
import org.apache.commons.configuration2.FileBasedConfiguration;
import org.apache.commons.configuration2.PropertiesConfiguration;
import org.apache.commons.configuration2.builder.FileBasedConfigurationBuilder;
import org.apache.commons.configuration2.builder.fluent.Parameters;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public abstract class ConfigurationLoader {

    private final static Logger logger = LoggerFactory.getLogger(ConfigurationLoader.class.getName());

    private static final String ziqniEnvironmentVariablePrefix = "ZIQNI_";
    public static String DefaultConfigFileName = "application.properties";
    private static String configFile = null;
    private static Map<String, String> cache;
    private static final String prefix = Optional.ofNullable( System.getenv("ZIQNI_ENV")).orElse(
            Optional.ofNullable( System.getProperty("ZIQNI_ENV")).orElse("/local_dev/client/")
    );

    private static String instanceId = null;

    public static void loadFromAws(Boolean onFailTryFile) {
        logger.info("Ziqni environment set to [" + prefix + "]");

        initIntanceId();

        try (SsmClient ssmClient = SsmClient.builder().region(Region.EU_WEST_1).build()) {
            GetParametersByPathRequest request = GetParametersByPathRequest.builder()
                    .path(prefix)
                    .recursive(true)
                    .withDecryption(true)
                    .maxResults(10)
                    .build();

            process(ssmClient.getParametersByPath(request), ssmClient, request);
        } catch (Throwable t) {
            logger.error("Failed to load configuration from AWS", t);

            if (onFailTryFile) {
                loadFromFile(false);
            } else {
                throw new RuntimeException(t);
            }
        }

        loadFromFile(true);

        assert cache != null;
        assert cache.size() > 0;
    }

    private static void process(GetParametersByPathResponse response, SsmClient ssmClient, GetParametersByPathRequest request) {
        for (Parameter parameter : response.parameters()) {
            if (cache == null) {
                cache = new HashMap<>();
            }
            String configKey = parameter.name().substring(prefix.length()).replaceAll("/", ".");
            String configVal = parameter.value();
            cache.put(configKey, configVal);
            logger.debug("Loaded parameter [{}] with value [{}]", configKey, configVal);
        }

        if (response.nextToken() != null) {
            process(ssmClient.getParametersByPath(request.toBuilder().nextToken(response.nextToken()).build()), ssmClient, request);
        }
    }

    public static void loadFromFile(Boolean doNotOverwrite) {
        Parameters params = new Parameters();
        FileBasedConfigurationBuilder<FileBasedConfiguration> builder =
                new FileBasedConfigurationBuilder<FileBasedConfiguration>(PropertiesConfiguration.class)
                        .configure(params.properties()
                                .setFileName(Optional.ofNullable(getConfigFile()).orElse(DefaultConfigFileName)));

        logger.debug("Loaded config file [{}] from location [{}]", Optional.ofNullable(getConfigFile()).orElse(DefaultConfigFileName), builder.getFileHandler().getPath());

        try {
            Configuration config = builder.getConfiguration();
            var it = config.getKeys();

            if(ConfigurationLoader.cache == null)
                ConfigurationLoader.cache = new HashMap<>();

            while (it.hasNext()){
                var key = it.next();

                if(doNotOverwrite) {
                    logger.debug("Do not overwrite value set to [{}]. Checking in cache for key [{}]", doNotOverwrite, key);
                    var configValue = config.getString(key);
                    if(ConfigurationLoader.cache.putIfAbsent(key, configValue) != null){
                        logger.debug("Not found in cache, load parameter [{}] with value [{}] from file [{}]", key, configValue, Optional.ofNullable(getConfigFile()).orElse(DefaultConfigFileName));
                    }
                }
                else {
                    var configValue = config.getString(key);
                    ConfigurationLoader.cache.put(key, configValue);
                    logger.debug("Overwriting loaded parameter [{}] with value [{}] from file [{}]", key, configValue, Optional.ofNullable(getConfigFile()).orElse(DefaultConfigFileName));
                }
            }
        }
        catch(org.apache.commons.configuration2.ex.ConfigurationException cex) {
            logger.error("Loading of the configuration file failed");
            throw new RuntimeException(cex);
        }

        assert cache != null;
        assert cache.size() > 0;
    }

    public static void setConfigFile(String configFile) {
        ConfigurationLoader.configFile = configFile;
    }

    public static String getConfigFile() {
        return configFile;
    }

    public static Map<String, String> Parameters() {
        if(ConfigurationLoader.cache == null) {
            loadFromAws(true);
            assert ConfigurationLoader.cache.size() > 0;
        }

        return ConfigurationLoader.cache;
    }

    public static Optional<String> getParameter(String name){
        var found = Optional.ofNullable(getParameterFromEnvironment(name,Parameters().get(name)));

        if(found.isEmpty())
            logger.info("Parameter NOT FOUND for " + name);

        return found;
    }

    private static String getParameterFromEnvironment(String name, String altParam) {

        var variableToCheck = ziqniEnvironmentVariablePrefix + name.toUpperCase().replace('.', '_');
        var envVariableValue = System.getenv(variableToCheck);

        if(envVariableValue == null) {
            logger.info("Parameter [{}] value retrieved from LOADED-PROPS variables [TRUE]", variableToCheck);
            return altParam;
        }

        logger.info("Parameter [{}] value retrieved from ENVIRONMENT variables [TRUE]", variableToCheck);
        return envVariableValue;

    }

    public static String getInstanceId() {
        if(ConfigurationLoader.cache == null) {
            loadFromAws(true);
            assert ConfigurationLoader.cache.size() > 0;
        }

        if(instanceId == null)
            initIntanceId();

        return instanceId;
    }

    private static void initIntanceId() {
        var instanceIdFromEnv = System.getenv(ziqniEnvironmentVariablePrefix + "INSTANCE_ID");

        if(instanceIdFromEnv != null) {
            instanceId = instanceIdFromEnv;
        } else {
            instanceId = Common.getNextId();
        }

        logger.info("Instance id set to [{}]", instanceId);
    }
}
