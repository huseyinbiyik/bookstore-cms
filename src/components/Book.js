import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookRemoved } from '../redux/books/books';

const Book = () => {
  const data = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  const handleClick = (bookToBeRemoved) => {
    dispatch(bookRemoved(bookToBeRemoved));
  };

  return (
    <ul>
      {data.map((book) => (
        <li key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <button type="button" onClick={() => handleClick(book)}>
            Remove
          </button>
        </li>
      ))}

    </ul>
  );
};

export default Book;
