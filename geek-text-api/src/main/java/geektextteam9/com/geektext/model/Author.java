package geektextteam9.com.geektext.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import java.util.List;
import java.util.Set;

import javax.persistence.*;

@Entity
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Integer id;

    @Column
    private String name;

    @Column
    private String bio;

    @Column(name = "photo_url")
    private String photoUrl;

    @OneToMany(mappedBy = "id.author", cascade = CascadeType.ALL)
    private Set<AuthorBook> books;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "book_in_wishlist",
            joinColumns = @JoinColumn(name = "book_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "wishlist_id", referencedColumnName = "id"))
    @JsonBackReference
    private List<Book> books_wishlist;

    public Author() {
        super();
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
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

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public Set<AuthorBook> getBooks() {
        return books;
    }

    public void setBooks(Set<AuthorBook> books) {
        this.books = books;
    }
}
