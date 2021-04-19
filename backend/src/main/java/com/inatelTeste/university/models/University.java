package com.inatelTeste.university.models;

import com.inatelTeste.university.dtos.UniversityDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.RequestEntity;

import java.io.Serializable;
import java.lang.reflect.Field;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class University implements Serializable {

    private String country;
    private List<String> webPages;
    private List<String> domains;
    private String name;
    private String state;
    private String alphaTwoCode;

    public University(UniversityBuilder builder) {

        this.alphaTwoCode = builder.alphaTwoCode;
        this.country = builder.country;
        this.webPages = builder.webPages;
        this.domains = builder.domains;
        this.name = builder.name;
        this.state = builder.state;

    }

    public static class UniversityBuilder {

        private final String alphaTwoCode;
        private final String country;
        private final List<String> webPages;
        private final List<String> domains;
        private final String name;
        private final String state;

        public UniversityBuilder(UniversityDTO universityDTO) { ;

            this.alphaTwoCode = universityDTO.getAlphaTwoCode();
            this.country = universityDTO.getCountry();
            this.webPages = universityDTO.getWebPages();
            this.domains = universityDTO.getDomains();
            this.name = universityDTO.getName();
            this.state = universityDTO.getState();

        }

        public University build() {
            return new University(this);
        }

    }

}
