import React from "react";
import "./BookList.css";
import BookItem from "./BookItem";

const BookList = ({ books, onBookClick, onDelete, onEdit }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onBookClick={onBookClick}
          onDelete={() => onDelete(book.id)}
          onEdit={(updatedBook) => onEdit(book.id, updatedBook)}
        />
      ))}
    </div>
  );
};

export default BookList;
