import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookRemoved } from '../redux/books/books';
import './Book.css';

const Book = () => {
  const data = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  const handleClick = (bookToBeRemoved) => {
    dispatch(bookRemoved(bookToBeRemoved));
  };

  return (
    <div className="book-container">
      {
        Object.keys(data).map((book) => (
          <div key={book} className="single-book-container">
            <div className="left-panel">
              <ul>
                <li>
                  <p className="category">{data[book][0].category}</p>
                  <p className="book-title">{data[book][0].title}</p>
                  <p className="book-author">{data[book][0].author}</p>
                </li>
              </ul>
              <ul>
                <li className="edit-buttons">
                  <button className="remove-button" type="button">
                    Comments
                  </button>
                </li>
                <li className="edit-buttons">
                  <button className="remove-button" type="button" onClick={() => handleClick(book)}>
                    Remove
                  </button>
                </li>
                <li className="edit-buttons">
                  <button className="remove-button" type="button">
                    Edit
                  </button>
                </li>
              </ul>
            </div>
            <div className="right-panel">
              <div className="progress-container">
                <div className="progress" />
                <div className="completed">
                  <span className="percentage">50%</span>
                  <span className="completed-text">Completed</span>
                </div>
              </div>
              <div className="chapter-container">
                <ul className="chapter-list-container">
                  <li className="current-chapter-text">
                    Current Chapter
                  </li>
                  <li className="current-chapter-title">
                    Chapter 17
                  </li>
                  <li className="chapter-update">
                    <button type="submit" className="update-button">
                      Update progress
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))
}
    </div>
  );
};

export default Book;
