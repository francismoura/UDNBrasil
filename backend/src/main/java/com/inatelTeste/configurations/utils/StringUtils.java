package com.inatelTeste.configurations.utils;

public class StringUtils {

    public static String validateString(String string) {
        return string.equals("null") ? null : string;
    }

}
