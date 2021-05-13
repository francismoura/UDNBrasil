package com.inatelTeste.configurations.utils;

import org.json.JSONArray;
import org.json.JSONException;

import java.io.*;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

public class JsonConfig {

    private static String readAll(Reader reader) throws IOException {

        StringBuilder stringBuilder = new StringBuilder();

        int cp;

        while ((cp = reader.read()) != -1) {
            stringBuilder.append((char) cp);
        }

        return stringBuilder.toString();

    }

    public static JSONArray readJsonFromUrl(String url) throws IOException, JSONException {

        try (InputStream is = new URL(url).openStream()) {

            BufferedReader rd = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8));
            String jsonText = readAll(rd);

            return new JSONArray(jsonText);

        }

    }

    public static List<String> toArray(JSONArray jArray) throws JSONException {

        List<String> list = new ArrayList<>();

        if (jArray.length() == 1) {
            list.add(jArray.getString(0));
        } else {
            for (int i = 0; i < jArray.length(); i++) {
                String string = jArray.getString(i);
                list.add(string);
            }
        }

        return list;

    }


}
