import './AddBook.css';
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { bookAdded } from '../redux/books/books';

export default function AddBook() {
  const [book, setBook] = useState({ title: '', author: '' });
  const { title, author } = book;

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(bookAdded(uuidv4(),
      title,
      author));
    setBook({
      title: '',
      author: '',
    });
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add-new-book-container">
      <div className="wrapper add-book-wrapper">
        <h2>
          ADD NEW BOOK
        </h2>
        <form className="add-book-form" onSubmit={handleForm}>
          <input
            className="input-areas"
            placeholder="Book Title"
            name="title"
            onChange={handleChange}
          />
          <input
            className="input-areas"
            placeholder="Book Author"
            name="author"
            onChange={handleChange}
          />
          <button className="add-book-submit" type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
}
