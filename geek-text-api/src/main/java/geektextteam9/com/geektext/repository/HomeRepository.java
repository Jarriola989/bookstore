package geektextteam9.com.geektext.repository;

import geektextteam9.com.geektext.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HomeRepository extends JpaRepository<Book, Integer> {

    //public List<Book> findByFeatured();

    @Query(value = "select * from book WHERE featured = true", nativeQuery = true)
    public List<Book> findAllByFeatured();

}
