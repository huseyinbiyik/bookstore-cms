import React from 'react';
import Book from './Book';

export default function Books() {
  const data = [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
  ];
  return (
    data.map((book) => <Book key={1} title={book.title} author={book.author} />)

  );
}
