import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

const BookDetails = (props) => {
  const { dispatch } = useContext(BooksContext);
  const { book } = props;
  return (
    <li
      onClick={() =>
        dispatch({ type: "REMOVE_BOOK", payload: { id: book.id } })
      }
    >
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
