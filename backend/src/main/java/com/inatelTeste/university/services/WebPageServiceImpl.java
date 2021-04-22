package com.inatelTeste.university.services;

import com.inatelTeste.university.interfaces.WebPageService;
import com.inatelTeste.university.models.WebPage;
import com.inatelTeste.university.repositories.WebPageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WebPageServiceImpl implements WebPageService {

    @Autowired
    WebPageRepository webPageRepository;

    @Override
    public WebPage findById(Integer id) {
        return webPageRepository.findById(id);
    }

}
