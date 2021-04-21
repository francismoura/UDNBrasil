package com.inatelTeste.university.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.net.URI;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class UniversityDTO {

    private String alpha_two_code;
    private String country;
    private List<URI> web_pages;
    private List<String> domains;
    private String name;
    private String state_province;

    public String getStateProvince() {
        return state_province;
    }

    public void setStateProvince(String stateProvince) {
        this.state_province = stateProvince;
    }

    public String getAlpha_two_code() {
        return alpha_two_code;
    }

    public void setAlpha_two_code(String alpha_two_code) {
        this.alpha_two_code = alpha_two_code;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public List<URI> getWeb_pages() {
        return web_pages;
    }

    public void setWeb_pages(List<URI> web_pages) {
        this.web_pages = web_pages;
    }


    public List<String> getDomains() {
        return domains;
    }

    public void setDomains(List<String> domains) {
        this.domains = domains;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
