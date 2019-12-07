package geektextteam9.com.geektext.ws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import geektextteam9.com.geektext.model.Author;
import geektextteam9.com.geektext.model.Filter;
import geektextteam9.com.geektext.service.AuthorService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/author")
public class AuthorRestController {

	@Autowired
	private AuthorService authorService;

	@GetMapping(path = "/{id}")
	public ResponseEntity<Author> findById(@PathVariable Integer id) {
		return ResponseEntity.ok(authorService.findById(id));
	}

	@PostMapping
	public ResponseEntity<Page<Author>> findAll(@RequestBody Filter filter) {
		return ResponseEntity.ok(authorService.findAll(filter));
	}

	@GetMapping(path = "/book/{bookId}")
	public ResponseEntity<List<Author>> findByBook(@PathVariable Integer bookId) {
		return ResponseEntity.ok(authorService.findByBook(bookId));
	}

}
