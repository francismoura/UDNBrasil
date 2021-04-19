package com.inatelteste.configurations.components;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
@EnableAutoConfiguration
public final class EnviromentVariables {

    private static Environment environment;

    @Autowired
    private void VariaveisAmbientes(final Environment env) {
        setEnvironment(env);
    }

    public static void setEnvironment(Environment environment) {
        com.inatelteste.configurations.components.EnviromentVariables.environment =  environment;
    }

    public static String baseUrl() {
        return environment.getProperty("server.servlet.context-baseUrl") + environment.getProperty("server.servlet.context-path");
    }

    public static String baseUrlFrontend() {
        return environment.getProperty("server.dev.frontend.baseUrl");
    }

}
