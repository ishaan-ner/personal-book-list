import React, { useContext, useState } from "react";
import { BooksContext } from "../contexts/BooksContext";

const BookForm = () => {
  const { dispatch } = useContext(BooksContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      payload: { title: title, author: author },
    });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new book</h2>
      <label htmlFor="book-title">Title</label>
      <input
        type="text"
        name="book-title"
        placeholder="e.g. Harry Potter..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <label htmlFor="book-author">Author</label>
      <input
        type="text"
        name="book-author"
        placeholder="J.K. Rowling"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      ></input>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
