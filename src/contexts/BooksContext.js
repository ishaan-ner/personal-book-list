import React, { createContext, useReducer, useEffect } from "react";
import bookListReducer from "../reducers/BookListReducer";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [bookList, dispatch] = useReducer(bookListReducer, [], () => {
    const storedBookList = localStorage.getItem("booklist");
    return storedBookList ? JSON.parse(storedBookList) : [];
  });

  useEffect(() => {
    const storageBookList = JSON.stringify(bookList);
    localStorage.setItem("booklist", storageBookList);
  });

  return (
    <BooksContext.Provider value={{ bookList, dispatch }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
