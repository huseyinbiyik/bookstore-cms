import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookRemoved } from '../redux/books/books';

const Book = () => {
  const data = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  const handleClick = (bookToBeRemoved) => {
    dispatch(bookRemoved(bookToBeRemoved));
  };

  console.log(data);

  return (
    <ul>
      {
        Object.keys(data).map((book) => (
          <li key={book}>
            <p>{data[book][0].title}</p>
            <p>{data[book][0].author}</p>
            <button type="button" onClick={() => handleClick(book)}>
              Remove
            </button>
          </li>
        ))
}

    </ul>
  );
};

export default Book;
