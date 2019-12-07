package geektextteam9.com.geektext.service;

import geektextteam9.com.geektext.model.Review;
import geektextteam9.com.geektext.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import geektextteam9.com.geektext.model.Book;
import geektextteam9.com.geektext.model.Filter;
import geektextteam9.com.geektext.repository.BookRepository;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.domain.Sort;


@Service
public class BookService {

	@Autowired
	private BookRepository bookRepository;

	public Book findById(int id) {

		Book tempBook = bookRepository.getOne(id);
		ArrayList<Review> reviews = new ArrayList<Review>(tempBook.getReviews());
		ArrayList<Review> modifiedReviews = new ArrayList<Review>();
		User tempUser = null;

		for(int counter = 0; counter < reviews.size(); counter ++){
			tempUser = reviews.get(counter).getUser();

			tempUser.setEmail(null);
			tempUser.setPassword(null);
			tempUser.setUsername(null);

			Review tempReview = reviews.get(counter);
			tempReview.setUser(tempUser);

			modifiedReviews.add(tempReview);
		}

		tempBook.setReviews(modifiedReviews);

		return tempBook;

	}

	public Book findByIsbn(String isbn) {
		return bookRepository.findByIsbn(isbn);
	}

	public Book save(Book book) {
		return bookRepository.save(book);
	}

	public Page<Book> findAll(Filter filter) {
		return bookRepository.findAll(PageRequest.of(filter.getPageNumber(), filter.getPageSize()));
	}
	public List<Book> getAllBooks(){
		return bookRepository.findAll(sortByIdAsc());
	}

	public List<Book> getTop(){
		return bookRepository.findAllTopSellers();
	}

	public List<Book> getRated(){
		return bookRepository.findAll(sortByRating());
	}

	public List<Book> getProgramming(){
		return bookRepository.findProgramming();
	}

	public List<Book> getRobotics(){
		return bookRepository.findRobotics();
	}

	public List<Book> getNetwork(){
		return bookRepository.findNetwork();
	}

	public List<Book> getAI(){
		return bookRepository.findAI();
	}

	private Sort sortByIdAsc() {
		return new Sort(Sort.Direction.ASC, "id");
	}
	private Sort sortByTop() {
		return new Sort(Sort.Direction.DESC, "id");
	}
	private Sort sortByRating() {
		return new Sort(Sort.Direction.DESC, "rating");
	}

}
