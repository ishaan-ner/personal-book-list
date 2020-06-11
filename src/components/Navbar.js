import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

const Navbar = () => {
  const { bookList } = useContext(BooksContext);

  return (
    <nav className="navbar">
      <h1>My Current Reading List</h1>

      <p>You currently have {bookList.length} books to read</p>
    </nav>
  );
};

export default Navbar;
