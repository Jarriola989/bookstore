package geektextteam9.com.geektext.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name = "review")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Integer id;

    @Column
    private String title;

    @Column
    private Double rating;

    @Column
    private String comment;

    @ManyToOne
    @JoinColumn(name="book_id")
    @JsonBackReference
    private Book book;

    @ManyToOne
    @JoinColumn(name="user_id")
    @JsonBackReference
    private User user;

    public Review() {

    }

    private Review(double rating, String comment, Book book, String title, User user) {
        this.rating = rating;
        this.comment = comment;
        this.book = book;
        this.title = title;
        this.user = user;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
