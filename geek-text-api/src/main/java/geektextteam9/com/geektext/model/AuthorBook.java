package geektextteam9.com.geektext.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "author_book")
public class AuthorBook {

	@EmbeddedId
	private AuthorBookId id;

	public AuthorBook() {
		super();
	}

	public AuthorBook(AuthorBookId id) {
		this.id = id;
	}

	public AuthorBookId getId() {
		return id;
	}

	public void setId(AuthorBookId id) {
		this.id = id;
	}
}
