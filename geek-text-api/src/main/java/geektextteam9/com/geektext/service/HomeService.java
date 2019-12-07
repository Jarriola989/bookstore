package geektextteam9.com.geektext.service;

import geektextteam9.com.geektext.model.Book;
import geektextteam9.com.geektext.model.Filter;
import geektextteam9.com.geektext.repository.BookRepository;
import geektextteam9.com.geektext.repository.HomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeService {

    @Autowired
    private HomeRepository homeRepository;

    public List<Book> findAllByFeatured() {
        return homeRepository.findAllByFeatured();
    }

}

