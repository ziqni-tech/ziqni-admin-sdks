/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.sdk.admin.util;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.simplesystemsmanagement.AWSSimpleSystemsManagement;
import com.amazonaws.services.simplesystemsmanagement.AWSSimpleSystemsManagementClientBuilder;
import com.amazonaws.services.simplesystemsmanagement.model.GetParametersByPathRequest;
import com.amazonaws.services.simplesystemsmanagement.model.GetParametersByPathResult;
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

    private static final String ziqniEnvironmentVariablePrefix = "ZIQNI_";
    public static String DefaultConfigFileName = "application.properties";
    private static String configFile = null;
    private static Map<String, String> cache;
    private static final String prefix = Optional.ofNullable( System.getenv("ZIQNI_ENV")).orElse(
            Optional.ofNullable( System.getProperty("ZIQNI_ENV")).orElse("/local_dev/client/")
    );

    private static String instanceId = null;
//    private static String ec2InstanceId = null;
//    private static String ec2PrivateAddress = null;
//    private static List<String> macAddresses = null;

    private static final Logger logger = LoggerFactory.getLogger(ConfigurationLoader.class);

    public static void loadFromAws(Boolean onFailTryFile) {
        logger.info("Ziqni environment set to [{}]", prefix);

        initIntanceId();

        try {
            var c = AWSSimpleSystemsManagementClientBuilder.standard().withRegion(Regions.EU_WEST_1).build();
            var request = new GetParametersByPathRequest()
                    .withPath(prefix)
                    .withRecursive(true)
                    .withWithDecryption(true)
                    .withMaxResults(10);
            process(c.getParametersByPath(request), c, request);

            logger.info("[{}] config parameters with keys [{}] loaded from AWS", cache.size(), String.join(",\n", cache.keySet()));
        } catch(Throwable t) {
            logger.error("Could not load configuration from AWS", t);

            if(onFailTryFile)
                loadFromFile(false);
            else
                throw new RuntimeException(t);
        }

        loadFromFile(true);

        assert cache != null;
        assert cache.size() > 0;
    }

    private static void process(GetParametersByPathResult result, AWSSimpleSystemsManagement client, GetParametersByPathRequest request){
        result.getParameters().forEach( parameter -> {
            if(cache == null) ConfigurationLoader.cache = new HashMap<>();
            var configKey = parameter.getName().substring(prefix.length()).replaceAll("/", ".");
            var configVal = parameter.getValue();
            ConfigurationLoader.cache.put(configKey, configVal);
            logger.debug("Loaded parameter [{}] with value [{}] from AWS with path prefix [{}] ", configKey, configVal, prefix);
        });

        if(result.getNextToken() != null) {
            process(client.getParametersByPath(request.withNextToken(result.getNextToken())), client, request);
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
        var param = Parameters().get(name);
        var found = Optional.ofNullable(param==null || param.isEmpty() ? getParameterFromEnvironment(name) : Parameters().get(name));

        if(found.isEmpty())
            logger.info("Parameter NOT FOUND for " + name);

        return found;
    }

    private static String getParameterFromEnvironment(String name) {
//        var envVariables = System.getenv().entrySet().stream().map(e -> e.getKey() + e.getValue()).collect(Collectors.joining());
//        logger.debug("Available environment variables are: [{}]", envVariables);

        var variableToCheck = ziqniEnvironmentVariablePrefix + name.toUpperCase().replace('.', '_');
        var envVariableValue = System.getenv(variableToCheck);
        logger.info("Parameter [{}] value retrieved from environment variables [{}]", variableToCheck, envVariableValue != null);

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
//            instanceDetailsFromEc2();
//            instanceId = ec2InstanceId != null ? ec2InstanceId : Common.getNextId();
            instanceId = Common.getNextId();
        }

        logger.info("Instance id set to [{}]", instanceId);
    }

//    protected static void instanceDetailsFromEc2(){
//
//        try {
//            // Resolve the instanceId
//            ec2InstanceId = EC2MetadataUtils.getInstanceId();
//
//            if(ec2InstanceId != null) {
//
//                // Resolve (first/primary) private IP
//                ec2PrivateAddress = EC2MetadataUtils.getInstanceInfo().getPrivateIp();
//            }
//
//            logger.info("Current machine's instance id is [{}] and it's private ip is [{}]", ec2InstanceId, ec2PrivateAddress);
//        }
//        catch (SdkClientException e){
//            logger.error("Failed to load instance information from EC2: ", e);
//        }
//        catch (Throwable e){
//            logger.error("Failed to load instance information from EC2", e);
//        }
//    }
}
