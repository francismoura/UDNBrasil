package com.inatelTeste.university.models;

import com.inatelTeste.university.dtos.UniversityDTO;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@Data
@Document(collection = "University")
public class University {

    @Id
    private Integer id;
    private String alpha_two_code;
    private String country;
    private String name;
    private String state_province;
    @DBRef
    private List<WebPage> web_pages;
    @DBRef
    private List<Domain> domains;

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
        private final List<WebPage> web_pages;
        private final List<Domain> domains;
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
