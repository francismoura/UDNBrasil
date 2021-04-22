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
@Document(collection = "WebPage")
public class WebPage {

    @Id
    private Integer id;
    private URI uri;

    public WebPage(WebPage.WebPageBuilder builder) {
        this.uri = builder.uri;
    }

    public static class WebPageBuilder {

        private final URI uri;

        public WebPageBuilder(WebPageDTO webPageDTO) {
            this.uri = webPageDTO.getUri();
        }

        public WebPage build() {
            return new WebPage(this);
        }

    }

}
