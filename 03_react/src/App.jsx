import { useState } from "react";
import "./App.css";
import BookInput from "./components/books/BookInput";
import BookList from "./components/books/BookList";
import BookDetail from "./components/books/BookDetail";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBook = (id, updatedBook) => {
    setBooks(
      books.map((book) => (book.id === id ? { ...book, ...updatedBook } : book))
    );
  };

  return (
    <div className="app">
      <h1>图书管理系统</h1>
      <BookInput addBook={addBook} />
      <BookList
        books={books}
        onBookClick={setSelectedBook}
        onDelete={deleteBook}
        onEdit={editBook}
      />
      {selectedBook && <BookDetail book={selectedBook} />}
    </div>
  );
};

export default App;
