import React from 'react';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <button>Delete</button>
    </div>
  );
};

export default Book;
