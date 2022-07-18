/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.util;

import java.io.File;
import java.io.FileInputStream;
import java.lang.reflect.Type;
import java.util.*;
import java.util.jar.JarEntry;
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
        String path = packageName.replaceAll("\\.", File.separator);
        List<Class<?>> classes = new ArrayList<>();
        String[] classPathEntries = System.getProperty("java.class.path").split(
                System.getProperty("path.separator")
        );

        String name;
        for (String classpathEntry : classPathEntries) {
            if (classpathEntry.endsWith(".jar")) {
                File jar = new File(classpathEntry);
                try {
                    JarInputStream is = new JarInputStream(new FileInputStream(jar));
                    JarEntry entry;
                    while((entry = is.getNextJarEntry()) != null) {
                        name = entry.getName();
                        if (name.endsWith(".class")) {
                            if (name.contains(path) && name.endsWith(".class")) {
                                String classPath = name.substring(0, entry.getName().length() - 6);
                                classPath = classPath.replaceAll("[\\|/]", ".");
                                classes.add(Class.forName(classPath));
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
