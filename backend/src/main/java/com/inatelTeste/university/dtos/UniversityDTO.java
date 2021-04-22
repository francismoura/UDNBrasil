package com.inatelTeste.university.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.inatelTeste.university.models.Domain;
import com.inatelTeste.university.models.WebPage;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class UniversityDTO {

    private int id;
    private String alpha_two_code;
    private String country;
    private List<WebPage> web_pages;
    private List<Domain> domains;
    private String name;
    private String state_province;

    public int getId() { return id; }

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

    public List<WebPage> getWeb_pages() {
        return web_pages;
    }

    public void setWeb_pages(List<WebPage> web_pages) {
        this.web_pages = web_pages;
    }


    public List<Domain> getDomains() {
        return domains;
    }

    public void setDomains(List<Domain> domains) {
        this.domains = domains;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
