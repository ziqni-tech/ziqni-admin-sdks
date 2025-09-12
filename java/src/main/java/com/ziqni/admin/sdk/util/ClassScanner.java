/*
 * Copyright (c) 2024. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.util;

import org.apache.commons.lang3.SystemUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.lang.reflect.Type;
import java.util.*;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;
import java.util.jar.JarInputStream;

public class ClassScanner {

    private final Map<String, Type> classes;
    private final String packageToScan;

    public ClassScanner(String packageToScan) {
        this.classes = new HashMap<>();
        this.packageToScan = packageToScan;
        scan();
    }

    public ClassScanner(String packageToScan, List<Class<?>> manuallyAdd) {
        this(packageToScan);
        manuallyAdd.forEach( clazz -> this.classes.put(clazz.getSimpleName(), clazz));
    }

    private void scan(){
        getClassesInPackage(packageToScan).forEach(clazz ->
                classes.put(clazz.getSimpleName(), clazz)
        );
    }

    public Map<String, Type> getClasses() {
        return classes;
    }

    public String getPackageToScan() {
        return packageToScan;
    }

    public Optional<Type> get(String simpleName){
        return (simpleName==null || simpleName.trim().isEmpty())
                ? Optional.empty()
                : Optional.ofNullable(getClasses().get(simpleName));
    }

    public static final List<Class<?>> getClassesInPackage(String packageName) {
        String path ;
        if(SystemUtils.IS_OS_WINDOWS) {
            path  = packageName.replaceAll("\\.", "\\" + File.separator);
        }else {
            path = packageName.replaceAll("\\.", File.separator);
        }
        List<Class<?>> classes = new ArrayList<>();
        String[] classPathEntries = System.getProperty("java.class.path").split(
                System.getProperty("path.separator")
        );

        String name;
        for (String classpathEntry : classPathEntries) {
            if (classpathEntry.endsWith(".jar")) {
                File jar = new File(classpathEntry);
                try (JarFile is = new JarFile(jar)) {
                    JarEntry entry;
                    Enumeration<JarEntry> entries = is.entries();
                    while ((entries.hasMoreElements())) {
                        entry = entries.nextElement();
                        name = entry.getName();
                        if (SystemUtils.IS_OS_WINDOWS && name.endsWith(".class")) {
                            if (name.contains(path.replaceAll("\\\\", "/"))) {
                                String classPath = name.substring(0, entry.getName().length() - 6);
                                classPath = classPath.replaceAll("[\\|/]", ".");
                                classes.add(Class.forName(classPath));
                            }
                        }
                        else if (name.contains(path) && name.endsWith(".class")) {
                            String classPath = name.substring(0, entry.getName().length() - 6);
                            classPath = classPath.replaceAll("[\\|/]", ".");
                            classes.add(Class.forName(classPath));
                        }
                        // ✅ extra block: discover nested admin-sdk jar inside BOOT-INF/lib
                        else if (name.startsWith("BOOT-INF/lib/") && name.endsWith(".jar") && name.contains("admin-sdk")) {
                            try (InputStream nestedJarStream = Thread.currentThread()
                                    .getContextClassLoader()
                                    .getResourceAsStream(name)) {
                                if (nestedJarStream != null) {
                                    try (JarInputStream nestedIs = new JarInputStream(nestedJarStream)) {
                                        JarEntry nestedEntry;
                                        while ((nestedEntry = nestedIs.getNextJarEntry()) != null) {
                                            String nestedName = nestedEntry.getName();
                                            if (nestedName.startsWith("com/ziqni/admin/sdk/model/")
                                                    && nestedName.endsWith(".class")) {
                                                String classPath = nestedName.substring(0, nestedName.length() - 6);
                                                classPath = classPath.replaceAll("[\\|/]", ".");
                                                classes.add(Class.forName(classPath));
                                            }
                                        }
                                    }
                                } else {
                                    System.err.println("Could not open nested admin-sdk jar: " + name);
                                }
                            }
                        }
                    }
                } catch (Exception ex) {
                    // Silence is golden, golden,  ex.printStackTrace();
                }
            } else {
                try {
                    File base = new File(classpathEntry + File.separatorChar + path);
                    for (File file : base.listFiles()) {
                        name = file.getName();
                        if (name.endsWith(".class")) {
                            name = name.substring(0, name.length() - 6);
                            classes.add(Class.forName(packageName + "." + name));
                        }
                    }
                } catch (Exception ex) {
                    // Silence is golden, golden,  ex.printStackTrace();
                }
            }
        }

        return classes;
    }

}
