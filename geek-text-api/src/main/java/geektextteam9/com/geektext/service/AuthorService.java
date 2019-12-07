package geektextteam9.com.geektext.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import geektextteam9.com.geektext.model.Author;
import geektextteam9.com.geektext.model.Filter;
import geektextteam9.com.geektext.repository.AuthorRepository;

import java.util.List;

@Service
public class AuthorService {

	@Autowired
	private AuthorRepository authorRepository;

	public Author findById(int id) {
		return authorRepository.getOne(id);
	}

	public Page<Author> findAll(Filter filter) {
		return authorRepository.findAll(PageRequest.of(filter.getPageNumber(), filter.getPageSize()));
	}

	public List<Author> findByBook(Integer bookId) {
		return authorRepository.findByBooksIdBookId(bookId);
	}

}
