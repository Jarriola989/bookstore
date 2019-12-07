package geektextteam9.com.geektext.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import geektextteam9.com.geektext.model.Author;

import java.util.List;

public interface AuthorRepository extends JpaRepository<Author, Integer> {

	public List<Author> findByBooksIdBookId(Integer bookId);
}
