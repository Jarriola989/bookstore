package geektextteam9.com.geektext.ws;


import geektextteam9.com.geektext.model.Book;
import geektextteam9.com.geektext.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/")
public class HomeRestController {


    @Autowired
    private HomeService homeService;

    @GetMapping(path = "")
    public ResponseEntity<List<Book>> findByFeatured() {
        return ResponseEntity.ok(homeService.findAllByFeatured());
    }
}
