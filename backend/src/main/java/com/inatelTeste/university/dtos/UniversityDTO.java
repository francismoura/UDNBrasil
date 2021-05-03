package com.inatelTeste.university.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class UniversityDTO {

    private String id;
    private String alpha_two_code;
    private String country;
    private List<String> web_pages;
    private List<String> domains;
    private String name;
    private String state_province;

    public String getStateProvince() {
        return state_province;
    }

    public String getAlpha_two_code() {
        return alpha_two_code;
    }

    public String getCountry() {
        return country;
    }

    public List<String> getWeb_pages() {
        return web_pages;
    }

    public List<String> getDomains() {
        return domains;
    }

    public String getName() {
        return name;
    }

    public String getId() {
        return id;
    }



}
