package geektextteam9.com.geektext.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="wishlist")
public class Wishlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Integer id;

    @Column
    private String name;


    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "book_in_wishlist",
            joinColumns = @JoinColumn(name = "wishlist_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "book_id", referencedColumnName = "id"))
    @JsonManagedReference
    private List<Book> books;


//    @ManyToMany(mappedBy = "wishlists")
//    @JsonBackReference
//    private List<User> user;

    public Wishlist() {
        this.name = null;
        this.books = null;
//        this.user = null;
    }

    public Wishlist(String name, List<Book> books) {
        this.name = name;
        this.books = books;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }

//    public List<User> getUser() {
//        return user;
//    }
//
//    public void setUser(List<User> user) {
//        this.user = user;
//    }
}
