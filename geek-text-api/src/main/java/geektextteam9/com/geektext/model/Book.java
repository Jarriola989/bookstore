package geektextteam9.com.geektext.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(columnDefinition = "serial")
	private Integer id;

	@Column
	private String isbn;

	@Column
	private String title;

	@Column
	private String description;

	@Column
	private Double price;

	@Column
	private Date date;

	@Column
	private float rating;

	@Column
	private String img_url;

	@Column
	private boolean top_seller;

	@Column
	private boolean featured;

	@OneToMany(mappedBy = "book", cascade = CascadeType.ALL)
	@JsonManagedReference
	private List<Review> reviews;

	@ManyToMany(mappedBy = "books")
	@JsonManagedReference
	private List<Publisher> publishers;

	@ManyToOne
	@JoinColumn(name = "genre_id")
	private Genre genre;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "book_in_wishlist",
            joinColumns = @JoinColumn(name = "book_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "wishlist_id", referencedColumnName = "id"))
    @JsonBackReference
    private List<Wishlist> wishlist;

	public Book() {
		super();
	}

	public Book(String isbn, String title, String description, Double price, Date date, float rating, String img_url,
			boolean top_seller, boolean featured, List<Review> reviews, List<Publisher> publishers, Genre genre) {
		this.isbn = isbn;
		this.title = title;
		this.description = description;
		this.price = price;
		this.date = date;
		this.rating = rating;
		this.img_url = img_url;
		this.top_seller = top_seller;
		this.featured = featured;
		this.reviews = reviews;
		this.publishers = publishers;
		this.genre = genre;
	}


	public List<Publisher> getPublishers() {
		return publishers;
	}

	public void setPublishers(List<Publisher> publishers) {
		this.publishers = publishers;
	}

	public List<Review> getReviews() {
		return reviews;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}

	public String getImg_url() {
		return img_url;
	}

	public void setImg_url(String img_url) {
		this.img_url = img_url;
	}

	public boolean isTop_seller() {
		return top_seller;
	}

	public void setTop_seller(boolean top_seller) {
		this.top_seller = top_seller;
	}

	public boolean isFeatured() {
		return featured;
	}

	public void setFeatured(boolean featured) {
		this.featured = featured;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}
}
