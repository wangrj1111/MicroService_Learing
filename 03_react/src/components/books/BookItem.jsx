import React, { useState } from "react";
import "./BookItem.css";

const BookItem = ({ book, onBookClick, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedBook, setUpdatedBook] = useState(book);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(updatedBook);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedBook(book);
  };

  return (
    <div className="book-item">
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={updatedBook.title}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, title: e.target.value })
            }
          />
          <input
            type="text"
            value={updatedBook.author}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, author: e.target.value })
            }
          />
          <input
            type="text"
            value={updatedBook.year}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, year: e.target.value })
            }
          />
          <button onClick={handleSave}>保存</button>
          <button onClick={handleCancel}>取消</button>
        </div>
      ) : (
        <div className="view-mode">
          <div onClick={() => onBookClick(book)}>
            <h3>{book.title}</h3>
            <p>作者: {book.author}</p>
            <p>出版年份: {book.year}</p>
          </div>
          <button onClick={handleEdit}>编辑</button>
          <button onClick={onDelete}>删除</button>
        </div>
      )}
    </div>
  );
};

export default BookItem;
