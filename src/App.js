import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import BookForm from "./components/BookForm";
import BooksContextProvider from "./contexts/BooksContext";

function App() {
  return (
    <div className="App">
      <BooksContextProvider>
        <Navbar />
        <Booklist />
        <BookForm />
      </BooksContextProvider>
    </div>
  );
}

export default App;
