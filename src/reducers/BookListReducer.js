import { v4 as uuidv4 } from "uuid";

const bookListReducer = (bookList, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      const { title, author } = action.payload;
      return [...bookList, { title: title, author: author, id: uuidv4() }];
    case "REMOVE_BOOK":
      const { id } = action.payload;
      const newBookList = bookList.filter((book) => book.id !== id);
      return newBookList;
    default:
      return bookList;
  }
};

export default bookListReducer;
