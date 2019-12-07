import React from "react";
import BooksGrid from "../BooksGrid/BooksGrid";

export default function AuthorProfile(props) {
  const author = props.state.author;
  const rawBooks = props.state.author.books;

  let books = new Array();

  if (rawBooks) {
    books = getListOfBooks(rawBooks);
  }
  //console.log(books);
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4 ">
            <img src={author.photoUrl} alt="avatar" className="avatar" />
          </div>
          <div className="col-sm-8 mt-3">
            <strong>
              <span>Author Name:</span>
            </strong>
            <span className="ml-2">{author.name}</span>

            <strong>
              <p className="mt-3">BIO:</p>
            </strong>
            <p>{author.bio}</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="">
            <h2>Author Books:</h2>
            <br />
          </div>
          <BooksGrid data={books} />
          <br />
        </div>
      </div>
    </div>
  );
}

function getListOfBooks(data) {
  let books = new Array();

  for (let counter = 0; counter < data.length; counter++) {
    books.push(data[counter].id.book);
  }
  return books;
}
