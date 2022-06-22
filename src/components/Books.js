import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

export default function Books() {
  const data = useSelector((state) => state.bookReducer);
  return (
    data.map((book) => <Book key={book.id} title={book.title} author={book.author} />)

  );
}
