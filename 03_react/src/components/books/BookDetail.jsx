import React from "react";
import "./BookDetail.css";

const BookDetail = ({ book }) => {
  return (
    <div className="book-detail">
      <h2>图书详情</h2>
      <p>书名: {book.title}</p>
      <p>作者: {book.author}</p>
      <p>出版年份: {book.year}</p>
    </div>
  );
};

export default BookDetail;
