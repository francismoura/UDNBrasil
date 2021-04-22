package com.inatelTeste.university.services;

import com.inatelTeste.university.interfaces.IWebPageService;
import com.inatelTeste.university.models.WebPage;
import com.inatelTeste.university.repositories.WebPageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WebPageService implements IWebPageService {

    @Autowired
    WebPageRepository webPageRepository;

    @Override
    public WebPage findById(Integer id) {
        return webPageRepository.findById(id);
    }

}
