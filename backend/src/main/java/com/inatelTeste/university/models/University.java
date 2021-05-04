package com.inatelTeste.university.models;

import com.inatelTeste.university.dtos.UniversityDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Document(collection="university")
public class University {

    @Id
    @Indexed
    private String id;

    private String alpha_two_code;
    private String country;
    private String name;
    private String state_province;
    private List<String> web_pages;
    private List<String> domains;

    public University(UniversityBuilder builder) {

        this.alpha_two_code = builder.alpha_two_code;
        this.country = builder.country;
        this.web_pages = builder.web_pages;
        this.domains = builder.domains;
        this.name = builder.name;
        this.state_province = builder.state_province;

    }

    public static class UniversityBuilder {

        private final String alpha_two_code;
        private final String country;
        private final List<String> web_pages;
        private final List<String> domains;
        private final String name;
        private final String state_province;

        public UniversityBuilder(UniversityDTO universityDTO) {

            this.alpha_two_code = universityDTO.getAlpha_two_code();
            this.country = universityDTO.getCountry();
            this.web_pages = universityDTO.getWeb_pages();
            this.domains = universityDTO.getDomains();
            this.name = universityDTO.getName();
            this.state_province = universityDTO.getStateProvince();

        }

        public University build() {
            return new University(this);
        }

    }

}
