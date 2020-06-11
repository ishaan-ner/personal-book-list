import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import BookDetails from "./BookDetails";

const Booklist = () => {
  const { bookList } = useContext(BooksContext);
  return bookList.length ? (
    <div className="booklist">
      <ul>
        {bookList.map((book) => (
          <BookDetails key={book.id} book={book} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">
      <p>Looks like you have no new books to read right now</p>
    </div>
  );
};

export default Booklist;
