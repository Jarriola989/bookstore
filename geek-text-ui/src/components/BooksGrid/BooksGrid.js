import React, { Component } from "react";
import BookCard from "../BookCard/BookCard";
import CardDeck from "react-bootstrap/CardDeck";

export default function BooksGrid(props) {
  return (
    <div className="mt-5">
      <CardDeck className="justify-content-md-center">
        {props.data
          ? props.data.map(book => <BookCard book={book} key={book.id} />)
          : undefined}
      </CardDeck>
    </div>
  );
}
