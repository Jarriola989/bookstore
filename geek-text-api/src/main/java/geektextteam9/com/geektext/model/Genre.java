package geektextteam9.com.geektext.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.annotation.sql.DataSourceDefinition;
import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "genre")
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Integer id;

    @Column
    private String name;

    @OneToMany(mappedBy = "genre", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Book> books;

    public Genre() {

    }


    public Genre(String name) {
        this.name = name;
    }

    public Genre(String name, Set<Book> books) {
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

    public Set<Book> getBooks() {
        return books;
    }

    public void setBooks(Set<Book> books) {
        this.books = books;
    }
}
