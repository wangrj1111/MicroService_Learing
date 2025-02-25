import { useState } from "react";
import "./BookInput.css";

const BookInput = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim() && year.trim()) {
      const newBook = {
        id: Date.now(),
        title,
        author,
        year,
      };
      addBook(newBook);
      setTitle("");
      setAuthor("");
      setYear("");
    }
  };

  return (
    <form className="book-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="书名"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="作者"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="出版年份"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button type="submit">添加图书</button>
    </form>
  );
};

export default BookInput;
