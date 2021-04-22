package com.inatelTeste.university.models;

import com.inatelTeste.university.dtos.WebPageDTO;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.net.URI;

@Getter
@Setter
@Data
@NoArgsConstructor
@Document(collection = "webpage")
public class WebPage {

    @Id
    private int id;
    private String uri;

    public WebPage(WebPage.WebPageBuilder builder) {
        this.uri = builder.uri;
    }

    public static class WebPageBuilder {

        private final String uri;

        public WebPageBuilder(WebPageDTO webPageDTO) {
            this.uri = webPageDTO.getUri();
        }

        public WebPage build() {
            return new WebPage(this);
        }

    }

}
