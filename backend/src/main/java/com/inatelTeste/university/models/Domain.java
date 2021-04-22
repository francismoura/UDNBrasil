package com.inatelTeste.university.models;

import com.inatelTeste.university.dtos.DomainDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "domain")
public class Domain {

    @Id
    private Integer id;
    private String domain;

    public Domain(Domain.DomainBuilder builder) {
        this.domain = builder.domain;
    }

    public static class DomainBuilder {

        private final String domain;

        public DomainBuilder(DomainDTO domainDTO) {
            this.domain = domainDTO.getDomain();
        }

        public Domain build() {
            return new Domain(this);
        }

    }

}
