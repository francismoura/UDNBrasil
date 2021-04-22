package com.inatelTeste.university.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import java.net.URI;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class WebPageDTO {

    private URI uri;

    public URI getUri() {
        return uri;
    }

    public void setUri(URI uri) {
        this.uri = uri;
    }

}
