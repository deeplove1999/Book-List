import React, { useContext } from "react";
import { BookContext } from "../contexts/book";
import BookDetails from "./bookdetail";
const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Books To Read.</div>
  );
};

export default BookList;
